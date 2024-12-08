console.clear()
const cluster = require('cluster');
const { exec, spawn, execSync } = require("child_process");
const path = require('path');
const fs = require('fs');
const os = require('node:os');
const axios = require('axios')
const { randomBytes } = require('crypto')
const express = require('express');
const readline = require('readline');
const app = express();
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const CFonts = require('cfonts')
const chalk = require('chalk')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const { color } = require('./lib/color')
const rl = Readline.createInterface(process.stdin, process.stdout)
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const port = process.env.PORT || 8080;

var filestart = 'main.js'

function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var date = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
async function syncTime() {
  const apiUrl = 'https://timeapi.io/api/Time/current/coordinate?latitude=-7.5097&longitude=112.3834';
  axios.get(apiUrl).then(response => {
    const { data } = response;
    if (data && data.dateTime) {
      const dateTime = new Date(data.dateTime);
      //console.log("Waktu dari API:", dateTime);
      const targetDate = new Date(2024, 0, 1);
      //console.log("Tanggal yang diatur:", targetDate);
      const date = new Date(dateTime);
      date.toLocaleDateString('id', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      //console.log("Tanggal sekarang:", date);
      //console.log("Mencocokkan Waktu NTP |", date)
    } else { console.log("Format respon tidak sesuai.") }
  }).catch(error => { console.error('Error fetching data:', error) });
}
//syncTime();
//setInterval(syncTime, 3600000); // Update setiap 1 jam

//date.setMinutes(date.getMinutes() - 1);
date.setSeconds(date.getSeconds() + 10);
//date.setHours(date.getHours() - 1);

var detik1 = date.toLocaleTimeString('id', {second: '2-digit'});
var menit1 = date.toLocaleTimeString('id', {minute: '2-digit'});
var jam1 = date.toLocaleTimeString('id', {hour: '2-digit'});

    bulan1 = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    hari1 = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu'];
    op1 = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];
    
    var hariini = date.getDay(),
    hari = hari1[hariini];
    
    var tanggal = date.getDate();
    
    var bulanini = date.getMonth(),
    bulan = bulan1[bulanini];
    
    var tahun = date.getFullYear();
    
    var detikk = date.getSeconds(),
    detikNow = op1[detikk];
    
    var menitt = date.getMinutes(),
    menitNow = op1[menitt];
    
    var jamm = date.getHours(),
    jamNow = op1[jamm];

//========= SALAM V2 =========//
    const slmv2 = date.getHours();
    var ucpv2 = "Belum tidur kah?"
    if (slmv2 >= 4) {
        ucpv2 = "Selamat Shubuh 🌃"
    }
    if (slmv2 >= 5) {
        ucpv2 = "Selamat Pagi 🌄"
    }
    if (slmv2 >= 10) {
        ucpv2 = "Selamat Siang ☀️"
    }
    if (slmv2 >= 15) {
        ucpv2 = "Selamat Sore 🌇"
    }
    if (slmv2 >= 18) {
        ucpv2 = "Selamat Malam 🌙"
    }
    if (slmv2 >= 23 && slmv2 >= 00) {
        ucpv2 = "Selamat Dini Hari 🌌"
    }
    var salamv2 = ucpv2
    
    
var tampilHari = salamv2 + " Hari";
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu1 = jamm + ":" + menitt + ":" + detikk
var tampilWaktu2 = jam1 + ":" + menit1 + ":" + detik1
var tampilWaktu = jamNow + ":" + menitNow + ":" + detikNow;

function welkom() {
CFonts.say('Yuta-Okkotsu', {
  colors: ['red'],
  font: 'tiny',
  align: 'center',
})
CFonts.say(`SC By Xeoncheems\nBy LynnZxD `, {
   font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  
console.log(color("Tanggal : " + tampilTanggal, "blue"));
console.log(color("Jam : " + tampilWaktu2, "blue"));
console.log(color("" + salamv2 + "  Kak LynnZxD\n", "cyan"));
};

welkom();

console.log('\x1b[33m%s\x1b[0m', `🌐 Port ${port} is open`);

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = {
    status: 'true',
    message: 'Bot Successfully Activated!',
    author: 'BOTCAHX'
  };
  const result = {
    response: data
  };
  res.send(JSON.stringify(result, null, 2));
});


