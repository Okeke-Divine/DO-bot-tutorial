const puppeteer = require("puppeteer")

const { getRandomItem } = require('./assets/utils/getRandomItem.js')

const botConfiguration = {
    headless: false
}

async function runBot() {
    const browser = await puppeteer.launch(botConfiguration);

    try {
        console.log("============================================================");
        console.log("::: BEGIN PROCESS :::");
        console.log("============================================================");
        // get a user agent
        let userAgent = await getRandomItem('./assets/json/list-of-UA.json');
        console.log("Useragent:", userAgent);
        // get a user cookie
        let cookie = await getRandomItem('./assets/json/list-of-cookies.json');
        console.log("Cookie:", cookie);
        // get a proxy
        let proxy = await getRandomItem('./assets/json/list-of-proxies.json');
        console.log("Proxy:", proxy);
        // get a link
        let url = await getRandomItem('./assets/json/list-of-links.json');
        console.log("Url:", url);

        const page = await browser.newPage()
        page.goto(url);
    } catch (e) {
        console.log("An error occured.", e);
    } finally {
        setTimeout(function () {
            browser.close()
            console.log("============================================================");
            console.log("::: END PROCESS :::");
            console.log("============================================================");
            runBot()
        }, 30000)
    }

}

runBot()