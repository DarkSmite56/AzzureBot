const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');
const chalk = require('chalk')

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

module.exports = { zerochan }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})