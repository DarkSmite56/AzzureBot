/*
 - Ytdl-Core Apikey Nov
 - Source
 - https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
*/

const yts = require('yt-search');
const axios = require('axios')

async function ytdlcore(url) {
   const vidId = ((_a = /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm.exec(url)) === null || _a === void 0 ? void 0 : _a[1]) || "";
   let convert = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
   try {
    const response = await axios.get('https://Api.fdteam.my.id/download/ytmp4-v2?url=' + convert.url, {
       headers: {
       accept: 'application/json', 'content-type': 'application/json'
      }
   })
   
   const hasil = await response.data

      return ({
        Link_Web_Apikey: 'fdteam',
          Result: 'DekuGanz',
            data: {
              title: convert.title,
              videoId: convert.videoId,
            data_ft: {
              Image: convert.image,
              Thumbnail: convert.thumbnail
            },
           Author: convert.author,
           Video: hasil.video_360p.url,
           Audio: hasil.audio.url
       }
   })
  } catch (error) {
  return { Link_Web_Apikey: 'fdteam', Result: 'DekuGanz', data: { message: error.message } }
  }
}

module.exports = { ytdlcore }