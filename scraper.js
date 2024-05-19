let applicationLink = '#PlanTab'

const scraperTitle = async(page) => {
    try {

        let data = []
        await page.click(`a[href$="${applicationLink}"]`);

        const dataNumber = await page.$$eval('#PlanTab table tr', tds => tds.map((tr) => {
            return tr.innerText;
          }));

        data.push(dataNumber[2])
        data.push(dataNumber[3])
        data.push(dataNumber[4])
        data.push(dataNumber[5])
        data.push(dataNumber[6])
        data.push(dataNumber[7])
        data.push(dataNumber[8])

        return data

    } catch (error) {
        console.log('error: ', error);
    }
}

module.exports = {scraperTitle}