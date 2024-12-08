require('./settings')
const makeWASocket = require("@whiskeysockets/baileys").default
const { uncache, nocache } = require('./lib/loader')
const { color } = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { webp2mp4 } = require('./lib/function')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const {
	default: WAConnection,
	BufferJSON,
	PHONENUMBER_MCC,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateWAMessage,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    makeCacheableSignalKeyStore,
    getAggregateVotesInPollMessage,
    proto,
    Browsers
} = require("@whiskeysockets/baileys")
const gradient = require('gradient-string');

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`./database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    groups: {},
    database: {},
    settings: {},
    users: {},
    chats: {},
    groups: {},
    game: {},
    setting: {},
    sticker: {},
    others: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

require('./YutaBotz.js')
nocache('../YutaBotz.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

//------------------------------------------------------
let phoneNumber = "6285179836603"
let owner = JSON.parse(fs.readFileSync('./src/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startYuta() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const { state, saveCreds } =await useMultiFileAuthState(`./${sessionName}`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const Yuta = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
      browser: Browsers.windows('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
           patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
      getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Cheems Bot Here!"
            }
        },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })

   
   store.bind(Yuta.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !Yuta.authState.creds.registered) {
      if (!nopairing) {
        console.log('Harap masukkan nomer yang mau di pairing di settings.js')
      }
      setTimeout(async () => {
         let code = await Yuta.requestPairingCode(nopairing)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Selamat Datang Ke Script: 𝙰𝚣𝚞𝚛𝚎𝙱𝚘𝚝 𝙱𝚢: 𝙵𝚞𝚛𝚉`)))
         console.log(color(`Code Pairing Kamu: ${code}`,'green'))
      }, 3000)
   }
/*
   if (pairingCode && !Yuta.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await Yuta.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
*/

