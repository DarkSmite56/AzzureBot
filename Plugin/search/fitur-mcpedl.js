module.exports = {
type: 'search',
command: ['mcpedl'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users } = context;
    
const cheerio = require('cheerio');
const axios = require('axios');

async function mcpedl(mods) {
  try {
    const ress = await axios.get(`https://mcpedl.org/?s=${mods}`);
    const $ = cheerio.load(ress.data);

    const result = [];

    $('.g-block.size-20').each((index, element) => {
      const title = $(element).find('.entry-title a').text();
      const url = $(element).find('.entry-title a').attr('href');
      const imageUrl = $(element).find('.post-thumbnail img').attr('data-src');
      
      const ratingWidth = $(element).find('.rating-wrapper .rating-box .rating-subbox').attr('style');
      const rating = ratingWidth ? parseInt(ratingWidth.split(':')[1]) / 100 * 5 : 0;

      result.push({
        title,
        url,
        imageUrl,
        rating: rating,
      });
    });

    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

if (!text) return m.reply('cari kan nama mods yang pengen anda cari')

let result = await mcpedl(text)

if (!result || result === 0) {
 m.reply('maaf pencarian tidak di temukan')
}

try {
let deku = `⏤͟͟͞͞╳── *[ ᴍᴄᴘᴇᴅʟ  sᴇᴀʀᴄʜ ]* ── .々─ᯤ\n│ `
for (let i of result) {
deku += `\n⏤͟͟͞͞╳── *[ ${i.title} | rate ${i.rating} ]* ── .々─ᯤ\n`
deku += `│    =〆 ʟɪɴᴋ: ${i.url}\n`
deku += `⏤͟͟͞͞╳────────── .✦\n\n`
}

await Yuta.sendMessage(m.chat, {
text: deku,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: result[0].title,
      mediaType: 1,
      previewType: 1,
      body: 'Scrape: selxyz',
      //previewType: "PHOTO",
      thumbnailUrl: result[0].imageUrl,
      renderLargerThumbnail: false,
      mediaUrl: result[0].url,
      sourceUrl: result[0].url
     },
      forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `By : ${ownername}`,
 serverMessageId: 143
    }
  }
}, { quoted: leogg })

} catch (err) {
 m.reply('maaf eror kak..')
}

}
}