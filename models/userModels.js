import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  userName: {
    type: String,
    require: true,
  },

  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,

  },
  email: {
    type: String,
    require: true,

  },
  password: {
    type: String,
    require: true,

  },
  phone: {
    type: String,

  },
  adress: {
    type: String,
  },
  // image: {
  //     type:Buffer,
  // },
  isAdmin: {
    type: Boolean,
  },
});
const schema = mongoose.model("User", userSchema);
export default schema;
