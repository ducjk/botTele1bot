const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');


// replace the value below with the Telegram token you receive from @BotFather
const token = '6920442250:AAFuCkgrkwjd5ONbeo4MPx6OjH4qahfe328';
const idGroup = -1002073958731
const idBot = '5062222817'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


const startBrowser = require('./browser')
const scraperController = require('./scraperController')
const scrapers = require('./scraper');
const handleChangeData = require('./main');

// Khởi tạo ứng dụng Express
const app = express();
const port = 3003


// Sử dụng middleware CORS
app.use(cors());

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     console.log('chatis: ', chatId);
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
//   });



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
            const regex = /\s+/g; // Khớp với một hoặc nhiều khoảng trắng
            const mang = dataPresent[0].split(regex);
            if (mang[0] != prevTitle){
                const data = handleChangeData(dataPresent)
                console.log(data.trim().length)
                bot.sendMessage(idBot, `${mang[0]}`);
                if (data.trim().length != 0){
                    bot.sendMessage(idGroup, `${mang[0]}: ${data}`);
                }
                prevTitle = mang[0]

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