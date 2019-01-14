const mailer = require("nodemailer");
const sgTransport = require("nodemailer-smtp-transport");

// create transport to iterate over
const transport = mailer.createTransport(
  sgTransport({
    auth: {
      user: "stage3",
      pass: "secret"
    },
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    ignoreTLS: false
  })
);

// send 10 emails in a loop
for (var i = 0; i < 10; i++) {
  const mailOptions = {
    from: "test@sedna.com",
    replyTo: "test@sedna.com",
    to: "",
    cc: "",
    bcc: "<hussein@jafferjee.ca>, <test@jafferjee.ca>",
    subject: `Test Subject ${i}`,
    html: `<p>Message ${i}</p>`
  };

  transport.sendMail(mailOptions, (err, info) => {
    console.log(`Sent Email ${i}`);
    console.log(JSON.stringify(info));
  });
}
