module.exports = {
    type: 'download',
    command: ['pinterest','pin','pinterestdl','pindl'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, getBuffer, GIFBufferToVideoBuffer, args, IsReg, users, dftardulu } = context;

const gis = require("g-i-s")
const axios = require('axios')
const cheerio = require('cheerio')

async function pinterestsrc(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "Terjadi kesalahan" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'chibot',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}
/*
function pinterest(url) {
  return new Promise(async (resolve, reject) => {
    let form = new URLSearchParams();
    form.append("url", url);
    let html = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: form,
      })
    ).text();
    $ = cheerio.load(html);
    let data = [];
    $("table > tbody > tr").each(function (i, e) {
      if ($($(e).find("td")[0]).text() != "")
        data.push({
          url: $($(e).find("td")[0]).find("a").attr("href"),
        });
    });
    if (data.length == 0) return resolve({ status: false });
    resolve({ status: true, data });
  });
}

let is = {
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua":
      '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    cookie:
      "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
};

async function getfile(url) {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     let buffer = await getBuffer(url)
     return Yuta.sendMessage(m.chat, { video: await GIFBufferToVideoBuffer(buffer), caption: 'Done Downloader Pinterest',
              contextInfo: {
              mentionedJid: [m.sender], 
           forwardingScore: 999,
         isForwarded: true,
      forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
    newsletterName: `Pin Download By: ${ownername}`,
       serverMessageId: 143
         }
       }
      }, { quoted: leogg })
      }
      if(mime.split("/")[0] === "image"){
     return Yuta.sendMessage(m.chat, { image: await getBuffer(url), caption: 'Done Downloader Pinterest',
         contextInfo: {
              mentionedJid: [m.sender], 
           forwardingScore: 999,
         isForwarded: true,
      forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
    newsletterName: `Pin Download By: ${ownername}`,
       serverMessageId: 143
         }
       }
      }, { quoted: leogg })
      }
      if(mime.split("/")[0] === "video"){
     return Yuta.sendMessage(m.chat, { video: await getBuffer(url), caption: 'Done Downloader Pinterest',
              contextInfo: {
              mentionedJid: [m.sender], 
           forwardingScore: 999,
         isForwarded: true,
      forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
    newsletterName: `Pin Download By: ${ownername}`,
       serverMessageId: 143
         }
       }
      }, { quoted: leogg })
    }
   }

if (command === ('pinterestdl') || command === ('pindl')) {
if (!registered) return IsReg() 
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
let { data } = await pinterest(text)
await getfile(data[0].url)
*/

async function savepin(url) {
  try {
    const response = await axios.get(`https://www.savepin.app/download.php?url=${encodeURIComponent(url)}&lang=en&type=redirect`);
    const html = response.data;
    const $ = cheerio.load(html);

    let results = [];
    $('td.video-quality').each((index, element) => {
      const type = $(element).text().trim();
      const format = $(element).next().text().trim();
      const downloadLinkElement = $(element).nextAll().find('#submiturl').attr('href');
      if (downloadLinkElement) {
        let downloadLink = downloadLinkElement;
        if (downloadLink.startsWith('force-save.php?url=')) {
          downloadLink = decodeURIComponent(downloadLink.replace('force-save.php?url=', ''));
        }
        results.push({ type, format, downloadLink });
      }
    });
    const title = $('h1').text().trim();

    return {
      title,
      results
    };
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    return { success: false, message: error.message };
  }
}

if (command === ('pinterestdl') || command === ('pindl')) {
if (!IsReg) return dftardulu()
if (!text.includes('pin.it')) return replygcyuta(`link pinterest\n\n${command} <link> video\n${command} <link> gif\n${command} <link> foto`)
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
try {
/*
if (pinvi.length > 0) {
await Yuta.sendFileUrl(m.chat, pinvi[0].downloadLink, `title: ${hasil.title}`, leogg)
sendReaction("✅")
} else {
sendReaction("⏳")
await Yuta.sendFileUrl(m.chat, pinft[0].downloadLink, `title: ${hasil.title}`, leogg)
sendReaction("✅")
}
} catch (er) {
replygcyuta(`${er}`)
}
*/
if (args[1] === 'video') {
sendReaction("⏳")
let hasil = await savepin(args[0])
await Yuta.sendMessage(m.chat, { video: { url: hasil.results[0].downloadLink }, caption: `title: ${hasil.title}` }, { quoted: leogg })
sendReaction("✅")
} else if (args[1] === 'gif') {
sendReaction("⏳")
let hasil = await savepin(args[0])
await Yuta.sendGif(m.chat, hasil.results[0].downloadLink, `title: ${hasil.title}`, leogg)
sendReaction("✅")
} else if (args[1] === 'foto') {
sendReaction("⏳")
let hasil = await savepin(args[0])
await Yuta.sendMessage(m.chat, { image: { url: hasil.results[0].downloadLink }, caption: `title: ${hasil.title}` }, { quoted: leogg })
sendReaction("✅")
}

} catch (er) {
replygcyuta(`${er}`)
}

} else if (command === ('pinterest') || command === ('pin')) {
if (!IsReg) return dftardulu()
if (!text) return replygcyuta('Nama Nya Apa? Mau Nyari Di Pinterest')
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
let { result } = await pinterestsrc(text)
let ambil = result[Math.floor(Math.random() * result.length)]
await Yuta.sendMessage(m.chat, {
image: {
url: ambil
}, 
caption: `Done Search ${text}`,
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
  newsletterJid: saluran,
  newsletterName: `Pin Search By: ${ownername}`,
  serverMessageId: 143
  }
  }
}, { quoted: leogg })
}
}
}