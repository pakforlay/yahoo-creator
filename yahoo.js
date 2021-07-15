const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
var chalk = require('chalk');
const randomUseragent = require('random-useragent');
console.log('\n'+chalk.green('[+] Yahoo Creator by GygDoggy'))
var fName = readlineSync.question('[+] Nama Depan :');
var lName = readlineSync.question('[+] Nama Belakang :');
var sandiKata = readlineSync.question('[+] Kata sandi yang di inginkan :');
var numphone = readlineSync.question('[+] Nomor Hp Yang Diinginkan : ');
var fullName = fName + lName;
var emailAcc = fullName + '1337';
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
	
    const FirstName = await page.type('#usernamereg-firstName', fName);
    const LastName = await page.type('#usernamereg-lastName', lName);
	const email = await page.type('#usernamereg-yid', emailAcc);
	const kataSandi = await page.type('#usernamereg-password', sandiKata);
	const nomorHp = await page.type('#usernamereg-phone', numphone);
	const tanggal = await page.type('#usernamereg-day', `12`);
	const tahun = await page.type('#usernamereg-year', `1998`);
	await page.select("select#usernamereg-month", '1');
	await page.click('#reg-submit-button');
})();