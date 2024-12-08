module.exports = {
    type: 'anime',
    command: ['samehadakusrch','samehadakudl','samehadakueps'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, fetchJson, readmore, users, dftardulu } = context;

const axios = require('axios');
const cheerio = require('cheerio');

const samehadaku = {
  searchPage: async (page) => {
    const baseUrl = 'https://samehadaku.email/daftar-anime-2';
    
    if (page > 18) {
      console.error("⛔ Error: page harus 1 sampai 18 saja!");
      return { success: false, message: 'page harus 1 sampai 18 saja!' };
    }

    let url = page === 1 
        ? `${baseUrl}/?title=&status=&type=&order=title`
        : `${baseUrl}/page/${page}/?title&status&type&order=title`;

    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const animeList = [];

      $('.animpost').each((index, element) => {
        const anime = {
          image: $(element).find('.content-thumb img').attr('src'),
          title: $(element).find('.data .title h2').text().trim(),
          rating: $(element).find('.score').text().replace('i', '').trim(),
          description: $(element).find('.stooltip .ttls').text().trim(),
          type: $(element).find('.type').first().text().trim(),
          status: $(element).find('.data .type').text().trim(),
          genres: $(element).find('.stooltip .genres .mta a').map((i, el) => $(el).text().trim()).get(),
          link: $(element).find('.animposx a').attr('href')
        };

        animeList.push(anime);
      });

      return { success: true, data: animeList };
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },

  search: async (query) => {
    const url = 'https://samehadaku.email/?s=' + query;
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const animeList = [];
      $('.animpost').each((index, element) => {
        const anime = {
          image: $(element).find('.content-thumb img').attr('src'),
          title: $(element).find('.data .title h2').text().trim(),
          rating: $(element).find('.score').text().replace('i', '').trim(),
          description: $(element).find('.stooltip .ttls').text().trim(),
          type: $(element).find('.type').first().text().trim(),
          status: $(element).find('.data .type').text().trim(),
          genres: $(element).find('.stooltip .genres .mta a').map((i, el) => $(el).text().trim()).get(),
          link: $(element).find('.animposx a').attr('href')
        };

        animeList.push(anime);
      });
      return { success: true, data: animeList };
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },

  detail: async (animeUrl) => {
    try {
      const response = await axios.get(animeUrl);
      const $ = cheerio.load(response.data);
      const title = $('h1.entry-title').text().trim();
      const image = $('.thumb img').attr('src');
      const rating = $('.rtg span[itemprop="ratingValue"]').text().trim();
      const description = $('.entry-content-single').text().trim();
      const genres = [];
      $('.genre-info a').each((i, el) => {
        genres.push($(el).text().trim());
      });
      const episodes = [];
      $('.lstepsiode.listeps li').each((i, el) => {
        const episodeNumber = $(el).find('.epsright .eps a').text().trim();
        const episodeTitle = $(el).find('.epsleft .lchx a').text().trim();
        const episodeUrl = $(el).find('.epsleft .lchx a').attr('href');
        const episodeDate = $(el).find('.epsleft .date').text().trim();

        episodes.push({
          number: episodeNumber,
          title: episodeTitle,
          url: episodeUrl,
          date: episodeDate
        });
      });

      return {
        title,
        image,
        rating,
        description,
        genres,
        episodes
      };
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },

  download: async (episodeUrl) => {
    try {
      const { data } = await axios.get(episodeUrl);
      const $ = cheerio.load(data);
      const title = $('.entry-title').text().trim();
      const description = $('.entry-content.entry-content-single').text().trim();
      const episodeNumber = $('.epx span[itemprop="episodeNumber"]').text().trim();
      const uploadTime = $('.time-post').text().trim();
      const downloads = [];
      $('.download-eps ul li').each((index, element) => {
        const quality = $(element).find('strong').text().trim();
        const links = $(element).find('span a').map((i, el) => {
          return {
            provider: $(el).text(),
            link: $(el).attr('href')
          };
        }).get();
        downloads.push({ quality, links });
      });

      return {
        title,
        description,
        episode: {
          number: episodeNumber,
          uploadTime
        },
        downloads
      };
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  }
};


if (command === ('samehadakusrch')) {
if (!IsReg) return dftardulu()
if (!text) return replygcyuta('.samehadaku <judul anime mas se?>\n.samehadakueps <link>\n.samehadaku download <link>')
let hasil = await samehadaku.search(text)

let no = 1
let cap = `々──── *[ sᴀᴍᴇʜᴀᴅᴀᴋᴜ - sᴇᴀʀᴄʜ ]* ──々\n\n`
for (let i of hasil.data) {
cap += `╭──── *[ ${no++} ]* ──々\n`
cap += `│ =〆 ᴛɪᴛʟᴇ : ${i.title}\n`
cap += `│ =〆 ʀᴀᴛɪɴɢ : ${i.rating}\n`
cap += `│ =〆 ᴅᴇsᴄ : ${i.description}\n`
cap += `│ =〆 ʟɪɴᴋ : ${i.link}\n`
cap += `╰─々\n\n`
}

let ho = hasil.data[0]
await Yuta.sendMessage(m.chat, {
image: {
url: ho.image
},
caption: cap,
contextInfo: {
  isForwarded: true,
     forwardingScore: 99999,
           forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `SameHadaku By: ${ownername}`
    }
  }
}, { quoted: leogg })

} else if (command === ('samehadakueps')) {

if (!text.includes('samehadaku.email')) return replygcyuta(`• *Example :* .${command} https://samehadaku.email/xxxxxxx`)
let hasil = await samehadaku.detail(text)

let no = 1
let cap = `々──── *[ sᴀᴍᴇʜᴀᴅᴀᴋᴜ - ᴅᴇᴛᴀɪʟ ]* ──々\n\n`
for (let i of hasil.episodes) {
cap += `╭──── *[ ${no++} ]* ──々\n`
cap += `│ =〆 ᴛɪᴛʟᴇ : ${i.title}\n`
cap += `│ =〆 ᴜʀʟ : ${i.url}\n`
cap += `│ =〆 ᴅᴀᴛᴇ : ${i.date}\n`
cap += `╰─々\n\n`
}

await Yuta.sendMessage(m.chat, {
image: {
url: hasil.image
},
caption: cap,
contextInfo: {
  isForwarded: true,
     forwardingScore: 99999,
           forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `SameHadaku By: ${ownername}`
    }
  }
}, { quoted: leogg })

} else if (command === ('samehadakudl')) {
if (!IsReg) return dftardulu()
if (!text.includes('samehadaku.email')) return replygcyuta(`• *Example :* .${command} https://samehadaku.email/xxxxxxx`)
let hasil = await samehadaku.download(text)

let no = 1
let ha = hasil.downloads[9].links

let cap = `╭──── *[ sᴀᴍᴇʜᴀᴅᴀᴋᴜ - ᴅʟ ]* ──々\n`
cap += `│ =〆 ɴᴀᴍᴀ ᴀɴɪᴍᴇ: ${hasil.title}\n`
cap += `╰─々\n\n`
cap += `╭──── *[ ᴅᴏᴡɴʟᴏᴀᴅ ]* ──々\n`
cap += `│ =〆 ɢᴏғɪʟᴇ : ${hasil.downloads[9].links[0].link}\n`
cap += `│ =〆 ᴀᴄᴇғɪʟᴇ : ${hasil.downloads[9].links[2].link}\n`
cap += `│ =〆 ᴍᴇᴅɪᴀғɪʀᴇ : ${hasil.downloads[9].links[4].link}\n`
cap += `│ =〆 ᴠɪᴅʜɪᴅᴇ : ${hasil.downloads[9].links[6].link}\n`
cap += `╰─々`

await Yuta.sendMessage(m.chat, {
text: cap,
contextInfo: {
  isForwarded: true,
     forwardingScore: 99999,
           forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `SameHadaku By: ${ownername}`
    }
  }
}, { quoted: leogg })
}
}
}