Yuta.ev.on('connection.update', async (update) => {
	const {
        
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startYuta()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startYuta();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startYuta();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startYuta()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				startYuta();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startYuta();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startYuta();
			} else {
			  console.log(`Unknown DisconnectReason: ${reason}|${connection}`)
			  startYuta();
			}
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
      console.log(gradient.rainbow(`
****+++++++**%%%%%%%%%@%%%%%%%%%%%%%%%%%%%%%%@@%%%%%%%%#*%%%%%%%%#+++++++++++++++++++++++++++++++
+*%%%##*#%%%%%%%%%%%%%@@@@@@%%%%%%%%%%@%%%%%%%@@%%%%%%%%%%%%%%%%%%*++++++++++++++++++++++++++++++
+++%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@%%%%%%@@@@%%%%%@%%%%%%%%%%%%%%%%%%#+++++++++++++++++++++++++++++
++++#%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@%%%%%%%%%%%%%%%%%@%%%+++++++++++++++++++++++++++++
==+*%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@%%%%%%%%%%%%%@@@%#=============================
=====+#%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%@@@@@%+=============================
======*%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@@@@@@@#+%%%%%+=======================
=====%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%@@@%%%%%%%%%%%#+===================
===+%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%@@@@@%%%%======================
===%%%###%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%@%%*========================
==#+=+%%%%%%%%@%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%+====+==================
===+%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%#++*%+==============
===%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@%%%%%%%%%@@@%%%%%%%%%%%%%%%%%@@===============
++%%%%%%%%%%@@%@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@%%@%%%%%%%%%%%%%%%%%%%%%@@@+=======+*##+---
%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@%@@@%%%%%%%%%%%%%@@@@@@#==+#%%=-+%#=---=*
%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%@#=---*%%*--*%*--=*#*#
%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@%%@@%%%%%%%+-=+%%=--##=--#@@@@@
%%%%%%%%@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@%@@%@@@@@@@@%%%+%%=--#%+-+@@@@@@@
%%%%%%%@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%=--#%+-*@@@@@@@@
@@@@@@@@@@@@@%%@@@@@@@@@@@@@@@%@@@@@@@@@@@###@@@@@%%@@@%%@@@@@@@@@@@@@@@@@@@@@@%%+-#%*=*@@@@@@@@@
@@@@@@@@@@@@@@%@@@@@@@@@@@%@@%%@@@@@@@@@@%##%@%@@@###@@%%@@@@@@@@@@@@@@@@@@@@@@@%**@%*#@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@%%@@%%@@@@@@@@@@%#+###%%@@@@@@@%@@#@@@@@@@@@%@@@@%###@@@*%@#*%@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@%####%%##%@@@@@@@%*==#%*+%@@#=--=#@%+*@@@@@@@%++@@@@%#%@%#%@@#*@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@###*+#%%*+*#%@@@@@@==++---%@@*+-----%=+@@@@%#@%+*@@@@@@@@%**@@**@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@%#@%*+++%@@@*+*#@%@@@%=------#%#------*==@@@#*###+@@@@@@@@@#**%@#*%@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@%%+-----*@@+---*%+##*=+---------------#==%#+-*##=@@@@%**#%@%**#@%**#@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@*-------*%%=--=----=+--------------==---=--=*#+%@@@@%**#@%%***%@#***%%@@@@@@
@@@@@@@@@@@@@@@@@@@@@*----------------=------=-+++++=---=------==-==@@#+++==+@@@%***%@#********#@
@@@@@@@@@@@@@@@@*%@@%%+---------==--=##+---------------=--=----=*+==========+%@#+=+#%@@%*****#@@@
@@@@@@@@@@@@@@@@@++%@++#===++=------+++=-----------------=-++================%#+===+%@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@**%+=------------=*++++==------------=+====================*=====*+*@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@%+=------------+++#####++++=-----+++=============================+%@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@%=-=-------=*+*+###@%%###*+*+*=================++===++========+%@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%=-------+%%+**#######*+===================+****#########**++*@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@=-----++++++*##*=====================+**#####################%%@@%@@@@@@@
@@@@@@@@@@@@@@@@@@@%@@@@#*-=+*+*%**+======================**#######%%@##########**#####%%%@@@@@@@
%%%%%%%%%%%%%######%@@@#+**+**+%+=====================+*########%@@@%########++*#######%%%@@@@@@@
%%%%%%%%###%#%**+++++++*++=====+===================+*#######%@%@@@@@%####*+++*########%%%%@@@@@@@
%%%%#*++++++*+++++++++++++============+===++===++########%@@@%#@@@@@%##++=+*#######%%%%%%%@@@@@@@
#%*++++++++++++++++++++++++==+===++=+========+########%@@@@@@%#%@@@%*++++*#######++%%%%%%%%@@@@@@
###++++++++++++++++++++++++++++++++++++++++########@@@@@@@@@@%##%%+++++*#######+++*%%%%%%%%@@@@@@
%%%#+++++++++++++++++++++++++++++++++++*########%####%@@@@@@@%%*++++++#####**+++++@%%%%%%%%@@@@@@
%%%%+++++++++++++++++++++++++++++++*#######%%%#######%%@@@@%#+++++++*####+*++++++*@%%%%%%%%%@@@@@
%%%%%*++++*******************#########################%%%%*+++++++*###*++*+++++*#@@@%%%%%%%@@@@@@
%%%%%%##################################################+++++++++*#*+++*+++++++#@@@@%%%%%%@@@@@@@
++*******%#####%%%%@@@@%%%%%%%######################*+++++++++++**++++*++++++*%@@@@@@%%%@@@@@@@@@
***######%#####%#%%%%%%%%%%%###################%#*+++++++**+++++++++*+++++++*%%@@@@@@@@@@@@@@@@@@
#####%*******######%%%#################%%%##***+++++++++++++++++++***++++**%#%@@@@@@@@@@@@@@@@@@@
%%%%%#**************************************+++******************#*******####%@@@@@@@@@@@@@@@@@@@
%%%%%%***#%##*********************************************************#%%####%@@@@@@@@@@@@@@@@@@@
%%%%%%%##***********************************************************#%%######%@@@@@@@@@@@@@@@@@@@
%###**************************************************************%%%%########%@@@@@@@@@@@@@@@@@@
#****************************************************#********#####%#%######%#%@@@@@@@@@@@@@@@@


\nWait a moment, the bot will connect. Please wait a moment. [ ! ]\n`))
      console.log(gradient.rainbow(`\n\nconnection ! !\nNama Owner : ${ownername}\nTiktok Owner : ${tiktokname}\nName Bot : ${botname}\n𝚂𝚌 𝙱𝚢 : 𝙵𝚞𝚛𝚉`))
  }
  if (update.connection == "open" || update.receivedPendingNotifications == "true") {
console.log(gradient.rainbow(`\nconnected [ ! ]`))
if (global.pesanon) {
let leo = {
  text: `Bot Wa ${botname} Successfult On✅`,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `〆 ʙʀᴏᴀᴅᴄᴀsᴛ ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Bot Online By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(creator, leo, { });
}
}
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startYuta();
	}
})
Yuta.ev.on('creds.update', saveCreds)
Yuta.ev.on("messages.upsert",  () => { })
//------------------------------------------------------
setInterval(async () => {
  fs.readdir(`${sessionName}`, async function (err, files) {
    if (err) {
      console.log('Unable to scan directory\n' + err);
    }
    let filteredArray = await files.filter(item => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-"))
  //console.log(filteredArray.length);
    if(filteredArray.length == 0) return
    await filteredArray.forEach(function (file) {
      fs.unlinkSync(`./${sessionName}/${file}`)
    });
let leo = {
  text: `Menghapus ${filteredArray.length} file sampah session\nTimeout 10 hours`,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `〆 ʙʀᴏᴀᴅᴄᴀsᴛ ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Delsesi By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(jidgroupnotif, leo, { });
let leo2 = {
  text: `Menghapus ${filteredArray.length} file sampah session\nTimeout 10 hours`,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `〆 ʙʀᴏᴀᴅᴄᴀsᴛ ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Delsesi By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(jidgroup, leo2, { });
  });
}, 36000000)

//farewell/welcome
    Yuta.ev.on('group-participants.update', async (anu) => {
if (global.welcome){
console.log(anu)
try {
let metadata = await Yuta.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Yuta.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Yuta.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
YutaWlcm = await getBuffer(ppuser)
YutaLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let YutaName = num
                const ytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const ydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const ymembers = metadata.participants.length
const messa = await prepareWAMessageMedia({ image: YutaWlcm }, { upload: Yuta.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "",
"title": `Welcome @${m.sender.split("@")[0]}`,
"description": `SCRIPT BOT WHATSAPP MULTIDEVICE`,
"currencyCode": "IDR",
"message": "𝙰𝚣𝚞𝚛𝚎 - 𝙵𝚞𝚛𝚉", 
"bodyText": `𝙵𝚞𝚛𝚉`,
"footerText": `𝙵𝚞𝚛𝚉`,
"priceAmount1000": "20000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "80000",
"retailerId": `𝙵𝚞𝚛𝚉`,
"url": "wa.me/628971507809"
},
"businessOwnerJid": "628971507809@s.whatsapp.net",
"contextInfo": {isForwarded: true, mentionedJid: [num]}
},
}), { userJid: m.chat, quoted:  { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: '𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝙱𝚢 𝙰𝚣𝚞𝚛𝚎 𝙱𝚢 𝙵𝚞𝚛𝚉' }}})    

Yuta.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
                } else if (anu.action == 'remove') {
                	const yutabuffer = await getBuffer(ppuser)
                    const yutatime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const yutadate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let YutaName = num
                    const yutamembers = metadata.participants.length
const messa = await prepareWAMessageMedia({ image: YutaLft }, { upload: Yuta.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "",
"title": `Goodbye @${m.sender.split("@")[0]}`,
"description": `SCRIPT BOT WHATSAPP MULTIDEVICE`,
"currencyCode": "IDR",
"message": "𝙰𝚣𝚞𝚛𝚎 - 𝙵𝚞𝚛𝚉", 
"bodyText": `𝙰𝚣𝚞𝚛𝚎𝙱𝚘𝚝`,
"footerText": `𝙰𝚣𝚞𝚛𝚎𝙱𝚘𝚝`,
"priceAmount1000": "20000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "80000",
"retailerId": `𝙰𝚣𝚞𝚛𝚎𝙱𝚘𝚝`,
"url": "wa.me/628971507809"
},
"businessOwnerJid": "628971507809@s.whatsapp.net",
"contextInfo": {isForwarded: true, mentionedJid: [num]}
},
}), { userJid: m.chat, quoted:  { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: '𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝙱𝚢 𝙰𝚣𝚞𝚛𝚎 𝙱𝚢 𝙵𝚞𝚛𝚉' }}})    

Yuta.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
} catch (err) {
console.log(err)
}
}
})
    //autostatus view
        Yuta.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await Yuta.readMessages([mek.key]) }
            }
    })
// detect group update
		Yuta.ev.on("groups.update", async (json) => {
			if (global.groupevent) {
			try {
ppgroup = await Yuta.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0]
			if (res.announce == true) {
				await sleep(2000)
				Yuta.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				})
			} else if (res.announce == false) {
				await sleep(2000)
				Yuta.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				})
			} else if (res.restrict == true) {
				await sleep(2000)
				Yuta.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				})
			} else if (res.restrict == false) {
				await sleep(2000)
				Yuta.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				})
			} else if(!res.desc == ''){
				await sleep(2000)
				Yuta.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				})
      } else {
				await sleep(2000)
				Yuta.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				})
			} 
			}
		})
		
    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "𝙰𝚣𝚞𝚛𝚎𝙱𝚘𝚝 𝙷𝚎𝚛𝚎"
        }
    }
    Yuta.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = xprefix+toCmd
	                Yuta.appenTextMessage(prefCmd, chatUpdate)
	                await sleep(1000)
	                Yuta.sendMessage(key.remoteJid, { delete: key })
				}
			}
		}
    })
            
    Yuta.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!Yuta.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('Xeon') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(Yuta, mek, store)
            require("./YutaBotz")(Yuta, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   
    Yuta.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    Yuta.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Yuta.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    Yuta.getName = (jid, withoutContact = false) => {
        id = Yuta.decodeJid(jid)
        withoutContact = Yuta.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Yuta.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === Yuta.decodeJid(Yuta.user.id) ?
            Yuta.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

Yuta.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Yuta.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Yuta.getName(i)}\nFN:${await Yuta.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	Yuta.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    Yuta.public = true

    Yuta.serializeM = (m) => smsg(Yuta, m, store)

    Yuta.sendText = (jid, text, quoted = '', options) => Yuta.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    Yuta.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Yuta.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    Yuta.sendTextWithMentions = async (jid, text, quoted, options = {}) => Yuta.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    Yuta.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Yuta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Yuta.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Yuta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    Yuta.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    Yuta.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Yuta.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
	 Yuta.sendButtonImage = async (jid, buttons, quoted, opts = {}) => {
      var image = await prepareWAMessageMedia({
         image: {
            url: opts && opts.image ? opts.image : ''
         }
      }, {
         upload: Yuta.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     imageMessage: image.imageMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }            
         }
      }, {
         quoted
      })
      return Yuta.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
   Yuta.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: Yuta.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     videoMessage: video.videoMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      return Yuta.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
   Yuta.sendList = async (jid, sections, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  header: {
                     title: opts && opts.header ? opts.header : ''
                  },
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  nativeFlowMessage: {
                     buttons: [{
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                           title: opts && opts.title ? opts.title : '',
                           sections: sections
                        })
                     }],
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      Yuta.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
	
	Yuta.sendListImage = async (jid, sections, quoted, opts = {}) => {
      var image = await prepareWAMessageMedia({
         image: {
            url: opts && opts.image ? opts.image : ''
         }
      }, {
         upload: Yuta.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  header: {
                     title: opts && opts.header ? opts.header : '',
                     hasMediaAttachment: true,
                     imageMessage: image.imageMessage
                  },
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  nativeFlowMessage: {
                     buttons: [{
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                           title: opts && opts.title ? opts.title : '',
                           sections: sections
                        })
                     }],
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      Yuta.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }

Yuta.sendButtonVid = async (jid, body = '', footer = '', title = '', VideoUrl = "", buttons = [], quoted = "", saluranid = "", textsaluran = "") => {
    console.log('imageUrl:', VideoUrl, 'Type:', typeof VideoUrl);
    if (typeof VideoUrl !== 'string') {
      throw new TypeError('The "VideoUrl" argument must be of type string.');
    }
    let preparedMedia = await prepareWAMessageMedia({ video: { url: VideoUrl } }, { upload: Yuta.waUploadToServer });
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: '',
                            hasMediaAttachment: true,
                            ...preparedMedia
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}

Yuta.sendButtonImg = async (jid, body = '', footer = '', title = '', ImageUrl = "", buttons = [], quoted = "", saluranid = "", textsaluran = "") => {
    console.log('imageUrl:', ImageUrl, 'Type:', typeof ImageUrl);
    if (typeof ImageUrl !== 'string') {
      throw new TypeError('The "imageUrl" argument must be of type string.');
    }
    let preparedMedia = await prepareWAMessageMedia({ image: { url: ImageUrl } }, { upload: Yuta.waUploadToServer });
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: '',
                            hasMediaAttachment: true,
                            ...preparedMedia
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}
	
Yuta.sendButtonViddf = async (jid, body = '', footer = '', title = '', VideoDf = "", buttons = [], quoted = "", saluranid = "", textsaluran = "") => {
    let preparedMedia = await prepareWAMessageMedia({ video: VideoDf }, { upload: Yuta.waUploadToServer });
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: '',
                            hasMediaAttachment: true,
                            ...preparedMedia
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}
	
	
Yuta.sendButtonImgdf = async (jid, body = '', footer = '', title = '', ImageDf = "", buttons = [], quoted = "", saluranid = "", textsaluran = "") => {
    let preparedMedia = await prepareWAMessageMedia({ image: ImageDf }, { upload: Yuta.waUploadToServer });
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: '',
                            hasMediaAttachment: true,
                            ...preparedMedia
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}

	Yuta.sendButtonMsg = async (jid, body = '', footer = '', title = '', media, buttons = [], quoted = "", saluranid = "", textsaluran = "") => {
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title,
							hasMediaAttachment: !!media,
							...(media ? await generateWAMessageContent({
								[media.type]: media.url ? { url: media.url } : media.data
							}, {
								upload: Yuta.waUploadToServer
							}) : {})
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}

Yuta.sendButton2 = async (jid, {
budy: body = '',
footer: footer = '',
title: title = '', 
media: media = {}, 
buttons: buttons = [],
quoted: quoted = "",
saluranid: saluranid = "",
textsaluran: textsaluran = ""
}) => {
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: '',
                            hasMediaAttachment: false,
                            ...await prepareWAMessageMedia(media, { upload: Yuta.waUploadToServer })
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							forwardingScore: 999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluranid,
								serverMessageId: 143,
								newsletterName: textsaluran
							},
							mentionedJid: quoted.mentions || [],
							...quoted.contextInfo,
							...(quoted ? {
								stanzaId: quoted.key.id,
								remoteJid: quoted.key.remoteJid,
								participant: quoted.key.participant || quoted.key.remoteJid,
								fromMe: quoted.key.fromMe,
								quotedMessage: quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
	
	    await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
	}

/*
 - By Andhika Push Saluran Nya
*/
Yuta.sendFnewsCh = async (jid, message, options = {}) => {
  let msg = await generateWAMessage(jid, message, {
    upload: Yuta.waUploadToServer,
    ...options
  })
  let messages = msg.message
  let messageToChannel = proto.Message.encode(messages).finish()
  let result = {
    tag: 'message',
    attrs: { to: jid, type: 'text' },
    content: [
      {
        tag: 'plaintext',
        attrs: {},
        content: messageToChannel
      }
    ]
  }
  let res = await Yuta.query(result)
  return msg
}

Yuta.sendGif = async (jid, url, cap, quoted, options = {}) => {
let { convertUrl } = await webp2mp4(url)
return Yuta.sendMessage(jid, { video: { url: convertUrl }, caption: cap, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}

Yuta.getFile = async (PATH, save) => {
    let res
     let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
       let type = await FileType.fromBuffer(data) || {
       mime: 'application/octet-stream',
       ext: '.bin'}
       filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
       if (data && save) fs.promises.writeFile(filename, data)
       return {
         res,
         filename,
         size: await getSizeMedia(data),
         ...type,
         data
       }
    }

Yuta.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
      let { convertUrl } = await webp2mp4(url)
     return Yuta.sendMessage(jid, { video: { url: convertUrl }, caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Yuta.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Yuta.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Yuta.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Yuta.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    Yuta.sendPoll = (jid, name = '', values = [], quoted, selectableCount = 1) => { return Yuta.sendMessage(jid, { poll: { name, values, selectableCount } }, { quoted: quoted }) }

Yuta.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Yuta.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Yuta.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await Yuta.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Yuta.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

    Yuta.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return Yuta
}

startYuta()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})