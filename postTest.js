
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
        headless: false,
        devtools: true,
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
    });

    const page = await browser.newPage();
    
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        console.log(request.url());
        console.log(request.postData());
        request.continue();
    });


	await page.goto('http://localhost:5000', {
        waitUntil: 'networkidle2',
    });

    await page.evaluate(() => {debugger;});

	//console.log(await page.content());
	await page.screenshot({path: 'screenshot.png'});

	await browser.close();
})();
