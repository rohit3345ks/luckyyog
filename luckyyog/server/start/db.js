const mongoose = require('mongoose');

const databaseUrl = process.env.DATABASE_URL;

module.exports = mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});