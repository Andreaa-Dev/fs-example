import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import UserServices from "../services/user";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const CLIENT_ID = process.env.CLIENT_ID as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email;
    const foundUser = await UserServices.findUserByEmail(userEmail);
    done(null, foundUser);
  }
);
