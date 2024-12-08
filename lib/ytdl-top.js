 //base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

 const ytdl = require('@distube/ytdl-core');
 const yts = require('youtube-yts');
 const readline = require('readline');
 const ffmpeg = require('fluent-ffmpeg-7')
 const NodeID3 = require('node-id3')
 const fs = require('fs');
 const chalk = require('chalk')
 const { fetchBuffer } = require("./function")
 const ytM = require('node-youtube-music')
 const { randomBytes } = require('crypto')
 const axios = require('axios')
 const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
 
 class YT {
     constructor() { }
 
     /**
      * Checks if it is yt link
      * @param {string|URL} url youtube url
      * @returns Returns true if the given YouTube URL.
      */
     static isYTUrl = (url) => {
         return ytIdRegex.test(url)
     }
 
     /**
      * VideoID from url
      * @param {string|URL} url to get videoID
      * @returns 
      */
     static getVideoID = (url) => {
         if (!this.isYTUrl(url)) throw new Error('is not YouTube URL')
         return ytIdRegex.exec(url)[1]
     }
 
     /**
      * @typedef {Object} IMetadata
      * @property {string} Title track title
      * @property {string} Artist track Artist
      * @property {string} Image track thumbnail url
      * @property {string} Album track album
      * @property {string} Year track release date
      */
 
     /**
      * Write Track Tag Metadata
      * @param {string} filePath 
      * @param {IMetadata} Metadata 
      */
     static WriteTags = async (filePath, Metadata) => {
         NodeID3.write(
             {
                 title: Metadata.Title,
                 artist: Metadata.Artist,
                 originalArtist: Metadata.Artist,
                 image: {
                     mime: 'jpeg',
                     type: {
                         id: 3,
                         name: 'front cover',
                     },
                     imageBuffer: (await fetchBuffer(Metadata.Image)).buffer,
                     description: `Cover of ${Metadata.Title}`,
                 },
                 album: Metadata.Album,
                 year: Metadata.Year || ''
             },
             filePath
         );
     }
 
     /**
      * 
      * @param {string} query 
      * @returns 
      */
     static search = async (query, options = {}) => {
         const search = await yts.search({ query, hl: 'id', gl: 'ID', ...options })
         return search.videos
     }
 
     /**
      * @typedef {Object} TrackSearchResult
      * @property {boolean} isYtMusic is from YT Music search?
      * @property {string} title music title
      * @property {string} artist music artist
      * @property {string} id YouTube ID
      * @property {string} url YouTube URL
      * @property {string} album music album
      * @property {Object} duration music duration {seconds, label}
      * @property {string} image Cover Art
      */
 
     /**
      * search track with details
      * @param {string} query 
      * @returns {Promise<TrackSearchResult[]>}
      */
     static searchTrack = (query) => {
         return new Promise(async (resolve, reject) => {
             try {
                 let ytMusic = await ytM.searchMusics(query);
                 let result = []
                 for (let i = 0; i < ytMusic.length; i++) {
                     result.push({
                         isYtMusic: true,
                         title: `${ytMusic[i].title} - ${ytMusic[i].artists.map(x => x.name).join(' ')}`,
                         artist: ytMusic[i].artists.map(x => x.name).join(' '),
                         id: ytMusic[i].youtubeId,
                         url: 'https://youtu.be/' + ytMusic[i].youtubeId,
                         album: ytMusic[i].album,
                         duration: {
                             seconds: ytMusic[i].duration.totalSeconds,
                             label: ytMusic[i].duration.label
                         },
                         image: ytMusic[i].thumbnailUrl.replace('w120-h120', 'w600-h600')
                     })
                  
                 }
                 resolve(result)
             } catch (error) {
                 reject(error)
             }
         })
     }
 
     /**
      * @typedef {Object} MusicResult
      * @property {TrackSearchResult} meta music meta
      * @property {string} path file path
      */
 
     /**
      * Download music with full tag metadata
      * @param {string|TrackSearchResult[]} query title of track want to download
      * @returns {Promise<MusicResult>} filepath of the result
      */
     static downloadMusic = async (query) => {
         try {
             const getTrack = Array.isArray(query) ? query : await this.searchTrack(query);
             const search = getTrack[0]//await this.searchTrack(query)
             const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + search.id, { lang: 'id' });
             let stream = ytdl(search.id, { filter: 'audioonly', quality: 140 });
             let songPath = `./tmp${randomBytes(3).toString('hex')}.mp3`
             stream.on('error', (err) => console.log(err))
 
             const file = await new Promise((resolve) => {
                 ffmpeg(stream)
                     .audioFrequency(44100)
                     .audioChannels(2)
                     .audioBitrate(128)
                     .audioCodec('libmp3lame')
                     .audioQuality(5)
                     .toFormat('mp3')
                     .save(songPath)
                     .on('end', () => resolve(songPath))
             });
             await this.WriteTags(file, { Title: search.title, Artist: search.artist, Image: search.image, Album: search.album, Year: videoInfo.videoDetails.publishDate.split('-')[0] });
             return {
                 meta: search,
                 path: file,
                 size: fs.statSync(songPath).size
             }
         } catch (error) {
             throw new Error(error)
         }
     }
 
     /**
      * get downloadable video urls
      * @param {string|URL} query videoID or YouTube URL
      * @param {string} quality 
      * @returns
      */
     static mp4 = async (query, quality = 134) => {
         try {
             if (!query) throw new Error('Video ID or YouTube Url is required')
             const videoId = this.isYTUrl(query) ? this.getVideoID(query) : query
             const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + videoId, { lang: 'id' });
             const format = ytdl.chooseFormat(videoInfo.formats, { format: quality, filter: 'videoandaudio' })
             return {
                 title: videoInfo.videoDetails.title,
                 thumb: videoInfo.videoDetails.thumbnails.slice(-1)[0],
                 date: videoInfo.videoDetails.publishDate,
                 duration: videoInfo.videoDetails.lengthSeconds,
                 channel: videoInfo.videoDetails.ownerChannelName,
                 quality: format.qualityLabel,
                 contentLength: format.contentLength,
                 description:videoInfo.videoDetails.description,
                 videoUrl: format.url
             }
         } catch (error) {
             throw error
         }
     }
 
     /**
      * Download YouTube to mp3
      * @param {string|URL} url YouTube link want to download to mp3
      * @param {IMetadata} metadata track metadata
      * @param {boolean} autoWriteTags if set true, it will auto write tags meta following the YouTube info
      * @returns 
      */
     static mp3 = async (url, metadata = {}, autoWriteTags = false) => {
         try {
             if (!url) throw new Error('Video ID or YouTube Url is required')
             url = this.isYTUrl(url) ? 'https://www.youtube.com/watch?v=' + this.getVideoID(url) : url
             const { videoDetails } = await ytdl.getInfo(url, { lang: 'id' });
             let stream = ytdl(url, { filter: 'audioonly', quality: 140 });
             let songPath = `./tmp${randomBytes(3).toString('hex')}.mp3`
 
             let starttime;
             stream.once('response', () => {
                 starttime = Date.now();
             });
             stream.on('progress', (chunkLength, downloaded, total) => {
                 const percent = downloaded / total;
                 const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
                 const estimatedDownloadTime = (downloadedMinutes / percent) - downloadedMinutes;
                 readline.cursorTo(process.stdout, 0);
                 process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
                 process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
                 process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
                 process.stdout.write(`, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `);
                 readline.moveCursor(process.stdout, 0, -1);
                 //let txt = `${bgColor(color('[FFMPEG]]', 'black'), '#38ef7d')} ${color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE')} ${gradient.summer('[Converting..]')} ${gradient.cristal(p.targetSize)} kb`
             });
             stream.on('end', () => process.stdout.write('\n\n'));
             stream.on('error', (err) => console.log(err))
 
             const file = await new Promise((resolve) => {
                 ffmpeg(stream)
                     .audioFrequency(44100)
                     .audioChannels(2)
                     .audioBitrate(128)
                     .audioCodec('libmp3lame')
                     .audioQuality(5)
                     .toFormat('mp3')
                     .save(songPath)
                     .on('end', () => {
                         resolve(songPath)
                     })
             });
             if (Object.keys(metadata).length !== 0) {
                 await this.WriteTags(file, metadata)
             }
             if (autoWriteTags) {
                 await this.WriteTags(file, { Title: videoDetails.title, Album: videoDetails.author.name, Year: videoDetails.publishDate.split('-')[0], Image: videoDetails.thumbnails.slice(-1)[0].url })
             }
             return {
                 meta: {
                     title: videoDetails.title,
                     channel: videoDetails.author.name,
                     seconds: videoDetails.lengthSeconds,
                     image: videoDetails.thumbnails.slice(-1)[0].url
                 },
                 path: file,
                 size: fs.statSync(songPath).size
             }
         } catch (error) {
             throw error
         }
     }
 }
 
 module.exports = YT;



