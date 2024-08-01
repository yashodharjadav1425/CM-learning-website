const Contact = require("../models/contact-model");


const contactForm = async (req, res) => {
    try {
      // const response = req.body;
      const {username, email, message} = req.body;

      // await Contact.create({username, email, message});

      const contactCreated = await Contact.create({username, email, message});
      
      return res.status(200).json(contactCreated);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "message not delivered" });
    }
  };

  module.exports = { contactForm };