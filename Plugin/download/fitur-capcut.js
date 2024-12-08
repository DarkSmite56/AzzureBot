module.exports = {
type: 'download',
command: ['cc','capcut'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;
    
/*
⚡ Capcut Template Video Downloader
📦 By NDBZ
🔗 Link: https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
*/
const axios = require('axios')

function download(url) {
  return new Promise(async(resolve, reject) => {
    try {
      let cc = await axios.get(url, {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
        }
      }).then(x => x.data)
      
      let dataMatch = /<script nonce="argus-csp-token">window\._ROUTER_DATA = (.*?)<\/script>/;
      if (cc.match(dataMatch)) {
        let getJson = JSON.parse(cc.match(dataMatch)[1]).loaderData['template-detail_$'].templateDetail
        if (getJson.templateId) {
          resolve({ status: true, mess: `Berhasil mengambil data`, data: getJson })
        } else {
          resolve({ status: false, mess: `Tidak ada metadata tersedia`})
        }
      }
    } catch(e) {
      reject({ status: false, mess: `Gagal mengambil metadata`})
    }
  })
}

if (!text.includes('www.capcut.net')) return m.reply('masukan link cc!!')
let hasil = await download(text)

try {

let deku = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴄᴄ ]* ── .々─ᯤ\n`
deku += `│    =〆 ᴛɪᴛʟᴇ: ${hasil.data.title}\n`
deku += `│    =〆 ᴅᴇsᴄ: ${hasil.data.desc}\n`
deku += `│    =〆 ɪᴅ: ${hasil.data.templateId}\n`
deku += `│    =〆 ᴜʀʟ: ${hasil.data.structuredData.url}\n`
deku += `⏤͟͟͞͞╳────────── .✦`

await Yuta.sendMessage(m.chat, { video: { url: hasil.data.videoUrl }, caption: deku }, { quoted: m })

} catch (e) {
 m.reply('error kak...')
}

}
}