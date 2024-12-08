module.exports = {
    type: 'search',
    command: ['wattpad'],
    operate: async (context) => {
const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users } = context;

/*
 - Fitur Wattpad
 - Source
 - https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
 -
 - Scrape
 - https://whatsapp.com/channel/0029VavOkL00lwgmRLmffH1i
 -
*/

const axios = require('axios');
const cheerio = require('cheerio');

const wattpad = {
  search: async (query) => {
    const baseUrl = "https://www.wattpad.com";
    const url = `${baseUrl}/search/${query}`;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const results = $("section#section-results-stories article#results-stories ul.list-group li.list-group-item")
      .map((index, element) => ({
        link: baseUrl + $(element).find(".story-card").attr("href"),
        image: $(element).find(".cover img").attr("src"),
        title: $(element).find('.story-info .title[aria-hidden="true"]').first().text().trim(),
        readCount: $(element).find(".new-story-stats .stats-value").eq(0).text(),
        voteCount: $(element).find(".new-story-stats .stats-value").eq(1).text(),
        chapterCount: $(element).find(".new-story-stats .stats-value").eq(2).text(),
        description: $(element).find(".description").text().trim(),
      })).get();
    return results;
  },
  read: async function read(url, page = 1, output = "\n\n", prevTitle = null) {
    const pageURL = `${url}/page/${page}`;
    const response = await fetch(pageURL);
    const html = await response.text();
    const $ = cheerio.load(html);
    const newTitle = $("title").text();

    if (newTitle === prevTitle) {
      const nextURL = $("a.on-navigate.next-up").attr("href");
      if (!nextURL) return output;
      return read(nextURL, 1, output + `\n\n\t${prevTitle}\n`, null);
    }
    $("p").each((index, element) => {
      const paragraph = $(element).text().trim();
      output += `${paragraph}\n`;
    });
    return read(url, page + 1, output, newTitle);
  },
  getList: async function getList(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      const startReadingLink = $("a.read-btn").attr("href");
      const listUrl = "https://www.wattpad.com" + startReadingLink;
      const episode = await wattpad.list(listUrl);
      return episode;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  },
  list: async function list(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);

      const tableOfContents = $('ul.table-of-contents li[class=""]')
        .map((index, element) => ({
          title: $(element).find(".part-title").text().trim(),
          link:
            "https://www.wattpad.com" +
            $(element).find("a.on-navigate").attr("href"),
        }))
        .get();
      return tableOfContents;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },
};

if (!text) return m.reply('masukan nama yang anda mau cari')
let result = await wattpad.search(text)

try {
if (!result || result.length === 0) {
 m.reply('maaf yang anda request tidak dapat di search mungkin gada...')
}

let capt = `⏤͟͟͞͞╳── *[ ᴡᴀᴛᴛᴘᴀᴅ ]* ── .々─ᯤ\n│`
for (let i of result) {
capt += `⏤͟͟͞͞╳── *[ ${i.title} | view ${i.readCount}]* ── .々─ᯤ\n`
capt += `│    =〆 ʟɪɴᴋ: ${i.link}\n`
capt += `⏤͟͟͞͞╳────────── .✦\n\n`
}

await Yuta.sendMessage(m.chat, {
text: capt,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: 'wattpad by: deku',
      mediaType: 1,
      previewType: 1,
      body: 'by: Deku',
      //previewType: "PHOTO",
      thumbnailUrl: 'https://files.catbox.moe/yy0w5l.jpg',
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
     },
      forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `By : ${ownername}`,
 serverMessageId: 143
    }
  }
}, { quoted: leogg })

} catch (err) {
 m.reply('maaf eror kak...')
}

}
}