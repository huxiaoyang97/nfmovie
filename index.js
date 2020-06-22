//'use strict';
// simphoni-rdcloud-environment

const express = require('express'),
    cookieParser = require('cookie-parser'),
    http = require('http'),
    bodyParser = require('body-parser'),
    cors = require('cors');


//init
let app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({
    limit: '50mb'
}));
// web services
app.get('/getData',async (req, res) => {
    
    let result = {
 
        mylist : [
         
        {
         
        title: 'Futurama',
         
        id: 1,
         
        img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
         
        },
         
        {
         
        title: 'The Interview',
         
        id: 2,
         
        img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
         
        },
         
        {
         
        title: 'Gilmore Girls',
         
        id: 3,
         
        img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
         
        }
         
        ],
         
        recommendations : [
         
        {
         
        title: 'Family Guy',
         
        id: 4,
         
        img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
         
        },
         
        {
         
        title: 'The Croods',
         
        id: 5,
         
        img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
         
        },
         
        {
         
        title: 'Friends',
         
        id: 6,
         
        img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
         
        }
         
        ]
         
        }
        
    res.status(200);
    res.send(JSON.stringify(result));
    res.end();
    
});


var server = http.createServer(app);
console.log(' [*] Listening on 0.0.0.0:' + 3001);
server.listen(3001, '0.0.0.0');

