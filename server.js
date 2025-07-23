const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

const app = express();

// CORS - allow requests from all origins or restrict to frontend domain
app.use(cors({ origin: "*" })); // Change "*" to "https://yourfrontend.com" if needed
app.use(express.json());
app.use("/", router);

// PORT configuration
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on public port ${PORT}`);
});

// Configure Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Verify transport
contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("📧 Email transporter ready");
  }
});

// POST /contact endpoint
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: `${name} <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📬 New Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  console.log("📨 Contact form received:", req.body);

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Failed to send email:", error.message);
      res.status(500).json({ status: "Failed to send message" });
    } else {
      console.log("✅ Email sent:", info.response);
      res.status(200).json({ status: "Message sent successfully" });
    }
  });
});
