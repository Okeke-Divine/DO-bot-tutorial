// const bot = require("puppeteer")

const {getRandomItem} = require('./assets/utils/getRandomItem.js')

const botConfiguration = {
    headLess: false
}

async function runBot(){
    let userAgent = await getRandomItem('./assets/json/list-of-UA.json');
    console.log(userAgent)
}

runBot()