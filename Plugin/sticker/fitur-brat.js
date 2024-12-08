const axios = require('axios');
const BodyForm = require('form-data');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const fs = require('fs');
const crypto = require('crypto')
const chalk = require('chalk')
const cheerio = require('cheerio');

module.exports = {
type: 'sticker',
command: ['brat'],
operate: async (context) => {
    const {
    Yuta,
    m,
    text,
    q,
    prefix,
    command,
    replygcyuta,
    leogg,
    quoted,
    sendReaction,
    limituser,
    limitAbis,
    useLimit,
    getBuffer,
    IsReg,
    fetchJson,
    mime,
    users
    } = context;

try {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
if (!text) return m.reply('masukan text nya!')
const axios = require('axios')

async function Brat(ha) {
try {
let hasil = await axios.get('https://api.ryzendesu.vip/api/sticker/brat?text=' + ha, {
responseType:
'arraybuffer'
});

const data = hasil.data
return { data }
} catch (error) {
 return { data: { message: message.error } }
}
}

let hasil = await Brat(text)
await Yuta.sendVideoAsSticker(m.chat, hasil.data, leogg, { packname: global.packname, author: global.author })
} catch (e) {
m.reply(`error kak result err: ${e}`)
}
}
}