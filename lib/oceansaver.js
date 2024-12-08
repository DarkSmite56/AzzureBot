/*
FUNCTION DOWNLOADER YT

format yang tersedia yang bisa dipakai
Audio : mp3, m4a, webm, acc, flac, opus, ogg, wav
Video : 360, 480, 720, 1080, 1440, 4k

*`[ By NDXZ ]`*
https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
*/

const axios = require('axios')
const fs = require('fs');
const chalk = require('chalk')

const extractVID = (url) => {
const id = ((_a = /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm.exec(url)) === null || _a === void 0 ? void 0 : _a[1]) || "";
}

async function dl(url, format) {
    return new Promise(async(resolve, reject) => {
        let vid = encodeURIComponent(extractVID(url))
        let hr = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "Origin": "https://4kdownload.to",
            "Referer": "https://4kdownload.to/envn/youtube-wav-downloader/",
            "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "X-Forward-For": Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
            "User-Agent": `Mozilla/5.0 (Linux; Android 13; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36`
        };

        const dv = await axios.get(`https://ab.cococococ.com/ajax/download.php?copyright=0&format=${format}&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${vid}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`, { headers: hr }
        ).then(x => x.data).catch(e => reject({ status: false, author: 'ndxz', dl: null }))

        if (dv.id) {
            function prog(id) {
                return axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, { headers: hr }).then(t => {
                    let fg = t.data
                    if (fg && fg.stat === 1) {
                        return fg;
                    } else {
                        return false;
                    }
                }).catch (error => {
                    //console.error('Error:', error.res ? error.res.status : error.message);
                    reject({ status: false, author: 'ndxz', dl: null });
                    return null;
                })
            }

            async function getRes(jobId) {
                let stat = false;
                while (!stat) {
                    const res = await prog(jobId);
                    if (res && res.stat !== 0) {
                        if (res.stat === 1) {
                            return res
                            stat = true;
                        } else {
                            stat = false;
                        }
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }
            }
            const res = await getRes(dv.id);
            resolve({ status: true, author: 'ndxz', dl: res.download_url })
        }
    })
}

module.exports = { dl }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})