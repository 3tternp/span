const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log("Server is running on port 5000");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "basnetprem524@gmail.com",
    pass: "your-gmail-app-password-here"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  console.log("Received contact form submission:", req.body);
  
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const mail = {
    from: name + " <basnetprem524@gmail.com>",
    to: "basnetprem524@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  console.log("Attempting to send email:", mail);
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Email error:", error);
      res.json({ code: 500, status: "Error sending message" });
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });