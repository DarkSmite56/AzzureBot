const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Owner ]* ── .々─ᯤ
│    =〆  ${prefix}delbadword
│    =〆  ${prefix}autoread
│    =〆  ${prefix}pushch
│    =〆  ${prefix}pushchvn
│    =〆  ${prefix}pushgc
│    =〆  ${prefix}pushstickergc
│    =〆  ${prefix}simih
│    =〆  ${prefix}autobio
│    =〆  ${prefix}autotype
│    =〆  ${prefix}playauch
│    =〆  ${prefix}pushspvn
│    =〆  ${prefix}pushch
│    =〆  ${prefix}pushchvn
│    =〆  ${prefix}pushgc
│    =〆  ${prefix}pushstickergc
│    =〆  ${prefix}simih
│    =〆  ${prefix}autorecord
│    =〆  ${prefix}autorecordtype
│    =〆  ${prefix}autoswview
│    =〆  ${prefix}setautoblock
│    =〆  ${prefix}setantiforeign
│    =〆  ${prefix}autoblock
│    =〆  ${prefix}onlygc
│    =〆  ${prefix}onlypc
│    =〆  ${prefix}onlyindia
│    =〆  ${prefix}onlyindo
│    =〆  ${prefix}anticall
│    =〆  ${prefix}self
│    =〆  ${prefix}public
│    =〆  ${prefix}join
│    =〆  ${prefix}poll
│    =〆  ${prefix}spam
│    =〆  ${prefix}bc
│    =〆  ${prefix}bcgroup
│    =〆  ${prefix}setimgmenul
│    =〆  ${prefix}setvidmenu
│    =〆  ${prefix}setgifmenu
│    =〆  ${prefix}setreply
│    =〆  ${prefix}resethit
│    =〆  ${prefix}resetuser
│    =〆  ${prefix}creategc
│    =〆  ${prefix}setexif
│    =〆  ${prefix}getexif
│    =〆  ${prefix}getautoblocknumber
│    =〆  ${prefix}getantiforeignnumber
│    =〆  ${prefix}userjid
│    =〆  ${prefix}setbotbio
│    =〆  ${prefix}delppbot
│    =〆  ${prefix}shutdown
│    =〆  ${prefix}setppbot
│    =〆  ${prefix}addprem
│    =〆  ${prefix}delprem
│    =〆  ${prefix}addowner
│    =〆  ${prefix}delowner
│    =〆  ${prefix}addvn
│    =〆  ${prefix}addapk
│    =〆  ${prefix}addzip
│    =〆  ${prefix}addpdf
│    =〆  ${prefix}delapk
│    =〆  ${prefix}delzip
│    =〆  ${prefix}delpdfl
│    =〆  ${prefix}delvnl
│    =〆  ${prefix}addsticker
│    =〆  ${prefix}delsticker
│    =〆  ${prefix}addimage
│    =〆  ${prefix}delimage
│    =〆  ${prefix}addvideo
│    =〆  ${prefix}delvideo
│    =〆  ${prefix}upswtext
│    =〆  ${prefix}upswvideo
│    =〆  ${prefix}upswimage
│    =〆  ${prefix}upswaudio
│    =〆  ${prefix}autosticker
│    =〆  ${prefix}block
│    =〆  ${prefix}unblock
│    =〆  ${prefix}leavegc
│    =〆  ${prefix}pushcontact
│    =〆  ${prefix}pushcontactv2
│    =〆  ${prefix}pushcontactv3
│    =〆  ${prefix}jpm
│    =〆  ${prefix}checkmember
│    =〆  ${prefix}post
│    =〆  ${prefix}clearchat
│    =〆  ${prefix}setprefix
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Server Mc ]* ── .々─ᯤ
│    =〆  ${prefix}mc
│    =〆  ${prefix}server
│    =〆  ${prefix}hyperxzbedrock
│    =〆  ${prefix}hyperxzjava
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Quotes ]* ── .々─ᯤ
│    =〆  ${prefix}quotesanime
│    =〆  ${prefix}quotesbucin
│    =〆  ${prefix}quotesbacot
│    =〆  ${prefix}quotesgalau
│    =〆  ${prefix}quotesgombal
│    =〆  ${prefix}quoteshacker
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ islami ]* ── .々─ᯤ
│    =〆  ${prefix}kisahnabi
│    =〆  ${prefix}asmaulhusna
│    =〆  ${prefix}bacaansholat
│    =〆  ${prefix}audiosurah
│    =〆  ${prefix}islamiai
│    =〆  ${prefix}islamal
│    =〆  ${prefix}doaharian
│    =〆  ${prefix}niatsholat
│    =〆  ${prefix}quotesislami
│    =〆  ${prefix}doatahlil
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Group ]* ── .々─ᯤ
│    =〆  ${prefix}antibot
│    =〆  ${prefix}antiviewonce
│    =〆  ${prefix}readviewonce
│    =〆  ${prefix}welcome
│    =〆  ${prefix}adminevent
│    =〆  ${prefix}groupevent
│    =〆  ${prefix}antiforeign
│    =〆  ${prefix}antimedia
│    =〆  ${prefix}antiaudio
│    =〆  ${prefix}antivideo
│    =〆  ${prefix}antiimage
│    =〆  ${prefix}antidocument
│    =〆  ${prefix}antilocation
│    =〆  ${prefix}anticontact
│    =〆  ${prefix}antisticker
│    =〆  ${prefix}antipoll
│    =〆  ${prefix}antilink
│    =〆  ${prefix}antilinkgc
│    =〆  ${prefix}antilinkch
│    =〆  ${prefix}antilinknumber
│    =〆  ${prefix}antipromotion
│    =〆  ${prefix}antivirtex
│    =〆  ${prefix}grouplink
│    =〆  ${prefix}listadmin
│    =〆  ${prefix}invite
│    =〆  ${prefix}ephemeral
│    =〆  ${prefix}delete
│    =〆  ${prefix}setppgroup
│    =〆  ${prefix}delppgroup
│    =〆  ${prefix}setnamegc
│    =〆  ${prefix}setdesc
│    =〆  ${prefix}add
│    =〆  ${prefix}kick
│    =〆  ${prefix}promote
│    =〆  ${prefix}demote
│    =〆  ${prefix}kickall
│    =〆  ${prefix}promoteall
│    =〆  ${prefix}demoteall
│    =〆  ${prefix}getcontact
│    =〆  ${prefix}savecontact
│    =〆  ${prefix}sendcontact
│    =〆  ${prefix}contactag
│    =〆  ${prefix}hidetag
│    =〆  ${prefix}totag
│    =〆  ${prefix}tagall
│    =〆  ${prefix}editinfo
│    =〆  ${prefix}opentime
│    =〆  ${prefix}closetime
│    =〆  ${prefix}resetlink
│    =〆  ${prefix}getbio
│    =〆  ${prefix}vote
│    =〆  ${prefix}upvote
│    =〆  ${prefix}downvote
│    =〆  ${prefix}checkvote
│    =〆  ${prefix}delvote
│    =〆  ${prefix}antivirus
│    =〆  ${prefix}antibadword
│    =〆  ${prefix}nsfw
│    =〆  ${prefix}react
│    =〆  ${prefix}getjoinrequest
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Search ]* ── .々─ᯤ
│    =〆  ${prefix}google
│    =〆  ${prefix}wikipedia
│    =〆  ${prefix}ytsearch
│    =〆  ${prefix}emotecraft
│    =〆  ${prefix}applesearch
│    =〆  ${prefix}apksearch
│    =〆  ${prefix}apdl
│    =〆  ${prefix}spotify
│    =〆  ${prefix}wattpad
│    =〆  ${prefix}mcpedl
│    =〆  ${prefix}pinterest
│    =〆  ${prefix}tvonenews
│    =〆  ${prefix}sticker
│    =〆  ${prefix}qcsearch
│    =〆  ${prefix}wanumber
│    =〆  ${prefix}friend
│    =〆  ${prefix}lyrics
│    =〆  ${prefix}pixiv
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Download ]* ── .々─ᯤ
│    =〆  ${prefix}splay
│    =〆  ${prefix}itunes
│    =〆  ${prefix}play
│    =〆  ${prefix}playap
│    =〆  ${prefix}ytmp3
│    =〆  ${prefix}ytmp4
│    =〆  ${prefix}tiktok
│    =〆  ${prefix}capcut
│    =〆  ${prefix}tiktokvideo
│    =〆  ${prefix}igdl
│    =〆  ${prefix}facebook
│    =〆  ${prefix}twitter
│    =〆  ${prefix}apk
│    =〆  ${prefix}mega
│    =〆  ${prefix}mediafire
│    =〆  ${prefix}google
│    =〆  ${prefix}gimage
│    =〆  ${prefix}weather
│    =〆  ${prefix}splay
│    =〆  ${prefix}gitclone
│    =〆  ${prefix}happymod
│    =〆  ${prefix}gdrive
│    =〆  ${prefix}pindl
│    =〆  ${prefix}ringtone
│    =〆  ${prefix}autodownload
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Tool Menu ]* ── .々─ᯤ
│    =〆  ${prefix}obfuscate
│    =〆  ${prefix}styletext
│    =〆  ${prefix}fliptext
│    =〆  ${prefix}tts
│    =〆  ${prefix}say
│    =〆  ${prefix}togif
│    =〆  ${prefix}toqr
│    =〆  ${prefix}bass
│    =〆  ${prefix}blown
│    =〆  ${prefix}deep
│    =〆  ${prefix}earrape
│    =〆  ${prefix}fast
│    =〆  ${prefix}fat
│    =〆  ${prefix}nightcore
│    =〆  ${prefix}reverse
│    =〆  ${prefix}robot
│    =〆  ${prefix}slow
│    =〆  ${prefix}smooth
│    =〆  ${prefix}squirrel
│    =〆  ${prefix}tinyurl
│    =〆  ${prefix}brat
│    =〆  ${prefix}tovn
│    =〆  ${prefix}t
│    =〆  ${prefix}toaudio
│    =〆  ${prefix}tomp3
│    =〆  ${prefix}tomp4
│    =〆  ${prefix}toimg
│    =〆  ${prefix}toonce
│    =〆  ${prefix}toptv
│    =〆  ${prefix}sticker
│    =〆  ${prefix}qc
│    =〆  ${prefix}smeme
│    =〆  ${prefix}smeta
│    =〆  ${prefix}take
│    =〆  ${prefix}emojimix
│    =〆  ${prefix}volaudio
│    =〆  ${prefix}volvideo
│    =〆  ${prefix}ebinary
│    =〆  ${prefix}dbinary
│    =〆  ${prefix}ssweb
│    =〆  ${prefix}quoted
│    =〆  ${prefix}translate
│    =〆  ${prefix}get
│    =〆  ${prefix}tourl
│    =〆  ${prefix}write
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ List Menu ]* ── .々─ᯤ
│    =〆  ${prefix}listprem
│    =〆  ${prefix}listowner
│    =〆  ${prefix}liststicker
│    =〆  ${prefix}listimage
│    =〆  ${prefix}listvideo
│    =〆  ${prefix}listvn
│    =〆  ${prefix}listapk
│    =〆  ${prefix}listzip
│    =〆  ${prefix}listpdf
│    =〆  ${prefix}listbadword
│    =〆  ${prefix}listpc
│    =〆  ${prefix}listgc
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Random Photo ]* ── .々─ᯤ
│    =〆  ${prefix}aesthetic
│    =〆  ${prefix}coffee
│    =〆  ${prefix}wikimedia
│    =〆  ${prefix}wallpaper
│    =〆  ${prefix}art
│    =〆  ${prefix}bts
│    =〆  ${prefix}dogwoof
│    =〆  ${prefix}catmeow
│    =〆  ${prefix}lizardpic
│    =〆  ${prefix}goosebird
│    =〆  ${prefix}8ballpool
│    =〆  ${prefix}cosplay
│    =〆  ${prefix}hacker
│    =〆  ${prefix}cyber
│    =〆  ${prefix}gamewallpaper
│    =〆  ${prefix}islamic
│    =〆  ${prefix}jennie
│    =〆  ${prefix}jiso
│    =〆  ${prefix}satanic
│    =〆  ${prefix}justina
│    =〆  ${prefix}cartoon
│    =〆  ${prefix}pentol
│    =〆  ${prefix}cat
│    =〆  ${prefix}kpop
│    =〆  ${prefix}exo
│    =〆  ${prefix}lisa
│    =〆  ${prefix}space
│    =〆  ${prefix}car
│    =〆  ${prefix}technology
│    =〆  ${prefix}bike
│    =〆  ${prefix}shortquote
│    =〆  ${prefix}antiwork
│    =〆  ${prefix}hacking
│    =〆  ${prefix}boneka
│    =〆  ${prefix}rose
│    =〆  ${prefix}ryujin
│    =〆  ${prefix}ulzzangboy
│    =〆  ${prefix}ulzzanggirl
│    =〆  ${prefix}wallml
│    =〆  ${prefix}wallphone
│    =〆  ${prefix}mountain
│    =〆  ${prefix}goose
│    =〆  ${prefix}profilepic
│    =〆  ${prefix}couplepp
│    =〆  ${prefix}programming
│    =〆  ${prefix}pubg
│    =〆  ${prefix}blackpink
│    =〆  ${prefix}randomboy  
│    =〆  ${prefix}randomgirl
│    =〆  ${prefix}hijab  
│    =〆  ${prefix}chinese
│    =〆  ${prefix}indo
│    =〆  ${prefix}japanese
│    =〆  ${prefix}korean
│    =〆  ${prefix}malay
│    =〆  ${prefix}thai
│    =〆  ${prefix}vietnamese
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Stalker ]* ── .々─ᯤ
│    =〆  ${prefix}tiktokstalk
│    =〆  ${prefix}mlstalk
│    =〆  ${prefix}npmstalk
│    =〆  ${prefix}ghstalk
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ OpenAI ]* ── .々─ᯤ
│    =〆  ${prefix}ai
│    =〆  ${prefix}gemini
│    =〆  ${prefix}islamiai
│    =〆  Yuta
│    =〆  Deku
│    =〆  ${prefix}gpt4
│    =〆  ${prefix}simi
│    =〆  ${prefix}ai
│    =〆  ${prefix}remini
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Game ]* ── .々─ᯤ
│    =〆  ${prefix}truth
│    =〆  ${prefix}dare
│    =〆  ${prefix}suit
│    =〆  ${prefix}tictactoe
│    =〆  ${prefix}math
│    =〆  ${prefix}playbomb
│    =〆  ${prefix}rob
│    =〆  ${prefix}slot
│    =〆  ${prefix}dice 
│    =〆  ${prefix}profile
│    =〆  ${prefix}claim
│    =〆  ${prefix}tmoney
│    =〆  ${prefix}tflimit
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Fun ]* ── .々─ᯤ
│    =〆  ${prefix}define
│    =〆  ${prefix}readmore
│    =〆  ${prefix}fact
│    =〆  ${prefix}couple
│    =〆  ${prefix}soulmate
│    =〆  ${prefix}stupidcheck
│    =〆  ${prefix}handsomecheck
│    =〆  ${prefix}uncleancheck
│    =〆  ${prefix}hotcheck
│    =〆  ${prefix}smartcheck
│    =〆  ${prefix}greatcheck
│    =〆  ${prefix}evilcheck
│    =〆  ${prefix}dogcheck
│    =〆  ${prefix}coolcheck
│    =〆  ${prefix}waifucheck
│    =〆  ${prefix}awesomecheck
│    =〆  ${prefix}gaycheck
│    =〆  ${prefix}cutecheck
│    =〆  ${prefix}lesbiancheck
│    =〆  ${prefix}hornycheck
│    =〆  ${prefix}prettycheck
│    =〆  ${prefix}lovelycheck
│    =〆  ${prefix}uglycheck
│    =〆  ${prefix}pick
│    =〆  ${prefix}pickupline
│    =〆  ${prefix}quotes
│    =〆  ${prefix}can
│    =〆  ${prefix}is
│    =〆  ${prefix}when
│    =〆  ${prefix}where
│    =〆  ${prefix}what
│    =〆  ${prefix}how
│    =〆  ${prefix}rate
│    =〆  ${prefix}cry
│    =〆  ${prefix}kill
│    =〆  ${prefix}hug
│    =〆  ${prefix}pat
│    =〆  ${prefix}lick 
│    =〆  ${prefix}kiss
│    =〆  ${prefix}bite
│    =〆  ${prefix}yeet
│    =〆  ${prefix}bully
│    =〆  ${prefix}bonk
│    =〆  ${prefix}wink
│    =〆  ${prefix}poke
│    =〆  ${prefix}nom
│    =〆  ${prefix}slap
│    =〆  ${prefix}smile 
│    =〆  ${prefix}wave
│    =〆  ${prefix}awoo
│    =〆  ${prefix}blush
│    =〆  ${prefix}smug
│    =〆  ${prefix}glomp 
│    =〆  ${prefix}happy
│    =〆  ${prefix}dance
│    =〆  ${prefix}cringe
│    =〆  ${prefix}cuddle
│    =〆  ${prefix}highfive 
│    =〆  ${prefix}handhold
│    =〆  ${prefix}spank
│    =〆  ${prefix}tickle
│    =〆  ${prefix}feed
│    =〆  ${prefix}checkme
│    =〆  ${prefix}sound1 - sound161
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Sticker ]* ── .々─ᯤ
│    =〆  ${prefix}goose
│    =〆  ${prefix}woof
│    =〆  ${prefix}8ball
│    =〆  ${prefix}lizard
│    =〆  ${prefix}meow
│    =〆  ${prefix}gura
│    =〆  ${prefix}telestick
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Anime ]* ── .々─ᯤ
│    =〆  ${prefix}samehadakudl
│    =〆  ${prefix}samehadakueps
│    =〆  ${prefix}otakudesulatest
│    =〆  ${prefix}otakudesu
│    =〆  ${prefix}kusonime
│    =〆  ${prefix}yuta
│    =〆  ${prefix}samehadakusrch
│    =〆  ${prefix}zerochan
│    =〆  ${prefix}livechart
│    =〆  ${prefix}infoanime
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Database ]* ── .々─ᯤ
│    =〆  ${prefix}setcmd
│    =〆  ${prefix}delcmd
│    =〆  ${prefix}listcmd
│    =〆  ${prefix}lockcmd
│    =〆  ${prefix}addmsg
│    =〆  ${prefix}delmsg
│    =〆  ${prefix}getmsg
│    =〆  ${prefix}listmsg
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Store ]* ── .々─ᯤ
│    =〆  ${prefix}list
│    =〆  ${prefix}store
│    =〆  ${prefix}shop
│    =〆  ${prefix}addlist
│    =〆  ${prefix}dellist
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Religon ]* ── .々─ᯤ
│    =〆  ${prefix}bible
│    =〆  ${prefix}quran
│    =〆  ${prefix}gita
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Other ]* ── .々─ᯤ
│    =〆  ${prefix}ping
│    =〆  ${prefix}menu
│    =〆  ${prefix}myip
│    =〆  ${prefix}repo
│    =〆  ${prefix}reportbug
│    =〆  ${prefix}idgroup
│    =〆  ${prefix}owner
│    =〆  ${prefix}infoleo
│    =〆  ${prefix}infobot
│    =〆  ${prefix}infoowner
│    =〆  ${prefix}rentbot
│    =〆  ${prefix}runtime
│    =〆  ${prefix}confess
│    =〆  ${prefix}react
│    =〆  ${prefix}q
│    =〆  ${prefix}inspect
│    =〆  ${prefix}tagme
⏤͟͟͞͞╳────────── .✦`}

global.ownermenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Owner ]* ── .々─ᯤ
│    =〆  ${prefix}delbadword
│    =〆  ${prefix}autoread
│    =〆  ${prefix}pushch
│    =〆  ${prefix}pushchvn
│    =〆  ${prefix}pushgc
│    =〆  ${prefix}pushstickergc
│    =〆  ${prefix}simih
│    =〆  ${prefix}autobio
│    =〆  ${prefix}autotype
│    =〆  ${prefix}playauch
│    =〆  ${prefix}pushspvn
│    =〆  ${prefix}pushch
│    =〆  ${prefix}pushchvn
│    =〆  ${prefix}pushgc
│    =〆  ${prefix}pushstickergc
│    =〆  ${prefix}simih
│    =〆  ${prefix}autorecord
│    =〆  ${prefix}autorecordtype
│    =〆  ${prefix}autoswview
│    =〆  ${prefix}setautoblock
│    =〆  ${prefix}setantiforeign
│    =〆  ${prefix}autoblock
│    =〆  ${prefix}onlygc
│    =〆  ${prefix}onlypc
│    =〆  ${prefix}onlyindia
│    =〆  ${prefix}onlyindo
│    =〆  ${prefix}anticall
│    =〆  ${prefix}self
│    =〆  ${prefix}public
│    =〆  ${prefix}join
│    =〆  ${prefix}poll
│    =〆  ${prefix}spam
│    =〆  ${prefix}bc
│    =〆  ${prefix}bcgroup
│    =〆  ${prefix}setimgmenul
│    =〆  ${prefix}setvidmenu
│    =〆  ${prefix}setgifmenu
│    =〆  ${prefix}setreply
│    =〆  ${prefix}resethit
│    =〆  ${prefix}resetuser
│    =〆  ${prefix}creategc
│    =〆  ${prefix}setexif
│    =〆  ${prefix}getexif
│    =〆  ${prefix}getautoblocknumber
│    =〆  ${prefix}getantiforeignnumber
│    =〆  ${prefix}userjid
│    =〆  ${prefix}setbotbio
│    =〆  ${prefix}delppbot
│    =〆  ${prefix}shutdown
│    =〆  ${prefix}setppbot
│    =〆  ${prefix}addprem
│    =〆  ${prefix}delprem
│    =〆  ${prefix}addowner
│    =〆  ${prefix}delowner
│    =〆  ${prefix}addvn
│    =〆  ${prefix}addapk
│    =〆  ${prefix}addzip
│    =〆  ${prefix}addpdf
│    =〆  ${prefix}delapk
│    =〆  ${prefix}delzip
│    =〆  ${prefix}delpdfl
│    =〆  ${prefix}delvnl
│    =〆  ${prefix}addsticker
│    =〆  ${prefix}delsticker
│    =〆  ${prefix}addimage
│    =〆  ${prefix}delimage
│    =〆  ${prefix}addvideo
│    =〆  ${prefix}delvideo
│    =〆  ${prefix}upswtext
│    =〆  ${prefix}upswvideo
│    =〆  ${prefix}upswimage
│    =〆  ${prefix}upswaudio
│    =〆  ${prefix}autosticker
│    =〆  ${prefix}block
│    =〆  ${prefix}unblock
│    =〆  ${prefix}leavegc
│    =〆  ${prefix}pushcontact
│    =〆  ${prefix}pushcontactv2
│    =〆  ${prefix}pushcontactv3
│    =〆  ${prefix}jpm
│    =〆  ${prefix}checkmember
│    =〆  ${prefix}post
│    =〆  ${prefix}clearchat
│    =〆  ${prefix}setprefix
⏤͟͟͞͞╳────────── .✦`}

