/*
 - Case Break Twdl
*/

const axios = require("axios");
const fs = require('fs');
const chalk = require('chalk')
const cheerio = require('cheerio');
const fetch = require('node-fetch')
const fg = require('api-dylux');

module.exports = {
type: 'downloader',
command: ['twitter','twitterdl','twdl','xdl'],
operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;

if (!IsReg) return dftardulu()
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text.includes('x.com')) return replygcyuta(`• *Example :* .${command} https://x.com/xxxx`)
let { desc } = await fg.twitter(text)

try {
/*
WM Yanz Dev 
Ch: https://whatsapp.com/channel/0029Vai7FxK5Ui2TkgHi1P0I
*/
async function twitter(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const twitterUrlMatch = url.match(/(https:\/\/x.com\/[^?]+)/);
      const tMatch = url.match(/t=([^&]+)/);

      const twitterUrl = twitterUrlMatch ? twitterUrlMatch[1] : '';
      const t = tMatch ? tMatch[1] : '';
      const urlnya = encodeURIComponent(`${twitterUrl}?t=${t}&s=19`);

      const response = await axios.post("https://savetwitter.net/api/ajaxSearch", 
      `q=${urlnya}&lang=en`);

      const $ = cheerio.load(response.data.data);

      const videoThumbnail = $('.tw-video .thumbnail .image-tw img').attr('src');
      const downloads = [];

      $('.dl-action a').each((i, elem) => {
        const quality = $(elem).text().trim();
        const url = $(elem).attr('href');

        if ($(elem).hasClass('action-convert')) {
          const audioUrl = $(elem).attr('data-audioUrl');
          downloads.push({
            quality: quality,
            url: audioUrl || 'URL not found',
          });
        } else {
          downloads.push({
            quality: quality,
            url: url
          });
        }
      });

      const title = $('.tw-middle h3').text().trim();
      const videoDuration = $('.tw-middle p').text().trim();
      const twitterId = $('#TwitterId').val();

      const result = {
        title: title,
        duration: videoDuration,
        twitterId: twitterId,
        videoThumbnail: videoThumbnail,
        downloads: downloads
      };

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

sendReaction("⏳")
let hasil = await twitter(text)
let { title, downloads } = hasil
let capt = `=〆 title:\n`
capt += `${title}`

let leo = {
  video: { url: downloads[0].url },
  caption: `done by: ${botname}`,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `Twdl By: ${ownername}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
},
}
await Yuta.sendMessage(m.chat, leo, { quoted: leogg })
sendReaction("✅")
} catch (err) {
try {
sendReaction("⏳")
const Widipe = await fetchJson(`https://widipe.com/download/twtdl?url=${text}`)

let leo = {
  video: { url: result.url[0].hd },
  caption: `done by: ${botname}`,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `Twdl By: ${ownername}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
},
}
await Yuta.sendMessage(m.chat, leo, { quoted: leogg })
sendReaction("✅")
} catch (e) {
sendReaction("❌")
}}
}
}