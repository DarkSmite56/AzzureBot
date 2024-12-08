module.exports = {
type: 'tools',
command: ['rvo','rvop'],
operate: async (context) => {
    const { Yuta, m, text, q, prefix, command, replygcyuta, leogg, sendReaction, limituser, limitAbis, useLimit, IsReg, downloadContentFromMessage, from, Buffer, users, dftardulu } = context;

if (!IsReg) return dftardulu()
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)

if (!m.quoted) return replygcyuta(`Reply ke view once message`)
  if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcyuta(`Ini bukan sebuah view once message`)
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return Yuta.sendFile(from, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return Yuta.sendFile(from, buffer, 'media.jpg', msg[type].caption || '', m)
  }
 }
}