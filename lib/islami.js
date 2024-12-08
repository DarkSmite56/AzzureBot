/*💥 *ANSARI CHAT AI* 
- AI CHAT ISLAMI 

🧑‍💻 Script Code by Daffa*/

const axios = require('axios')
const fs = require('fs');
const chalk = require('chalk')

class AnshariChat {
    constructor() {
        this.baseURL = 'https://api.ansari.chat/api/v1/complete';
        this.headers = {
            'authority': 'api.ansari.chat',
            'accept': '*/*',
            'content-type': 'application/json',
            'origin': 'https://ansari.chat',
            'pragma': 'no-cache',
            'referer': 'https://ansari.chat/',
            'user-agent': 'Postify/1.0.0',
            'x-forwarded-for': Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'),
        };
    }

    async chat(message) {
        try {
            const response = await axios.post(this.baseURL, {
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ]
            }, {
                headers: this.headers
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

/*💥 *QURAN CHAT AI*

- API Default Aplikasi *QuranChat.me*

🔗 https://play.google.com/store/apps/details?id=org.qute.quranchat.mobile

🧑‍💻 Script Code by Daffa*/


class QuranChat {
    constructor(platform) {
        this.api = 'https://nlp.quranchat.me/query';
        this.platform = platform;
        this.userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => 
            (Math.random() * 16 | 0).toString(16)
        );
        this.headers = {
            'content-type': 'application/json',
            'user-agent': 'Postify/1.0.0',
            'referer': 'https://quranchat.me/#/',
            'x-forwarded-for': Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.'),
        };
    }

    async query(text) {
        try {
            const { data } = await axios.post(this.api, {
                platform: this.platform,
                user: this.userId,
                text,
            }, { headers: this.headers });
            return data; 
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }
}

module.exports = { AnshariChat, QuranChat }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})