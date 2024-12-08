module.exports = {
    type: 'search',
    command: ['emotecraft'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;

const axios = require('axios');
const cheerio = require('cheerio');

async function Minecraft_Emote(emoteId) {
    try {
        const response = await axios.get(`https://emotes.kosmx.dev/emotes?s=${emoteId}`);
        const $ = cheerio.load(response.data);
        const emotes = [];

        $('.card').each((index, element) => {
            const title = $(element).find('.card-title').text().trim();
            const description = $(element).find('.card-text').text().trim();
            const uploader = $(element).find('.card-footer').text().trim();
            const downloadUrl = 'https://emotes.kosmx.dev' + $(element).find('a').first().attr('href');
            const imageUrl = 'https://emotes.kosmx.dev' + $(element).find('img').attr('src');

            emotes.push({
                title,
                description,
                uploader,
                downloadUrl,
                imageUrl
            });
        });

        return {
            success: true,
            author: "@selxyz",
            result: emotes
        };
    } catch (error) {
        console.error('Error fetching emote details:', error.message);
        return {
            success: false,
            author: "@selxyz",
            result: []
        };
    }
}

async function GET_EMOTE_DETAIL(emoteUrl) {
    try {
        const response = await axios.get(emoteUrl);
        const $ = cheerio.load(response.data);

        const title = $('h1').text().trim();
        const author = $('h3').text().replace('Author:', '').trim();
        const description = $('h5').text().trim();
        const owner = $('a[href^="/u/"]').first().attr('href') ? 'https://emotes.kosmx.dev' + $('a[href^="/u/"]').first().attr('href') : null;
        const iconUrl = 'https://emotes.kosmx.dev' + $('img').attr('src');
        const downloadUrl = 'https://emotes.kosmx.dev' + $('a.btn-success').attr('href');
        const jsonDownloadUrl = 'https://emotes.kosmx.dev' + $('a.btn-light').attr('href');
        const stars = $('span.text-muted').text().trim();

        return {
            success: true,
            author: "@selxyz",
            result: {
                title,
                author,
                description,
                owner,
                iconUrl,
                downloadUrl,
                jsonDownloadUrl,
                stars
            }
        };
    } catch (error) {
        console.error('Error fetching emote details:', error.message);
        return {
            success: false,
            author: "@selxyz",
            result: null
        };
    }
}

async function RANDOM_EMOTES() {
    try {
        const randomPage = Math.floor(Math.random() * 12) + 1;
        const response = await axios.get(`https://emotes.kosmx.dev/emotes?p=${randomPage}`);
        const $ = cheerio.load(response.data);
        const randomEmotes = [];

        $('.card').each((index, element) => {
            const title = $(element).find('.card-title').text().trim();
            const description = $(element).find('.card-text').text().trim();
            const author = $(element).find('.card-footer').text().trim();
            const downloadLink = 'https://emotes.kosmx.dev' + $(element).find('a').first().attr('href');
            const imageSrc = 'https://emotes.kosmx.dev' + $(element).find('img').attr('src');

            randomEmotes.push({
                title,
                description,
                author,
                downloadLink,
                imageSrc
            });
        });

        return {
            success: true,
            author: "@selxyz",
            result: randomEmotes
        };
    } catch (error) {
        console.error('Error fetching random emotes:', error.message);
        return {
            success: false,
            author: "@selxyz",
            result: []
        };
    }
}

if (!text) return m.reply('masukan nama emotecraft yang pengen anda cari untuk emot Minecraft')
try {
let { result } = await Minecraft_Emote(text)

if (result === 0) {
 m.reply('maaf ga ketemu...')
}

let no = 1
let deku = `⏤͟͟͞͞╳── *[ ᴇᴍᴏᴛᴇᴄʀᴀғᴛ - sᴇᴀʀᴄʜ ]* ── .々─ᯤ\n│ `
for (let i of result) {
deku += `\n⏤͟͟͞͞╳── *[ [ ${no++} ] ${i.title} | ${i.uploader} ]* ── .々─ᯤ\n`
deku += `│    =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${i.description}\n`
deku += `│    =〆 ᴅᴏᴡɴʟᴏᴀᴅᴜʀʟ: ${i.downloadUrl}\n`
deku += `⏤͟͟͞͞╳────────── .✦\n\n`
}

await Yuta.sendMessage(m.chat, {
text: deku,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: result[1].title,
mediaType: 1,
previewType: 1,
body: `Author: ${result[1].uploader}`,
thumbnailUrl: result[1].imageUrl,
renderLargerThumbnail: false,
mediaUrl: result[1].downloadUrl,
sourceUrl: result[1].downloadUrl
}
}
},{ quoted: leogg });


} catch (err) {
m.reply('maaf kak bisa di coba lagi...')
}

}
}