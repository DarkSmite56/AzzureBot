module.exports = {
    type: 'search',
    command: ['tvone','tvonenews'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;

const axios = require('axios');
const cheerio = require('cheerio');

/*
*[SCRAPE tvOneNews]*
(search & latest)
By Fruatre
wa.me/6285817597752
Saluran : https://whatsapp.com/channel/0029VaNR2B6BadmioY6mar3N
*/

async function tvOneSearch(query) {
    const ress = await axios.get(`https://www.tvonenews.com/cari?q=${query}`);
    const $ = cheerio.load(ress.data);
    let data = [];

    $('div.article-list-info.content_center').each((i, el) => {
        const title = $(el).find('h2').text().trim();
        const link = $(el).find('a').attr('href');
        const time = $(el).find('li.ali-date.content_center').text().trim();
        const desc = $(el).find('div.ali-desc').text().trim();

        if (title && time && link && desc) {
            data.push({
                title: title,
                url: link,
                waktu: time,
                description: desc
            });
        }
    });

    return data;
}

async function tvOneLatest() {
    const ress = await axios.get('https://www.tvonenews.com/');
    const $ = cheerio.load(ress.data);
    let data = [];

    $('div.article-list-info.content_center').each((i, el) => {
        const title = $(el).find('h2').text().trim();
        const link = $(el).find('a').attr('href');
        const time = $(el).find('li.ali-date.content_center').text().trim();
        const desc = $(el).find('div.ali-desc').text().trim();

        if (title && time && link && desc) {
            data.push({
                title: title,
                url: link,
                waktu: time,
                description: desc
            });
        }
    });

    return data;
}

if (!IsReg) return dftardulu()
if (!text) return replygcyuta("Masukan Nama Berita nya")
let h = await tvOneSearch(text)
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)

let no = 1
let captiont = `⏤͟͟͞͞╳── *[ ᴛᴠ-ᴏɴᴇ - ɴᴇᴡs ]* ── .々─ᯤ\n│\n`
for (let i of h) {
captiont += `⏤͟͟͞͞╳── *[ ${no++} / ${i.title} ]* ── .々─ᯤ\n`
captiont += `│    =〆 ᴡᴀᴋᴛᴜ: ${i.waktu}\n`
captiont += `│    =〆 ᴅᴇsᴄ: ${i.description}\n`
captiont += `│    =〆 ᴜʀʟ: ${i.url}\n`
captiont += `⏤͟͟͞͞╳────────── .✦\n\n`
}

replygcyuta(captiont)
}
}