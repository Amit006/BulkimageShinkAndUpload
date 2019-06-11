var express = require('express');
var router = express.Router();
const sharp = require('sharp');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/imageUpload', function(req, res, next) {

  res.render('index', { title: 'Express', breadcrumb: "imageupload" });
});


router.post('/uploadmultiple', function(req, res, next) {console.log('---- upload Files ----');
  console.log(' req.files: ', req.files);
  let Apikey = []
  if (Object.keys(req.files.myFiles).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  req.files.myFiles.forEach( (Filevalue, index) => {
    let url = 'upload/' + Filevalue.name
    Filevalue.mv(url, function (err) {
      console.log(' err: ', err, ' Filevalue', Filevalue.data)
      if (err)
        return res.status(500).send(err);
      let shorturl = 'upload/thumbnails/sortV' + Filevalue.name.split(" ").join("_");  
      // sharp(Filevalue.data)
      // .resize(620, 440)
      //   .toFile('output.webp', (err, info) => {
      //   // res.json({})
      //     console.log(' sortV done value: ', info )
      // });

      sharp(url)
        // .rotate()
        // .resize(620, 440)
        .toBuffer()
        .then(data => { 
          
          console.log(' data: ', data) 
          sharp(data)
          .resize(620, 440)
          .toFile(shorturl, (err, info) => {
        // res.json({})
          console.log(' sortV done value: ', info , ' err: ', err);
           let obj = {
              'mainImg': '',
              '':'',
              '':'',
              '':'',
              '':''
           };
            Apikey.push()
      });
    })
        // .toFile(shorturl , (err, info) => {
        //   // res.json({})
          
        //   console.log(' sortV done value: ', info)
        // })
      .catch(err => {  console.log(' some error : ', err); });
      // res.send('File uploaded!');
      console.log(' File Moved ')
    });
  

  })
  
});

module.exports = router;