async function ytMp4(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined)
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: resultFix[0].video,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
};

async function ytMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined)
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: resultFix[0].audio,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
}

/*
  Scraper YTDL CJS By NDXZ
  Sumber : https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
  
  Result nya :
  {
    author: 'ndxz',
    status: true,
    mess: 'success',
    result: buffer
  }
*/

function getid(url) {
  let ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
  if (!ytIdRegex.test(url)) throw new Error('is not YouTube URL')
  return ytIdRegex.exec(url)[1];
}

async function buff(url) {
  try {
    const res = await axios({method: "GET",url,responseType: 'arraybuffer'})
    return res.data
  } catch (err) {
    return err
  }
}

let mess = (a,b,c) => {return{author:'ndxz',status:a,mess:c,result:b}}
let BASEURL = 'https://convert.w-ytdl.store/ajax.php'

/*
  BY NDXZ
  
  type = quality
  ==============================
  mp4 = 144, 240, 360, 720, 1080
  mp3 = 128, 320
  
  Post Api
  "videoid=[IDVIDEO]&downtype=[TYPE]&vquality=[QUALITY]"
  
  Example mp3
  "videoid=ug14NO2VbDs&downtype=mp3&vquality=128"
  
  Example mp4
  "videoid=ug14NO2VbDs&downtype=mp4&vquality=360"
*/

async function mp3(url) {
  try {
    return await new Promise(async(rs, rj) => {
      const idvid = getid(url);
      const f = await axios.post(BASEURL,"videoid="+idvid+"&downtype=mp3&vquality=128").then(x => buff(x.data.url))
      rs(mess(true,f,'success'))
    })
  } catch(e) {
    throw "eror"
  }
}

async function mp4(url) {
  try {
    return await new Promise(async(rs, rj) => {
      const idvid = getid(url);
      const f = await axios.post(BASEURL,"videoid="+idvid+"&downtype=mp4&vquality=360").then(x => buff(x.data.url))
      rs(mess(true,f,'success'))
    })
  } catch(e) {
    throw "eror"
  }
}

module.exports = { ytMp4, ytMp3, mp3, mp4 }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})