module.exports = {
type: 'download',
command: ['igdl','instagramdown','instagramdl'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, users, IsReg, fetchJson, readmore, args, dftardulu } = context;

/*
 - Igdl
 - Source
 - https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
 -
 - Jan lupa instal npm i btch-downloader
 - 
*/

if (!IsReg) return dftardulu()
const { igdl } = require('btch-downloader')
if (!text.includes('instagram.com')) return m.reply(`mau yang mana\n.igdl <link> video\n.igdl <link> foto`)
let result = await igdl(text)

try {

if (args[1] === 'video') {
await Yuta.sendMessage(m.chat, { video: { url: result[0].url }, caption: 'done igvideo dl' }, { quoted: leogg })
await Yuta.sendMessage(m.chat, { audio: { url: result[0].url }, mimetype: 'audio/mpeg' }, { quoted: leogg })
} else if (args[1] === 'foto') {
let slide = result
let slide2 = slide.map(z => z.url)
await Yuta.sendMessage(m.chat, { image: { url: slide[0].url }, caption: 'done' }, {quoted:m})
for (let i of slide2) {
await Yuta.sendMessage(m.chat, { image: { url: i }, caption: '' }, {quoted:m})
}
}

} catch (err) {
 m.reply('maaf error kak')
}

}
}