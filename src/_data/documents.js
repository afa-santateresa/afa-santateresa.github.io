require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");

const {
  GOOGLE_SHEET_ID,
  GOOGLE_API_KEY,
  GOOGLE_SHEET_NAME
} = process.env;

const URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${GOOGLE_SHEET_NAME}?key=${GOOGLE_API_KEY}`;

module.exports = async function () {
  // https://developer.github.com/v3/repos/#get
  let json = await EleventyFetch(URL, {
    duration: "1m", // 1 day
    type: "json", // also supports "text" or "buffer"
  });

  // la primera fila es la capçalera
  const docs = json.values.slice(1);
  console.log('Documents', docs.length);

  // extrau els cursos
  const cursos = [... new Set(docs.map(e => e[1]))];

  // genera una entrada per curs amb els documents
  const documents = cursos.map( curs => {
    return {
        curs,
        documents: docs.filter( d => d[1] == curs).map(d => {
            return {
                'tipus': d[0],
                'data': d[2],
                'titol': d[3],
                'url': d[4]
            }
        })
    }
  })

  return documents;
};
