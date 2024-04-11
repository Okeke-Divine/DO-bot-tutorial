const bot = require("puppeteer")

const { getRandomItem } = require('./assets/utils/getRandomItem.js')

const botConfiguration = {
    headLess: false
}

async function runBot() {
    // get a user agent
    let userAgent = await getRandomItem('./assets/json/list-of-UA.json');
    console.log("Useragent:", userAgent);
    // get a user cookie
    let cookie = await getRandomItem('./assets/json/list-of-cookies.json');
    console.log("Cookie:", cookie);
    // get a proxy
    let proxy = await getRandomItem('./assets/json/list-of-proxies.json');
    console.log("Proxy:", proxy);

    // const browser = await bot.launch(botConfiguration);
}

runBot()