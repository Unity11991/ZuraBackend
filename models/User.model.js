const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, default : "" },
  email: { type: String, default : "" },
  zurawallet: { type: String },
  personalwallet: { type: String },
  hasHouse: { type: Boolean, default : false },
  profileImg: { type: String , default : ""},
  coverImg: { type: String, default : "" },
  karmabalance: { type: Number, default : 0 },
  treesPlanted: { type: Number, default : 0 },
  carbonOffset: { type: Number, default : 0 },
  isProfileCompleted: { type: Boolean, default: false },
  accCreated: { type: String },
  hasHouseId : {type : Number, default : null}
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
