// FIX MEDIAFIRE DOWNLOADER by Ainz
// Ambil scrapenya aja kalau pluginsnya ga work di sc kalian

const fetch = require('node-fetch');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');
const path = require('path');
const chalk = require('chalk')

async function mediafiredl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!/https?:\/\/(www\.)?mediafire\.com/.test(url)) {
        return reject(new Error("URL tidak valid untuk MediaFire"));
      }

      const response = await fetch(url);
      if (!response.ok) {
        return reject(new Error("Tidak dapat mengakses halaman MediaFire"));
      }

      const data = await response.text();
      const $ = cheerio.load(data);
      const Url = ($("#downloadButton").attr("href") || "").trim();
      const url2 = ($("#download_link > a.retry").attr("href") || "").trim();
      const $intro = $("div.dl-info > div.intro");
      const filename = $intro.find("div.filename").text().trim();
      const filetype = $intro.find("div.filetype > span").eq(0).text().trim();
      const ext = ((/\.([^.]*)$/.exec(filename) || [])[1] || "bin").trim();
      const $li = $("div.dl-info > ul.details > li");
      const upload_date = $li.eq(1).find("span").text().trim();
      const filesizeH = $li.eq(0).find("span").text().trim();

      const result = {
        url: Url || url2,
        filename,
        filetype,
        ext,
        upload_date,
        filesizeH,
      };

      resolve(result);
    } catch (error) {
      reject(new Error("Gagal mengambil informasi file dari MediaFire"));
    }
  });
}

/*💥 *MEDIAFIRE DOWNLOADER* 

🍑 *MOD*
- Bypass SSL Certificate Validation

🧑‍💻 Script Code by Daffa
*/

const meki = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

const MediaFire = {
    async request(url) {
        try {
            const { data } = await meki.get(url, { headers: { 'User-Agent': 'Postify/1.0.0' } });
            return cheerio.load(data);
        } catch (error) {
            console.error(error.message);
            return null;
        }
    },

    async dl(url) {
        const fileName = path.basename(url);
        const filePath = path.join('Downloads', fileName);

        try {
            const writer = fs.createWriteStream(filePath);
            const response = await meki.get(url, { responseType: 'stream' });
            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    resolve();
                });
                writer.on('error', (error) => {
                    console.error(error.message);
                    reject(error);
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    },

    async detail(url) {
        const $ = await this.request(url);
        if (!$) return {};

        const downloadLink = $('#download_link a.input.popsok').attr('href');
        const result = {
            fileName: $('.dl-btn-label').text().trim(),
            downloadLink: downloadLink.startsWith('//') ? `https:${downloadLink}` : downloadLink,
            fileSize: $('.dl-info .details li').first().find('span').text().trim(),
            uploadedDate: $('.dl-info .details li').last().find('span').text().trim(),
            mimetype: $('.dl-btn-cont .icon').attr('class')?.split(' ')[1] || 'Gak tau',
        };
        return result; 
    },
};

module.exports = { MediaFire, mediafiredl };

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})