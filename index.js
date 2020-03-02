
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
        //executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        headless: false,
        devtools: true,
        //ignoreHTTPSErrors: true,
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
    });

	const page = await browser.newPage();
	await page.goto('https://example.com');

    await page.evaluate(() => {debugger;});

	//console.log(await page.content());
	await page.screenshot({path: 'screenshot.png'});

	await browser.close();
})()

/*

Pupeteer chromium path example
https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/583214/headless-shell.zip
https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/686378/chrome-win.zip

Pupeteer debugging
https://developers.google.com/web/tools/puppeteer/debugging

Env Variables
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
PUPPETEER_DOWNLOAD_HOST
PUPPETEER_CHROMIUM_REVISION
PUPPETEER_EXECUTABLE_PATH
PUPPETEER_PRODUCT

*/