global.mcmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Server Mc ]* ── .々─ᯤ
│    =〆  ${prefix}mc
│    =〆  ${prefix}server
│    =〆  ${prefix}hyperxzbedrock
│    =〆  ${prefix}hyperxzjava
⏤͟͟͞͞╳────────── .✦`}

global.quotesmenu = (prefix, hituet) => {
return`⏤͟͟͞͞╳── *[ Quotes ]* ── .々─ᯤ
│    =〆  ${prefix}quotesanime
│    =〆  ${prefix}quotesbucin
│    =〆  ${prefix}quotesbacot
│    =〆  ${prefix}quotesgalau
│    =〆  ${prefix}quotesgombal
│    =〆  ${prefix}quoteshacker
⏤͟͟͞͞╳────────── .✦`}

global.islamimenu = (prefix, hituet) => {
return`⏤͟͟͞͞╳── *[ islami ]* ── .々─ᯤ
│    =〆  ${prefix}kisahnabi
│    =〆  ${prefix}asmaulhusna
│    =〆  ${prefix}bacaansholat
│    =〆  ${prefix}audiosurah
│    =〆  ${prefix}islamiai
│    =〆  ${prefix}islamal
│    =〆  ${prefix}doaharian
│    =〆  ${prefix}niatsholat
│    =〆  ${prefix}quotesislami
│    =〆  ${prefix}doatahlil
⏤͟͟͞͞╳────────── .✦`}

global.groupmenu = (prefix) => { 
return`⏤͟͟͞͞╳── *[ Group ]* ── .々─ᯤ
│    =〆  ${prefix}antibot
│    =〆  ${prefix}antiviewonce
│    =〆  ${prefix}readviewonce
│    =〆  ${prefix}welcome
│    =〆  ${prefix}adminevent
│    =〆  ${prefix}groupevent
│    =〆  ${prefix}antiforeign
│    =〆  ${prefix}antimedia
│    =〆  ${prefix}antiaudio
│    =〆  ${prefix}antivideo
│    =〆  ${prefix}antiimage
│    =〆  ${prefix}antidocument
│    =〆  ${prefix}antilocation
│    =〆  ${prefix}anticontact
│    =〆  ${prefix}antisticker
│    =〆  ${prefix}antipoll
│    =〆  ${prefix}antilink
│    =〆  ${prefix}antilinkgc
│    =〆  ${prefix}antilinkch
│    =〆  ${prefix}antilinknumber
│    =〆  ${prefix}antipromotion
│    =〆  ${prefix}antivirtex
│    =〆  ${prefix}grouplink
│    =〆  ${prefix}listadmin
│    =〆  ${prefix}invite
│    =〆  ${prefix}ephemeral
│    =〆  ${prefix}delete
│    =〆  ${prefix}setppgroup
│    =〆  ${prefix}delppgroup
│    =〆  ${prefix}setnamegc
│    =〆  ${prefix}setdesc
│    =〆  ${prefix}add
│    =〆  ${prefix}kick
│    =〆  ${prefix}promote
│    =〆  ${prefix}demote
│    =〆  ${prefix}kickall
│    =〆  ${prefix}promoteall
│    =〆  ${prefix}demoteall
│    =〆  ${prefix}getcontact
│    =〆  ${prefix}savecontact
│    =〆  ${prefix}sendcontact
│    =〆  ${prefix}contactag
│    =〆  ${prefix}hidetag
│    =〆  ${prefix}totag
│    =〆  ${prefix}tagall
│    =〆  ${prefix}editinfo
│    =〆  ${prefix}opentime
│    =〆  ${prefix}closetime
│    =〆  ${prefix}resetlink
│    =〆  ${prefix}getbio
│    =〆  ${prefix}vote
│    =〆  ${prefix}upvote
│    =〆  ${prefix}downvote
│    =〆  ${prefix}checkvote
│    =〆  ${prefix}delvote
│    =〆  ${prefix}antivirus
│    =〆  ${prefix}antibadword
│    =〆  ${prefix}nsfw
│    =〆  ${prefix}react
│    =〆  ${prefix}getjoinrequest
⏤͟͟͞͞╳────────── .✦`}

global.searchmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Search ]* ── .々─ᯤ
│    =〆  ${prefix}google
│    =〆  ${prefix}wikipedia
│    =〆  ${prefix}ytsearch
│    =〆  ${prefix}emotecraft
│    =〆  ${prefix}applesearch
│    =〆  ${prefix}apksearch
│    =〆  ${prefix}apdl
│    =〆  ${prefix}spotify
│    =〆  ${prefix}wattpad
│    =〆  ${prefix}mcpedl
│    =〆  ${prefix}pinterest
│    =〆  ${prefix}tvonenews
│    =〆  ${prefix}sticker
│    =〆  ${prefix}qcsearch
│    =〆  ${prefix}wanumber
│    =〆  ${prefix}friend
│    =〆  ${prefix}lyrics
│    =〆  ${prefix}pixiv
⏤͟͟͞͞╳────────── .✦`}

