const chalk = require('chalk')
const fs = require('fs')
const os = require('os')

let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})

global.allmenu = (prefix, hituet) => {
return`╔┄┄┄┄[ \`☁️Owner Only 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}self*
╎│ ◦  *${prefix}clearall*
╎│ ◦  *${prefix}pinchat*
╎│ ◦  *${prefix}unpinchat*
╎│ ◦  *${prefix}gconly* 
╎│ ◦  *${prefix}public* 
╎│ ◦  *${prefix}setpppanjang* 
╎│ ◦  *${prefix}setppgcpanjang* 
╎│ ◦  *${prefix}addcase*
╎│ ◦  *${prefix}join* 
╎│ ◦  *${prefix}bctext* 
╎│ ◦  *${prefix}poll* 
╎│ ◦  *${prefix}bcimage*
╎│ ◦  *${prefix}ev*
╎│ ◦  *${prefix}bcvideo*
╎│ ◦  *${prefix}creategc*
╎│ ◦  *${prefix}setexif*
╎│ ◦  *${prefix}userjid*
╎│ ◦  *${prefix}setbotname*
╎│ ◦  *${prefix}setbotbio*
╎│ ◦  *${prefix}delppbot*
╎│ ◦  *${prefix}restart*
╎│ ◦  *${prefix}setppbot*
╎│ ◦  *${prefix}addprem*
╎│ ◦  *${prefix}delprem*
╎│ ◦  *${prefix}addowner*
╎│ ◦  *${prefix}pushch2*
╎│ ◦  *${prefix}pushch2*
╎│ ◦  *${prefix}delowner*
╎│ ◦  *${prefix}addvn*
╎│ ◦  *${prefix}delvn*
╎│ ◦  *${prefix}addsticker*
╎│ ◦  *${prefix}delsticker*
╎│ ◦  *${prefix}addimage*
╎│ ◦  *${prefix}delimage*
╎│ ◦  *${prefix}addvideo*
╎│ ◦  *${prefix}delvideo*
╎│ ◦  *${prefix}block*
╎│ ◦  *${prefix}unblock del*
╎│ ◦  *${prefix}leavegc*
╎│ ◦  *${prefix}pushkontak*
╎│ ◦  *${prefix}pushkontakv2*
╎│ ◦  *${prefix}pushkontakv3*
╎│ ◦  *${prefix}pushkontakv4*
╎│ ◦  *${prefix}savekontakv*
╎│ ◦  *${prefix}savekontakv2*
╎│ ◦  *${prefix}getkontak*
╎│ ◦  *${prefix}sendkontak*
╎│ ◦  *${prefix}jpm*
╎│ ◦  *${prefix}jpm2*
╎│ ◦  *${prefix}spamsms (628xx)*
╎│ ◦  *${prefix}bannedwa (628xx)*
╎│ ◦  *${prefix}unbanwa (628xx)*
╎│ ◦  *${prefix}unbanwav2 (628xx)*
╎│ ◦  *${prefix}unbanwav3 (628xx)*
╎│ ◦  *${prefix}unbanwav4 (628xx)*
╎└ ◦  *${prefix}unbanwav5 (628xx)*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Islami Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}kisahnabi*
╎│ ◦  *${prefix}asmaulhusna*
╎│ ◦  *${prefix}bacaansholat*
╎│ ◦  *${prefix}audiosurah*
╎│ ◦  *${prefix}ayatkursi*
╎│ ◦  *${prefix}islamia*
╎│ ◦  *${prefix}doaharian*
╎│ ◦  *${prefix}niatsholat*
╎│ ◦  *${prefix}quotesislami*
╎└ ◦  *${prefix}doatahlil*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Cek Server Mc 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}mc*
╎│ ◦  *${prefix}hyperxzbedrock*
╎│ ◦  *${prefix}hyperxzjava*
╎└ ◦  *${prefix}server*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Grup Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}autoaigc*
╎│ ◦  *${prefix}warcall*
╎│ ◦  *${prefix}autosimi*
╎│ ◦  *${prefix}Leooxzychat*
╎│ ◦  *${prefix}mute*
╎│ ◦  *${prefix}setwelcome*
╎│ ◦  *${prefix}setleft*
╎│ ◦  *${prefix}welcome on/off*
╎│ ◦  *${prefix}antilink*
╎│ ◦  *${prefix}antiwame*
╎│ ◦  *${prefix}linkgc*
╎│ ◦  *${prefix}invite*
╎│ ◦  *${prefix}ephemeral*
╎│ ◦  *${prefix}delete*
╎│ ◦  *${prefix}setppgroup*
╎│ ◦  *${prefix}delppgroup*
╎│ ◦  *${prefix}setname*
╎│ ◦  *${prefix}setdesc*
╎│ ◦  *${prefix}add*
╎│ ◦  *${prefix}kick*
╎│ ◦  *${prefix}promote*
╎│ ◦  *${prefix}demote*
╎│ ◦  *${prefix}hidetag*
╎│ ◦  *${prefix}totag*
╎│ ◦  *${prefix}tagall*
╎│ ◦  *${prefix}editinfo*
╎│ ◦  *${prefix}opentime*
╎│ ◦  *${prefix}closetime*
╎│ ◦  *${prefix}resetlink*
╎│ ◦  *${prefix}getbio*
╎│ ◦  *${prefix}vote*
╎│ ◦  *${prefix}upvote*
╎│ ◦  *${prefix}downvote*
╎│ ◦  *${prefix}checkvote*
╎│ ◦  *${prefix}delvote*
╎│ ◦  *${prefix}autostickergc*
╎│ ◦  *${prefix}antilinkgc*
╎│ ◦  *${prefix}antiwame*
╎│ ◦  *${prefix}antilinkall*
╎│ ◦  *${prefix}antilinktiktok*
╎│ ◦  *${prefix}antilinkfb*
╎│ ◦  *${prefix}antilinktwitter*
╎│ ◦  *${prefix}antilinkig*
╎│ ◦  *${prefix}antilinktg*
╎│ ◦  *${prefix}antilinkytvid*
╎│ ◦  *${prefix}antilinkytch*
╎│ ◦  *${prefix}antivirus*
╎│ ◦  *${prefix}antitoxic*
╎│ ◦  *${prefix}nsfw*
╎└ ◦  *${prefix}react*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 
╔┄┄┄┄[ \`☁️Anonymous Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}anonymouschat*
╎│ ◦  *${prefix}start*
╎│ ◦  *${prefix}next*
╎│ ◦  *${prefix}stop*
╎│ ◦  *${prefix}sendprofile*
╎│ ◦  *${prefix}menfess*
╎│ ◦  *${prefix}confess*
╎│ ◦  *${prefix}balasmenfess*
╎│ ◦  *${prefix}tolakmenfess*
╎└ ◦  *${prefix}stopmenfess*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Push Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}cekidgc*
╎│ ◦  *${prefix}pushkontak*
╎│ ◦  *${prefix}pushkontakv2*
╎│ ◦  *${prefix}pushkontakv3*
╎│ ◦  *${prefix}pushkontakv4*
╎│ ◦  *${prefix}savekontakv*
╎│ ◦  *${prefix}savekontakv2*
╎│ ◦  *${prefix}getkontak*
╎│ ◦  *${prefix}sendkontak*
╎│ ◦  *${prefix}jpm*
╎└ ◦  *${prefix}jpm2*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Download Menu 🌟\` ]┄┄┄┄
╎┌ ◦  ${prefix}tiktok
╎│ ◦  ${prefix}tiktokslide
╎│ ◦  ${prefix}tiktokaudio
╎│ ◦  ${prefix}ytsearch
╎│ ◦  ${prefix}ttsearch
╎│ ◦  ${prefix}teraboxdl
╎│ ◦  ${prefix}aio
╎│ ◦  ${prefix}snackvideo
╎│ ◦  ${prefix}capcutdl
╎│ ◦  ${prefix}play
╎│ ◦  ${prefix}ytmp3
╎│ ◦  ${prefix}ytmp4
╎│ ◦  ${prefix}splay
╎│ ◦  ${prefix}google
╎│ ◦  ${prefix}imdb
╎│ ◦  ${prefix}weather
╎│ ◦  ${prefix}wanumber
╎│ ◦  ${prefix}instagram
╎│ ◦  ${prefix}facebook
╎│ ◦  ${prefix}twittervid
╎│ ◦  ${prefix}telestick
╎│ ◦  ${prefix}spotify
╎│ ◦  ${prefix}gitclone
╎│ ◦  ${prefix}happymod
╎│ ◦  ${prefix}gdrive
╎│ ◦  ${prefix}pinterest
╎└ ◦  ${prefix}ringtone
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Game Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}tebakkata*
╎│ ◦  *${prefix}tebaktebakan*
╎│ ◦  *${prefix}tebaklirik*
╎│ ◦  *${prefix}tebakgambar*
╎│ ◦  *${prefix}tebaklagu*
╎│ ◦  *${prefix}tebakkimia*
╎│ ◦  *${prefix}asahotak*
╎│ ◦  *${prefix}siapaaku*
╎│ ◦  *${prefix}susunkaga*
╎│ ◦  *${prefix}tekateki*
╎│ ◦  *${prefix}tebakbendera*
╎│ ◦  *${prefix}tebakbenderav2*
╎│ ◦  *${prefix}tebakkabupaten*
╎│ ◦  *${prefix}caklontong*
╎│ ◦  *${prefix}family100*
╎└ ◦  *${prefix}werewolf*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Rpg Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}kerja*
╎│ ◦  *${prefix}fightnaga*
╎│ ◦  *${prefix}fightkucing*
╎│ ◦  *${prefix}fightphonix*
╎│ ◦  *${prefix}fightgriffin*
╎│ ◦  *${prefix}fightkyubi*
╎│ ◦  *${prefix}fightcentaur*
╎│ ◦  *${prefix}nabung*
╎│ ◦  *${prefix}mining*
╎│ ◦  *${prefix}bankcek*
╎│ ◦  *${prefix}maling*
╎│ ◦  *${prefix}ngewe*
╎│ ◦  *${prefix}ngocok*
╎│ ◦  *${prefix}banknabung*
╎│ ◦  *${prefix}banktarik*
╎│ ◦  *${prefix}berkebon*
╎│ ◦  *${prefix}crafting*
╎│ ◦  *${prefix}bet*
╎│ ◦  *${prefix}bonus*
╎│ ◦  *${prefix}buah*
╎│ ◦  *${prefix}nebang*
╎│ ◦  *${prefix}bekerja*
╎│ ◦  *${prefix}bansos*
╎│ ◦  *${prefix}taxy*
╎│ ◦  *${prefix}mulung*
╎│ ◦  *${prefix}berburu*
╎│ ◦  *${prefix}polisi*
╎│ ◦  *${prefix}berdagang*
╎│ ◦  *${prefix}rampok*
╎│ ◦  *${prefix}bunuh*
╎│ ◦  *${prefix}collect*
╎│ ◦  *${prefix}mancing*
╎│ ◦  *${prefix}repair*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}fight*
╎│ ◦  *${prefix}gajian*
╎│ ◦  *${prefix}upgrade*
╎│ ◦  *${prefix}transfer*
╎│ ◦  *${prefix}shop*
╎│ ◦  *${prefix}selectskill*
╎│ ◦  *${prefix}sampah*
╎│ ◦  *${prefix}roket*
╎│ ◦  *${prefix}ojek*
╎│ ◦  *${prefix}nguli*
╎│ ◦  *${prefix}pasar*
╎│ ◦  *${prefix}rob*
╎│ ◦  *${prefix}referal*
╎│ ◦  *${prefix}petshop*
╎│ ◦  *${prefix}kolam*
╎│ ◦  *${prefix}koboy*
╎│ ◦  *${prefix}leaderboard*
╎└ ◦  *${prefix}casino*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Quotes Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}quotesanime* 
╎│ ◦  *${prefix}quotesbacot* 
╎│ ◦  *${prefix}quotesbucin* 
╎│ ◦  *${prefix}quotesmotivasi* 
╎│ ◦  *${prefix}quotesgalau* 
╎│ ◦  *${prefix}quotesgombal* 
╎│ ◦  *${prefix}quoteshacker* 
╎└ ◦  *${prefix}quotesbijak* 
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Store Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}list*
╎│ ◦  *${prefix}addlist*
╎│ ◦  *${prefix}dellist*
╎│ ◦  *${prefix}update*
╎│ ◦  *${prefix}jeda*
╎│ ◦  *${prefix}tambah*
╎│ ◦  *${prefix}kurang*
╎│ ◦  *${prefix}kali*
╎│ ◦  *${prefix}bagi*
╎│ ◦  *${prefix}delsetdone*
╎│ ◦  *${prefix}changedone*
╎│ ◦  *${prefix}setdone*
╎│ ◦  *${prefix}delproses*
╎│ ◦  *${prefix}changeproses*
╎│ ◦  *${prefix}setproses*
╎│ ◦  *${prefix}proses <reply chat>*
╎└ ◦  *${prefix}done <reply chat>*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Random Video 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}tiktokgirl*
╎│ ◦  *${prefix}tiktoknukthy*
╎│ ◦  *${prefix}tiktokkayes*
╎│ ◦  *${prefix}tiktokpanrika*
╎│ ◦  *${prefix}tiktoknotnot*
╎│ ◦  *${prefix}tiktokghea*
╎│ ◦  *${prefix}tiktoksantuy*
╎└ ◦  *${prefix}tiktokbocil*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️stalker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}igstalk*
╎│ ◦  *${prefix}ttstalk*
╎│ ◦  *${prefix}ffstalk*
╎│ ◦  *${prefix}mlstalk*
╎│ ◦  *${prefix}npmstalk*
╎└ ◦  *${prefix}ghstalk*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Open Ai 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}leptonai*
╎│ ◦  *${prefix}openai*
╎│ ◦  *${prefix}ai*
╎│ ◦  *${prefix}simi*
╎│ ◦  *${prefix}simi-simiam*
╎│ ◦  *${prefix}islamiai*
╎│ ◦  *${prefix}bard*
╎│ ◦  *${prefix}prodia*
╎│ ◦  *${prefix}diffusion-anime*
╎│ ◦  *${prefix}travel-assistant*
╎│ ◦  *${prefix}ocr*
╎│ ◦  *${prefix}guru-ai*
╎│ ◦  *${prefix}emi-ai*
╎│ ◦  *${prefix}claude-ai*
╎│ ◦  *${prefix}costume-ai*
╎│ ◦  *${prefix}hercai-ai*
╎│ ◦  *${prefix}hercai-cartoon*
╎│ ◦  *${prefix}hercai-animefy*
╎│ ◦  *${prefix}hercai-lexica*
╎│ ◦  *${prefix}hercai-prodia*
╎│ ◦  *${prefix}hercai-simurg*
╎│ ◦  *${prefix}hercai-raava*
╎│ ◦  *${prefix}hercai-shonin*
╎│ ◦  *${prefix}realistic*
╎│ ◦  *${prefix}3dmodel*
╎│ ◦  *${prefix}jadizombie*
╎│ ◦  *${prefix}blackboxai*
╎│ ◦  *${prefix}photoleapai*
╎│ ◦  *${prefix}diffusion*
╎│ ◦  *${prefix}indo-ai*
╎│ ◦  *${prefix}lamaai*
╎│ ◦  *${prefix}aivo*
╎│ ◦  *${prefix}gemini*
╎│ ◦  *${prefix}text2img*
╎│ ◦  *${prefix}absolutely*
╎│ ◦  *${prefix}dalle*
╎│ ◦  *${prefix}bingimg*
╎│ ◦  *${prefix}bingai*
╎│ ◦  *${prefix}gptimg*
╎│ ◦  *${prefix}gpt4*
╎│ ◦  *${prefix}gpt4_2*
╎│ ◦  *${prefix}anything*
╎│ ◦  *${prefix}hdvid*
╎│ ◦  *${prefix}cai*
╎│ ◦  *${prefix}youai*
╎│ ◦  *${prefix}remini*
╎│ ◦  *${prefix}jadianime*
╎│ ◦  *${prefix}removebg*
╎└ ◦  *${prefix}nulis*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Fun Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}smeme*
╎│ ◦  *${prefix}ppcouple*
╎│ ◦  *${prefix}define*
╎│ ◦  *${prefix}qc*
╎│ ◦  *${prefix}lyrics*
╎│ ◦  *${prefix}suit*
╎│ ◦  *${prefix}math*
╎│ ◦  *${prefix}tictactoe*
╎│ ◦  *${prefix}fact*
╎│ ◦  *${prefix}truth*
╎│ ◦  *${prefix}dare*
╎│ ◦  *${prefix}couple*
╎│ ◦  *${prefix}soulmate*
╎│ ◦  *${prefix}stupidcheck*
╎│ ◦  *${prefix}handsomecheck*
╎│ ◦  *${prefix}uncleancheck*
╎│ ◦  *${prefix}hotcheck*
╎│ ◦  *${prefix}smartcheck*
╎│ ◦  *${prefix}greatcheck*
╎│ ◦  *${prefix}evilcheck*
╎│ ◦  *${prefix}dogcheck*
╎│ ◦  *${prefix}coolcheck*
╎│ ◦  *${prefix}waifucheck*
╎│ ◦  *${prefix}awesomecheck*
╎│ ◦  *${prefix}gaycheck*
╎│ ◦  *${prefix}cutecheck*
╎│ ◦  *${prefix}lesbiancheck*
╎│ ◦  *${prefix}hornycheck*
╎│ ◦  *${prefix}prettycheck*
╎│ ◦  *${prefix}lovelycheck*
╎│ ◦  *${prefix}uglycheck*
╎│ ◦  *${prefix}pick*
╎│ ◦  *${prefix}quotes*
╎│ ◦  *${prefix}can*
╎│ ◦  *${prefix}is*
╎│ ◦  *${prefix}when*
╎│ ◦  *${prefix}where*
╎│ ◦  *${prefix}what*
╎│ ◦  *${prefix}how*
╎│ ◦  *${prefix}rate*
╎│ ◦  *${prefix}cry*
╎│ ◦  *${prefix}kill*
╎│ ◦  *${prefix}hug*
╎│ ◦  *${prefix}pat*
╎│ ◦  *${prefix}lick*
╎│ ◦  *${prefix}kiss*
╎│ ◦  *${prefix}bite*
╎│ ◦  *${prefix}yeet*
╎│ ◦  *${prefix}bully*
╎│ ◦  *${prefix}bonk*
╎│ ◦  *${prefix}wink*
╎│ ◦  *${prefix}poke*
╎│ ◦  *${prefix}nom*
╎│ ◦  *${prefix}slap*
╎│ ◦  *${prefix}smile*
╎│ ◦  *${prefix}wave*
╎│ ◦  *${prefix}awoo*
╎│ ◦  *${prefix}blush*
╎│ ◦  *${prefix}smug*
╎│ ◦  *${prefix}glomp*
╎│ ◦  *${prefix}happy*
╎│ ◦  *${prefix}dance*
╎│ ◦  *${prefix}cringe*
╎│ ◦  *${prefix}cuddle*
╎│ ◦  *${prefix}highfive*
╎│ ◦  *${prefix}shinobu*
╎│ ◦  *${prefix}handhold*
╎│ ◦  *${prefix}spank*
╎│ ◦  *${prefix}tickle*
╎│ ◦  *${prefix}avatar*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}foxgirl*
╎│ ◦  *${prefix}gecg*
╎│ ◦  *${prefix}checkme*
╎└ ◦  *${prefix}sound1 - sound161*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Random Photo 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}aesthetic*
╎│ ◦  *${prefix}coffee*
╎│ ◦  *${prefix}wikimedia*
╎│ ◦  *${prefix}wallpaper*
╎│ ◦  *${prefix}art*
╎│ ◦  *${prefix}bts*
╎│ ◦  *${prefix}dogwoof*
╎│ ◦  *${prefix}catmeow*
╎│ ◦  *${prefix}lizardpic*
╎│ ◦  *${prefix}goosebird*
╎│ ◦  *${prefix}8ballpool*
╎│ ◦  *${prefix}cosplay*
╎│ ◦  *${prefix}hacker*
╎│ ◦  *${prefix}cyber*
╎│ ◦  *${prefix}gamewallpaper*
╎│ ◦  *${prefix}islamic*
╎│ ◦  *${prefix}jennie*
╎│ ◦  *${prefix}jiso*
╎│ ◦  *${prefix}satanic*
╎│ ◦  *${prefix}justina*
╎│ ◦  *${prefix}cartoon*
╎│ ◦  *${prefix}pentol*
╎│ ◦  *${prefix}cat*
╎│ ◦  *${prefix}kpop*
╎│ ◦  *${prefix}exo*
╎│ ◦  *${prefix}lisa*
╎│ ◦  *${prefix}space*
╎│ ◦  *${prefix}car*
╎│ ◦  *${prefix}technology*
╎│ ◦  *${prefix}bike*
╎│ ◦  *${prefix}shortquote*
╎│ ◦  *${prefix}antiwork*
╎│ ◦  *${prefix}hacking*
╎│ ◦  *${prefix}boneka*
╎│ ◦  *${prefix}rose*
╎│ ◦  *${prefix}ryujin*
╎│ ◦  *${prefix}ulzzangboy*
╎│ ◦  *${prefix}ulzzanggirl*
╎│ ◦  *${prefix}wallml*
╎│ ◦  *${prefix}wallphone*
╎│ ◦  *${prefix}mountain*
╎│ ◦  *${prefix}goose*
╎│ ◦  *${prefix}profilepic*
╎│ ◦  *${prefix}couplepic*
╎│ ◦  *${prefix}programming*
╎│ ◦  *${prefix}pubg*
╎│ ◦  *${prefix}blackpink*
╎│ ◦  *${prefix}randomboy*
╎│ ◦  *${prefix}randomgirl*
╎│ ◦  *${prefix}hijab*
╎│ ◦  *${prefix}chinese*
╎│ ◦  *${prefix}indo*
╎│ ◦  *${prefix}japanese*
╎│ ◦  *${prefix}korean*
╎│ ◦  *${prefix}malay*
╎│ ◦  *${prefix}thai*
╎└ ◦  *${prefix}vietnamese*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Sticker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}goose*
╎│ ◦  *${prefix}woof*
╎│ ◦  *${prefix}8ball*
╎│ ◦  *${prefix}lizard*
╎│ ◦  *${prefix}meow*
╎│ ◦  *${prefix}gura*
╎│ ◦  *${prefix}doge*
╎│ ◦  *${prefix}patrick*
╎└ ◦  *${prefix}lovestick*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Anime 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}akira*
╎│ ◦  *${prefix}akiyama*
╎│ ◦  *${prefix}ana*
╎│ ◦  *${prefix}asuna*
╎│ ◦  *${prefix}ayuzawa*
╎│ ◦  *${prefix}boruto*
╎│ ◦  *${prefix}chiho*
╎│ ◦  *${prefix}chitoge*
╎│ ◦  *${prefix}cosplayloli*
╎│ ◦  *${prefix}cosplaysagiri*
╎│ ◦  *${prefix}deidara*
╎│ ◦  *${prefix}doraemon*
╎│ ◦  *${prefix}elaina*
╎│ ◦  *${prefix}emilia*
╎│ ◦  *${prefix}erza*
╎│ ◦  *${prefix}gremory*
╎│ ◦  *${prefix}hestia*
╎│ ◦  *${prefix}hinata*
╎│ ◦  *${prefix}husbu*
╎│ ◦  *${prefix}inori*
╎│ ◦  *${prefix}isuzu*
╎│ ◦  *${prefix}itachi*
╎│ ◦  *${prefix}itori*
╎│ ◦  *${prefix}kaga*
╎│ ◦  *${prefix}kagura*
╎│ ◦  *${prefix}kakasih*
╎│ ◦  *${prefix}kaori*
╎│ ◦  *${prefix}keneki*
╎│ ◦  *${prefix}kotori*
╎│ ◦  *${prefix}kurumi*
╎│ ◦  *${prefix}loli*
╎│ ◦  *${prefix}madara*
╎│ ◦  *${prefix}megumin*
╎│ ◦  *${prefix}mikasa*
╎│ ◦  *${prefix}mikey*
╎│ ◦  *${prefix}miku*
╎│ ◦  *${prefix}minato*
╎│ ◦  *${prefix}naruto*
╎│ ◦  *${prefix}neko*
╎│ ◦  *${prefix}neko2*
╎│ ◦  *${prefix}nekonime*
╎│ ◦  *${prefix}nezuko*
╎│ ◦  *${prefix}onepiece*
╎│ ◦  *${prefix}pokemon*
╎│ ◦  *${prefix}randomnime*
╎│ ◦  *${prefix}randomnime2*
╎│ ◦  *${prefix}rize*
╎│ ◦  *${prefix}sagiri*
╎│ ◦  *${prefix}sakura*
╎│ ◦  *${prefix}sasuke*
╎│ ◦  *${prefix}shina*
╎│ ◦  *${prefix}shinka*
╎│ ◦  *${prefix}shinomiya*
╎│ ◦  *${prefix}shizuka*
╎│ ◦  *${prefix}shota*
╎│ ◦  *${prefix}tejina*
╎│ ◦  *${prefix}toukachan*
╎│ ◦  *${prefix}tsunade*
╎│ ◦  *${prefix}waifu*
╎│ ◦  *${prefix}animewall*
╎│ ◦  *${prefix}yotsuba*
╎│ ◦  *${prefix}yuki*
╎│ ◦  *${prefix}yulibocil*
╎│ ◦  *${prefix}yumeko*
╎│ ◦  *${prefix}8ball*
╎│ ◦  *${prefix}tickle*
╎│ ◦  *${prefix}gecg*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}animeawoo*
╎│ ◦  *${prefix}animemegumin*
╎│ ◦  *${prefix}animeshinobu*
╎│ ◦  *${prefix}animehandhold*
╎│ ◦  *${prefix}animehighfive*
╎│ ◦  *${prefix}animecringe*
╎│ ◦  *${prefix}animedance*
╎│ ◦  *${prefix}animehappy*
╎│ ◦  *${prefix}animeglomp*
╎│ ◦  *${prefix}animeblush*
╎│ ◦  *${prefix}animesmug*
╎│ ◦  *${prefix}animewave*
╎│ ◦  *${prefix}animesmile*
╎│ ◦  *${prefix}animepoke*
╎│ ◦  *${prefix}animewink*
╎│ ◦  *${prefix}animebonk*
╎│ ◦  *${prefix}animebully*
╎│ ◦  *${prefix}animeyeet*
╎│ ◦  *${prefix}animebite*
╎│ ◦  *${prefix}animelick*
╎│ ◦  *${prefix}animekill*
╎│ ◦  *${prefix}animecry*
╎│ ◦  *${prefix}animewlp*
╎│ ◦  *${prefix}animekiss*
╎│ ◦  *${prefix}animehug*
╎│ ◦  *${prefix}animeneko*
╎│ ◦  *${prefix}animepat*
╎│ ◦  *${prefix}animeslap*
╎│ ◦  *${prefix}animecuddle*
╎│ ◦  *${prefix}animewaifu*
╎│ ◦  *${prefix}animenom*
╎│ ◦  *${prefix}animefoxgirl*
╎│ ◦  *${prefix}animegecg*
╎│ ◦  *${prefix}animetickle*
╎│ ◦  *${prefix}animefeed*
╎│ ◦  *${prefix}animeavatar*
╎│ ◦  *${prefix}genshin*
╎│ ◦  *${prefix}anime*
╎└ ◦  *${prefix}amv*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Anime Nsfw 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}hentai 
╎│ ◦  *${prefix}gifhentai 
╎│ ◦  *${prefix}gifblowjob 
╎│ ◦  *${prefix}hentaivid 
╎│ ◦  *${prefix}hneko 
╎│ ◦  *${prefix}nwaifu 
╎│ ◦  *${prefix}animespank 
╎│ ◦  *${prefix}trap 
╎│ ◦  *${prefix}gasm 
╎│ ◦  *${prefix}ahegao 
╎│ ◦  *${prefix}ass 
╎│ ◦  *${prefix}bdsm 
╎│ ◦  *${prefix}blowjob 
╎│ ◦  *${prefix}cuckold 
╎│ ◦  *${prefix}cum 
╎│ ◦  *${prefix}milf 
╎│ ◦  *${prefix}eba 
╎│ ◦  *${prefix}ero 
╎│ ◦  *${prefix}femdom 
╎│ ◦  *${prefix}foot 
╎│ ◦  *${prefix}gangbang 
╎│ ◦  *${prefix}glasses 
╎│ ◦  *${prefix}jahy 
╎│ ◦  *${prefix}masturbation 
╎│ ◦  *${prefix}manga 
╎│ ◦  *${prefix}neko-hentai 
╎│ ◦  *${prefix}neko-hentai2 
╎│ ◦  *${prefix}nsfwloli 
╎│ ◦  *${prefix}orgy 
╎│ ◦  *${prefix}panties  
╎│ ◦  *${prefix}pussy 
╎│ ◦  *${prefix}tentacles 
╎│ ◦  *${prefix}thighs 
╎│ ◦  *${prefix}yuri 
╎│ ◦  *${prefix}zettai 
╎│ ◦  *${prefix}xnxxsearch  
╎└ ◦  *${prefix}xnxxdl  
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Textpro Maker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}sertifikattolol*
╎│ ◦  *${prefix}attp*
╎│ ◦  *${prefix}ttp*
╎│ ◦  *${prefix}ktpmaker*
╎│ ◦  *${prefix}carimusik*
╎│ ◦  *${prefix}candy*
╎│ ◦  *${prefix}christmas*
╎│ ◦  *${prefix}3dchristmas*
╎│ ◦  *${prefix}sparklechristmas*
╎│ ◦  *${prefix}deepsea*
╎│ ◦  *${prefix}scifi*
╎│ ◦  *${prefix}rainbow*
╎│ ◦  *${prefix}waterpipe*
╎│ ◦  *${prefix}spooky*
╎│ ◦  *${prefix}pencil*
╎│ ◦  *${prefix}circuit*
╎│ ◦  *${prefix}discovery*
╎│ ◦  *${prefix}metalic*
╎│ ◦  *${prefix}fiction*
╎│ ◦  *${prefix}demon*
╎│ ◦  *${prefix}transformer*
╎│ ◦  *${prefix}berry*
╎│ ◦  *${prefix}thunder*
╎│ ◦  *${prefix}magma*
╎│ ◦  *${prefix}3dstone*
╎│ ◦  *${prefix}neonlight*
╎│ ◦  *${prefix}glitch*
╎│ ◦  *${prefix}harrypotter*
╎│ ◦  *${prefix}brokenglass*
╎│ ◦  *${prefix}papercut*
╎│ ◦  *${prefix}watercolor*
╎│ ◦  *${prefix}multicolor*
╎│ ◦  *${prefix}neondevil*
╎│ ◦  *${prefix}underwater*
╎│ ◦  *${prefix}graffitibike*
╎│ ◦  *${prefix}snow*
╎│ ◦  *${prefix}cloud*
╎│ ◦  *${prefix}honey*
╎│ ◦  *${prefix}ice*
╎│ ◦  *${prefix}fruitjuice*
╎│ ◦  *${prefix}biscuit*
╎│ ◦  *${prefix}wood*
╎│ ◦  *${prefix}chocolate*
╎│ ◦  *${prefix}strawberry*
╎│ ◦  *${prefix}matrix*
╎│ ◦  *${prefix}blood*
╎│ ◦  *${prefix}dropwater*
╎│ ◦  *${prefix}toxic*
╎│ ◦  *${prefix}lava*
╎│ ◦  *${prefix}rock*
╎│ ◦  *${prefix}bloodglas*
╎│ ◦  *${prefix}hallowen*
╎│ ◦  *${prefix}darkgold*
╎│ ◦  *${prefix}joker*
╎│ ◦  *${prefix}wicker*
╎│ ◦  *${prefix}firework*
╎│ ◦  *${prefix}skeleton*
╎│ ◦  *${prefix}blackpink*
╎│ ◦  *${prefix}sand*
╎│ ◦  *${prefix}glue*
╎│ ◦  *${prefix}1917*
╎│ ◦  *${prefix}leaves*
╎│ ◦  *${prefix}retro*
╎│ ◦  *${prefix}pornhub*
╎│ ◦  *${prefix}8bit*
╎│ ◦  *${prefix}batman*
╎│ ◦  *${prefix}3dbox*
╎│ ◦  *${prefix}lion*
╎│ ◦  *${prefix}3davengers*
╎│ ◦  *${prefix}window*
╎│ ◦  *${prefix}3dspace*
╎│ ◦  *${prefix}bokeh*
╎│ ◦  *${prefix}holographic*
╎│ ◦  *${prefix}thewall*
╎│ ◦  *${prefix}carbon*
╎│ ◦  *${prefix}whitebear*
╎│ ◦  *${prefix}metallic*
╎│ ◦  *${prefix}steel*
╎│ ◦  *${prefix}fabric*
╎│ ◦  *${prefix}ancient*
╎└ ◦  *${prefix}marvel*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Photooxy Maker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}shadow*
╎│ ◦  *${prefix}write*
╎│ ◦  *${prefix}romantic*
╎│ ◦  *${prefix}burnpaper*
╎│ ◦  *${prefix}smoke*
╎│ ◦  *${prefix}narutobanner*
╎│ ◦  *${prefix}love*
╎│ ◦  *${prefix}undergrass*
╎│ ◦  *${prefix}doublelove*
╎│ ◦  *${prefix}coffecup*
╎│ ◦  *${prefix}underwaterocean*
╎│ ◦  *${prefix}smokyneon*
╎│ ◦  *${prefix}starstext*
╎│ ◦  *${prefix}rainboweffect*
╎│ ◦  *${prefix}balloontext*
╎│ ◦  *${prefix}metalliceffect*
╎│ ◦  *${prefix}embroiderytext*
╎│ ◦  *${prefix}flamingtext*
╎│ ◦  *${prefix}stonetext*
╎│ ◦  *${prefix}writeart*
╎│ ◦  *${prefix}summertext*
╎│ ◦  *${prefix}wolfmetaltext*
╎│ ◦  *${prefix}nature3dtext*
╎│ ◦  *${prefix}rosestext*
╎│ ◦  *${prefix}naturetypography*
╎│ ◦  *${prefix}quotesunder*
╎└ ◦  *${prefix}shinetext*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Ephoto Maker🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}glitchtext*
╎│ ◦  *${prefix}writetext*
╎│ ◦  *${prefix}advancedglow*
╎│ ◦  *${prefix}typographytext*
╎│ ◦  *${prefix}pixelglitch*
╎│ ◦  *${prefix}neonglitch*
╎│ ◦  *${prefix}flagtext*
╎│ ◦  *${prefix}flag3dtext*
╎│ ◦  *${prefix}deletingtext*
╎│ ◦  *${prefix}blackpinkstyle*
╎│ ◦  *${prefix}glowingtext*
╎│ ◦  *${prefix}underwatertext*
╎│ ◦  *${prefix}logomaker*
╎│ ◦  *${prefix}cartoonstyle*
╎│ ◦  *${prefix}papercutstyle*
╎│ ◦  *${prefix}watercolortext*
╎│ ◦  *${prefix}effectclouds*
╎│ ◦  *${prefix}blackpinklogo*
╎│ ◦  *${prefix}gradienttext*
╎│ ◦  *${prefix}summerbeach*
╎│ ◦  *${prefix}luxurygold*
╎│ ◦  *${prefix}multicoloredneon*
╎│ ◦  *${prefix}sandsummer*
╎│ ◦  *${prefix}galaxywallpaper*
╎│ ◦  *${prefix}1917style*
╎│ ◦  *${prefix}makingneon*
╎│ ◦  *${prefix}royaltext*
╎│ ◦  *${prefix}freecreate*
╎│ ◦  *${prefix}galaxystyle*
╎└ ◦  *${prefix}lighteffects*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Database Menu🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}setcmd*
╎│ ◦  *${prefix}delcmd*
╎│ ◦  *${prefix}listcmd*
╎│ ◦  *${prefix}lockcmd*
╎│ ◦  *${prefix}addmsg*
╎│ ◦  *${prefix}delmsg*
╎│ ◦  *${prefix}getmsg*
╎└ ◦  *${prefix}listmsg*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Bug And War Menu🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}dansyavip*
╎│ ◦  *${prefix}dansyacrush*
╎│ ◦  *${prefix}xandroid*
╎│ ◦  *${prefix}xandroid2*
╎│ ◦  *${prefix}systemuicrash*
╎│ ◦  *${prefix}zero-bug*
╎│ ◦  *${prefix}xsysui*
╎│ ◦  *${prefix}xios*
╎│ ◦  *${prefix}xios2*
╎└ ◦  *${prefix}xgc*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Other Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}ping*
╎│ ◦  *${prefix}readviewonce*
╎│ ◦  *${prefix}cekkhodam*
╎│ ◦  *${prefix}cekkontol*
╎│ ◦  *${prefix}paptt*
╎│ ◦  *${prefix}alkitab*
╎│ ◦  *${prefix}totalfitur*
╎│ ◦  *${prefix}menu*
╎│ ◦  *${prefix}myip*
╎│ ◦  *${prefix}reportbug*
╎│ ◦  *${prefix}listpem*
╎│ ◦  *${prefix}liststicker*
╎│ ◦  *${prefix}listimage*
╎│ ◦  *${prefix}listvideo*
╎│ ◦  *${prefix}listvn*
╎│ ◦  *${prefix}listbadword*
╎│ ◦  *${prefix}listpc*
╎│ ◦  *${prefix}listgc*
╎│ ◦  *${prefix}owner*
╎│ ◦  *${prefix}jadibot*
╎│ ◦  *${prefix}listjadibot*
╎│ ◦  *${prefix}donate*
╎│ ◦  *${prefix}friend*
╎│ ◦  *${prefix}obfuscate*
╎│ ◦  *${prefix}styletext*
╎│ ◦  *${prefix}fliptext*
╎│ ◦  *${prefix}tts*
╎│ ◦  *${prefix}say*
╎│ ◦  *${prefix}togif*
╎│ ◦  *${prefix}toqr*
╎│ ◦  *${prefix}bass*
╎│ ◦  *${prefix}blown*
╎│ ◦  *${prefix}deep*
╎│ ◦  *${prefix}earrape*
╎│ ◦  *${prefix}fast*
╎│ ◦  *${prefix}fat*
╎│ ◦  *${prefix}nightcore*
╎│ ◦  *${prefix}reverse*
╎│ ◦  *${prefix}robot*
╎│ ◦  *${prefix}slow*
╎│ ◦  *${prefix}smooth*
╎│ ◦  *${prefix}squirrel*
╎│ ◦  *${prefix}tinyurl*
╎│ ◦  *${prefix}tinyurl*
╎│ ◦  *${prefix}tovn*
╎│ ◦  *${prefix}toaudio*
╎│ ◦  *${prefix}tomp3*
╎│ ◦  *${prefix}tomp4*
╎│ ◦  *${prefix}toimg*
╎│ ◦  *${prefix}toonce*
╎│ ◦  *${prefix}sticker*
╎│ ◦  *${prefix}take*
╎│ ◦  *${prefix}emoji*
╎│ ◦  *${prefix}volume*
╎│ ◦  *${prefix}ebinary*
╎│ ◦  *${prefix}dbinary*
╎│ ◦  *${prefix}ssweb*
╎│ ◦  *${prefix}quoted*
╎└ ◦  *${prefix}runtime*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

╔┄┄┄┄[ \`☁️Primbon Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}artimimpi*
╎│ ◦  *${prefix}artinama*
╎│ ◦  *${prefix}ramaljodoh*
╎│ ◦  *${prefix}ramaljodohbali*
╎│ ◦  *${prefix}suamiistri*
╎│ ◦  *${prefix}ramalcinta*
╎│ ◦  *${prefix}cocoknama*
╎│ ◦  *${prefix}pasangan*
╎│ ◦  *${prefix}jadiannikah*
╎│ ◦  *${prefix}sifatusaha*
╎│ ◦  *${prefix}rezeki*
╎│ ◦  *${prefix}pekerjaan*
╎│ ◦  *${prefix}nasib*
╎│ ◦  *${prefix}penyakit*
╎│ ◦  *${prefix}tarot*
╎│ ◦  *${prefix}fengshui*
╎│ ◦  *${prefix}haribaik*
╎│ ◦  *${prefix}harisangar*
╎│ ◦  *${prefix}harisial*
╎│ ◦  *${prefix}nagahari*
╎│ ◦  *${prefix}arahrezeki*
╎│ ◦  *${prefix}peruntungan*
╎│ ◦  *${prefix}weton*
╎│ ◦  *${prefix}karakter*
╎│ ◦  *${prefix}keberuntungan*
╎│ ◦  *${prefix}memancing*
╎│ ◦  *${prefix}masasubur*
╎│ ◦  *${prefix}zodiak*
╎└ ◦  *${prefix}shio*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.animemenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Anime 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}akira*
╎│ ◦  *${prefix}akiyama*
╎│ ◦  *${prefix}ana*
╎│ ◦  *${prefix}asuna*
╎│ ◦  *${prefix}ayuzawa*
╎│ ◦  *${prefix}boruto*
╎│ ◦  *${prefix}chiho*
╎│ ◦  *${prefix}chitoge*
╎│ ◦  *${prefix}cosplayloli*
╎│ ◦  *${prefix}cosplaysagiri*
╎│ ◦  *${prefix}deidara*
╎│ ◦  *${prefix}doraemon*
╎│ ◦  *${prefix}elaina*
╎│ ◦  *${prefix}emilia*
╎│ ◦  *${prefix}erza*
╎│ ◦  *${prefix}gremory*
╎│ ◦  *${prefix}hestia*
╎│ ◦  *${prefix}hinata*
╎│ ◦  *${prefix}husbu*
╎│ ◦  *${prefix}inori*
╎│ ◦  *${prefix}isuzu*
╎│ ◦  *${prefix}itachi*
╎│ ◦  *${prefix}itori*
╎│ ◦  *${prefix}kaga*
╎│ ◦  *${prefix}kagura*
╎│ ◦  *${prefix}kakasih*
╎│ ◦  *${prefix}kaori*
╎│ ◦  *${prefix}keneki*
╎│ ◦  *${prefix}kotori*
╎│ ◦  *${prefix}kurumi*
╎│ ◦  *${prefix}loli*
╎│ ◦  *${prefix}madara*
╎│ ◦  *${prefix}megumin*
╎│ ◦  *${prefix}mikasa*
╎│ ◦  *${prefix}mikey*
╎│ ◦  *${prefix}miku*
╎│ ◦  *${prefix}minato*
╎│ ◦  *${prefix}naruto*
╎│ ◦  *${prefix}neko*
╎│ ◦  *${prefix}neko2*
╎│ ◦  *${prefix}nekonime*
╎│ ◦  *${prefix}nezuko*
╎│ ◦  *${prefix}onepiece*
╎│ ◦  *${prefix}pokemon*
╎│ ◦  *${prefix}randomnime*
╎│ ◦  *${prefix}randomnime2*
╎│ ◦  *${prefix}rize*
╎│ ◦  *${prefix}sagiri*
╎│ ◦  *${prefix}sakura*
╎│ ◦  *${prefix}sasuke*
╎│ ◦  *${prefix}shina*
╎│ ◦  *${prefix}shinka*
╎│ ◦  *${prefix}shinomiya*
╎│ ◦  *${prefix}shizuka*
╎│ ◦  *${prefix}shota*
╎│ ◦  *${prefix}tejina*
╎│ ◦  *${prefix}toukachan*
╎│ ◦  *${prefix}tsunade*
╎│ ◦  *${prefix}waifu*
╎│ ◦  *${prefix}animewall*
╎│ ◦  *${prefix}yotsuba*
╎│ ◦  *${prefix}yuki*
╎│ ◦  *${prefix}yulibocil*
╎│ ◦  *${prefix}yumeko*
╎│ ◦  *${prefix}8ball*
╎│ ◦  *${prefix}tickle*
╎│ ◦  *${prefix}gecg*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}animeawoo*
╎│ ◦  *${prefix}animemegumin*
╎│ ◦  *${prefix}animeshinobu*
╎│ ◦  *${prefix}animehandhold*
╎│ ◦  *${prefix}animehighfive*
╎│ ◦  *${prefix}animecringe*
╎│ ◦  *${prefix}animedance*
╎│ ◦  *${prefix}animehappy*
╎│ ◦  *${prefix}animeglomp*
╎│ ◦  *${prefix}animeblush*
╎│ ◦  *${prefix}animesmug*
╎│ ◦  *${prefix}animewave*
╎│ ◦  *${prefix}animesmile*
╎│ ◦  *${prefix}animepoke*
╎│ ◦  *${prefix}animewink*
╎│ ◦  *${prefix}animebonk*
╎│ ◦  *${prefix}animebully*
╎│ ◦  *${prefix}animeyeet*
╎│ ◦  *${prefix}animebite*
╎│ ◦  *${prefix}animelick*
╎│ ◦  *${prefix}animekill*
╎│ ◦  *${prefix}animecry*
╎│ ◦  *${prefix}animewlp*
╎│ ◦  *${prefix}animekiss*
╎│ ◦  *${prefix}animehug*
╎│ ◦  *${prefix}animeneko*
╎│ ◦  *${prefix}animepat*
╎│ ◦  *${prefix}animeslap*
╎│ ◦  *${prefix}animecuddle*
╎│ ◦  *${prefix}animewaifu*
╎│ ◦  *${prefix}animenom*
╎│ ◦  *${prefix}animefoxgirl*
╎│ ◦  *${prefix}animegecg*
╎│ ◦  *${prefix}animetickle*
╎│ ◦  *${prefix}animefeed*
╎│ ◦  *${prefix}animeavatar*
╎│ ◦  *${prefix}genshin*
╎│ ◦  *${prefix}anime*
╎└ ◦  *${prefix}amv*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.ownermenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Owner Only 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}self*
╎│ ◦  *${prefix}clearall*
╎│ ◦  *${prefix}pinchat*
╎│ ◦  *${prefix}unpinchat*
╎│ ◦  *${prefix}gconly* 
╎│ ◦  *${prefix}public* 
╎│ ◦  *${prefix}setpppanjang* 
╎│ ◦  *${prefix}setppgcpanjang* 
╎│ ◦  *${prefix}addcase*
╎│ ◦  *${prefix}join* 
╎│ ◦  *${prefix}bctext* 
╎│ ◦  *${prefix}poll* 
╎│ ◦  *${prefix}bcimage*
╎│ ◦  *${prefix}bcvideo*
╎│ ◦  *${prefix}creategc*
╎│ ◦  *${prefix}setexif*
╎│ ◦  *${prefix}userjid*
╎│ ◦  *${prefix}setbotname*
╎│ ◦  *${prefix}setbotbio*
╎│ ◦  *${prefix}delppbot*
╎│ ◦  *${prefix}restart*
╎│ ◦  *${prefix}setppbot*
╎│ ◦  *${prefix}addprem*
╎│ ◦  *${prefix}delprem*
╎│ ◦  *${prefix}addowner*
╎│ ◦  *${prefix}pushch2*
╎│ ◦  *${prefix}delowner*
╎│ ◦  *${prefix}addvn*
╎│ ◦  *${prefix}delvn*
╎│ ◦  *${prefix}addsticker*
╎│ ◦  *${prefix}delsticker*
╎│ ◦  *${prefix}addimage*
╎│ ◦  *${prefix}delimage*
╎│ ◦  *${prefix}addvideo*
╎│ ◦  *${prefix}delvideo*
╎│ ◦  *${prefix}block*
╎│ ◦  *${prefix}unblock del*
╎│ ◦  *${prefix}leavegc*
╎│ ◦  *${prefix}pushkontak*
╎│ ◦  *${prefix}pushkontakv2*
╎│ ◦  *${prefix}pushkontakv3*
╎│ ◦  *${prefix}pushkontakv4*
╎│ ◦  *${prefix}savekontakv*
╎│ ◦  *${prefix}savekontakv2*
╎│ ◦  *${prefix}getkontak*
╎│ ◦  *${prefix}sendkontak*
╎│ ◦  *${prefix}jpm*
╎│ ◦  *${prefix}jpm2*
╎│ ◦  *${prefix}spamsms (628xx)*
╎│ ◦  *${prefix}bannedwa (628xx)*
╎│ ◦  *${prefix}unbanwa (628xx)*
╎│ ◦  *${prefix}unbanwav2 (628xx)*
╎│ ◦  *${prefix}unbanwav3 (628xx)*
╎│ ◦  *${prefix}unbanwav4 (628xx)*
╎└ ◦  *${prefix}unbanwav5 (628xx)*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.othermenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Other Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}ping*
╎│ ◦  *${prefix}readviewonce*
╎│ ◦  *${prefix}cekkhodam*
╎│ ◦  *${prefix}cekkontol*
╎│ ◦  *${prefix}paptt*
╎│ ◦  *${prefix}alkitab*
╎│ ◦  *${prefix}totalfitur*
╎│ ◦  *${prefix}menu*
╎│ ◦  *${prefix}myip*
╎│ ◦  *${prefix}reportbug*
╎│ ◦  *${prefix}listpem*
╎│ ◦  *${prefix}liststicker*
╎│ ◦  *${prefix}listimage*
╎│ ◦  *${prefix}listvideo*
╎│ ◦  *${prefix}listvn*
╎│ ◦  *${prefix}listbadword*
╎│ ◦  *${prefix}listpc*
╎│ ◦  *${prefix}listgc*
╎│ ◦  *${prefix}owner*
╎│ ◦  *${prefix}jadibot*
╎│ ◦  *${prefix}listjadibot*
╎│ ◦  *${prefix}donate*
╎│ ◦  *${prefix}friend*
╎│ ◦  *${prefix}obfuscate*
╎│ ◦  *${prefix}styletext*
╎│ ◦  *${prefix}fliptext*
╎│ ◦  *${prefix}tts*
╎│ ◦  *${prefix}say*
╎│ ◦  *${prefix}togif*
╎│ ◦  *${prefix}toqr*
╎│ ◦  *${prefix}bass*
╎│ ◦  *${prefix}blown*
╎│ ◦  *${prefix}deep*
╎│ ◦  *${prefix}earrape*
╎│ ◦  *${prefix}fast*
╎│ ◦  *${prefix}fat*
╎│ ◦  *${prefix}nightcore*
╎│ ◦  *${prefix}reverse*
╎│ ◦  *${prefix}robot*
╎│ ◦  *${prefix}slow*
╎│ ◦  *${prefix}smooth*
╎│ ◦  *${prefix}squirrel*
╎│ ◦  *${prefix}tinyurl*
╎│ ◦  *${prefix}tinyurl*
╎│ ◦  *${prefix}tovn*
╎│ ◦  *${prefix}toaudio*
╎│ ◦  *${prefix}tomp3*
╎│ ◦  *${prefix}tomp4*
╎│ ◦  *${prefix}toimg*
╎│ ◦  *${prefix}toonce*
╎│ ◦  *${prefix}sticker*
╎│ ◦  *${prefix}take*
╎│ ◦  *${prefix}emoji*
╎│ ◦  *${prefix}volume*
╎│ ◦  *${prefix}ebinary*
╎│ ◦  *${prefix}dbinary*
╎│ ◦  *${prefix}ssweb*
╎│ ◦  *${prefix}quoted*
╎└ ◦  *${prefix}runtime*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.rpgmenu = (prefix, hituet) => {
return`╔┄┄┄┄[ \`☁️Rpg Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}kerja*
╎│ ◦  *${prefix}fightnaga*
╎│ ◦  *${prefix}fightkucing*
╎│ ◦  *${prefix}fightphonix*
╎│ ◦  *${prefix}fightgriffin*
╎│ ◦  *${prefix}fightkyubi*
╎│ ◦  *${prefix}fightcentaur*
╎│ ◦  *${prefix}nabung*
╎│ ◦  *${prefix}mining*
╎│ ◦  *${prefix}bankcek*
╎│ ◦  *${prefix}maling*
╎│ ◦  *${prefix}ngewe*
╎│ ◦  *${prefix}ngocok*
╎│ ◦  *${prefix}banknabung*
╎│ ◦  *${prefix}banktarik*
╎│ ◦  *${prefix}berkebon*
╎│ ◦  *${prefix}crafting*
╎│ ◦  *${prefix}bet*
╎│ ◦  *${prefix}bonus*
╎│ ◦  *${prefix}buah*
╎│ ◦  *${prefix}nebang*
╎│ ◦  *${prefix}bekerja*
╎│ ◦  *${prefix}bansos*
╎│ ◦  *${prefix}taxy*
╎│ ◦  *${prefix}mulung*
╎│ ◦  *${prefix}berburu*
╎│ ◦  *${prefix}polisi*
╎│ ◦  *${prefix}berdagang*
╎│ ◦  *${prefix}rampok*
╎│ ◦  *${prefix}bunuh*
╎│ ◦  *${prefix}collect*
╎│ ◦  *${prefix}mancing*
╎│ ◦  *${prefix}repair*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}fight*
╎│ ◦  *${prefix}gajian*
╎│ ◦  *${prefix}upgrade*
╎│ ◦  *${prefix}transfer*
╎│ ◦  *${prefix}shop*
╎│ ◦  *${prefix}selectskill*
╎│ ◦  *${prefix}sampah*
╎│ ◦  *${prefix}roket*
╎│ ◦  *${prefix}ojek*
╎│ ◦  *${prefix}nguli*
╎│ ◦  *${prefix}pasar*
╎│ ◦  *${prefix}rob*
╎│ ◦  *${prefix}referal*
╎│ ◦  *${prefix}petshop*
╎│ ◦  *${prefix}kolam*
╎│ ◦  *${prefix}koboy*
╎│ ◦  *${prefix}leaderboard*
╎└ ◦  *${prefix}casino*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.gamemenu = (prefix, hituet) => {
return`╔┄┄┄┄[ \`☁️Game Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}tebakkata*
╎│ ◦  *${prefix}tebaktebakan*
╎│ ◦  *${prefix}tebaklirik*
╎│ ◦  *${prefix}tebakgambar*
╎│ ◦  *${prefix}tebaklagu*
╎│ ◦  *${prefix}tebakkimia*
╎│ ◦  *${prefix}asahotak*
╎│ ◦  *${prefix}siapaaku*
╎│ ◦  *${prefix}susunkaga*
╎│ ◦  *${prefix}tekateki*
╎│ ◦  *${prefix}tebakbendera*
╎│ ◦  *${prefix}tebakbenderav2*
╎│ ◦  *${prefix}tebakkabupaten*
╎│ ◦  *${prefix}caklontong*
╎│ ◦  *${prefix}family100*
╎└ ◦  *${prefix}werewolf*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.downloadmenu = (prefix) => { 
return`╔┄┄┄┄[ \`☁️Download Menu 🌟\` ]┄┄┄┄
╎┌ ◦  ${prefix}tiktok
╎│ ◦  ${prefix}tiktokslide
╎│ ◦  ${prefix}tiktokaudio
╎│ ◦  ${prefix}ytsearch
╎│ ◦  ${prefix}ttsearch
╎│ ◦  ${prefix}teraboxdl
╎│ ◦  ${prefix}aio
╎│ ◦  ${prefix}snackvideo
╎│ ◦  ${prefix}capcutdl
╎│ ◦  ${prefix}play
╎│ ◦  ${prefix}ytmp3
╎│ ◦  ${prefix}ytmp4
╎│ ◦  ${prefix}google
╎│ ◦  ${prefix}imdb
╎│ ◦  ${prefix}weather
╎│ ◦  ${prefix}wanumber
╎│ ◦  ${prefix}instagram
╎│ ◦  ${prefix}facebook
╎│ ◦  ${prefix}twittervid
╎│ ◦  ${prefix}telestick
╎│ ◦  ${prefix}spotify
╎│ ◦  ${prefix}gitclone
╎│ ◦  ${prefix}happymod
╎│ ◦  ${prefix}gdrive
╎│ ◦  ${prefix}pinterest
╎└ ◦  ${prefix}ringtone
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.groupmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Grup Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}autoaigc*
╎│ ◦  *${prefix}warcall*
╎│ ◦  *${prefix}autosimi*
╎│ ◦  *${prefix}nanochat*
╎│ ◦  *${prefix}mute*
╎│ ◦  *${prefix}setwelcome*
╎│ ◦  *${prefix}setleft*
╎│ ◦  *${prefix}welcome on/off*
╎│ ◦  *${prefix}antilink*
╎│ ◦  *${prefix}antiwame*
╎│ ◦  *${prefix}linkgc*
╎│ ◦  *${prefix}invite*
╎│ ◦  *${prefix}ephemeral*
╎│ ◦  *${prefix}delete*
╎│ ◦  *${prefix}setppgroup*
╎│ ◦  *${prefix}delppgroup*
╎│ ◦  *${prefix}setname*
╎│ ◦  *${prefix}setdesc*
╎│ ◦  *${prefix}add*
╎│ ◦  *${prefix}kick*
╎│ ◦  *${prefix}promote*
╎│ ◦  *${prefix}demote*
╎│ ◦  *${prefix}hidetag*
╎│ ◦  *${prefix}totag*
╎│ ◦  *${prefix}tagall*
╎│ ◦  *${prefix}editinfo*
╎│ ◦  *${prefix}opentime*
╎│ ◦  *${prefix}closetime*
╎│ ◦  *${prefix}resetlink*
╎│ ◦  *${prefix}getbio*
╎│ ◦  *${prefix}vote*
╎│ ◦  *${prefix}upvote*
╎│ ◦  *${prefix}downvote*
╎│ ◦  *${prefix}checkvote*
╎│ ◦  *${prefix}delvote*
╎│ ◦  *${prefix}autostickergc*
╎│ ◦  *${prefix}antilinkgc*
╎│ ◦  *${prefix}antiwame*
╎│ ◦  *${prefix}antilinkall*
╎│ ◦  *${prefix}antilinktiktok*
╎│ ◦  *${prefix}antilinkfb*
╎│ ◦  *${prefix}antilinktwitter*
╎│ ◦  *${prefix}antilinkig*
╎│ ◦  *${prefix}antilinktg*
╎│ ◦  *${prefix}antilinkytvid*
╎│ ◦  *${prefix}antilinkytch*
╎│ ◦  *${prefix}antivirus*
╎│ ◦  *${prefix}antitoxic*
╎│ ◦  *${prefix}nsfw*
╎└ ◦  *${prefix}react*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.funmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Fun Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}smeme*
╎│ ◦  *${prefix}ppcouple*
╎│ ◦  *${prefix}define*
╎│ ◦  *${prefix}qc*
╎│ ◦  *${prefix}lyrics*
╎│ ◦  *${prefix}suit*
╎│ ◦  *${prefix}math*
╎│ ◦  *${prefix}tictactoe*
╎│ ◦  *${prefix}fact*
╎│ ◦  *${prefix}truth*
╎│ ◦  *${prefix}dare*
╎│ ◦  *${prefix}couple*
╎│ ◦  *${prefix}soulmate*
╎│ ◦  *${prefix}stupidcheck*
╎│ ◦  *${prefix}handsomecheck*
╎│ ◦  *${prefix}uncleancheck*
╎│ ◦  *${prefix}hotcheck*
╎│ ◦  *${prefix}smartcheck*
╎│ ◦  *${prefix}greatcheck*
╎│ ◦  *${prefix}evilcheck*
╎│ ◦  *${prefix}dogcheck*
╎│ ◦  *${prefix}coolcheck*
╎│ ◦  *${prefix}waifucheck*
╎│ ◦  *${prefix}awesomecheck*
╎│ ◦  *${prefix}gaycheck*
╎│ ◦  *${prefix}cutecheck*
╎│ ◦  *${prefix}lesbiancheck*
╎│ ◦  *${prefix}hornycheck*
╎│ ◦  *${prefix}prettycheck*
╎│ ◦  *${prefix}lovelycheck*
╎│ ◦  *${prefix}uglycheck*
╎│ ◦  *${prefix}pick*
╎│ ◦  *${prefix}quotes*
╎│ ◦  *${prefix}can*
╎│ ◦  *${prefix}is*
╎│ ◦  *${prefix}when*
╎│ ◦  *${prefix}where*
╎│ ◦  *${prefix}what*
╎│ ◦  *${prefix}how*
╎│ ◦  *${prefix}rate*
╎│ ◦  *${prefix}cry*
╎│ ◦  *${prefix}kill*
╎│ ◦  *${prefix}hug*
╎│ ◦  *${prefix}pat*
╎│ ◦  *${prefix}lick*
╎│ ◦  *${prefix}kiss*
╎│ ◦  *${prefix}bite*
╎│ ◦  *${prefix}yeet*
╎│ ◦  *${prefix}bully*
╎│ ◦  *${prefix}bonk*
╎│ ◦  *${prefix}wink*
╎│ ◦  *${prefix}poke*
╎│ ◦  *${prefix}nom*
╎│ ◦  *${prefix}slap*
╎│ ◦  *${prefix}smile*
╎│ ◦  *${prefix}wave*
╎│ ◦  *${prefix}awoo*
╎│ ◦  *${prefix}blush*
╎│ ◦  *${prefix}smug*
╎│ ◦  *${prefix}glomp*
╎│ ◦  *${prefix}happy*
╎│ ◦  *${prefix}dance*
╎│ ◦  *${prefix}cringe*
╎│ ◦  *${prefix}cuddle*
╎│ ◦  *${prefix}highfive*
╎│ ◦  *${prefix}shinobu*
╎│ ◦  *${prefix}handhold*
╎│ ◦  *${prefix}spank*
╎│ ◦  *${prefix}tickle*
╎│ ◦  *${prefix}avatar*
╎│ ◦  *${prefix}feed*
╎│ ◦  *${prefix}foxgirl*
╎│ ◦  *${prefix}gecg*
╎│ ◦  *${prefix}checkme*
╎└ ◦  *${prefix}sound1 - sound161*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.stalkermenu = (prefix) => {
  return `╔┄┄┄┄[ \`☁️stalker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}igstalk*
╎│ ◦  *${prefix}ttstalk*
╎│ ◦  *${prefix}ffstalk*
╎│ ◦  *${prefix}mlstalk*
╎│ ◦  *${prefix}npmstalk*
╎└ ◦  *${prefix}ghstalk*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.stickermenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Sticker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}goose*
╎│ ◦  *${prefix}woof*
╎│ ◦  *${prefix}8ball*
╎│ ◦  *${prefix}lizard*
╎│ ◦  *${prefix}meow*
╎│ ◦  *${prefix}gura*
╎│ ◦  *${prefix}doge*
╎│ ◦  *${prefix}patrick*
╎└ ◦  *${prefix}lovestick*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.servermc = (prefix) => {
return`╔┄┄┄┄[ \`☁️Cek Server Mc 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}mc*
╎│ ◦  *${prefix}hyperxzbedrock*
╎│ ◦  *${prefix}hyperxzjava*
╎└ ◦  *${prefix}server*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.aimenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Open Ai 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}leptonai*
╎│ ◦  *${prefix}openai*
╎│ ◦  *${prefix}ai*
╎│ ◦  *${prefix}simi*
╎│ ◦  *${prefix}simi-simiam*
╎│ ◦  *${prefix}islamiai*
╎│ ◦  *${prefix}bard*
╎│ ◦  *${prefix}prodia*
╎│ ◦  *${prefix}diffusion-anime*
╎│ ◦  *${prefix}travel-assistant*
╎│ ◦  *${prefix}ocr*
╎│ ◦  *${prefix}guru-ai*
╎│ ◦  *${prefix}emi-ai*
╎│ ◦  *${prefix}claude-ai*
╎│ ◦  *${prefix}costume-ai*
╎│ ◦  *${prefix}hercai-ai*
╎│ ◦  *${prefix}hercai-cartoon*
╎│ ◦  *${prefix}hercai-animefy*
╎│ ◦  *${prefix}hercai-lexica*
╎│ ◦  *${prefix}hercai-prodia*
╎│ ◦  *${prefix}hercai-simurg*
╎│ ◦  *${prefix}hercai-raava*
╎│ ◦  *${prefix}hercai-shonin*
╎│ ◦  *${prefix}realistic*
╎│ ◦  *${prefix}3dmodel*
╎│ ◦  *${prefix}jadizombie*
╎│ ◦  *${prefix}blackboxai*
╎│ ◦  *${prefix}photoleapai*
╎│ ◦  *${prefix}diffusion*
╎│ ◦  *${prefix}indo-ai*
╎│ ◦  *${prefix}lamaai*
╎│ ◦  *${prefix}aivo*
╎│ ◦  *${prefix}gemini*
╎│ ◦  *${prefix}text2img*
╎│ ◦  *${prefix}absolutely*
╎│ ◦  *${prefix}dalle*
╎│ ◦  *${prefix}bingimg*
╎│ ◦  *${prefix}bingai*
╎│ ◦  *${prefix}gptimg*
╎│ ◦  *${prefix}gpt4*
╎│ ◦  *${prefix}gpt4_2*
╎│ ◦  *${prefix}anything*
╎│ ◦  *${prefix}hdvid*
╎│ ◦  *${prefix}cai*
╎│ ◦  *${prefix}youai*
╎│ ◦  *${prefix}remini*
╎│ ◦  *${prefix}jadianime*
╎│ ◦  *${prefix}removebg*
╎└ ◦  *${prefix}nulis*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.quotesmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Quotes Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}quotesanime* 
╎│ ◦  *${prefix}quotesbacot* 
╎│ ◦  *${prefix}quotesbucin* 
╎│ ◦  *${prefix}quotesmotivasi* 
╎│ ◦  *${prefix}quotesgalau* 
╎│ ◦  *${prefix}quotesgombal* 
╎│ ◦  *${prefix}quoteshacker* 
╎└ ◦  *${prefix}quotesbijak* 
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}
 
global.storemenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Store Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}list*
╎│ ◦  *${prefix}addlist*
╎│ ◦  *${prefix}dellist*
╎│ ◦  *${prefix}update*
╎│ ◦  *${prefix}jeda*
╎│ ◦  *${prefix}tambah*
╎│ ◦  *${prefix}kurang*
╎│ ◦  *${prefix}kali*
╎│ ◦  *${prefix}bagi*
╎│ ◦  *${prefix}delsetdone*
╎│ ◦  *${prefix}changedone*
╎│ ◦  *${prefix}setdone*
╎│ ◦  *${prefix}delproses*
╎│ ◦  *${prefix}changeproses*
╎│ ◦  *${prefix}setproses*
╎│ ◦  *${prefix}proses <reply chat>*
╎└ ◦  *${prefix}done <reply chat>*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.anonymousmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Anonymous Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}anonymouschat*
╎│ ◦  *${prefix}start*
╎│ ◦  *${prefix}next*
╎│ ◦  *${prefix}stop*
╎│ ◦  *${prefix}sendprofile*
╎│ ◦  *${prefix}menfess*
╎│ ◦  *${prefix}confess*
╎│ ◦  *${prefix}balasmenfess*
╎│ ◦  *${prefix}tolakmenfess*
╎└ ◦  *${prefix}stopmenfess*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.pushmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Push Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}cekidgc*
╎│ ◦  *${prefix}pushkontak*
╎│ ◦  *${prefix}pushkontakv2*
╎│ ◦  *${prefix}pushkontakv3*
╎│ ◦  *${prefix}pushkontakv4*
╎│ ◦  *${prefix}savekontakv*
╎│ ◦  *${prefix}savekontakv2*
╎│ ◦  *${prefix}getkontak*
╎│ ◦  *${prefix}sendkontak*
╎│ ◦  *${prefix}jpm*
╎└ ◦  *${prefix}jpm2*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.bugmenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Bug And War Menu🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}dansyavip*
╎│ ◦  *${prefix}dansyacrush*
╎│ ◦  *${prefix}xandroid*
╎│ ◦  *${prefix}xandroid2*
╎│ ◦  *${prefix}systemuicrash*
╎│ ◦  *${prefix}zero-bug*
╎│ ◦  *${prefix}xsysui*
╎│ ◦  *${prefix}xios*
╎│ ◦  *${prefix}xios2*
╎└ ◦  *${prefix}xgc*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.randomphotomenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Random Photo 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}aesthetic*
╎│ ◦  *${prefix}coffee*
╎│ ◦  *${prefix}wikimedia*
╎│ ◦  *${prefix}wallpaper*
╎│ ◦  *${prefix}art*
╎│ ◦  *${prefix}bts*
╎│ ◦  *${prefix}dogwoof*
╎│ ◦  *${prefix}catmeow*
╎│ ◦  *${prefix}lizardpic*
╎│ ◦  *${prefix}goosebird*
╎│ ◦  *${prefix}8ballpool*
╎│ ◦  *${prefix}cosplay*
╎│ ◦  *${prefix}hacker*
╎│ ◦  *${prefix}cyber*
╎│ ◦  *${prefix}gamewallpaper*
╎│ ◦  *${prefix}islamic*
╎│ ◦  *${prefix}jennie*
╎│ ◦  *${prefix}jiso*
╎│ ◦  *${prefix}satanic*
╎│ ◦  *${prefix}justina*
╎│ ◦  *${prefix}cartoon*
╎│ ◦  *${prefix}pentol*
╎│ ◦  *${prefix}cat*
╎│ ◦  *${prefix}kpop*
╎│ ◦  *${prefix}exo*
╎│ ◦  *${prefix}lisa*
╎│ ◦  *${prefix}space*
╎│ ◦  *${prefix}car*
╎│ ◦  *${prefix}technology*
╎│ ◦  *${prefix}bike*
╎│ ◦  *${prefix}shortquote*
╎│ ◦  *${prefix}antiwork*
╎│ ◦  *${prefix}hacking*
╎│ ◦  *${prefix}boneka*
╎│ ◦  *${prefix}rose*
╎│ ◦  *${prefix}ryujin*
╎│ ◦  *${prefix}ulzzangboy*
╎│ ◦  *${prefix}ulzzanggirl*
╎│ ◦  *${prefix}wallml*
╎│ ◦  *${prefix}wallphone*
╎│ ◦  *${prefix}mountain*
╎│ ◦  *${prefix}goose*
╎│ ◦  *${prefix}profilepic*
╎│ ◦  *${prefix}couplepic*
╎│ ◦  *${prefix}programming*
╎│ ◦  *${prefix}pubg*
╎│ ◦  *${prefix}blackpink*
╎│ ◦  *${prefix}randomboy*
╎│ ◦  *${prefix}randomgirl*
╎│ ◦  *${prefix}hijab*
╎│ ◦  *${prefix}chinese*
╎│ ◦  *${prefix}indo*
╎│ ◦  *${prefix}japanese*
╎│ ◦  *${prefix}korean*
╎│ ◦  *${prefix}malay*
╎│ ◦  *${prefix}thai*
╎└ ◦  *${prefix}vietnamese*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.randomvideomenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Random Video 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}tiktokgirl*
╎│ ◦  *${prefix}tiktoknukthy*
╎│ ◦  *${prefix}tiktokkayes*
╎│ ◦  *${prefix}tiktokpanrika*
╎│ ◦  *${prefix}tiktoknotnot*
╎│ ◦  *${prefix}tiktokghea*
╎│ ◦  *${prefix}tiktoksantuy*
╎└ ◦  *${prefix}tiktokbocil*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.primbonmenu = (prefix) => {
  return `╔┄┄┄┄[ \`☁️Primbon Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}artimimpi*
╎│ ◦  *${prefix}artinama*
╎│ ◦  *${prefix}ramaljodoh*
╎│ ◦  *${prefix}ramaljodohbali*
╎│ ◦  *${prefix}suamiistri*
╎│ ◦  *${prefix}ramalcinta*
╎│ ◦  *${prefix}cocoknama*
╎│ ◦  *${prefix}pasangan*
╎│ ◦  *${prefix}jadiannikah*
╎│ ◦  *${prefix}sifatusaha*
╎│ ◦  *${prefix}rezeki*
╎│ ◦  *${prefix}pekerjaan*
╎│ ◦  *${prefix}nasib*
╎│ ◦  *${prefix}penyakit*
╎│ ◦  *${prefix}tarot*
╎│ ◦  *${prefix}fengshui*
╎│ ◦  *${prefix}haribaik*
╎│ ◦  *${prefix}harisangar*
╎│ ◦  *${prefix}harisial*
╎│ ◦  *${prefix}nagahari*
╎│ ◦  *${prefix}arahrezeki*
╎│ ◦  *${prefix}peruntungan*
╎│ ◦  *${prefix}weton*
╎│ ◦  *${prefix}karakter*
╎│ ◦  *${prefix}keberuntungan*
╎│ ◦  *${prefix}memancing*
╎│ ◦  *${prefix}masasubur*
╎│ ◦  *${prefix}zodiak*
╎└ ◦  *${prefix}shio*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.islamimenu= (prefix) => {
return`╔┄┄┄┄[ \`☁️Islami Menu 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}kisahnabi*
╎│ ◦  *${prefix}asmaulhusna*
╎│ ◦  *${prefix}bacaansholat*
╎│ ◦  *${prefix}audiosurah*
╎│ ◦  *${prefix}ayatkursi*
╎│ ◦  *${prefix}doaharian*
╎│ ◦  *${prefix}niatsholat*
╎│ ◦  *${prefix}quotesislami*
╎└ ◦  *${prefix}doatahlil*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.textpromenu = (prefix) => {
return`╔┄┄┄┄[ \`☁️Textpro Maker 🌟\` ]┄┄┄┄
╎┌ ◦  *${prefix}sertifikattolol*
╎│ ◦  *${prefix}attp*
╎│ ◦  *${prefix}ttp*
╎│ ◦  *${prefix}ktpmaker*
╎│ ◦  *${prefix}carimusik*
╎│ ◦  *${prefix}candy*
╎│ ◦  *${prefix}christmas*
╎│ ◦  *${prefix}3dchristmas*
╎│ ◦  *${prefix}sparklechristmas*
╎│ ◦  *${prefix}deepsea*
╎│ ◦  *${prefix}scifi*
╎│ ◦  *${prefix}rainbow*
╎│ ◦  *${prefix}waterpipe*
╎│ ◦  *${prefix}spooky*
╎│ ◦  *${prefix}pencil*
╎│ ◦  *${prefix}circuit*
╎│ ◦  *${prefix}discovery*
╎│ ◦  *${prefix}metalic*
╎│ ◦  *${prefix}fiction*
╎│ ◦  *${prefix}demon*
╎│ ◦  *${prefix}transformer*
╎│ ◦  *${prefix}berry*
╎│ ◦  *${prefix}thunder*
╎│ ◦  *${prefix}magma*
╎│ ◦  *${prefix}3dstone*
╎│ ◦  *${prefix}neonlight*
╎│ ◦  *${prefix}glitch*
╎│ ◦  *${prefix}harrypotter*
╎│ ◦  *${prefix}brokenglass*
╎│ ◦  *${prefix}papercut*
╎│ ◦  *${prefix}watercolor*
╎│ ◦  *${prefix}multicolor*
╎│ ◦  *${prefix}neondevil*
╎│ ◦  *${prefix}underwater*
╎│ ◦  *${prefix}graffitibike*
╎│ ◦  *${prefix}snow*
╎│ ◦  *${prefix}cloud*
╎│ ◦  *${prefix}honey*
╎│ ◦  *${prefix}ice*
╎│ ◦  *${prefix}fruitjuice*
╎│ ◦  *${prefix}biscuit*
╎│ ◦  *${prefix}wood*
╎│ ◦  *${prefix}chocolate*
╎│ ◦  *${prefix}strawberry*
╎│ ◦  *${prefix}matrix*
╎│ ◦  *${prefix}blood*
╎│ ◦  *${prefix}dropwater*
╎│ ◦  *${prefix}toxic*
╎│ ◦  *${prefix}lava*
╎│ ◦  *${prefix}rock*
╎│ ◦  *${prefix}bloodglas*
╎│ ◦  *${prefix}hallowen*
╎│ ◦  *${prefix}darkgold*
╎│ ◦  *${prefix}joker*
╎│ ◦  *${prefix}wicker*
╎│ ◦  *${prefix}firework*
╎│ ◦  *${prefix}skeleton*
╎│ ◦  *${prefix}blackpink*
╎│ ◦  *${prefix}sand*
╎│ ◦  *${prefix}glue*
╎│ ◦  *${prefix}1917*
╎│ ◦  *${prefix}leaves*
╎│ ◦  *${prefix}retro*
╎│ ◦  *${prefix}pornhub*
╎│ ◦  *${prefix}8bit*
╎│ ◦  *${prefix}batman*
╎│ ◦  *${prefix}3dbox*
╎│ ◦  *${prefix}lion*
╎│ ◦  *${prefix}3davengers*
╎│ ◦  *${prefix}window*
╎│ ◦  *${prefix}3dspace*
╎│ ◦  *${prefix}bokeh*
╎│ ◦  *${prefix}holographic*
╎│ ◦  *${prefix}thewall*
╎│ ◦  *${prefix}carbon*
╎│ ◦  *${prefix}whitebear*
╎│ ◦  *${prefix}metallic*
╎│ ◦  *${prefix}steel*
╎│ ◦  *${prefix}fabric*
╎│ ◦  *${prefix}ancient*
╎└ ◦  *${prefix}marvel*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.photooxymenu = (prefix) => {
return`╔┄┄┄┄[ *\`乂 ᴘ ʜ ᴏ ᴛ ᴏ ᴏ x ʏ - ᴍ ᴀ ᴋ ᴇ ʀ 乂\`* 』━◧
╎┌ ◦  *${prefix}shadow*
╎┌ ◦  *${prefix}write*
╎┌ ◦  *${prefix}romantic*
╎┌ ◦  *${prefix}burnpaper*
╎┌ ◦  *${prefix}smoke*
╎┌ ◦  *${prefix}narutobanner*
╎┌ ◦  *${prefix}love*
╎┌ ◦  *${prefix}undergrass*
╎┌ ◦  *${prefix}doublelove*
╎┌ ◦  *${prefix}coffecup*
╎┌ ◦  *${prefix}underwaterocean*
╎┌ ◦  *${prefix}smokyneon*
╎┌ ◦  *${prefix}starstext*
╎┌ ◦  *${prefix}rainboweffect*
╎┌ ◦  *${prefix}balloontext*
╎┌ ◦  *${prefix}metalliceffect*
╎┌ ◦  *${prefix}embroiderytext*
╎┌ ◦  *${prefix}flamingtext*
╎┌ ◦  *${prefix}stonetext*
╎┌ ◦  *${prefix}writeart*
╎┌ ◦  *${prefix}summertext*
╎┌ ◦  *${prefix}wolfmetaltext*
╎┌ ◦  *${prefix}nature3dtext*
╎┌ ◦  *${prefix}rosestext*
╎┌ ◦  *${prefix}naturetypography*
╎┌ ◦  *${prefix}quotesunder*
╎┌ ◦  *${prefix}shinetext*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.ephoto360menu = (prefix) => {
return`┏━『 *\`乂 ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ 乂\`* 』━◧
╎┌ ◦  *${prefix}glitchtext*
╎┌ ◦  *${prefix}writetext*
╎┌ ◦  *${prefix}advancedglow*
╎┌ ◦  *${prefix}typographytext*
╎┌ ◦  *${prefix}pixelglitch*
╎┌ ◦  *${prefix}neonglitch*
╎┌ ◦  *${prefix}flagtext*
╎┌ ◦  *${prefix}flag3dtext*
╎┌ ◦  *${prefix}deletingtext*
╎┌ ◦  *${prefix}blackpinkstyle*
╎┌ ◦  *${prefix}glowingtext*
╎┌ ◦  *${prefix}underwatertext*
╎┌ ◦  *${prefix}logomaker*
╎┌ ◦  *${prefix}cartoonstyle*
╎┌ ◦  *${prefix}papercutstyle*
╎┌ ◦  *${prefix}watercolortext*
╎┌ ◦  *${prefix}effectclouds*
╎┌ ◦  *${prefix}blackpinklogo*
╎┌ ◦  *${prefix}gradienttext*
╎┌ ◦  *${prefix}summerbeach*
╎┌ ◦  *${prefix}luxurygold*
╎┌ ◦  *${prefix}multicoloredneon*
╎┌ ◦  *${prefix}sandsummer*
╎┌ ◦  *${prefix}galaxywallpaper*
╎┌ ◦  *${prefix}1917style*
╎┌ ◦  *${prefix}makingneon*
╎┌ ◦  *${prefix}royaltext*
╎┌ ◦  *${prefix}freecreate*
╎┌ ◦  *${prefix}galaxystyle*
╎┌ ◦  *${prefix}lighteffects*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

global.nsfwmenu = (prefix) => {
return`╔┄┄┄┄[ *\`乂 ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ 乂\`* 』━◧
╎┌ ◦  *${prefix}hentai*
╎┌ ◦  *${prefix}gifhentai*
╎┌ ◦  *${prefix}gifblowjob*
╎┌ ◦  *${prefix}hentaivid*
╎┌ ◦  *${prefix}hneko*
╎┌ ◦  *${prefix}nwaifu*
╎┌ ◦  *${prefix}animespank*
╎┌ ◦  *${prefix}trap*
╎┌ ◦  *${prefix}gasm*
╎┌ ◦  *${prefix}ahegao*
╎┌ ◦  *${prefix}ass*
╎┌ ◦  *${prefix}bdsm*
╎┌ ◦  *${prefix}blowjob*
╎┌ ◦  *${prefix}cuckold*
╎┌ ◦  *${prefix}cum*
╎┌ ◦  *${prefix}milf*
╎┌ ◦  *${prefix}eba*
╎┌ ◦  *${prefix}ero*
╎┌ ◦  *${prefix}femdom*
╎┌ ◦  *${prefix}foot*
╎┌ ◦  *${prefix}gangbang*
╎┌ ◦  *${prefix}glasses*
╎┌ ◦  *${prefix}jahy*
╎┌ ◦  *${prefix}masturbation*
╎┌ ◦  *${prefix}manga*
╎┌ ◦  *${prefix}neko-hentai*
╎┌ ◦  *${prefix}neko-hentai2*
╎┌ ◦  *${prefix}nsfwloli*
╎┌ ◦  *${prefix}orgy*
╎┌ ◦  *${prefix}panties*
╎┌ ◦  *${prefix}pussy*
╎┌ ◦  *${prefix}tentacles*
╎┌ ◦  *${prefix}thighs*
╎┌ ◦  *${prefix}yuri*
╎┌ ◦  *${prefix}zettai*
╎┌ ◦  *${prefix}xnxxsearch*
╎┌ ◦  *${prefix}xnxxdl*
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
