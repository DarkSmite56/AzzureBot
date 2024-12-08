/*
Instagram Downloader
Support All tipe katanya

*`[ By NDXZ ]`*
https://whatsapp.com/channel/0029VaAMjXT4yltWm1NBJV3J
*/

const axios = require('axios')
const fs = require('fs');
const chalk = require('chalk')
const cheerio = require('cheerio')

// Buat Bypass
function ex(h,u,n,t,e,r) {
  let _0xc0e=['','split','0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/','slice','indexOf','','','.','pow','reduce','reverse','0'],_0xe0c=(d,e,f)=>{var g=_0xc0e[2][_0xc0e[1]](_0xc0e[0]),h=g[_0xc0e[3]](0,e),i=g[_0xc0e[3]](0,f),j=d[_0xc0e[1]](_0xc0e[0])[_0xc0e[10]]()[_0xc0e[9]](function(a,b,c){if(h[_0xc0e[4]](b)!==-1)return a+=h[_0xc0e[4]](b)*(Math[_0xc0e[8]](e,c))},0);var k=_0xc0e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f};return k||_0xc0e[11];};r='';for(var i=0,len=h.length;i<len;i++){var s='';while(h[i]!==n[e]){s+=h[i];i++};for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],'g'),j);r+=String.fromCharCode(_0xe0c(s,e,10)-t)};return decodeURIComponent(r)
}

// Buat ekstrak html
function extractHtml(teks) {
  let $ = cheerio.load(teks)
  const results = [];
  $('.download-box li').each((index, element) => {
    const type = $(element).find('.photo-option').length > 0 ? 'image' : 'video';
    const title = $(element).find('.download-items__btn:not(.dl-thumb)').find('a').attr('title');
    const thumbnail = $(element).find('img').attr('src');
    const dl = $(element).find('a').attr('href');
    const data = { type, title, thumbnail, dl };
    if (type === 'image') {
      const resolusi = [];
      $(element).find('.photo-option select option').each((i, option) => {
        resolusi.push({
          size: $(option).text(),
          url: $(option).attr('value')
        });
      });
      data.resolusi = resolusi;
    }
    results.push(data);
  });
  return results
}


async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const dt = new URLSearchParams({ q: url, t: 'media', lang: 'en', v: 'v2' })
    let gg = await axios.post('https://v3.clipdown.app/api/ajaxSearch', dt, {headers:{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
  }).catch(e => reject({ status: false, result: null }))

    let res1 = gg.data.data
    let hasil = {}
    if (!res1.startsWith('<')) {
      let ex1 = res1.match(/\(\"(.*?)\"\,1\,\"a/)[1]
      let ex2 = await ex(ex1, 1, "abcdefghi", 1, 2, 1)
      let ex3 = (ex2.match(/innerHTML\s*=\s*\"(.*?)\";/)[1]).replace(/\\"/g, '"')
      hasil = extractHtml(ex3)
    } else {
      hasil = extractHtml(res1)
    }
    resolve({ status: true, result: hasil })
  })
}

module.exports = { igdl }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})