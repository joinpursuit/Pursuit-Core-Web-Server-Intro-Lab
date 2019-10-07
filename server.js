console.clear();

const http = require('http');

const port = 3000;

const usersData = () => {
    const data = {
        "results": [{
                "gender": "female",
                "name": {
                    "title": "mademoiselle",
                    "first": "ruth",
                    "last": "nicolas"
                },
                "nat": "CH"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "رها",
                    "last": "سلطانی نژاد"
                },
                "nat": "IR"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "patricia",
                    "last": "hale"
                },
                "nat": "GB"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "fernando",
                    "last": "cooper"
                },
                "nat": "US"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "یسنا",
                    "last": "صدر"
                },
                "nat": "IR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "eino",
                    "last": "tuomala"
                },
                "nat": "FI"
            },
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "gonca",
                    "last": "özkara"
                },
                "nat": "TR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "kyle",
                    "last": "castillo"
                },
                "nat": "US"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "olivia",
                    "last": "kumar"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "monsieur",
                    "first": "raymond",
                    "last": "durand"
                },
                "nat": "CH"
            }
        ],
        "info": {
            "seed": "2cb086ce097c87ee",
            "results": 10,
            "page": 1,
            "version": "1.2"
        }
    }
    return JSON.stringify(data);
}

const responseData = (request, response) => {
    const endPoint = request.url;
    // if (endPoint === '/random') {
    response.statusCode = 200;
    const jsonData = usersData();

    response.setHeader('Content-type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.end(jsonData);
    // } else {
    // response.statusCode = 404;
    // const error = {
    //     status: 404,
    //     error: `This endpoint doesn't exist`
    // }
    // const jsonError = JSON.stringify(error);

    // response.setHeader('Content-type', 'application/json');
    // response.setHeader('Access-Control-Allow-Origin', '*');

    // request.end(jsonError);
    // }
}

const server = http.createServer(responseData);

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});