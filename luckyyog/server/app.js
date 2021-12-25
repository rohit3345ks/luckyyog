const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

dotEnv.config();
const db = require('./start/db');
const port = process.env.SERVER_PORT || 5000;

db.then((connection) => {
    // console.log(connection);
    console.log("Connected to database successfully");
}).catch((err) => {
    console.log("Couldn't connect to database");
    console.log(err.message);
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(blogRoutes);

app.listen(port, () => {
    console.log("server has started and listening to PORT", port);
});