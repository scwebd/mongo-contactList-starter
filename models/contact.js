const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        // string, required, between 1-30 characters
    },
    lastName: {
        // string, required, between 1-30 characters
    },
    contactType: {
        // string, default value "Personal"       
    },
    phoneNumber: {
        // string, optional, if present: length exactly 10 characters & numbers only
    },
    emailAddress: {
        // string, optional, if present: must be valid email format
    }
});

// passing our schema in and creating a Mongoose model called "Contact" with it
const Contact = mongoose.model("Contact", ContactSchema);
// exporting our model so that our routes can use it to interact with our collection
module.exports = Contact;
