module.exports = {
    type: 'download',
    command: ['play','mp4','mp3'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;
const yts = require('yt-search');
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');
const chalk = require('chalk');

/**
 * Fungsi untuk mengunduh video atau audio dari YouTube
 * 
 * By NDBOTZ ⟩⟩ https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
 * 
 * @param {string} url - URL video YouTube yang akan diunduh
 * @param {string} [format='mp3'] - Format file yang diinginkan (mp3 atau mp4)
 * @returns {Promise<DownloadResult>} Promise dengan hasil download
 * 
 * @example
 * // Download audio MP3
 * ytdl('https://youtube.com/watch?v=videoID')
 *   .then(result => {
 *     if (result.status) {
 *       console.log('Judul:', result.title);
 *       console.log('Link Download:', result.dl);
 *     }
 *   });
 * 
 * @example
 * // Download video MP4
 * ytdl('https://youtube.com/watch?v=videoID', 'mp4')
 *   .then(result => {
 *     if (result.status) {
 *       console.log('Judul:', result.title);
 *       console.log('Link Download:', result.dl);
 *     }
 *   });
 * 
 * @throws {Object} Objek error dengan informasi kegagalan download
 * 
 * Struktur objek hasil download
 * 
 * @typedef {Object} DownloadResult
 * @property {boolean} status - Status keberhasilan download
 * @property {string} [title] - Judul video (jika berhasil)
 * @property {string} [dl] - Link download (jika berhasil)
 * @property {string} [mess] - Pesan error (jika gagal)
 * 
 */

function ytdl1(url, format = 'mp3') {
    return new Promise(async(resolve, reject) => {

        const isYouTubeUrl = /^(?:(?:https?:)?\/\/)?(?:(?:(?:www|m(?:usic)?)\.)?youtu(?:\.be|be\.com)\/(?:shorts\/|live\/|v\/e(?:mbed)?\/|watch(?:\/|\?(?:\S+=\S+&)*v=)|oembed\?url=https?%3A\/\/(?:www|m(?:usic)?)\.youtube\.com\/watch\?(?:\S+=\S+&)*v%3D|attribution_link\?(?:\S+=\S+&)*u=(?:\/|%2F)watch(?:\?|%3F)v(?:=|%3D))?|www\.youtube-nocookie\.com\/embed\/)(([\w-]{11}))[\?&#]?\S*$/
    
        if (!isYouTubeUrl.test(url)) {
            resolve({
                status: false,
                mess: "Link is not valid"
            })
        }
        const id = url.match(isYouTubeUrl)?.[2]
    
        const hr = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Referer': 'https://id.ytmp3.mobi/',
        }

        const init = await axios.get(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, {
            headers: hr
        });

        if (init.data.convertURL) {

            let convert = await axios.get(`${init.data.convertURL}&v=${id}&f=${format}&_=${Math.random()}`, {
                headers: hr
            }).then(x => x.data)

            async function progress(url, dl) {
                let currentProgress = 0;
                let title = '';

                while (currentProgress < 3) {
                    try {
                        const response = await axios.get(url, {
                            headers: hr
                        });
                        const data = response.data;

                        if (data.error > 0) {
                            resolve({
                                status: false,
                                mess: `Error: ${data.error}`
                            });
                        }

                        currentProgress = data.progress;
                        title = data.title

                        if (currentProgress < 3) {
                            await new Promise(resolve => setTimeout(resolve, 200));
                        }
                    } catch (error) {
                        resolve({
                            status: false,
                            mess: 'Error checking progress:' + error.message
                        })
                    }
                }
                return { dl, title }
            }

            const result = await progress(convert.progressURL, convert.downloadURL);
            resolve({
                status: true,
                title: result.title,
                dl: result.dl
            })
        } else {
            resolve({
                status: false,
                mess: "convertURL is missing"
            })
        }
    })
};

async function download(url) {

const mp3 = await ytdl1(url,"mp3")
const mp4 = await ytdl1(url,"mp4")

return { mp3, mp4 }
}

const SaveTube = {
    qualities: {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    },
    
    headers: {
        'accept': '*/*',
        'referer': 'https://ytshorts.savetube.me/',
        'origin': 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json'
    },
    
    cdn() {
        return Math.floor(Math.random() * 11) + 51;
    },
    
    checkQuality(type, qualityIndex) {
        if (!(qualityIndex in this.qualities[type])) {
            throw new Error(`❌ Kualitas ${type} tidak valid. Pilih salah satu: ${Object.keys(this.qualities[type]).join(', ')}`);
        }
    },
    
    async fetchData(url, cdn, body = {}) {
        const headers = {
            ...this.headers,
            'authority': `cdn${cdn}.savetube.su`
        };

        try {
            const response = await axios.post(url, body, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    
    dLink(cdnUrl, type, quality, videoKey) {
        return `https://${cdnUrl}/download`;
    },
    
    async dl(link, qualityIndex, type) {
        const quality = SaveTube.qualities[type][qualityIndex];
        if (!type) throw new Error('❌ Tipe tidak valid. Pilih 1 untuk audio atau 2 untuk video.');
        SaveTube.checkQuality(type, qualityIndex);
        const cdnNumber = SaveTube.cdn();
        const cdnUrl = `cdn${cdnNumber}.savetube.su`;
        
        const videoInfo = await SaveTube.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
        const badi = {
            downloadType: type,
            quality: quality,
            key: videoInfo.data.key
        };

        const dlRes = await SaveTube.fetchData(SaveTube.dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, badi);

        return {
            link: dlRes.data.downloadUrl,
            duration: videoInfo.data.duration,
            durationLabel: videoInfo.data.durationLabel,
            fromCache: videoInfo.data.fromCache,
            id: videoInfo.data.id,
            key: videoInfo.data.key,
            thumbnail: videoInfo.data.thumbnail,
            thumbnail_formats: videoInfo.data.thumbnail_formats,
            title: videoInfo.data.title,
            titleSlug: videoInfo.data.titleSlug,
            videoUrl: videoInfo.data.url,
            quality,
            type
        };
    }
};

const formats = ["audio", "video"];
const audioQuality = [320, 256, 192, 128, 64];
const videoQuality = ["360p", "480p", "720p", "1080p"];

const bigconv = {
  getToken: async (url) => {
    const extractVideoId = (url) => {
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const id = extractVideoId(url);
    if (!id) {
      throw new Error('ID videonya gk ketemu jir, pastikan link youtube yak');
    }

    const config = {
      method: 'GET',
      url: `https://dd-n01.yt2api.com/api/v4/info/${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
        'Accept': 'application/json',
        'accept-language': 'id-ID',
        'referer': 'https://bigconv.com/',
        'origin': 'https://bigconv.com',
        'alt-used': 'dd-n01.yt2api.com',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'priority': 'u=0',
        'te': 'trailers'
      }
    };

    const response = await axios.request(config);
    const cookies = response.headers['set-cookie'];
    const processedCookie = cookies ? cookies[0].split(';')[0] : '';
    const authorization = response.headers['authorization'] || '';
    const result = { data: response.data, cookie: processedCookie, authorization };
    return result;
  },
  convert: async (url, format, quality) => {
    const data = await bigconv.getToken(url);
    const formats = data.data.formats;

    let token;
    if (format === "audio") {
      const audioOptions = formats.audio.mp3;
      const selectedAudio = audioOptions.find(option => option.quality === quality);
      if (selectedAudio) {
        token = selectedAudio.token;
      } else {
        throw new Error(`Kualitas audio ${quality} tidak tersedia.`);
      }
    } else if (format === "video") {
      const videoOptions = formats.video.mp4;
      const selectedVideo = videoOptions.find(option => option.quality === quality);
      if (selectedVideo) {
        token = selectedVideo.token;
      } else {
        throw new Error(`Kualitas video ${quality} tidak tersedia.`);
      }
    } else {
      throw new Error('Format tidak dikenali. Gunakan "audio" atau "video".');
    }

    const raw = JSON.stringify({ "token": token });

    const config = {
      method: 'POST',
      url: 'https://dd-n01.yt2api.com/api/v4/convert',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accept-language': 'id-ID',
        'referer': 'https://bigconv.com/',
        'origin': 'https://bigconv.com',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'priority': 'u=0',
        'te': 'trailers',
        'Cookie': data.cookie,
        'authorization': data.authorization
      },
      data: raw
    };

    const response = await axios.request(config);
    return { jobId: response.data.id, cookie: data.cookie, authorization: data.authorization };
  },
  download: async (url, format, quality) => {
    const { jobId, cookie, authorization } = await bigconv.convert(url, format, quality);
    return new Promise((resolve, reject) => {
      const checkStatus = async () => {
        const config = {
          method: 'GET',
          url: `https://dd-n01.yt2api.com/api/v4/status/${jobId}`,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
            'Accept': 'application/json',
            'accept-language': 'id-ID',
            'referer': 'https://bigconv.com/',
            'origin': 'https://bigconv.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'priority': 'u=4',
            'te': 'trailers',
            'Cookie': cookie,
            'authorization': authorization
          }
        };

        const response = await axios.request(config);
        console.log(response.data);
        if (response.data.status === 'completed') {
          clearInterval(interval);
          resolve(response.data);
        } else if (response.data.status === 'failed') {
          clearInterval(interval);
          resolve(response.data);
        } else {
          console.log('Status belum complete, wet iam cek lagi...');
        }
      };

      const interval = setInterval(checkStatus, 5000);
    });
  }
};


class ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Postify/1.0.0',
            'Accept': '*/*',
            'Cache-Control': 'no-cache',
            'Origin': this.baseUrl,
            'Referer': this.baseUrl+"/youtube",
        };
    

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            //console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Postify/1.0.0',
            'Accept': '*/*',
            'Cache-Control': 'no-cache',
            'Origin': this.baseUrl,
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            //console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title, a: atr } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                resolution: input.q,
                url: dlink,
                size: input.size
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                resolution: input.q,
                url: dlink,
                size: input.size
            };
        }

        return { title, thumbnail: `https://i.ytimg.com/vi/${vid}/0.jpg`, author: atr, video, audio, };
    }
}

