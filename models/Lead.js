const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
  businessName: String,
  phoneNumber: String,
  city: String,
  state: String,
  firstName: String,
  lastName: String,
  streetAddress: String,
  secondPhoneNumber: String,
  notes: String,
  category: Array,
  email: String,
  disposition: String,
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
