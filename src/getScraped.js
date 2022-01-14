const request= require("request-promise")
const cheerio= require("cheerio");

request("https://www.sports-reference.com/cbb/postseason/2021-ncaa.html", (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);

        const datarow= $(".round");
        const output= datarow.find("a").text();
        $(".DataRow").each((i, data) => {
            const item= $(data).text();
            const item1= $(data).text();
            const item2= $(data).text();

            console.log(item, item1, item2);
        })
    }

});