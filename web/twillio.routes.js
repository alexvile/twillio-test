// // import { Router } from "express";
// // import * as dotenv from "dotenv";
// // import twilio from "twilio";

// // import * as readline from 'node:readline/promises';
// // import { stdin as input, stdout as output } from 'node:process';

// // dotenv.config();

// const twillioRouter = Router();

// // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // const sender = process.env.TWILIO_PHONE_NUMBER;
// // // const verifySid = "VA745720e71cb3bb8fd7a5920928af5e59";

// // const myNumber = "+380730272585";
// // const randomNumber = '225533'

// // const client = twilio(accountSid, authToken);

// // // twillioRouter.get("/test", async (req, res) => {
// // //   try {
// // //     client.messages
// // //       .create({
// // //         body: "This is the ship that made the Kessel Run in fourteen parsecs?",
// // //         to: myNumber,
// // //         from: forTestingFree,
// // //       })
// // //       .then((message) => console.log(message));

// // //     return res.status(200).json({ m: "test" });
// // //   } catch (error) {
// // //     return res.status(500).json(error.message);
// // //   }
// // // });

// // // twillioRouter.post("/send-code", async (req, res) => {
// // // console.log(req.body.number)
// // // const text = `Hello from MGroup! Your verification code is: ${randomNumber}`;
// // // const recipientPhoneNumber = req.body.number;

// // //   try {
// // //     const message = await client.messages
// // //       .create({
// // //         body: text,
// // //         to: myNumber,
// // //         from: sender,
// // //       });
// // //       console.log(message);

// // //     return res.status(200).json({ response: `Message has been sent successfull to number ${recipientPhoneNumber}`, message, status: "success" });
// // //   } catch (error) {
// // //     return res.status(500).json({ response: error.message, message, status: "error" });
// // //   }
// // // });

// // const rl = readline.createInterface({ input, output });


// // async function sendVerificationCode(phoneNumber) {
// //   const data = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
// //     .verifications
// //     .create({
// //       to: phoneNumber,
// //       channel: 'sms'
// //     });
// //   return data.status;
// // }

// // async function checkVerification(phoneNumber, code) {
// //   const data = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
// //     .verificationChecks
// //     .create({
// //       to: phoneNumber,
// //       code: code
// //     });
// //   return data.status;
// // }

// // async function verifyUser(phoneNumber) {
// //   const status = await sendVerificationCode(phoneNumber);
// //   if (status === 'pending') {
// //       rl.question('Enter code: ', code => {
// //           checkVerification(phoneNumber, code)
// //               .then((data) => {
// //                   if (data === 'approved') {
// //                       rl.write('User verified');
// //                       rl.close();
// //                   } else {
// //                       rl.write('User not verified');
// //                       rl.close();
// //                   }
// //               });
// //       });

// //   }
// //   else {
// //       return 'Error sending verification code';
// //   }
// // }

// // verifyUser('+380730272585');


// // // twillioRouter.post("/send-code", async (req, res) => {
// // //   console.log(req.body.number)
// // //   const text = `Hello from MGroup! Your verification code is: ${randomNumber}`;
// // //   const recipientPhoneNumber = req.body.number;
  
// // //     try {
// // //       const otpResponse = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
// // //       .verifications
// // //       .create({
// // //         to: recipientPhoneNumber,
// // //         channel: 'sms',
// // //       })
     
// // //       return res.status(200).json( `OTP send successfully: ${JSON.stringify(otpResponse)}`);
// // //     } catch (error) {
// // //       return res.status(error?.status || 400).json(error?.message || 'SMTH went wrong!');
// // //     }
// // //   });
// export { twillioRouter };


// // // todo - Redis as db to send / receive / compare 6-x digit code ??
// // // todo - add random 6-x digit number