async function dlmp3(url) {
  const g = new ytdl()
  let { links, vid, title, a: attr } = await g.search(url);
  let v = links.mp3['mp3128']
  let atr = attr ? attr : "Unknown"
  let cf = await g.convert(vid, v.k)
  
  return { title, thumbnail: `https://i.ytimg.com/vi/${vid}/0.jpg`, author: attr, id: cf.vid, type: cf.ftype, quality: cf.fquality, quality_t: v.q_text, size: v.size, dl: cf.dlink };
}

let h = new ytdl()

class yt {
    /**
     * Mengunduh video dari YouTube dalam format MP4 atau MP3.
     * @param {string} url - URL video YouTube yang valid.
     * @param {string} downtype - Tipe unduhan: 'mp4' atau 'mp3'.
     * @param {string} vquality - Kualitas video atau audio:
     *      - Untuk 'mp4': '144', '240', '360', '720', '1080'
     *      - Untuk 'mp3': '128', '360'
     * @returns {Promise<string>} - URL unduhan dari API.
     */
    async dl(url, downtype, vquality) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=|music\?v=|embed\/|v\/|.+\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);

        if (!match) {
            throw new Error('URL tidak valid. Silakan masukkan URL YouTube yang benar.');
        }

        const videoId = match[1];
        const data = new URLSearchParams({ videoid: videoId, downtype, vquality });

        try {
            const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            });
            return response.data
        } catch (error) {
            throw new Error('Terjadi kesalahan: ' + error.message);
        }
    }

    async result(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=|music\?v=|embed\/|v\/|.+\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);

        if (!match) {
            throw new Error('URL tidak valid. Silakan masukkan URL YouTube yang benar.');
        }

        const videoId = match[1];
        const data = new URLSearchParams({ videoid: videoId, downtype, vquality });

        try {
            const response = await axios.post('https://api-cdn.saveservall.xyz/ajax-v2.php', data, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            });
            return response.data
        } catch (error) {
            throw new Error('Terjadi kesalahan: ' + error.message);
        }
    }
    
    /**
     * Mengambil link unduhan untuk kedua format MP4 dan MP3.
     * @param {string} url - URL video YouTube yang valid.
     * @param {Object} qualities - Kualitas unduhan untuk masing-masing format.
     * @param {string} qualities.mp4 - Kualitas untuk MP4.
     * @param {string} qualities.mp3 - Kualitas untuk MP3.
     * @returns {Promise<Object>} - Objek berisi URL unduhan MP4 dan MP3.
     */
    async download(url, { mp4 = '360', mp3 = '128' } = {}) {
        try {
            let h = new yt()
            const mp4Link = await h.dl(url, 'mp4', mp4);
            const mp3Link = await h.dl(url, 'mp3', mp3);
            return { mp4: mp4Link, mp3: mp3Link };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Mencari video YouTube berdasarkan kata kunci.
     * @param {string} query - Kata kunci pencarian.
     * @returns {Promise<Object>} - Hasil pencarian dari API.
     */
    static async search(query) {
        const url = `https://api.flvto.top/@api/search/YouTube/${encodeURIComponent(query)}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'Cache-Control': 'no-cache',
                    'Origin': 'https://keepvid.online',
                    'Referer': 'https://keepvid.online/',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
                }
            });
            
            return response.data.items.map(item => ({
                ...item,
                url: `https://www.youtube.com/watch?v=${item.id}`
            }));
        } catch (error) {
            throw new Error('Gagal mengambil hasil pencarian: ' + error.message);
        }
    }
}

