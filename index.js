const cheerio = require('cheerio');

const axios = require('axios');

axios.get('http://www.nettruyengo.com')
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let data = [];
            $('.item figure').each(function (i, elem) {
                data[i] = {
                    title: $(this).find('figcaption h3 a.jtip').text().trim(),
                    url: $(this).find('figcaption h3 a.jtip').attr("href").trim(),
                    image: $(this).find('.image a img.lazy').attr("src").trim(),
                }
            });
            console.log("data", data);
            // const devtoListTrimmed = devtoList.filter(n => n != undefined)
            // fs.writeFile('data.json',
            //     JSON.stringify(devtoListTrimmed, null, 4),
            //     (err) => console.log('File successfully written!'))
        }
    }, (error) => console.log(err));