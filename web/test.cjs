require('dotenv').config();

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

function sendVerificationCode(phoneNumber) {
   return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
       .verifications
       .create({
           to: phoneNumber,
           channel: 'sms'
       }).then((data) => {
           return data.status;
       });
}

function checkVerification(phoneNumber, code) {
   return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
       .verificationChecks
       .create({
           to: phoneNumber,
           code: code
       }).then((data) => {
           return data.status;
       });
}

async function verifyUser(phoneNumber) {
   const status = await sendVerificationCode(phoneNumber);
   if (status === 'pending') {
       readline.question('Enter code: ', code => {
           checkVerification(phoneNumber, code)
               .then((data) => {
                   if (data === 'approved') {
                       readline.write('User verified');
                       readline.close();
                   } else {
                       readline.write('User not verified');
                       readline.close();
                   }
               });
       });

   }
   else {
       return 'Error sending verification code';
   }
}

verifyUser('+380730272585');
