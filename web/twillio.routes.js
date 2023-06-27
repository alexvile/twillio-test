import { Router } from "express";
import * as dotenv from "dotenv";
import twilio from "twilio";

// // import * as readline from 'node:readline/promises';
// // import { stdin as input, stdout as output } from 'node:process';

dotenv.config();

const twillioRouter = Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_SERVICE_SID
const sender = process.env.TWILIO_PHONE_NUMBER;

// const myNumber = "+380730272585";
// const randomNumber = '225533'

const client = twilio(accountSid, authToken, { lazyLoading: true });

const myNumber = '+380730272585'

twillioRouter.post("/send-otp", async (req, res) => {
  console.log(req.body.number);
  const {number} = req.body
  try {
    const otpResponse = await client.verify.v2
      .services(verifySid)
      .verifications.create({
        to: myNumber,
        channel: "sms",
      });
    res
      .status(200)
      .json({m: 'OTP send successfully!: ', otpResponse})
  } catch (error) {
    res
      .status(error?.status || 400)
      .json(error?.message || "Something went wrong!");
  }
});


twillioRouter.post("/verify-otp", async (req, res) => {
    const {code} = req.body;
    console.log(code);
    try {
   const verifiedResponse = await client.verify.v2
   .services(verifySid)
   .verificationChecks.create({
     to: myNumber,
     code
   });
      res
        .status(200)
        .json({m: 'OTP send successfully!:', verifiedResponse});
        // todo - if data === 'approved'
        // todo - to write to db this number is verified
        // todo - before send check if number was verified later, connect with user in shopify
    } catch (error) {
      res
        .status(error?.status || 400)
        .json(error?.message || "Something went wrong!");
    }
  });


export { twillioRouter };



// for first type:
// todo - Redis as db to send / receive / compare 6-x digit code ??
// todo - add random 6-x digit number


// for native verification
// todo - save number from previous form or in frontend


// todo - proxy