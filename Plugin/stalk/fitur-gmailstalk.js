const axios = require('axios');
const yts = require('yt-search');
const cheerio = require('cheerio');

/*
 - Scrape By
 - Source
 - https://whatsapp.com/channel/0029VaiVeWA8vd1HMUcb6k2S
*/
module.exports = {
type: 'stalk',
command: ['gmail','gm','email','em'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users } = context;
const gmailProfile = {
  check: async function(email) {
    try {
      const username = email.split('@')[0];
      const { data } = await axios.post('https://gmail-osint.activetk.jp/', new URLSearchParams({ q: username, domain: 'gmail.com' }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Postify/1.0.0' }
      });
      const $ = cheerio.load(data);
      const text = $('pre').text();
      return {
        photoProfile: this.extract(text, /Custom profile picture !\s*=>\s*(.*)/, 'Tidak ada'),
        email,
        lastEditProfile: this.extract(text, /Last profile edit : (.*)/),
        googleID: this.extract(text, /Gaia ID : (.*)/),
        userTypes: this.extract(text, /User types : (.*)/),
        googleChat: {
          entityType: this.extract(text, /Entity Type : (.*)/),
          customerID: this.extract(text, /Customer ID : (.*)/, 'Tidak ada', true),
        },
        googlePlus: {
          enterpriseUser: this.extract(text, /Entreprise User : (.*)/),
        },
        mapsData: {
          profilePage: this.extract(text, /Profile page : (.*)/),
        },
        ipAddress: text.includes('Your IP has been blocked by Google') ? 'Di blokir oleh Google' : 'Aman',
        calendar: text.includes('No public Google Calendar') ? 'Tidak ada' : 'Ada'
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  extract: function(text, regex, defaultValue = 'Tidak ada', checkNotFound = false) {
    const result = (text.match(regex) || [null, defaultValue])[1].trim();
    return checkNotFound && result === 'Not found.' ? 'Tidak ada' : result;
  }
};

if (!text) return replygcyuta("gmail? nya?")
let hasil = await gmailProfile.check(text)

   let capt = `╭──── *[ sᴛᴀʟᴋ - ᴇᴍᴀɪʟ ]* ──々\n`
   capt += `│ =〆 ᴇᴍᴀɪʟ : ${hasil.email}\n`
   capt += `│ =〆 ɪᴅ : ${hasil.googleID}\n`
   capt += `│ =〆 ᴇᴅɪᴛ ᴘʀᴏғɪʟ : ${hasil.lastEditProfile}\n`
   capt += `│ =〆 ᴇɴᴛɪᴛʏ ᴛʏᴘᴇ : ${hasil.googleChat.entityType}\n`
   capt += `│ =〆 ɪᴘ : ${hasil.ipAddress}\n`
   capt += `│ =〆 ᴄᴀʟᴇɴᴅᴇʀ : ${hasil.calender}\n`
   capt += `│ =〆 ᴍᴀᴘs ᴜʀʟ : ${hasil.mapsData.profilePage}\n`
   capt += `╰─々`

let gmstk = {
    text: capt,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: hasil.mapsData.profilePage,
        title: hasil.email,
        body: `by: ${botname}`,
        sourceUrl: hasil.mapsData.profilePage,
        thumbnailUrl: hasil.photoProfile,
      }
    }
  };
 await Yuta.sendMessage(m.chat, gmstk, { quoted: leogg });
}
}