global.downloadmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Download ]* ── .々─ᯤ
│    =〆  ${prefix}splay
│    =〆  ${prefix}itunes
│    =〆  ${prefix}play
│    =〆  ${prefix}playap
│    =〆  ${prefix}ytmp3
│    =〆  ${prefix}ytmp4
│    =〆  ${prefix}tiktok
│    =〆  ${prefix}capcut
│    =〆  ${prefix}tiktokvideo
│    =〆  ${prefix}igdl
│    =〆  ${prefix}facebook
│    =〆  ${prefix}twitter
│    =〆  ${prefix}apk
│    =〆  ${prefix}mega
│    =〆  ${prefix}mediafire
│    =〆  ${prefix}google
│    =〆  ${prefix}gimage
│    =〆  ${prefix}weather
│    =〆  ${prefix}splay
│    =〆  ${prefix}gitclone
│    =〆  ${prefix}happymod
│    =〆  ${prefix}gdrive
│    =〆  ${prefix}pindl
│    =〆  ${prefix}ringtone
│    =〆  ${prefix}autodownload
⏤͟͟͞͞╳────────── .✦`}

global.toolsmenu = (prefix) => {
  return `⏤͟͟͞͞╳── *[ Tool Menu ]* ── .々─ᯤ
│    =〆  ${prefix}obfuscate
│    =〆  ${prefix}styletext
│    =〆  ${prefix}fliptext
│    =〆  ${prefix}tts
│    =〆  ${prefix}say
│    =〆  ${prefix}togif
│    =〆  ${prefix}toqr
│    =〆  ${prefix}bass
│    =〆  ${prefix}blown
│    =〆  ${prefix}deep
│    =〆  ${prefix}earrape
│    =〆  ${prefix}fast
│    =〆  ${prefix}fat
│    =〆  ${prefix}nightcore
│    =〆  ${prefix}reverse
│    =〆  ${prefix}robot
│    =〆  ${prefix}slow
│    =〆  ${prefix}smooth
│    =〆  ${prefix}squirrel
│    =〆  ${prefix}tinyurl
│    =〆  ${prefix}brat
│    =〆  ${prefix}tovn
│    =〆  ${prefix}t
│    =〆  ${prefix}toaudio
│    =〆  ${prefix}tomp3
│    =〆  ${prefix}tomp4
│    =〆  ${prefix}toimg
│    =〆  ${prefix}toonce
│    =〆  ${prefix}toptv
│    =〆  ${prefix}sticker
│    =〆  ${prefix}qc
│    =〆  ${prefix}smeme
│    =〆  ${prefix}smeta
│    =〆  ${prefix}take
│    =〆  ${prefix}emojimix
│    =〆  ${prefix}volaudio
│    =〆  ${prefix}volvideo
│    =〆  ${prefix}ebinary
│    =〆  ${prefix}dbinary
│    =〆  ${prefix}ssweb
│    =〆  ${prefix}quoted
│    =〆  ${prefix}translate
│    =〆  ${prefix}get
│    =〆  ${prefix}tourl
│    =〆  ${prefix}write
⏤͟͟͞͞╳────────── .✦`}

global.listmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ List Menu ]* ── .々─ᯤ
│    =〆  ${prefix}listprem
│    =〆  ${prefix}listowner
│    =〆  ${prefix}liststicker
│    =〆  ${prefix}listimage
│    =〆  ${prefix}listvideo
│    =〆  ${prefix}listvn
│    =〆  ${prefix}listapk
│    =〆  ${prefix}listzip
│    =〆  ${prefix}listpdf
│    =〆  ${prefix}listbadword
│    =〆  ${prefix}listpc
│    =〆  ${prefix}listgc
⏤͟͟͞͞╳────────── .✦`}

