const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
var chalk = require('chalk');
const randomUseragent = require('random-useragent');
console.log('\n'+chalk.green('[+] Yahoo Creator by GygDoggy'))
var numphone = readlineSync.question('[+] Nomor Hp Yang Diinginkan : ');
var random_name = require('node-random-name');
        var name1 = random_name({
            first: true
        });
        var name2 = random_name({
            last: true
        });
        var fullname = name1 + name2;
        var emailAcc = fullname + '1337';

        const $options = {
            waitUntil: 'networkidle2'
        };
console.log('\n'+chalk.green(emailAcc + '@yahoo.com|Kalok@1337|' + numphone));

(async () => {
    var uagent = randomUseragent.getRandom(function (ua) {
        return ua.osName === 'Windows';
	});
	var browser = await puppeteer.launch({
	headless: false,
	});	
	const page = await browser.newPage();
	await page.goto('https://login.yahoo.com/account/create', $options);
	
    const FirstName = await page.type('#usernamereg-firstName', name1)
    const LastName = await page.type('#usernamereg-lastName', name2)
	const email = await page.type('#usernamereg-yid', emailAcc)
	const kataSandi = await page.type('#usernamereg-password', `Kalok@1337`)
	const nomorHp = await page.type('#usernamereg-phone', numphone)
	const tanggal = await page.type('#usernamereg-day', `12`)
	const tahun = await page.type('#usernamereg-year', `1998`)
	await page.select("select#usernamereg-month", '1');
	await page.click('#reg-submit-button');
})();