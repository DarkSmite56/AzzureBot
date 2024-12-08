/*
⚡ Zerochan
📌 Search, detail, and case
📦 By NDBZ
https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
*/

module.exports = {
    type: 'anime',
    command: ['zerochan','zrc','zero'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, fetchJson, readmore, users, dftardulu } = context;

const axios = require('axios')
const cheerio = require('cheerio')

async function zerochan(search) {
    const url = `https://www.zerochan.net/search?q=${encodeURIComponent(search)}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const imageDetails = [];

        $('.thumb img').each((index, element) => {
            const imgUrl = $(element).attr('data-src') || $(element).attr('src');
            const link = $(element).closest('a').attr('href');
            const title = $(element).attr('alt');

            if (imgUrl && link && title) {
                imageDetails.push({
                    id: `https://www.zerochan.net${link}`,
                    title: title,
                    imgUrl: imgUrl
                });
            }
        });

        return imageDetails;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function zerochanDetail(url) {
  try {
    const { data } = await axios.get(`${url}`);
    const $ = cheerio.load(data);

    const scriptContent = $('script[type="application/ld+json"]').html();
    const jsonData = JSON.parse(scriptContent);

    const title = jsonData.name;
    const downloadLink = jsonData.contentUrl;

    return { title, downloadLink };
  } catch (error) {
    console.error('Error:', error);
  }
}

  if (!IsReg) return dftardulu()
  if (!text) return replygcyuta('Nama Karakter Anime?')
  let zerochanft = await zerochan(text)
  replygcyuta(mess.loading)
  if (limituser < 1) return limitAbis();
  useLimit(1)
  let pickget = zerochanft[Math.floor(Math.random() * zerochanft.length)]
  let detail = await zerochanDetail(pickget.id)
  await Yuta.sendMessage(m.chat, {
  image: {
  url: detail.downloadLink
  },
  caption: `Judul : ${detail.title}`,
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
  newsletterJid: saluran,
  newsletterName: `Zerochan By: ${ownername}`,
  serverMessageId: 143
  }
  }
  }, { quoted: leogg })
  sendReaction("✅")
 }
}