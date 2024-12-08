const axios = require("axios");
const fs = require('fs');
const chalk = require('chalk')
const cheerio = require('cheerio');
const fetch = require('node-fetch')
module.exports = {
type: 'downloader',
command: ['tiktok','tt','tiktokvideo','ttvideo','tiktokmusic','ttmusic','ttslide','tiktokslide','tiktokstalk','ttstalk'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, users, dftardulu } = context;
    
async function dlPanda(url) {
  try {
    const response = await fetch(
        `https://dlpanda.com/id?url=${url}&token=G7eRpMaa`,
      ),
      html = await response.text(),
      $ = cheerio.load(html),
      results = {
        image: [],
        video: [],
      };
    return (
      $(
        "div.hero.col-md-12.col-lg-12.pl-0.pr-0 img, div.hero.col-md-12.col-lg-12.pl-0.pr-0 video",
      ).each(function () {
        const element = $(this),
          isVideo = element.is("video"),
          src = isVideo
            ? element.find("source").attr("src")
            : element.attr("src"),
          fullSrc = src.startsWith("//") ? "https:" + src : src;
        results[isVideo ? "video" : "image"].push({
          src: fullSrc,
          width: element.attr("width"),
          ...(isVideo
            ? {
                type: element.find("source").attr("type"),
                controls: element.attr("controls"),
                style: element.attr("style"),
              }
            : {}),
        });
      }),
      results
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            result: {
            author,
            title,
            url: video || imgLinks,  
            music: audio
          }
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

async function dlv3(url) {
    const urls = { url };
    try {
        const response = await axios.post('https://snaptikapp.me/wp-json/aio-dl/video-data', urls, {
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36',
            }
        });
        const data = response.data;
        const result = {
            data: data,
        };

        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}


const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function dlv4(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}

async function dlv5(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			//jangan hapus wm, ini hann
			function formatDate(n, locale = 'id') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			//jangan hapus wm, ini hannn
			let domain = 'https://www.tikwm.com/api/';
			//jangan hapus wm, ini hann
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			//jangan hapus wm, ini han
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
			   //jangan hapus wm, ini hannn
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
			  //jangan hapus wm, ini hann
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				//jangan hapus wm, ini hannn
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			//jangan hapus wm, ini han
			let json = {
				status: true,
				title: res.title,
				at: formatDate(res.create_time).replace('1970', '').replace(' pukul ',', '),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size: {
				    nowm: res.size,
				    nowm_hd: res.hd_size,
				    wm: res.wm_size,
				},
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}

async function tiktokStalk(user) {
  try {
    const url = await fetch(`https://tiktok.com/@${user}`, {
      headers: {
        'User-Agent': 'PostmanRuntime/7.32.2'
      }
    });
    const html = await url.text();
    const $ = cheerio.load(html);
    const data = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').text();
    const result = JSON.parse(data);
    if (result['__DEFAULT_SCOPE__']['webapp.user-detail'].statusCode !== 0) {
      const ress = {
        status: 'error',
        message: 'User not found!',
      };
      console.log(ress);
      return ress;
    }
    const res = result['__DEFAULT_SCOPE__']['webapp.user-detail']['userInfo'];
    return res;
  } catch (err) {
    console.log(err);
    return String(err);
  }
};

if (command === ('tiktok')
|| command === ('tt')
|| command === ('tiktokvideo')
|| command === ('ttvideo')
|| command === ('tiktokmusic')
|| command === ('ttmusic')) {
if (!IsReg) return dftardulu()
if (!text.includes('tiktok.com')) return replygcyuta('link tiktok?!')
replygcyuta(mess.loading)
sendReaction('⏳');
try {
let result = await dlv5(text)

let slide = result.data.filter(x => x.type == 'photo')
let audio = result.music_info
let nowm = result.data.filter(x => x.type == 'nowatermark')

let capt = `╭──── *[ ɪɴғᴏ - ᴛᴛ ]* ──々\n`
capt += `│ =〆 ᴛɪᴛʟᴇ : ${result.title}\n`
capt += `│ =〆 ɪᴅ : ${result.id}\n`
capt += `│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : ${result.duration}\n`
capt += `│ =〆 ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${result.at}\n`
capt += `│ =〆 ʀᴇɢɪᴏɴ : ${result.region}\n`
capt += `│ =〆 ᴜʀʟ : ${text}\n`
capt += `╰─々\n\n`
capt += `╭──── *[ ɪɴғᴏ - ᴠɪʀᴀʟ ]* ──々\n`
capt += `│ =〆 ᴠɪᴇᴡ : ${result.stats.views}\n`
capt += `│ =〆 ʟɪᴋᴇ : ${result.stats.likes}\n`
capt += `│ =〆 ᴄᴏᴍᴍᴇɴᴛ : ${result.stats.comment}\n`
capt += `│ =〆 sʜᴀʀᴇ : ${result.stats.share}\n`
capt += `│ =〆 ᴅᴏᴡɴʟᴏᴀᴅ : ${result.stats.download}\n`
capt += `╰─々\n\n`
capt += `╭──── *[ ᴘɪʟɪʜ - ᴛʏᴘᴇ ]* ──々\n`
capt += `│ =〆 ᴠɪᴅᴇᴏᴛᴛ\n`
capt += `│ =〆 ɪᴍᴀɢᴇᴛᴛ\n`
capt += `│ =〆 ᴍᴜsɪᴄᴛᴛ\n`
capt += `╰─々`
capt += `ʀᴇᴘʟʏ ᴘᴇsᴀɴ ᴛʀᴜs ᴘɪʟɪʜ`

await Yuta.sendMessage(m.chat, {
text: capt,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: result.author.nickname,
mediaType: 1,
previewType: 1,
body: `ᴅᴜʀᴀᴛɪᴏɴ : ${result.duration} / ɴɪᴄᴋɴᴀᴍᴇ : @${result.author.fullname}`,
thumbnailUrl: result.author.avatar,
renderLargerThumbnail: true,
mediaUrl: text,
sourceUrl: text
},
forwardedNewsletterMessageInfo: {
newsletterJid: saluran,
serverMessageId: -1,
newsletterName: `tiktok by : ${ownername}`
}
}
},{ quoted: leogg });
sendReaction('✅');

let leocap = `╭──── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴛᴛ ]* ──々\n`
leocap += `│ =〆 ᴛɪᴛʟᴇ : ${result.title}\n`
leocap += `│ =〆 ʟɪᴋᴇ : ${result.stats.likes}\n`
leocap += `│ =〆 ᴋᴏᴍᴇɴᴛᴀʀ : ${result.stats.comment}\n`
leocap += `│ =〆 ʙᴀɢɪᴋᴀɴ : ${result.stats.share}\n`
leocap += `│ =〆 ᴠɪᴇᴡᴇʀ𝘴 : ${result.stats.views}\n`
leocap += `│ =〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${result.at}\n`
leocap += `│ =〆 ᴀᴜᴛʜᴏʀ : ${result.author.nickname}\n`
leocap += `│ =〆 ᴀᴜᴛʜᴏʀ_ɴɪᴄᴋ : ${result.author.fullname}\n`
leocap += `│ =〆 ғᴜʟʟɴᴀᴍᴇ : ${result.duration}\n`
leocap += `│ =〆 ʀᴇɢɪᴏɴ : ${result.region}\n`
leocap += `│ =〆 ᴜʀʟ : ${text}\n`
leocap += `╰─々`

let captts = `〆 ᴛɪᴛʟᴇ : ${result.title} 〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${result.at} 〆 ᴜʀʟ : ${text}`
if (nowm.length > 0) {
replygcyuta('kedetek url video')
  await Yuta.sendMessage(m.chat,{video:{url:result.data[0].url},caption:leocap},{quoted:m})
  await Yuta.sendMessage(m.chat,{audio:{url:audio.url},mimetype: 'audio/mpeg'},{quoted: m})
  await sendReaction("✅")
} else {
replygcyuta('kedetek url foto')
  let slide2 = slide.map(z => z.url)
  await Yuta.sendMessage(m.chat, { image: { url: slide[0].url }, caption: captts }, {quoted:m})
  await sendReaction("✅")
  for (let i of slide2) {
    await Yuta.sendFileUrl(m.chat, i, null, '')
    await sleep(1500)
  }
  await Yuta.sendMessage(m.chat,{audio:{url:audio.url},mimetype: 'audio/mpeg'},{quoted:m})
  await sleep(1600)
}
} catch (err) {
 replygcyuta(`${err}`)
}
if (limituser < 1) return limitAbis();
useLimit(1)
} else if (command === ('ttstalk') || command === ('tiktokstalk')) {
let hasil = await tiktokStalk(text)
let { uniqueId, nickname, avatarLarger, avatarMedium, avatarThumb, signature, region, privateAccount } = hasil.user
let { followerCount, followingCount, heart, videoCount, friendCount } = hasil.stats

let leocap = `┏⪻── *[ ᴛ ɪ ᴋ ᴛ ᴏ ᴋ - s ᴛ ᴀ ʟ ᴋ]* ──⪼┓
〆 ɴᴀᴍᴀ : ${nickname}
〆 ɴɪᴄᴋɴᴀᴍᴇ : @${uniqueId}
〆 ᴘᴇɴɢɪᴋᴜᴛ : ${followerCount}
〆 ᴍᴇɴɢɪᴋᴜᴛɪ : ${followingCount}
〆 ʟɪᴋᴇ : ${heart}
〆 ᴛᴏᴛᴀʟ ᴠɪᴅᴇᴏ : ${videoCount}
〆 ᴛᴇᴍᴀɴ : ${friendCount}
〆 ʙɪᴏ : ${signature}
〆 ᴀᴄᴄᴏᴜɴᴛ ᴘʀɪᴠᴀᴛᴇ : ${privateAccount}
〆 ʙᴀʜᴀsᴀ : ${region}
〆 ᴜʀʟ : https://tiktok.com/@${uniqueId}/
┗⪻─────────────────────────⪼┛`;

let leo = {
  image: { url: avatarMedium },
  caption: leocap
 }
await Yuta.sendMessage(m.chat, leo, { quoted: leogg });
}
}
}