global.randomphotomenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Random Photo ]* ── .々─ᯤ
│    =〆  ${prefix}aesthetic
│    =〆  ${prefix}coffee
│    =〆  ${prefix}wikimedia
│    =〆  ${prefix}wallpaper
│    =〆  ${prefix}art
│    =〆  ${prefix}bts
│    =〆  ${prefix}dogwoof
│    =〆  ${prefix}catmeow
│    =〆  ${prefix}lizardpic
│    =〆  ${prefix}goosebird
│    =〆  ${prefix}8ballpool
│    =〆  ${prefix}cosplay
│    =〆  ${prefix}hacker
│    =〆  ${prefix}cyber
│    =〆  ${prefix}gamewallpaper
│    =〆  ${prefix}islamic
│    =〆  ${prefix}jennie
│    =〆  ${prefix}jiso
│    =〆  ${prefix}satanic
│    =〆  ${prefix}justina
│    =〆  ${prefix}cartoon
│    =〆  ${prefix}pentol
│    =〆  ${prefix}cat
│    =〆  ${prefix}kpop
│    =〆  ${prefix}exo
│    =〆  ${prefix}lisa
│    =〆  ${prefix}space
│    =〆  ${prefix}car
│    =〆  ${prefix}technology
│    =〆  ${prefix}bike
│    =〆  ${prefix}shortquote
│    =〆  ${prefix}antiwork
│    =〆  ${prefix}hacking
│    =〆  ${prefix}boneka
│    =〆  ${prefix}rose
│    =〆  ${prefix}ryujin
│    =〆  ${prefix}ulzzangboy
│    =〆  ${prefix}ulzzanggirl
│    =〆  ${prefix}wallml
│    =〆  ${prefix}wallphone
│    =〆  ${prefix}mountain
│    =〆  ${prefix}goose
│    =〆  ${prefix}profilepic
│    =〆  ${prefix}couplepp
│    =〆  ${prefix}programming
│    =〆  ${prefix}pubg
│    =〆  ${prefix}blackpink
│    =〆  ${prefix}randomboy  
│    =〆  ${prefix}randomgirl
│    =〆  ${prefix}hijab  
│    =〆  ${prefix}chinese
│    =〆  ${prefix}indo
│    =〆  ${prefix}japanese
│    =〆  ${prefix}korean
│    =〆  ${prefix}malay
│    =〆  ${prefix}thai
│    =〆  ${prefix}vietnamese
⏤͟͟͞͞╳────────── .✦`}

global.stalkmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Stalker ]* ── .々─ᯤ
│    =〆  ${prefix}tiktokstalk
│    =〆  ${prefix}mlstalk
│    =〆  ${prefix}npmstalk
│    =〆  ${prefix}ghstalk
⏤͟͟͞͞╳────────── .✦`}

