/*
💥 *COBALT (YOUTUBE DOWNLOADER)*

📝 *MOD* :
- Tanpa Pengaman CF (Cloudflare)
- Unlimited Request 

🧑‍💻 Script Code by Daffa
*/
const yts = require('yt-search');
const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk')

const api = ['https://cobalt.api.timelessnesses.me', 'https://co.eepy.today', 'https://dl.khyernet.xyz'];

const rApi = () => api[Math.floor(Math.random() * api.length)];

const extractID = url => url.match(/(?:youtu\.be\/|youtube\.com\/.*[?&]v=|embed\/|shorts\/)([\w-]{11})/)?.[1];

const mp4 = async (videoId, mode, quality = 720, format = 'mp3') => {
    const response = await axios.post(`${rApi()}/`, {
        url: `https://youtube.com/watch?v=${videoId}`,
        downloadMode: mode,
        videoQuality: mode === 'video' ? quality : 720,
    }, { headers: { accept: 'application/json', 'content-type': 'application/json' } });

    if (response.status !== 200 || !response.data || response.data.status !== 'tunnel') throw new Error('Terjadi kesalahan saat mengambil data');
    return response.data.url;
};

const mp3 = async (videoId, mode, format = 'mp3') => {
    const response = await axios.post(`${rApi()}/`, {
        url: `https://youtube.com/watch?v=${videoId}`,
        downloadMode: mode,
        audioFormat: mode === 'audio' ? format : 'mp3'
    }, { headers: { accept: 'application/json', 'content-type': 'application/json' } });

    if (response.status !== 200 || !response.data || response.data.status !== 'tunnel') throw new Error('Terjadi kesalahan saat mengambil data');
    return response.data.url;
};

const Cobalt = async (input, mode = 'search', options = {}) => {
    const terinput = input.trim();
    if (!terinput) throw new Error('Gak usah bertele tele, tinggal masukin link youtube atau query yang mau dicari ...');

    if (mode === 'search') {
        const { videos } = await yts(terinput);
        return { type: 'search', videos: videos.map(v => ({ title: v.title, id: v.videoId, url: v.url, media: v })) };
    } else {
        const videoId = extractID(terinput);
        if (!videoId) throw new Error('Link youtube nya gak valid...');
        
        const videoData = await yts({ videoId });
        if (!videoData) throw new Error('Video nya gak ada btw 😊');
        
        const download = { ...videoData, mediaUrl: await request(videoId, mode, options.quality, options.format) };
        return { type: 'download', download };
    }
};

module.exports = { Cobalt, mp4, mp3 };

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})