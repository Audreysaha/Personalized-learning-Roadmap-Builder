const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, text) => {
    try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use Gmail or any other SMTP service
        auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
        },
    });

    // Email details
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent to ${to}');
    } catch (error) {
    console.error('Email sending failed: ${error.message}');
    }
};

module.exports = sendEmail;