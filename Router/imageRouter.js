const {required} = require('express');
const express = require('express');
const resrouter = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
const imageModel = require('../Model/Imagemodel')
resrouter.use(express.json());
resrouter.use(bodyParser.urlencoded({ extended: false }))
resrouter.use(bodyParser.json())
var multer = require('multer');
var fs = require('fs');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });


resrouter.get('/getImage', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    })
});
 
 
resrouter.post('/uploadImage', upload.single('image'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log('error is nishanth:::',err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

// resrouter.post
module.exports = resrouter;