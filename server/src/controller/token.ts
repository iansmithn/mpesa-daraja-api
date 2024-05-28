import { Request, Response, NextFunction } from "express";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const createToken = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.SECRET_KEY;
  const consumer = process.env.CONSUMER_KEY;
  const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");

  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    )
    .then((data) => {
      //token = data.data.access_token;
      console.log(data.data);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

export default createToken;
