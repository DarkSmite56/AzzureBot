module.exports = {
    type: 'bot',
    command: ['tutoraddfitur','addfitur'],
    operate: async (context) => {
        const { Yuta, m, q, prefix, command, replygcyuta, YutaTheCreator } = context;
if (!YutaTheCreator) return m.reply("khusus? owner sayang")
let addfit = `expired\n\n*[ Plugin ]*\n\nmodule.exports = {
    type: 'download',
    command: ['mediafire', 'mfdl', 'mdf'],
    operate: async (context) => {
        const { Yuta, m, q, prefix, command } = context;
}
}\n\n *[ Case ]*\n\ncase 'fitur': {\n \\\\fitur\n}\nbreak`
m.reply(`${addfit}`)
}
}