let saversaveall = new yt()

/*
 - Fungsi Download
*/
const downloadMp3 = async (Link) => {
const vidId = ((_a = /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm.exec(Link)) === null || _a === void 0 ? void 0 : _a[1]) || "";
let convert = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })

replygcyuta('Sound Lagi Loading Sabar....⏳')

try {
let deku = await download(url)

await Yuta.sendMessage(m.chat, {
audio: {
url: deku.mp3.dl
},
mimetype: 'audio/mpeg',
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
    }
  }
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
const deku = await SaveTube.dl(Link,"3","audio")

await Yuta.sendMessage(m.chat, {
audio: {
url: deku.link
},
mimetype: 'audio/mpeg',
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
    }
  }
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
let deku = await bigconv.download(Link,"video","360p")
await Yuta.sendMessage(m.chat, {
audio: {
url: deku.download
},
mimetype: 'audio/mpeg',
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
    }
  }
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
let h = await dlmp3(Link)
await Yuta.sendMessage(m.chat, {
audio: {
url: h.dl
},
mimetype: 'audio/mpeg',
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
    }
  }
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
let { mp3, mp4 } = await saversaveall.download(Link)
let leo = {
    audio: { url: mp3.url },
    mimetype:'audio/mpeg',
    contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
    }
  }
};
 await Yuta.sendMessage(m.chat, leo, { quoted: leogg });
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
sendReaction("❌")
}}}}}
}

