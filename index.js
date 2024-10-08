require('dotenv').config();
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 4000;
const BookRoute = require('./routes/book.route');


// middlewares
app.use(express.json());
app.use(cors())


// routes
app.use('/api/v1/book',BookRoute)
app.get('/', (req, res) => {
    res.send('hello world')
})
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();