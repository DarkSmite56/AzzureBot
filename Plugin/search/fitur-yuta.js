module.exports = {
type: 'search',
command: ['yuta','yutaft'],
operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users } = context;
    
const axios = require('axios');

const a = await axios.get('https://btch.us.kg/pinimg?query=Yuta%20Okkotsu', { responseType: 'arraybuffer' })

await Yuta.sendMessage(m.chat, { image: a.data, caption: 'Nih Foto Yuta' }, { quoted: leogg })

}
}