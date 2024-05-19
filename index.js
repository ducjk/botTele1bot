const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const handleChangeData = require('./main')

// replace the value below with the Telegram token you receive from @BotFather
const token = '6920442250:AAFuCkgrkwjd5ONbeo4MPx6OjH4qahfe328';
const idGroup = -1002073958731

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


const startBrowser = require('./browser')
const scraperController = require('./scraperController')
const scrapers = require('./scraper')

// Khởi tạo ứng dụng Express
const app = express();
const port = 3003


// Sử dụng middleware CORS
app.use(cors());



let browser
let page
let data

    

const getData = async () => {
    try {
        data = await scrapers.scraperTitle(page)
        return data
    } catch (error) {
        console.log(error)    
    }
}

let prevTitle = '0'

let dataPresent

setInterval(async() => {
    if (browser && page){
        dataPresent = await getData()
        if (dataPresent[0] != undefined) {
            if (dataPresent[0].split('\t')[0] != prevTitle){
                const data = handleChangeData(dataPresent)
                if (data != ''){
                    bot.sendMessage(idGroup, `${dataPresent[0].split('\t')[0]}: ${data}`);
                }
                prevTitle = dataPresent[0].split('\t')[0]

            }
        }
    }
}, 10000)

const runBrowser = async() => {
    if (!browser)
        browser = await startBrowser()
    if (!page)
        page = await scraperController(browser)
}
runBrowser()



app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});