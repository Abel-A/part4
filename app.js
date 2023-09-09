const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require("./router/blog")
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then((result) => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

mongoose.set('strictQuery', false);

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app

