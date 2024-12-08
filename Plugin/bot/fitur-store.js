module.exports = {
type: 'bot',
command: ['store','list','shop'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, fetchJson, readmore, db_respon_list } = context;

let teks = '╭──── *[ ʟɪsᴛ - sᴛᴏʀᴇ ]* ──々\n│\n'
for (let x of db_respon_list) {
teks += `│ =〆 ${x.key}\n`
}
teks += `│\n╰─々\n\n`
replygcyuta(teks)
}
}