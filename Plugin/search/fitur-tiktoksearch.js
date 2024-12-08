module.exports = {
    type: 'search',
    command: ['tts','tiktoksearch','deku','bakugo','todoroki','okarun'],
    operate: async (context) => {
     const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users } = context;
        
const axios = require('axios')

async function ttSearch(query) {
	return new Promise(async(resolve,reject) => {

axios("https://tikwm.com/api/feed/search", {
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie": "current_language=en",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
  },
  data: {
    "keywords": query,
    "count": 12,
    "cursor": 0,
    "web": 1,
     "hd": 1
   },
  "method": "POST"
}).then(res => { 
 resolve(res.data.data) 
})
})
}
if (command === 'tts' || command === 'tiktoksearch') {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
if (!text) return replygcyuta("Mau? Search Apa Kak")
let tts = await ttSearch(text)
let pick = tts.videos[Math.floor(tts.videos.length * Math.random())]
await Yuta.sendMessage(m.chat, { video: { url: `https://tikwm.com/${pick.play}` }, caption: pick.title }, { quoted: leogg })
} else if (command === 'deku') {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
let tts = await ttSearch('deku')
let pick = tts.videos[Math.floor(tts.videos.length * Math.random())]
await Yuta.sendMessage(m.chat, { video: { url: `https://tikwm.com/${pick.play}` }, caption: pick.title }, { quoted: leogg })

} else if (command === 'bakugo') {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
let tts = await ttSearch('bakugo')
let pick = tts.videos[Math.floor(tts.videos.length * Math.random())]
await Yuta.sendMessage(m.chat, { video: { url: `https://tikwm.com/${pick.play}` }, caption: pick.title }, { quoted: leogg })

} else if (command === 'todoroki') {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
let tts = await ttSearch('todoroki')
let pick = tts.videos[Math.floor(tts.videos.length * Math.random())]
await Yuta.sendMessage(m.chat, { video: { url: `https://tikwm.com/${pick.play}` }, caption: pick.title }, { quoted: leogg })

} else if (command === 'okarun') {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
let tts = await ttSearch('okarun')
let pick = tts.videos[Math.floor(tts.videos.length * Math.random())]
await Yuta.sendMessage(m.chat, { video: { url: `https://tikwm.com/${pick.play}` }, caption: pick.title }, { quoted: leogg })
}

}
}