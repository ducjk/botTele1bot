
const openPage = async (browser, url) => {
    let page
    try {
        page = await browser.newPage()

        console.log('Dang mo trinh duyet');
        await page.goto(url)
        console.log('Dang truy cap den URL: ', url);
        await page.waitForSelector('.pane-table')
        console.log('Da doi pane table khoi chay xong')
    } catch (error) {
        console.log('error: ', error);
    }
    
    return page
}

module.exports = openPage