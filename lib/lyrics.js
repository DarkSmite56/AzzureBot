
const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');
const cheerio = require("cheerio")

class ErrorBuscarCancion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "[Eror]";
  }
}

async function Lirik(cancion) {
  try {
    const URLdeBusqueda = `https://www.google.com/search?q=${encodeURIComponent(
      cancion + " song lyrics"
    )}`;
    const { data } = await axios.get(URLdeBusqueda, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
      },
    });
    const $ = cheerio.load(data);

    const lineas = $('div[jsname="WbKHeb"] span')
      .map((i, el) => {
        return $(el).text();
      })
      .get();

    if (lineas.length > 0) {
      let artistag = $('div.rVusze span:contains("Artista") + span a').text();
      let albumg = $(
        'div[data-attrid="kc:/music/recording_cluster:first album"] a'
      ).text();
      let fechag = $(
        'div.rVusze span:contains("Fecha de lanzamiento") + span span'
      ).text();
      let generosg = $("div.rVusze span")
        .filter((i, el) => {
          return /Género|Géneros/.test($(el).text());
        })
        .next("span")
        .find("a")
        .map((i, el) => {
          return $(el).text();
        })
        .get();
      if (generosg.length === 0) {
        generosg = "Belum diartikan";
      }

      let plataformas = [];
      $(".PZPZlf.P8aK7e.Cdj8sf.tpa-ci").each(function () {
        const platformanombre = $(this).find(".i3LlFf").text();
        const platformaLink = $(this).find("a.JkUS4b.brKmxb").attr("href");

        plataformas.push({
          nama: platformanombre,
          link: platformaLink,
        });
      });

      const otros = [];
      let contador = 0;
      $('div[data-md="277"] a').each(function () {
        if (contador < 3) {
          let titulog = $(this).find(".f3LoEf.OSrXXb").text();
          const artistagg = $(this).find(".XaIwc.ApHyTb.OSrXXb.C5w57c").text();
          titulog = titulog.replace("Surat dari ", "");
          otros.push({
            judul: titulog,
            artist: artistagg,
          });
          contador++;
        }
      });
      const lyria = [lineas.join("\n")];

      const CancionData = {
        judul: cancion,
        artist: artistag,
        album: albumg,
        tanggal: fechag,
        genre: generosg,
        plafrom: plataformas,
        otros,
        lirik: lyria,
      };
      return CancionData;
    } else {
      throw new ErrorBuscarCancion(`Lagu tidak ditemukan`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { Lirik };

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})