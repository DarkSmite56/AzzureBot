/*💥 *TOMP3 DOWNLOADER*
- Youtube Audio atau Video Downloader

📝 *Note* :
- Options Save2Disk (true = Download langsung ke Folder tmp, false = Array Buffer )

🧑‍💻 Script Code by Daffa*/


/*fungsi? by leooxzy
 https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
*/

const axios = require('axios')
const crypto = require('crypto')
const fetch = require('node-fetch')
const path = require('path')

class ToMP3 {
  constructor() {
    this.baseUrl = 'https://tomp3.cc/api/ajax/search';
    this.convertUrl = 'https://tomp3.cc/api/ajax/convert';
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Postify/1.0.0',
      'Accept': '*/*',
      'Cache-Control': 'no-cache',
      'Origin': 'https://tomp3.cc',
      'Referer': 'https://tomp3.cc/youtube-to-mp3/',
    };
  }

  async request(url, params) {
    return (await axios.post(url, new URLSearchParams(params), { headers: this.headers })).data;
  }

  async downloadFile(url) {
    return (await axios.get(url, { responseType: 'arraybuffer' })).data;
  }

  async dl(url, filePath, retries = 2) {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const data = await this.downloadFile(url);
        fs.writeFileSync(filePath, data);
        return;
      } catch (error) {
        if (error.code === 'ETIMEDOUT') {
          console.log(`Waktunya habis... Download ulang lahh... (${attempt + 1}/${retries})`);
        } else {
          throw error;
        }
      }
    }
    throw new Error('Pengunduhan gagal setelah mencoba beberapa kali.');
  }

  async pd(videoUrl, type, quality, save2Disk) {
    const result = await this.request(this.baseUrl, { query: videoUrl, vt: type });
    if (result.status === 'ok') {
      const { links } = result;
      console.log(`Kualitas ${type} yang tersedia:`, Object.keys(links[type]).join(', '));
      
      const mediaQuality = quality in links[type] ? quality : Object.keys(links[type])[0];
      const k = links[type][mediaQuality].k;
      const convertResult = await this.request(this.convertUrl, { vid: result.vid, k });
      
      if (convertResult.status === 'ok') {
        const dLink = convertResult.dlink;
        if (save2Disk) {
          let fileName = `${result.title}.${type}`;
          let filePath = path.join('tmp', fileName);
          await this.dl(dLink, filePath);
        } else {
          return await this.downloadFile(dLink);
        }
      } else {
        console.error(convertResult);
      }
    } else {
      console.log('Error ceunah 😂');
    }
  }

  audio(videoUrl, quality, save2Disk = true) {
    return this.pd(videoUrl, 'mp3', quality, save2Disk);
  }

  video(videoUrl, quality, save2Disk = true) {
    return this.pd(videoUrl, 'mp4', quality, save2Disk);
  }
}
  

async function topcc(youtubeUrl) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://tomp3.cc/youtube-to-mp3/ERHfCWSC59Q'
  };

  const fetchFormats = async () => {
    const url = 'https://tomp3.cc/api/ajax/search?hl=en';
    const body = `query=${encodeURIComponent(youtubeUrl)}&vt=mp3`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
      return await response.json();
    } catch (error) {
      console.error('Error fetching formats:', error);
      return null;
    }
  };

  const convertVideo = async (vid, key) => {
    const url = 'https://tomp3.cc/api/ajax/convert?hl=en';
    const body = `vid=${vid}&k=${encodeURIComponent(key)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
      return await response.json();
    } catch (error) {
      console.error('Error converting video:', error);
      return null;
    }
  };

  const pollConversionStatus = async (vid, key, delay = 5000) => {
    while (true) {
      const result = await convertVideo(vid, key);
      if (result && result.status === 'ok') {
        if (result.c_status === 'CONVERTED') {
          return result;
        } else if (result.c_status === 'FAILED') {
          throw new Error('Conversion failed');
        }
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  };

  const formatData = await fetchFormats();
  if (!formatData || formatData.status !== 'ok') {
    return { error: 'Failed to fetch format data' };
  }

  const videoTitle = formatData.title;
  const videoVid = formatData.vid;

  const results = [];

  for (const [format, qualities] of Object.entries(formatData.links)) {
    for (const [quality, details] of Object.entries(qualities)) {
      try {
        const conversionResult = await pollConversionStatus(videoVid, details.k);
        if (conversionResult && conversionResult.status === 'ok' && conversionResult.c_status === 'CONVERTED') {
          results.push({
            format: format,
            quality: details.q_text,
            downloadLink: conversionResult.dlink
          });
        }
      } catch (error) {
        results.push({
          format: format,
          quality: details.q_text,
          error: error.message
        });
      }
    }
  }

  return {
    title: videoTitle,
    videoId: videoVid,
    conversions: results
  };
}

module.exports = { topcc, ToMP3 }

const fs = require("fs")
const chalk = require('chalk')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})