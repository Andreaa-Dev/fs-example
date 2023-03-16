import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User, { UserDocument } from "../model/User";
import UserService from "../services/user";

export const createUser = async (request: Request, response: Response) => {
  try {
    const { firstName, email, password } = request.body;
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      firstName: firstName,
      email: email,
      password: hashedPassword,
    });
    const user = await UserService.createUser(newUser);
    response.json(user);
  } catch (error) {
    console.log(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassWord = async (
  request: Request,
  response: Response
) => {
  const userData = await UserService.findUserByEmail(request.body.email);
  if (!userData) {
    response.status(403).json({ message: "Cant find user with the email" });
    return;
  }
  const passwordDatabase = userData.password;
  const plainPassword = request.body.password;

  const match = await bcrypt.compare(plainPassword, passwordDatabase);
  if (!match) {
    response.status(403).json({ message: "wrong password" });
    return;
  }
  const token = jwt.sign(
    {
      email: request.body.email,
      _id: userData._id,
      firstName: userData.firstName,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  response.json({ token, userData });
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const update = req.body;
    const userId = req.params.userId;
    const updatedUser = await UserService.updateUser(userId, update);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};
