// const sgMail = require("@sendgrid/mail");
// const sendgridAPIKey =
//   "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";

// sgMail.setApiKey(sendgridAPIKey);
// sgMail.send({
//   to: "rajvakhariya23@gmail.com",
//   from: "raj.v@crestinfosystems.com",
//   subject: "This is my first crestion",
//   text: "I hope this one actually get to you...",
// });

//-------------------------------------------------------------------------------------------------------
const sgMail = require("@sendgrid/mail");

// const sendgridAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "raj.v@crestinfosystems.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "raj.v@crestinfosystems.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
