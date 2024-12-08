/*💥 *AIO DOWNLOADER*

🍑 *MOD* :
- Bypass Token
- Bypass Hash
- Bypass Limit Request ke API (Unlimited)

🧑‍💻 Script Code by Daffa*/


const axios = require('axios')
const { JSDOM } = require('jsdom')
const yts = require("yt-search")
const cheerio = require('cheerio')

class AioDown {
    constructor() {
        this.url = 'https://aiodown.com/wp-json/aio-dl/video-data/';
        this.headers = {
            'accept': '*/*',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://aiodown.com',
            'referer': 'https://aiodown.com/',
            'user-agent': 'Postify/1.0.0',
            'X-Forwarded-For': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
        };
        this.cookies = '';
    }

    async fetchToken() {
        try {
            const response = await axios.get('https://aiodown.com');
            const dom = new JSDOM(response.data);
            const tokenElement = dom.window.document.getElementById('token');
            if (tokenElement) {
                return tokenElement.value;
            } else {
                throw new Error('Gak nemu token nya 😂');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    bypassHash(url, additional) {
        return btoa(url) + (url.length + 1000) + btoa(additional);
    }

    async fetch(videoUrl) {
        const maxRetries = 5;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                const token = await this.fetchToken();
                const hash = this.bypassHash(videoUrl, 'aio-dl');

                const response = await axios.post(this.url, new URLSearchParams({
                    url: videoUrl,
                    token: token,
                    hash: hash,
                }), {
                    headers: {
                        ...this.headers,
                        'cookie': this.cookies,
                    },
                });

                const setKukis = response.headers['set-cookie'];
                if (setKukis) {
                    this.cookies = setKukis.join('; ');
                }

                return response.data;
            } catch (error) {
                if (error.response && error.response.data && error.response.data.error && error.response.data.error.includes("Rate limit exceeded")) {
                    console.log(`Limit Requesr ke API nya udah habis woy 😂 tapi nyoba ulang bisa kali yak `);
                    retryCount++;
                } else {
                    console.error(error.response ? error.response.data : error.message);
                    throw error;
                }
            }
        }

        throw new Error('Dah gak kuat, terlalu banyak request lu 😂');
    }

    selectQuality(medias, qualityNa) {
        const media = medias.find(media => media.quality === qualityNa);
        return media ? media.url : null;
    }

    async getLinks(videoUrl, qualityNa) {
        const data = await this.fetch(videoUrl);
        console.log(data);

        const mediaUrls = data.medias.map(media => ({
            quality: media.quality,
            url: media.url,
        }));

        const links = this.selectQuality(mediaUrls, qualityNa);
        return { mediaUrls, links }
    }
}

class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error);
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error);
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            downloadLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                if (linkUrl !== 'javascript:void(0);') {
                    result.downloadLinks.push({
                        quality: $(linkElement).find('span').text(),
                        url: linkUrl
                    });
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

/*💥 *COBALT (YOUTUBE DOWNLOADER)*

📝 *MOD* :
- Tanpa Pengaman CF (Cloudflare)
- Unlimited Request 

🧑‍💻 Script Code by Daffa
*/

const api = [
    'https://cobalt.api.timelessnesses.me',
    'https://co.eepy.today',
    'https://dl.khyernet.xyz'
];

const rApi = () => api[Math.floor(Math.random() * api.length)];

const extractID = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:\S*?[?&]v=)|v\/|e\/|u\/\w+\/|embed\/|shorts\/)([\w-]{11})/);
    return match ? match[1] : null;
};

const DlCobalt = async (videoId, downloadMode, quality = 720, format = 'mp3') => {
    const apiUrl = rApi();
    const payload = {
        url: `https://youtube.com/watch?v=${extractID}`,
        downloadMode
    };
    if (downloadMode === 'video') payload.videoQuality = quality;
    if (downloadMode === 'audio') payload.audioFormat = format;

    const response = await axios.post(`${apiUrl}/`, payload, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        }
    });

    if (response.status !== 200 || !response.data || response.data.status !== 'tunnel') {
        throw new Error('Terjadi kesalahan saat mengambil data 😮‍💨');
    }
    return response.data.url;
};

const CobaltClone = async (input, mode = 'search', options = {}) => {
    try {
        const terinput = input.trim();
        if (!terinput) throw new Error('Gak usah bertele tele, tinggal masukin link youtube atau query yang mau dicari .. ');

        if (mode === 'search') {
            const searchResults = await yts(terinput);
            const videos = searchResults.videos;

            return {
                type: 'search',
                videos: videos.map(v => ({
                    title: v.title,
                    id: v.videoId,
                    url: v.url,
                    media: { thumbnail: v.thumbnail, image: v.image },
                }))
            };
        } else {
            const videoId = extractID(terinput);
            if (!videoId) throw new Error('Link youtube nya gak valid...');

            const videoData = await yts({ videoId: videoId });
            console.log(videoData);
            if (!videoData) {
                throw new Error('Video nya gak ada btw 😊');
            }

            const video = videoData;
            console.log(video);
            const { title, description, thumbnail, image, seconds, views, author, url } = video;

            let download = {
                title,
                description,
                url,
                media: { thumbnail, image },
                duration: seconds,
                views,
                author
            };

            if (mode === 'video') {
                const videoUrl = await request(videoId, 'video', options.quality || 720);
                download.videoUrl = videoUrl;
            } else if (mode === 'audio') {
                const audioUrl = await request(videoId, 'audio', '1440p', options.format || 'mp3');
                download.audioUrl = audioUrl;
            }

            return {
                type: 'download',
                download,
            };
        }
    } catch (err) {
        console.error(err.message);
        throw err;
    }
};

module.exports = { AioDown, RetaTube, CobaltClone, DlCobalt }

const fs = require("fs")
const chalk = require('chalk')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})