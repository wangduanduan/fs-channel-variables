const Axios = require("axios")
const cheerio = require('cheerio')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const vars = require('./variables')
const adapter = new FileSync('db.json')
const db = low(adapter)

const baseurl = "https://freeswitch.org/confluence/display/FREESWITCH/"

let count = -1

manager()

function manager () {
    let vars = db.getState().vars

    vars.forEach((v, i) => {
        let md = mdContent(v, i)
        console.log(md)
    })

    // vars.forEach((id) => {
    //     let v = db.get('vars')
    //     .find({id})
    //     .value()

    //     let md = mdContent(v)

        // let index = v.desc.indexOf('Usage')

        // if (index >= 0) {
        //     let desc = v.desc.substring(0,index)
        //     let usage = v.desc.substring(index+6)

        //     db.get('vars')
        //     .find({id})
        //     .assign({desc, usage})
        //     .write()
        // }
    // })
}

function mdContent(s, i) {
        
    if (!s.type) {
        s.type = ''
    }

    if (!s.usage) {
        s.usage = ''
    }

    if (!s.desc) {
        s.desc = ''
    }

return `

# ${i+1} ${s.id}
- url: ${s.url}
- type: **${s.type}**

${s.desc}

\`\`\`
${s.usage}
\`\`\`

`
}

function getPageContent(id) {
    console.log(`start get ${id}`)
    let url = baseurl + id
    Axios.get(url)
    .then((res)=>{
        parsePage(id, url, res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

function parsePage (id, url, res) {
    let $ = cheerio.load(res)
    let text = $('#main-content').text().trim()
    // console.log(text)
    updateDB(id, url, text)
}

function updateDB (id, url, desc) {
    console.log('updateDB', id)
    db.get('vars')
    .find({id})
    .assign({url, desc})
    .write()

    // manager()
}


