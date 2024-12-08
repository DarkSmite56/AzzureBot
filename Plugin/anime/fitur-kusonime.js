const { 
 generateWAMessageFromContent,
 proto,
 generateWAMessageContent,
 generateWAMessage,
 prepareWAMessageMedia
} = require('@whiskeysockets/baileys')
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
type: 'anime',
command: ['kusonime','kusonimedl'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, fetchJson, readmore, users, dftardulu } = context;
class Kusonime {
  search = async (query) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: "https://kusonime.com/?s=" + query,
          method: "GET",
          headers: {
            "user-agent":
              "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          },
        })
        .then(({ data }) => {
          const $ = cheerio.load(data);
          const res = $('div[class="content"]')
            .map(function () {
              return {
                title: $(this).find("h2 > a").attr("title"),
                release: $(this).find('p:contains("Released")').text().trim(),
                genre: $(this)
                  .find('p:contains("Genre") > a')
                  .map((_, element) => $(element).text())
                  .get(),
                url: $(this).find("h2 > a").attr("href"),
              };
            })
            .toArray();
          resolve(res);
        });
    });
  };
  detail = async (url) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .get(url, {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          },
        })
        .then(({ data }) => {
          const $ = cheerio.load(data);
          const rootContent = $('div[class="venser"]');
          const rootBody = rootContent.find('div[class="lexot"]');
          const rootInfo = rootBody.children('div[class="info"]');

          let judul = $('div[class="post-thumb"] > h1[class="jdlz"]').text();
          let japanese = $('div[class="info"] > p:nth-child(1)').text();
          let genre = $('div[class="info"] > p:nth-child(2)').text();
          let season = $('div[class="info"] > p:nth-child(3)').text();
          let totaleps = $('div[class="info"] > p:nth-child(7)').text();
          let score = $('div[class="info"] > p:nth-child(8)').text();
          let durasi = $('div[class="info"] > p:nth-child(9)').text();
          let tglrilis = $('div[class="info"] > p:nth-child(10)').text();
          let type = $(rootInfo.children("p").get(4))
            .text()
            .split(":")[1]
            .trim();
          let rate = $(rootInfo.children("p").get(7))
            .text()
            .split(":")[1]
            .trim();
          let status = $(rootInfo.children("p").get(5))
            .text()
            .split(":")[1]
            .trim();
          let desk = $('div[class="venser"]')
            .find('div[class="lexot"]')
            .children("p")
            .first()
            .text();
          let producer = $(rootInfo.children("p").get(3))
            .text()
            .split(":")[1]
            .trim();

          const linkk = {};
          $(".smokeurlrh").each((index, element) => {
            const format = $(element).find("strong").text().trim();
            let linkss = {};
            const links = $(element)
              .find("a[href]")
              .each((i, link) => {
                const name = $(link).text().trim();
                const href = $(link).attr("href");
                linkss[name] = href;
              });
            linkk[format] = linkss;
          });

          const result = {
            judul,
            japanese,
            genre,
            season,
            producer,
            type,
            status,
            totaleps: totaleps.split(": ")[1],
            score,
            durasi,
            rilis: tglrilis.split(": ")[1],
            image: $('div[class="post-thumb"] > img').attr("src"),
            desk,
            download: linkk,
          };
          resolve(result);
        });
    });
  };
}

if (command === 'kusonime') {
if (!IsReg) return dftardulu()
if (!text) return replygcyuta(`Request Anime Apa .kusonime Boku no Hero academia
 - Download
 - *Example :* .kusonimedl https://kusonime.com/xxxx`)
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
let h = new Kusonime()
let hasil = await h.search(text)

let capt = `々──── *[ ʀᴇǫᴜᴇsᴛ - ᴀɴɪᴍᴇ - ᴋᴜsᴏɴɪᴍᴇ ]* ──々\n\n`
let nomor = 1
for (let i of hasil) {
capt += `╭──── *[ ${nomor++} ]* ──々\n`
capt += `│ =〆 ᴛɪᴛʟᴇ : ${i.title}\n`
capt += `│ =〆 ʀɪʟɪs : ${i.release}\n`
capt += `│ =〆 ɢᴇɴʀᴇ : ${i.genre}\n`
capt += `│ =〆 ᴜʀʟ : ${i.url}\n`
capt += `╰─々${readmore}\n\n`
}

let anime = {
 text: capt,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `Kusonime By: ${ownername}`, 
 serverMessageId: -1
 },
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
 }, 
}
await Yuta.sendMessage(m.chat, anime, {quoted:leogg})
} else if (command === 'kusonimedl') {
if (!IsReg) return dftardulu()
if (!text.includes('kusonime')) return replygcyuta(`• *Example :* .${command} https://kusonime.com/xxxx`)
let h = new Kusonime()
let hasil = await h.detail(text)
let capt = `╭──── *[ ᴅʟ - ᴀɴɪᴍᴇ - ᴋᴜsᴏɴɪᴍᴇ ]* ──々\n`
capt += `│ =〆 ᴛɪᴛʟᴇ : ${hasil.judul}\n`
capt += `│ =〆 ʀɪʟɪs : ${hasil.rilis}\n`
capt += `│ =〆 ɢᴇɴʀᴇ : ${hasil.genre}\n`
capt += `│ =〆 ᴅᴇsᴋ : ${hasil.desk}\n`
capt += `╰─々\n\n`
capt += `╭──── *[ ʀᴇsᴜʟᴛ - ᴅᴏᴡɴʟᴏᴀᴅ ]* ──々\n`
capt += `│ =〆 ʀᴇsᴜʟᴛ : ${hasil.download['360P']['Google Sharer']}\n`
capt += `╰─々`
let animeft = {
 image: { url: hasil.image },
 caption: capt,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `Kusonime By: ${ownername}`, 
 serverMessageId: -1
 },
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
 }, 
}
await Yuta.sendMessage(m.chat, animeft, {quoted:leogg})
}
}
}