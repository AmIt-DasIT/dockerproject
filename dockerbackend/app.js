
const express = require('express');
const blogs_db = require("./models");
const bodyParser = require('body-parser');


var cors = require('cors')
var app = express()


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/uploads', express.static('uploads'));


const blogs = require('./Routes/blogs');


function routes() {
    app.use('/blogs', blogs);
}


blogs_db.sequelize.sync().then(() => {
    routes();
    app.listen(8080, () => {
        console.log("Server Initiated")
    });
})
