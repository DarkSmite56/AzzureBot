module.exports = {
type: 'bot',
command: ['ping','serverbot'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, clockString, runtime, readmore, formatp } = context;
const process = require('process')
const { exec, spawn, execSync } = require('child_process');
const child_process = require('child_process')
const os = require('os')
const speed = require('performance-now')
const osu = require('node-os-utils')

if (command === 'ping' || command === 'serverbot') {
    let muptime1;
  if (process.send) {
    process.send("uptime");
    muptime1 =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(muptime1);

  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let ping = neww - oldd

    let dy9 = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks9 = dy9.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let dates9 = dy9.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let times9 = dy9.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
let NotDetect = 'Not Detect'
let netsIn, netsOut
await osu.netstat.inOut().then(info => {
  netsIn = (info.total.inputMb + ' MB'),
  netsOut = (info.total.outputMb + ' MB')
}).catch(() => {
  netsIn = NotDetect,
  netsOut = NotDetect
})
let driveTotal, driveUsed, drivePer
await osu.drive.info().then(info => {
  driveTotal = (info.totalGb + ' GB'),
  driveUsed = info.usedGb,
  drivePer = (info.usedPercentage + '%')
}).catch(() => {
  driveTotal = NotDetect,
  driveUsed = NotDetect,
  drivePer = NotDetect
})

respon = `- *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* -
 〆 sᴇʀᴠᴇʀ: ${runtime(os.uptime())}
 〆 ᴘᴀɴᴇʟ: ${muptime}
 〆 ʙᴏᴛ: ${runtime(process.uptime())}
${readmore}

- *s ᴘ ᴇ ᴇ ᴅ* -
 〆 ${latensi} ᴅᴇᴛɪᴋ
 〆 ${oldd} ᴍɪʟɪᴅᴇᴛɪᴋ
sᴘᴇsɪғɪᴋᴀsɪ ${readmore}

- *ɪ ɴ ғ ᴏ - s ᴇ ʀ ᴠ ᴇ ʀ* -
 〆 *sᴇʀᴠᴇʀ:* ${os.hostname()}
 〆 *ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${osu.cpu.model()}
 〆 *ᴄᴘᴜ ᴄᴏʀᴇ:* ${osu.cpu.count()} Core
 〆 *ᴄᴘᴜ sᴘᴇᴇᴅ:* ${cpu.speed} MHZ
 〆 *ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 〆 *ᴀʀᴄʜɪᴛᴇᴄᴛᴜʀᴇ:* ${os.arch()}
 〆 *ᴏs:* ${osu.os.platform()}
 〆 *ʀᴀᴍ:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
 〆 *ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times9}
 〆 *ʜᴀʀɪ:* ${weeks9}
 〆 *ᴛᴀɴɢɢᴀʟ:* ${dates9}
 〆 *ᴅʀɪᴠᴇ ᴛᴏᴛᴀʟ:* ${driveTotal} GB
 〆 *ᴅʀɪᴠᴇ ᴜsᴇᴅ:* ${driveUsed} GB
 〆 *ᴅʀɪᴠᴇ ᴘᴇʀᴄ:* ${drivePer}

- *${cpus[0] ? `ᴛ ᴏ ᴛ ᴀ ʟ - ᴄ ᴘ ᴜ - ᴜ s ᴀ ɢ ᴇ* -
${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
ᴄᴘᴜ ᴄᴏʀᴇ(s) ᴜsᴀɢᴇ (${cpus.length} ᴄᴏʀᴇ ᴄᴘᴜ)

- *ɴ ᴏ ᴅ ᴇ ᴊ s - ᴍ ᴇ ᴍ ᴏ ʀ ʏ - ᴜ s ᴀ ɢ ᴇ* -
${Object.keys(used).map((key, _, arr) => `- ${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

- *ᴄ ᴘ ᴜ - ᴄ ᴏ ʀ ᴇ* -
${readmore}
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ) ]\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
let leo = {
  text: respon,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnailUrl: ftsc,
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `ᴘ ɪ ɴ ɢ - s ᴄ - ${botname}: ${ping}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: leogg });
}
}
}