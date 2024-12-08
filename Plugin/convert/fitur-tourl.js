const axios = require('axios');
const BodyForm = require('form-data');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const fs = require('fs');
const crypto = require('crypto')
const chalk = require('chalk')
const cheerio = require('cheerio');



async function catbox(content) {
  const { ext, mime } = (await fromBuffer(content)) || {};


  const formData = new BodyForm();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  //formData.append("fileToUpload", blob, randomBytes + "." + ext);
  formData.append('fileToUpload', content, { filename: "tmp"+randomBytes + '.' + ext, contentType: mime });

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
      //...formData.getHeaders(),
    },
  });

  return await response.text();
}

async function tmpfiles(buffer) {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new BodyForm();
  form.append("file", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: form.getHeaders(),
    });   
    //console.log(data);  
    const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
    return `https://tmpfiles.org/dl/${match[1]}`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
type: 'convert',
command: ['tourl'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, quoted, sendReaction, limituser, limitAbis, useLimit, IsReg, fetchJson, readmore, mime, users } = context;
    

/*
 - Fungsi Tourl
*/
try {
if (/jpg|jpeg|png/.test(mime)) {
let media = await quoted.download()
let tmphasil = await tmpfiles(media)
let catboxhasil = await catbox(media)
let captionurl = `╭──── *[ 1 ]* ──々\n`
captionurl += `│ =〆 ᴜʀʟ : ${catboxhasil}\n`
captionurl += `╰─々\n\n`
captionurl += `╭──── *[ 2 ]* ──々\n`
captionurl += `│ =〆 ᴜʀʟ : ${tmphasil}\n`
captionurl += `╰─々`
replygcyuta(`${captionurl}`)
} else if (/webp|video|sticker|audio/.test(mime)) {
let media = await quoted.download()
let tmphasil = await tmpfiles(media)
let catboxhasil = await catbox(media)
let captionurl = `╭──── *[ 1 ]* ──々\n`
captionurl += `│ =〆 ᴜʀʟ : ${catboxhasil}\n`
captionurl += `╰─々\n\n`
captionurl += `╭──── *[ 2 ]* ──々\n`
captionurl += `│ =〆 ᴜʀʟ : ${tmphasil}\n`
captionurl += `╰─々`
replygcyuta(`${captionurl}`)
} else {
replygcyuta('Mana Media Nya Kalau Mau Tourl')
}
} catch (e) {
replygcyuta(`result error\n\n${e}`)
}
}
}