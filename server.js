const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const router = require('./Router/router');
const imageRouter = require('./Router/imageRouter');
app.use(express.json());
app.use('/order',router);
app.use('/image',imageRouter);
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors);

const port = 10000;

// const urlString = 'mongodb+srv://vibish123:vibish123@cluster0.jcfnzmz.mongodb.net/?retryWrites=true&w=majority'
const urlString = 'mongodb://localhost:27017'
mongoose.connect(urlString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


mongoose.connection.once("open", () => {
    console.log('Connected to nodejs');
}).on("error", function(error){
console.log('error unable to connect with mongo db');
})


// app.listen(port, '0.0.0.0', () =>{
//     console.log(`Server is listening in the following url and port http://0.0.0.0:${port}`);
// })


app.listen(port, '127.0.0.1', () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
  });