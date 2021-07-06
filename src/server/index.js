const dotenv = require('dotenv');
var path = require('path');
// Middleware
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

// Start up instance of app
const app = express();
const port = process.env.PORT || 8081;

// MeaningCloudAPI
dotenv.config();
const mockAPIResponse = require('./mockAPI.js');
const mainAPI = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;


// Use middleware
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

// root send file to the browser
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`App listening on port ${port}`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/information', getInfomation);
async function getInfomation(req, res) {
    
    const {urlDataForm}  = req.body;    
    const url = `${mainAPI}key=${apiKey}&lang=auto&url=${urlDataForm}&model=general`;
    const sentiment_response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
    console.log(urlDataForm);
    try {
        const data = await sentiment_response.json();
        console.log('Data from MC: ', data);      
        res.send(data);
    } catch(err){
        console.log(err.stack);
    }  

}