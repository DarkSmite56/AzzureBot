const canvafy = require('canvafy')

/*
⚡ Spotifydl
📌 Bypass X-Auth-Token dan Authorization
 📦 By NDBZ
  https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
*/

const CryptoJS = require('crypto-js');
const axios = require('axios');
const cheerio = require("cheerio")
const FormData = require("form-data")

const encrypt = (data, key = "neoxr") => {
  try {
    let KEY_SIZE = 256, IV_SIZE = 128, ITERATIONS = 100;

    let salt = CryptoJS.lib.WordArray.random(16);
    let derivedKey = CryptoJS.PBKDF2(key, salt, {
      keySize: KEY_SIZE / 32,
      iterations: ITERATIONS
    });

    let iv = CryptoJS.lib.WordArray.random(IV_SIZE / 8);
    let encrypted = CryptoJS.AES.encrypt(data, derivedKey, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });

    return salt.toString() + iv.toString() + encrypted.toString();
  } catch (e) {
    throw e;
  }
};

async function SpotifyV1(url) {
  try {
    // Validasi URL
    if (!url || !/spotify\.com/.test(url)) {
      throw new Error("Invalid Spotify URL: " + url);
    }

    const userAgent = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36";

    // Fetch token
    const { data: tokenData } = await axios.post("https://api.ssspotify.buzz/v1/token", {}, {
      headers: {
        "User-Agent": userAgent,
        "Referer": "https://ssspotify.buzz"
      }
    });

    if (!tokenData || !tokenData.token) {
      throw new Error("Failed to get token");
    }

    // Encrypt URL
    const encryptedUrl = encrypt(url);

    // Make final request
    const { data } = await axios.post("https://api.ssspotify.buzz/v1/ajax", { q: url }, {
      headers: {
        "User-Agent": userAgent,
        "Referer": "https://ssspotify.buzz",
        "x-api-token": encryptedUrl,
        "Authorization": tokenData.token
      }
    });
    return data;
  } catch (error) {
    console.error("Error in SpotifyV1:", error.message);
    throw error;
  }
}

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ? Scrape
/**
 * Scraped By Kaviaann
 * Protected By MIT LICENSE
 * Whoever caught removing wm will be sued
 * @description Any Request? Contact me : vielynian@gmail.com
 * @author Kaviaann 2024
 * @copyright https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
 */
