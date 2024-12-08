/*
 * Jangan Di Hapus!!
 * Recode:@Ling Xuan
 * Sumber: https://whatsapp.com/channel/0029ValSH6n7dmeVvtZU0K2S
*https://whatsapp.com/channel/0029VaEGq6MDeON8TGlwWN1Y
 */

const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk')

const FILE_PATH = ('./src/geminiSessions.json');

// Pastikan file ada
const ensureFileExists = async () => {
    try {
        await fs.access(FILE_PATH);
    } catch (error) {
        await fs.writeFile(FILE_PATH, JSON.stringify({}, null, 2));
    }
};

// Membaca data sesi dari file JSON
const readGeminiData = async () => {
    await ensureFileExists();
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
};

// Menulis data sesi ke file JSON
const writeGeminiData = async (data) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
};

// Proses permintaan API Gemini
async function gemini(options) {
    try {
        return await new Promise(async (resolve, reject) => {
            options = {
                model: 'gemini-pro',
                messages: options?.messages,
                temperature: options?.temperature || 0.9,
                top_p: options?.top_p || 0.7,
                top_k: options?.top_k || 40,
            };
            if (!options?.messages) return reject('Payload pesan tidak ada!');
            if (!Array.isArray(options?.messages)) return reject('Array pesan tidak valid!');
            if (isNaN(options?.top_p)) return reject('Nilai top_p tidak valid!');
            if (isNaN(options?.top_k)) return reject('Nilai top_k tidak valid!');
            axios.post('https://api.acloudapp.com/v1/completions', options, {
                headers: {
                    authorization: 'sk-9jL26pavtzAHk9mdF0A5AeAfFcE1480b9b06737d9eC62c1e'
                }
            }).then(res => {
                const data = res.data;
                if (!data.choices[0].message.content) return reject('Gagal mendapatkan pesan respons!');
                resolve({
                    success: true,
                    answer: data.choices[0].message.content
                });
            }).catch(reject);
        });
    } catch (e) {
        return {
            success: false,
            errors: [e]
        };
    }
}

module.exports = { gemini }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})