const downloadMp4 = async (Link) => {
const vidId = ((_a = /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm.exec(Link)) === null || _a === void 0 ? void 0 : _a[1]) || "";
let convert = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })

replygcyuta('Video Lagi Loading Sabar....⏳')
let captions = `=〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
captions += `=〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
captions += `=〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
captions += `=〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
captions += `=〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
captions += `=〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
captions += `=〆 ᴜʀʟ : ${convert.url}`

try {
let deku = await download(url)

await Yuta.sendMessage(m.chat, {
video: {
url: deku.mp4.dl
},
caption: captions
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
const deku = await SaveTube.dl(Link,"5","video")
await Yuta.sendMessage(m.chat, {
video: {
url: deku.link
},
caption: captions
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
let deku = await bigconv.download(Link,"video","720p")
await Yuta.sendMessage(m.chat, {
video: {
url: deku.download
},
caption: captions
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
try {
let wleo = await h.play(Link)
await Yuta.sendMessage(m.chat, {
video: {
url: wleo.video['720p'].url
},
caption: captions
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (e) {
try {
let { mp3, mp4 } = await saversaveall.download(Link)
await Yuta.sendMessage(m.chat, { 
video: {
url: mp4.url
},
caption: captions 
}, { quoted: leogg })
replygcyuta('Done ✅')
sendReaction("✅")
} catch (err) {
sendReaction("❌")
}}}}}
}


if (command === 'play') {
if (!IsReg) return dftardulu() 
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)
await sendReaction("⏳")
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
let convert = await yts({ search: text, hl: 'id', gl: 'ID' })
let result = convert.all[0]

if (result === 0) {
 m.reply('maaf ga ketemu...')
}

let hah = result.url;
let deku = `⏤͟͟͞͞╳── *[ ᴘʟᴀʏ - ʏᴏᴜᴛᴜʙᴇ ]* ── .々─ᯤ\n`
deku += `│    =〆 ᴛɪᴛʟᴇ: ${result.title}\n`
deku += `│    =〆 ɪᴅ: ${result.videoId}\n`
deku += `│    =〆 ᴅᴜʀᴀsɪ: ${result.timestamp}\n`
deku += `│    =〆 ᴀɢᴏ: ${result.ago}\n`
deku += `│    =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${result.description}\n`
deku += `│    =〆 ᴜʀʟ: ${result.url}\n`
deku += `⏤͟͟͞͞╳────────── .✦\n\n`
deku += `*[ ! ]* ᴋᴀʟᴀᴜ ᴠɪᴅᴇᴏ ʀᴇᴘʟʏ .ᴍᴘ4`

await Yuta.sendMessage(m.chat, {
text: deku,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: result.title,
mediaType: 1,
previewType: 1,
body: `Durasi : ${result.timestamp} / View : ${result.views}`,
thumbnailUrl: result.image,
renderLargerThumbnail: true,
mediaUrl: result.url,
sourceUrl: result.url
},
forwardedNewsletterMessageInfo: {
newsletterJid: saluran,
serverMessageId: -1,
newsletterName: `Play By: ${ownername}`
}
}
},{ quoted: leogg });

await downloadMp3(result.url)
} else if (command === 'mp3' || command === 'Mp3') {
const getlink = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);

const urls = getlink[0]

if (!urls) return m.reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube')

/*
if (urls === 0) {
 m.reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube')
}
*/

sendReaction("⏳")
await downloadMp3(urls)
} else if (command === 'mp4' || command === 'Mp4') {
const getlink = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);

const urls = getlink[0]

if (!urls) return m.reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube')

sendReaction("⏳")
await downloadMp4(urls)
}
}
}