global.aimenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ OpenAI ]* ── .々─ᯤ
│    =〆  ${prefix}ai
│    =〆  ${prefix}gemini
│    =〆  ${prefix}islamiai
│    =〆  Yuta
│    =〆  Deku
│    =〆  ${prefix}gpt4
│    =〆  ${prefix}simi
│    =〆  ${prefix}ai
│    =〆  ${prefix}remini
⏤͟͟͞͞╳────────── .✦`}
 
global.gamemenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Game ]* ── .々─ᯤ
│    =〆  ${prefix}truth
│    =〆  ${prefix}dare
│    =〆  ${prefix}suit
│    =〆  ${prefix}tictactoe
│    =〆  ${prefix}math
│    =〆  ${prefix}playbomb
│    =〆  ${prefix}rob
│    =〆  ${prefix}slot
│    =〆  ${prefix}dice 
│    =〆  ${prefix}profile
│    =〆  ${prefix}claim
│    =〆  ${prefix}tmoney
│    =〆  ${prefix}tflimit
⏤͟͟͞͞╳────────── .✦`}

global.funmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Fun ]* ── .々─ᯤ
│    =〆  ${prefix}define
│    =〆  ${prefix}readmore
│    =〆  ${prefix}fact
│    =〆  ${prefix}couple
│    =〆  ${prefix}soulmate
│    =〆  ${prefix}stupidcheck
│    =〆  ${prefix}handsomecheck
│    =〆  ${prefix}uncleancheck
│    =〆  ${prefix}hotcheck
│    =〆  ${prefix}smartcheck
│    =〆  ${prefix}greatcheck
│    =〆  ${prefix}evilcheck
│    =〆  ${prefix}dogcheck
│    =〆  ${prefix}coolcheck
│    =〆  ${prefix}waifucheck
│    =〆  ${prefix}awesomecheck
│    =〆  ${prefix}gaycheck
│    =〆  ${prefix}cutecheck
│    =〆  ${prefix}lesbiancheck
│    =〆  ${prefix}hornycheck
│    =〆  ${prefix}prettycheck
│    =〆  ${prefix}lovelycheck
│    =〆  ${prefix}uglycheck
│    =〆  ${prefix}pick
│    =〆  ${prefix}pickupline
│    =〆  ${prefix}quotes
│    =〆  ${prefix}can
│    =〆  ${prefix}is
│    =〆  ${prefix}when
│    =〆  ${prefix}where
│    =〆  ${prefix}what
│    =〆  ${prefix}how
│    =〆  ${prefix}rate
│    =〆  ${prefix}cry
│    =〆  ${prefix}kill
│    =〆  ${prefix}hug
│    =〆  ${prefix}pat
│    =〆  ${prefix}lick 
│    =〆  ${prefix}kiss
│    =〆  ${prefix}bite
│    =〆  ${prefix}yeet
│    =〆  ${prefix}bully
│    =〆  ${prefix}bonk
│    =〆  ${prefix}wink
│    =〆  ${prefix}poke
│    =〆  ${prefix}nom
│    =〆  ${prefix}slap
│    =〆  ${prefix}smile 
│    =〆  ${prefix}wave
│    =〆  ${prefix}awoo
│    =〆  ${prefix}blush
│    =〆  ${prefix}smug
│    =〆  ${prefix}glomp 
│    =〆  ${prefix}happy
│    =〆  ${prefix}dance
│    =〆  ${prefix}cringe
│    =〆  ${prefix}cuddle
│    =〆  ${prefix}highfive 
│    =〆  ${prefix}handhold
│    =〆  ${prefix}spank
│    =〆  ${prefix}tickle
│    =〆  ${prefix}feed
│    =〆  ${prefix}checkme
│    =〆  ${prefix}sound1 - sound161
⏤͟͟͞͞╳────────── .✦`}

global.stickermenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Sticker ]* ── .々─ᯤ
│    =〆  ${prefix}goose
│    =〆  ${prefix}woof
│    =〆  ${prefix}8ball
│    =〆  ${prefix}lizard
│    =〆  ${prefix}meow
│    =〆  ${prefix}gura
│    =〆  ${prefix}telestick
⏤͟͟͞͞╳────────── .✦`}

