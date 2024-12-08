var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
function delay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res) => setTimeout(() => res(), ms));
    });
}
/**
 * Scraped By Kaviaann
 * Protected By MIT LICENSE
 * Whoever caught removing wm will be sued
 * @description Any Request? Contact me : vielynian@gmail.com
 * @author Kaviaann 2024
 * @copyright https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
 */
async function youtube(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                // ? SEARCH
                const a = yield axios
                    .get("https://mp3-juices.nu/se.php?" +
                    new URLSearchParams({
                        a: String.fromCharCode(55, 104, 51, 53, 51, 99, 114, 51, 55, 75, 51, 106),
                        s: "y",
                        _: String(Math.random()),
                        q: query || "",
                    }), {
                    headers: {
                        Accept: "*/*",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.3",
                        origin: "https://w18.mp3-juices.nu",
                    },
                })
                    .then((v) => v.data)
                    .then((v) => {
                    return {
                        query,
                        total: v.yt.length,
                        result: v.yt,
                    };
                });
                a.result = a.result((A) => {
                    const headers = {
                        Accept: "*/*",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.3",
                        origin: "https://mp3-juices.nu",
                        referer: "https://mp3-juices.nu/",
                    };
                    A.mp3 = function mp3() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                                try {
                                    // ? INITIALIZING
                                    yield axios
                                        .get("https://nu.mnuu.nu/api/v1/init?" +
                                        new URLSearchParams({
                                            p: "y",
                                            1337: "M17n1ck",
                                            _: String(Math.random()),
                                        }), {
                                        headers,
                                    })
                                        .then((v) => __awaiter(this, void 0, void 0, function* () {
                                        if (v.data.error !== "0")
                                            return reject("Fail to convert to mp3");
                                        const B = yield CALL(v.data.convertURL +
                                            "&" +
                                            new URLSearchParams({
                                                v: "https://www.youtube.com/watch?v=" + A.id,
                                                f: "mp3",
                                                _: String(Math.random()),
                                            }));
                                        if (B.error !== 0)
                                            return rej("Fail to convert to mp3!");
                                        if (B.redirect) {
                                            delay(500);
                                            yield CALL(B.redirectURL).then((v) => {
                                                if (v.error)
                                                    return reject("Error ocured on getting media!");
                                                if (!v.downloadURL)
                                                    return reject("Fail to get downloadURL!");
                                                return res({
                                                    title: A.title,
                                                    id: A.id,
                                                    type: "audio",
                                                    media: v.downloadURL,
                                                });
                                            });
                                        }
                                    }));
                                    function CALL(ul) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            const host = ul.split("/")[1];
                                            return yield axios
                                                .get(ul, {
                                                headers: Object.assign(Object.assign({}, headers), { host }),
                                            })
                                                .then((v) => v.data);
                                        });
                                    }
                                }
                                catch (e) {
                                    return reject(e);
                                }
                            }));
                        });
                    };
                    A.mp4 = function mp4() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                                try {
                                    // ? INITIALIZING
                                    yield axios
                                        .get("https://nu.mnuu.nu/api/v1/init?" +
                                        new URLSearchParams({
                                            p: "y",
                                            1337: "M17n1ck",
                                            _: String(Math.random()),
                                        }), {
                                        headers,
                                    })
                                        .then((v) => __awaiter(this, void 0, void 0, function* () {
                                        if (v.data.error !== "0")
                                            return reject("Fail to convert to mp4");
                                        const B = yield CALL(v.data.convertURL +
                                            "&" +
                                            new URLSearchParams({
                                                v: "https://www.youtube.com/watch?v=" + A.id,
                                                f: "mp4",
                                                _: String(Math.random()),
                                            }));
                                        if (B.error)
                                            return rej("Fail to convert to mp4");
                                        if (B.progressURL) {
                                            handle(B.progressURL)
                                                .then((v) => {
                                                return res({
                                                    title: v,
                                                    id: A.id,
                                                    type: "video",
                                                    media: B.downloadURL,
                                                });
                                            })
                                                .catch((e) => {
                                                return rej("Fail to get the media! try other downloading video!");
                                            });
                                        }
                                    }));
                                    function CALL(ul) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            const host = ul.split("/")[1];
                                            return yield axios
                                                .get(ul, {
                                                headers: Object.assign(Object.assign({}, headers), { host }),
                                            })
                                                .then((v) => v.data);
                                        });
                                    }
                                    function handle(url) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            return new Promise((r, j) => __awaiter(this, void 0, void 0, function* () {
                                                const p = [];
                                                yield CALL(url + "&_" + Math.random()).then((v) => p.push(v));
                                                while (true) {
                                                    const _ = p.pop();
                                                    if (_ === null || _ === void 0 ? void 0 : _.title)
                                                        return r(_.title);
                                                    if (_ === null || _ === void 0 ? void 0 : _.error)
                                                        return j(_.error);
                                                    yield CALL(url + "&_" + Math.random()).then((v) => p.push(v));
                                                }
                                            }));
                                        });
                                    }
                                }
                                catch (e) {
                                    return reject(e);
                                }
                            }));
                        });
                    };
                    return A;
                });
                return resolve(a);
            }
            catch (e) {
                return reject(e);
            }
        }));
    });
}

module.exports = { youtube };

const fs = require("fs")
const chalk = require('chalk')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})