function spotify(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const a = cheerio.load((yield axios.get("https://spotifymate.com/en", {
                    headers: {
                        cookie: "session_data=o8079end5j9oslm5a7bou84rqc;",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                    },
                })).data);
                const b = {
                    name: a("form#get_video").find('input[type="hidden"]').attr("name") || "",
                    value: a("form#get_video").find('input[type="hidden"]').attr("value") || "",
                };
                const d = new FormData();
                d.append("url", url);
                d.append(b.name, b.value);
                let s = yield axios.post("https://spotifymate.com/action", d, {
                    headers: Object.assign(Object.assign({ origin: "https://spotifymate.com/en" }, d.getHeaders()), { cookie: "session_data=o8079end5j9oslm5a7bou84rqc;", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36" }),
                });
                if (s.statusText !== "OK")
                    return reject("Fail Fetching");
                const c = cheerio.load(s.data);
                const e = {
                    title: c(".dlvideos").find('h3[itemprop="name"]').text().trim(),
                    author: c(".dlvideos")
                        .find(".spotifymate-downloader-middle > p > span")
                        .text()
                        .trim(),
                    thumbnail: c(".dlvideos").find("img").attr("src") || "",
                    cover: c(".dlvideos")
                        .find(".spotifymate-downloader-right")
                        .find("#none")
                        .eq(1)
                        .find("a")
                        .attr("href") ||
                        c(".dlvideos")
                            .find(".spotifymate-downloader-right")
                            .find("#pop")
                            .eq(1)
                            .find("a")
                            .attr("href") ||
                        "",
                    music: c(".dlvideos")
                        .find(".spotifymate-downloader-right")
                        .find("#none")
                        .eq(0)
                        .find("a")
                        .attr("href") ||
                        c(".dlvideos")
                            .find(".spotifymate-downloader-right")
                            .find("#pop")
                            .eq(0)
                            .find("a")
                            .attr("href") ||
                        "",
                    link: url,
                };
                resolve(e);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}


class SpotifyDown {
    constructor() {
        this.api = 'https://spotydown.media/api';
        this.headers = {
            'authority': 'spotydown.media',
            'accept': '*/*',
            'content-type': 'application/json',
            'origin': 'https://spotydown.media',
            'referer': 'https://spotydown.media/',
            'user-agent': 'Postify/1.0.0',
            'x-forwarded-for': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
        };
    }

    async request(endpoint, data) {
        try {
            const response = await axios.post(`${this.api}/${endpoint}`, data, { headers: this.headers });
            return response.data;
        } catch (error) {
            this.err(error);
            throw error; 
        }
    }

    async metadata(link) {
        return this.request('get-metadata', { url: link });
    }

    async downloadTrack(link) {
        return this.request('download-track', { url: link });
    }

    async file(fileUrl) {
        try {
            const response = await axios.get(fileUrl, { headers: this.headers });
            return response.data;
        } catch (error) {
            this.err(error);
            throw error; 
        }
    }

    err(error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
            if (error.response) {
                console.error(error.response.data);
            }
        } else {
            console.error(error);
        }
    }
}


process.env['SPOTIFY_CLIENT_ID'] = '4c4fc8c3496243cbba99b39826e2841f'
process.env['SPOTIFY_CLIENT_SECRET'] = 'd598f89aba0946e2b85fb8aefa9ae4c8'

async function convert(ms) {
      var minutes = Math.floor(ms / 60000)
      var seconds = ((ms % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
   }
   
  async function spotifyCreds() {
      return new Promise(async resolve => {
         try {
            const json = await (await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
               headers: {
                  Authorization: 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
               }
            })).data
            if (!json.access_token) return resolve({
               creator: 'Budy x creator ',
               status: false,
               msg: 'Can\'t generate token!'
            })
            resolve({
               creator: 'Budy x creator ',
               status: true,
               data: json
            })
         } catch (e) {
            resolve({
               creator: 'Budy x creator ',
               status: false,
               msg: e.message
            })
         }
      })
   }
   
   
const getInfo = (url) => {
//  async function getInfo(url) {
      return new Promise(async resolve => {
         try {
            const creds = await spotifyCreds()
            if (!creds.status) return resolve(creds)
            const json = await (await axios.get('https://api.spotify.com/v1/tracks/' + url.split('track/')[1], {
               headers: {
                  Authorization: 'Bearer ' + creds.data.access_token
               }
            })).data
            resolve({
               creator: 'Budy x creator ',
               status: true,
               data: {
                  thumbnail: json.album.images[0].url,
                  title: json.artists[0].name + ' - ' + json.name,
                  artist: json.artists[0],
                  duration: convert(json.duration_ms),
                  preview: json.preview_url
               }
            })
         } catch (e) {
            resolve({
               creator: 'Budy x creator ',
               status: false,
               msg: e.message
            })
         }
      })
  }
   
  const SearchSpotify = (query, type = 'track', limit = 20) => {
//  async function searching(query, type = 'track', limit = 20) {
      return new Promise(async resolve => {
         try {
            const creds = await spotifyCreds()
            if (!creds.status) return resolve(creds)
            const json = await (await axios.get('https://api.spotify.com/v1/search?query=' + query + '&type=' + type + '&offset=0&limit=' + limit, {
               headers: {
                  Authorization: 'Bearer ' + creds.data.access_token
               }
            })).data
            if (!json.tracks.items || json.tracks.items.length < 1) return resolve({
               creator: 'Budy x creator ',
               status: false,
               msg: 'Music not found!'
            })
            let data = []
            json.tracks.items.map(v => data.push({
               title: v.album.artists[0].name + ' - ' + v.name,
               duration: convert(v.duration_ms),
               popularity: v.popularity + '%',
               preview: v.preview_url,
               url: v.external_urls.spotify
            }))
            resolve({
               creator: 'Budy x creator ',
               status: true,
               data
            })
         } catch (e) {
            resolve({
               creator: 'Budy x creator ',
               status: false,
               msg: e.message
            })
         }
      })
   }

async function spotifydl(url) {
//async function spotifydl(url)  {
  return new Promise(async (resolve, reject) => {
    try {
      const yanzz = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const yanz = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${yanzz.data.result.gid}/${yanzz.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = yanzz.data.result.name;
      result.type = yanzz.data.result.type;
      result.artis = yanzz.data.result.artists;
      result.durasi = yanzz.data.result.duration_ms;
      result.image = yanzz.data.result.image;
      result.download = "https://api.fabdl.com" + yanz.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
type: 'download',
command: ['spotify','spotifysearch','spotifys'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;


if (!IsReg) return dftardulu()
if (!text.includes('open.spotify.com')) return replygcyuta('link Spotify?!')
replygcyuta(mess.loading)
sendReaction("⏳")
let search = await SearchSpotify(text)
let g = new SpotifyDown()
let hasil = await SpotifyV1(search[0].url)
let metadatahasil = await g.metadata(text)
let songa = metadatahasil.apiResponse.data[0]

let anuu = `╭──── *[ sᴘᴏᴛɪғʏ - ᴅᴏᴡɴʟᴏᴀᴅ ]* ──々\n`
anuu += `│ =〆 ᴊᴜᴅᴜʟ : ${songd.title}\n`
anuu += `│ =〆 ᴀʀᴛɪs : ${songd.author}\n`
anuu += `│ =〆 ʟɪɴᴋ: ${songd.link}\n`
anuu += `│ =〆 ᴅᴀᴛᴇ: ${songa.releaseDate}\n`
anuu += `│ =〆 ᴅᴜʀᴀsɪ: ${hasil.data.duration}\n`
anuu += `╰─々`
const p = await new canvafy.Spotify()
  .setTitle(songd.title)
  .setAuthor("Spotify Downloader")
  .setTimestamp(40, 100)
  .setOverlayOpacity(0.8)
  .setBorder("#fff", 0.8)
  .setImage(songd.thumbnail)
  .setBlur(3)
  .build();

await Yuta.sendMessage(m.chat, { image: p, caption: anuu }, { quoted: leogg })

try {
replygcyuta(`Sabar Audio Lagi Loading...⏳`)

await Yuta.sendMessage(m.chat, {
    audio: { url: hasil.data.url },
    mimetype:'audio/mpeg',
    contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: hasil.data.title,
      mediaType: 1,
      previewType: 1,
      body: `ᴅᴜʀᴀsɪ | ${hasil.data.duration}`,
      //previewType: "PHOTO",
      thumbnailUrl: hasil.data.thumbnail,
      mediaUrl: songd.link,
      sourceUrl: songd.link,
    }
  }
}, { quoted: leogg })

replygcyuta(`Selesai✅`)
sendReaction("✅")
} catch (e) {
try {
replygcyuta(`Sabar Audio Lagi Loading...⏳`)

await Yuta.sendMessage(m.chat, {
    audio: { url: songd.music },
    mimetype:'audio/mpeg',
    contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: hasil.data.title,
      mediaType: 1,
      previewType: 1,
      body: `ᴅᴜʀᴀsɪ | ${hasil.data.duration}`,
      //previewType: "PHOTO",
      thumbnailUrl: hasil.data.thumbnail,
      mediaUrl: songd.link,
      sourceUrl: songd.link,
    }
  }
}, { quoted: leogg })
replygcyuta(`Selesai✅`)
sendReaction("✅")
} catch (e) {
replygcyuta(`${e}`)
}}
}
}