const http = require ("http")

const port = 3000
const server = http.createServer((req,res)=>{
   
    res.statusCode = 200;
    res.setHeader('Content-Type', ' application/json')
    res.setHeader("Access-Control-Allow-Origin","*" )

    const ranCelebs = [
        {
            first: "Taylor",
            last: "Swift",
            title: "Pop Singer",
            src: "https://www.cheatsheet.com/wp-content/uploads/2020/01/Taylor-Swift.jpg"
        },
        {
            first: "Beyonce",
            last: "Carter",
            title: "R&B Singer",
            src: "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/beyonce-hero-487073444_copy.jpg?itok=HTsVCEqU"
        },
        {
            first: "Dwayne",
            last: "Johnson",
            title: "Actor",
            src: "https://www.chicagotribune.com/resizer/lTh-PsrP5Z104QbkfaFrt81VK-I=/415x276/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6QKTCV3XKFELDAIG7OSDD4DZYE.jpg"

        },
        {
            first: "Lebron",
            last: "James",
            title: "Basketball Player",
            src: "https://www.nba.com/images/cms/2019-07/lebron-james-points-iso-0708.jpg?cw=1920&w=1919&x=0&ch=1080&h=1296&y=108"
        },
        {
            first: "Ellen",
            last: "DeGeneres",
            title: "Talk show host",
            src: "https://img.etimg.com/thumb/width-640,height-480,imgsize-81939,resizemode-1,msid-31327433/ellen-degeneres-returns-to-oscars-with-more-humour-and-wit.jpg"
        },
        {
            first: "Oprah",
            last: "Winfrey",
            title: "Billioniare",
            src: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/09/oprah-2020-1080x675.jpg"
        }
    ]

    if(req.url === "/celeb"){
        res.end(JSON.stringify(ranCelebs))
    } else {
        res.end("Welcome to Brooklyn!!")
    }

})

server.listen(port,() => {
    console.log("Server is running  port " + port)
})