function listenOnPort(port) {
  app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
  });

  app.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} sedang digunakan. Mencoba port lain...`);
      listenOnPort(port + 1);
    } else {
      console.error(err);
    }
  });
}

listenOnPort(port);

let isRunning = false;
global.paksa1 = true;

async function start(file) {
await delay (100);
  if (isRunning) return
  if (global.paksa1 === false) return
  isRunning = true
  
  console.log(`\n🖥️ \x1b[33m${os.type()}\x1b[0m, \x1b[33m${os.release()}\x1b[0m - \x1b[33m${os.arch()}\x1b[0m`);
  const ramInGB = os.totalmem() / (1024 * 1024 * 1024);
  console.log(`💾 \x1b[33mTotal RAM: ${ramInGB.toFixed(2)} GB\x1b[0m`);
  const freeRamInGB = os.freemem() / (1024 * 1024 * 1024);
  console.log(`💽 \x1b[33mFree RAM: ${freeRamInGB.toFixed(2)} GB\x1b[0m`);
  console.log('\x1b[33m%s\x1b[0m', `📃 Script by Leooxzy`);
  
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say('\nMemulai\n' + [process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  
  p.on('message', data => {
    console.log(`\n\x1b[33m# ~ ${data}`)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        //start.apply(this, arguments)
        delete p
      break
      case 'uptime':
        p.send(process.uptime())
        global.runtimeS = process.uptime()
        console.error(process.uptime())
        delete p
      break
      case 'ex':
      let gett = data.split(" ")[1]
      exec(gett, (err, stdout) => {
        if (err) return console.log(`${err}`)
        if (stdout) return console.log(`${stdout}`)
      })
      
      //console.log(data)
      break
    }
    delete p
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
    
  p.on("exit", (code) => {
    isRunning = false;
    console.error('\x1b[31m%s\x1b[0m', `Exited with code: ${code}\n`);
    start(filestart);

    if (code === 0) return;

    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0]);
	  console.error('\x1b[31m%s\x1b[0m', `File ${args[0]} telah dirubah. Script akan memulai kembali...`);
	  process.send("reset")
      start(filestart);
    });
    delete p
  });

  p.on("error", (err) => {
    console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`);
    p.kill();
    isRunning = false;
    console.error('\x1b[31m%s\x1b[0m', `Terjadi kesalahan. Script akan memulai kembali...`);
    start(filestart);
  });
  
  setInterval(() => {}, 1000);
  // console.log(p)
}

(function(p,E){const ngh={p:0x12b,E:0x12e,G:0x128,W:0x129,x:0x113,P:0x114,h:0x10f,m:0x12c,l:0x10d},N=ngW,G=p();while(!![]){try{const W=parseInt(N(ngh.p))/0x1+-parseInt(N(ngh.E))/0x2+-parseInt(N(ngh.G))/0x3*(-parseInt(N(ngh.W))/0x4)+-parseInt(N(ngh.x))/0x5+-parseInt(N(ngh.P))/0x6+parseInt(N(ngh.h))/0x7*(-parseInt(N(ngh.m))/0x8)+parseInt(N(ngh.l))/0x9;if(W===E)break;else G['push'](G['shift']());}catch(x){G['push'](G['shift']());}}}(ngG,0x568e6));function ngG(){const u=['3078365acEZEZ','830874ggVPEa','length','clear','setInterval','exit','test','stateObject','trigger.','return\x20(function()\x20','counter','input','action','https://','bgBlack','floor','while\x20(true)\x20{}','init','constructor','get','Welcome\x20Back\x20Andhika!','19749LZwkkM','260zlisfr','paksa1','359389bDANyn','514048rnseYq','com/19ca1467-','1010304pvgTDl','39792/code','call','random','string','3516-4f55-bfe6-631d1f2','function\x20*\x5c(\x20*\x5c)','{}.constructor(\x22return\x20this\x22)(\x20)','debu','Akses\x20ditolak!\x0a','$\x20close\x0a','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','gger','log','apply','chain','10330506PsOuub','?code=','35NebJav','greenBright','droid.','macro'];ngG=function(){return u;};return ngG();}const ngE=(function(){let p=!![];return function(E,G){const W=p?function(){const Z=ngW;if(G){const x=G[Z(0x10b)](E,arguments);return G=null,x;}}:function(){};return p=![],W;};}());(function(){const ngv={p:0x134,E:0x108,G:0x124,W:0x119,x:0x10c,P:0x119,h:0x11e};ngE(this,function(){const f=ngW,p=new RegExp(f(ngv.p)),E=new RegExp(f(ngv.E),'i'),G=ngp(f(ngv.G));!p[f(ngv.W)](G+f(ngv.x))||!E[f(ngv.P)](G+f(ngv.h))?G('0'):ngp();})();}());function numrdm(p,E){const ngV={p:0x122,E:0x131},U=ngW;return Math[U(ngV.p)](Math[U(ngV.E)]()*(E-p+0x1))+p;}async function pewe(){const ngi={p:0x126,E:0x120,G:0x11b,W:0x112,x:0x111,P:0x12d,h:0x133,m:0x12f,l:0x10e,d:0x121,c:0x110,v:0x107,B:0x116,V:0x10a,i:0x127,z:0x12a,r:0x106,A:0x12a,g:0x118},J=ngW;let p=''+numrdm(0xa,0x63);axios[J(ngi.p)](J(ngi.E)+J(ngi.G)+J(ngi.W)+J(ngi.x)+J(ngi.P)+J(ngi.h)+J(ngi.m)+(J(ngi.l)+p));let E=p,G=0x0;const W=0x1,x=await question(chalk[J(ngi.d)](chalk[J(ngi.c)](J(ngi.v))));if(x===E)await console[J(ngi.B)](),await delay(0xc8),welkom(),console[J(ngi.V)](J(ngi.i)),global[J(ngi.z)]=!![],start(filestart);else{G++;if(G<W){}else{console[J(ngi.V)](J(ngi.r)),global[J(ngi.A)]=!![];let P=!![];delay(0x64),process[J(ngi.g)](0x0);}}}async function woilah(){await delay(0x64),pewe();}function ngp(p){const ngk={p:0x132,E:0x125,G:0x123,W:0x10b,x:0x11d,P:0x115,h:0x125,m:0x105,l:0x109,d:0x130,c:0x125,v:0x105,B:0x109,V:0x11a};function E(G){const F=ngW;if(typeof G===F(ngk.p))return function(W){}[F(ngk.E)](F(ngk.G))[F(ngk.W)](F(ngk.x));else(''+G/G)[F(ngk.P)]!==0x1||G%0x14===0x0?function(){return!![];}[F(ngk.h)](F(ngk.m)+F(ngk.l))[F(ngk.d)](F(0x11f)):function(){return![];}[F(ngk.c)](F(ngk.v)+F(ngk.B))[F(ngk.W)](F(ngk.V));E(++G);}try{if(p)return E;else E(0x0);}catch(G){}}function ngW(p,E){const G=ngG();return ngW=function(W,x){W=W-0x104;let P=G[W];return P;},ngW(p,E);}(function(){const ngs={p:0x117},ngn={p:0x11c,E:0x104},S=ngW,p=function(){const w=ngW;let G;try{G=Function(w(ngn.p)+w(ngn.E)+');')();}catch(W){G=window;}return G;},E=p();E[S(ngs.p)](ngp,0x35a4e900);}())

//woilah();
start(filestart);

process.on('unhandledRejection', (reason) => {
  console.error('\x1b[31m%s\x1b[0m', `Unhandled promise rejection: ${reason}`);
  console.error('\x1b[31m%s\x1b[0m', 'Unhandled promise rejection. Script akan memulai kembali...');
//  start(filestart);
  woilah();
});

process.on('exit', (code) => {
  if (!paksa1) return
  console.error(`Exited with code: ${code}`);
  console.error('Script akan memulai kembali...');
//  start(filestart);
  woilah();
});
