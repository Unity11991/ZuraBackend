const { Router } = require("express");
const { UserModel } = require("../models/User.model");
const userController = Router();

// to fetch user's profile by email
userController.get("/", async (req, res) => {
  let { zurawallet } = req?.headers;
  try {
    let profiles = await UserModel.findOne({ zuraWallet: zurawallet });
    res.status(200).send(profiles);
  } catch {
    console.log("error while fetching");
    res.status(400).status({ msg: "error while fetching" });
  }
});

// routes for post user profile
userController.post("/profile", async (req, res) => {
  let { zurawallet } = req.body;
  var currentDate = new Date();

  const isUserAlready = await UserModel.find({
    zurawallet: zurawallet,
  });
  if (isUserAlready.length > 0) {
    return res.status(400).send({ msg: "user already exist!" });
  }

  try {
    let data = await UserModel({ ...req.body, accCreated: currentDate });
    await data.save();

    res.status(200).send({ msg: "user created successfully!" });
  } catch {
    res.status(500).status("error");
  }
});

// routes for updating profile data

userController.patch("/profile/update", async (req, res) => {
  let { zurawallet } = req?.headers;

  try {
    let data = await UserModel.findOneAndUpdate(
      { zurawallet: zurawallet },
      { ...req.body }
    );
    res.send(data);
  } catch (err) {
    res.status(401).send("something went wrong!");
    console.log(err);
  }
});

module.exports = userController;
