import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'lucy.ohara13@ethereal.email',
      pass: 'YbpsSMGqenhw1NBxWQ'
  }
});

let mailOptions = {
  from: 'zita.ruzsinszki@gmail.com',
  to: 'zita.ruzsinszki@gmail.com',
  subject: 'E-mail küldés Node.js-el',
  text: 'ennyi!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
