
const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');
const smtpPassword = require('aws-smtp-credentials');

const mailOptions = {
  from: 'mzam.siya@gmail.com',
  to: 'siyanda@offerzen.com',
  text: 'Hey Siya',
  html: '<b>This is some HTML</b>',
};
function callback(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent: ' + info.response);
  }
}

// Send e-mail using AWS SES
mailOptions.subject = 'Nodemailer SES transporter';
const sesTransporter = nodemailer.createTransport(sesTransport({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
}));
sesTransporter.sendMail(mailOptions, callback);

// Send e-mail using SMTP
mailOptions.subject = 'Nodemailer SMTP transporter';
const smtpTransporter = nodemailer.createTransport({
  port: 465,
  host: 'email-smtp.eu-west-2.amazonaws.com',
  secure: true,
  auth: {
    user: process.env.AWS_ACCESS_KEY_ID,
    pass: smtpPassword(process.env.AWS_SECRET_ACCESS_KEY),
  },
  debug: true
});
smtpTransporter.sendMail(mailOptions, callback);