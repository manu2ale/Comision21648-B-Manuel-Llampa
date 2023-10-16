const express = require('express');
const { sequelize } = require('./database')
require("./src/Models/Post")
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/src/views')

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', require('./src/routes/router'))

//Config
app.listen(4000, () => {
    sequelize.sync({ force: false })
        .then(() => console.log('DB is connected'))
        .catch((err) => console.log(err))
    console.log("Server ready, port 4000");
})