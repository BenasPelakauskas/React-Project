const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');



//Setup mongoose and connect to MongoDB
var mongoDB = 'mongodb+srv://admin:admin@cluster-ukmuc.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))


var Schema = mongoose.Schema;
var stockSchema = new Schema({
    item: String,
    barCode: Number,
    price: String
})

var stockModel = mongoose.model('stock', stockSchema);

app.post('/api/stock', (req, res) => {
    console.log(req.body)
    console.log(req.body.item);
    console.log(req.body.barCode);
    console.log(req.body.price);
    stockModel.create({
        item: req.body.item,
        barCode: req.body.barCode,
        price: req.body.price
    });
    res.send('Item added');
})

app.get('/api/stock', (req, res, next) => {
    stockModel.find(function (err, data) {
        console.log(data);
        res.json(data);
    });
})

app.get('/api/stock/:id', (req, res, next) => {
    console.log(req.params.id);
    stockModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))