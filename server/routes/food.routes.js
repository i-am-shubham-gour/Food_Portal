const router = require("express").Router();
const mainpage = require("../model/food");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "project2354",
  api_key: "788538959648522",
  api_secret: "CuAd_j_HY-wgV10_Y76_XSFD-e0",
});

router.post("/addmainPage", (req, res) => {
  try {
    const file = req.files.image;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      console.log(result);
      res.json({ msg: "Success" });
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/addmain", (req, res) => {
  try {
    const newmainPage = new mainpage({
      name: req.body.name,
      image: req.body.image,
      subItemsData: req.body.subItemsData,
    });
    newmainPage.save();
    res.json({ msg: "Success" });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const foods = await mainpage.find();
    res.json(foods);
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;
