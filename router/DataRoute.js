const router = require("express").Router();
const Data = require("../Database/Data");

// create router....
router.post("/create", async (req, res) => {
  try {
    const { city, projectName, location, latitude, longitude } = req.body;
    const newData = new Data({
      city,
      projectName,
      location,
      latitude,
      longitude,
    });
    await newData.save();
    res.status(200).json({ success: "data created successfully!" });
  } catch (error) {
    console.log(error);
  }
});

// get router....
router.get("/get", async (req, res) => {
  try {
    const getAllData = await Data.find();
    res.status(200).json({ getAllData });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