global.animemenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Anime ]* ── .々─ᯤ
│    =〆  ${prefix}samehadakudl
│    =〆  ${prefix}samehadakueps
│    =〆  ${prefix}otakudesulatest
│    =〆  ${prefix}otakudesu
│    =〆  ${prefix}kusonime
│    =〆  ${prefix}yuta
│    =〆  ${prefix}samehadakusrch
│    =〆  ${prefix}zerochan
│    =〆  ${prefix}livechart
│    =〆  ${prefix}infoanime
⏤͟͟͞͞╳────────── .✦`}

global.databasemenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Database ]* ── .々─ᯤ
│    =〆  ${prefix}setcmd
│    =〆  ${prefix}delcmd
│    =〆  ${prefix}listcmd
│    =〆  ${prefix}lockcmd
│    =〆  ${prefix}addmsg
│    =〆  ${prefix}delmsg
│    =〆  ${prefix}getmsg
│    =〆  ${prefix}listmsg
⏤͟͟͞͞╳────────── .✦`}

global.storemenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Store ]* ── .々─ᯤ
│    =〆  ${prefix}list
│    =〆  ${prefix}store
│    =〆  ${prefix}shop
│    =〆  ${prefix}addlist
│    =〆  ${prefix}dellist
⏤͟͟͞͞╳────────── .✦`}

global.religonmenu = (prefix) => {
return`⏤͟͟͞͞╳── *[ Religon ]* ── .々─ᯤ
│    =〆  ${prefix}bible
│    =〆  ${prefix}quran
│    =〆  ${prefix}gita
⏤͟͟͞͞╳────────── .✦`}

global.othermenu = (prefix) => {
  return `⏤͟͟͞͞╳── *[ Other ]* ── .々─ᯤ
│    =〆  ${prefix}ping
│    =〆  ${prefix}menu
│    =〆  ${prefix}myip
│    =〆  ${prefix}repo
│    =〆  ${prefix}reportbug
│    =〆  ${prefix}idgroup
│    =〆  ${prefix}owner
│    =〆  ${prefix}infoleo
│    =〆  ${prefix}infobot
│    =〆  ${prefix}infoowner
│    =〆  ${prefix}rentbot
│    =〆  ${prefix}runtime
│    =〆  ${prefix}confess
│    =〆  ${prefix}react
│    =〆  ${prefix}q
│    =〆  ${prefix}inspect
│    =〆  ${prefix}tagme
⏤͟͟͞͞╳────────── .✦`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})