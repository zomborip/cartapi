const express = require("express")
const Sequelize = require("sequelize")
const Song = require("./models/Song")
const Users = require("./models/Users")
const multer = require("multer")
const cors = require("cors")
require("body-parser")


/////////////////// FILE SYSTEM ///////////////////////////////////
//file system storage SONG
const songtorage = multer.diskStorage({
  destination: (req, file, cb) => {cb(null, "./music")},
  filename: (req, file, cb) => {

      cb(null, req.params.fname.replace(' ', '_') + ".mp3")
  }
});
//filter for mp3 MAX[2mb]
const songfilter = (req, file, cb) => {
  let ok = true;
  if (file.mimetype != "audio/mpeg") {
      ok = false;
  } else if (file.size > 1024*1024*2) {
      // 2 MB
      ok = false;
  }
  cb(null, ok);
};
//file system storage PICTURE
const pictorage = multer.diskStorage({
  destination: (req, file, cb) => {cb(null, "./picture")},
  filename: (req, file, cb) => {

      cb(null, req.params.fname.replace(' ', '_') + ".jpg")
  }
});
//filter for DEMO MP3 MAX[5mb]
const picfilter = (req, file, cb) => {
  let ok = true;
  if (file.mimetype != "image/jpeg" || file.mimetype != "image/png") {
      ok = false;
  } else if (file.size > 1024*1024*5) {
      // 5 MB
      ok = false;
  }
  cb(null, ok);
};
const demotorage = multer.diskStorage({
  destination: (req, file, cb) => {cb(null, "./music")},
  filename: (req, file, cb) => {

      cb(null, req.params.fname.replace(' ', '_') + "_demo" + ".mp3")
  }
});
//filter for DENO SONG MAX[2mb]
const demofilter = (req, file, cb) => {
  let ok = true;
  if (file.mimetype != "audio/mpeg") {
      ok = false;
  } else if (file.size > 1024*1024*2) {
      // 2 MB
      ok = false;
  }
  cb(null, ok);
};

const uploadSong = multer({storage: songtorage, fileFilter: songfilter});
const uploadPic = multer({storage: pictorage, fileFilter: picfilter});
const uploadDemo = multer({storage: demotorage, fileFilter: demofilter});
/////////////////////////////// FILE SYSTEM [END] //////////////////////////////

////////////////////////////// MIDDLEWARES [START] /////////////////////////////
//DB Error handler
const errHandler = (err) => {
  console.error(err)
}

//api generation
const app = express()
app.use(cors())
app.use(express.json())
app.listen("3030", () => {console.log("PORT 3030")});
////////////////////////////// MIDDLEWARES [END] /////////////////////////////

///////////////////////////// MAIN API LOGIC [START] ////////////////////////

// GET /test []
app.get("/test", (req, res) => {
  res.json({error: 0})
})

// POST /music/:id [id]
app.get("/music/:id", async (req, res)=>{
  try {
    let l = await Song.findAll({where: {id: req.params.id}})
    return res.json(l)
  } catch (error) {
    console.log(error);
    res.send("0")
  }
})

// GET /music
app.get("/music", async (req, res)=> {
  try {
    let l = await Song.findAll()
    return res.json(l.reverse())
  } catch (error) {
    console.log(error);
    res.send("0")
  }
})

// put /berak [] ONLY DEV
app.put("/berak", async (req, res)=>{
  await Song.create({
    name: req.body.name,
    note: req.body.note,
    img: req.body.img,
    demo: req.body.demo,
    song: req.body.song,
    price: req.body.price,
    free: req.body.free,
    prod: req.body.prod
  })
  res.json({ok: 1})
})


///////////////////////////// MAIN API LOGIC [END] ////////////////////////
