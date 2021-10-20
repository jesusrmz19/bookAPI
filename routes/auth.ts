import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { User } from '../models/User';
import { loginValidation, registerValidation } from './validation';

const router = express.Router();

// LOGIN ROUTER

router.post('/login', async (req: Request, res: Response) => {
  // Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if Email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid Email');

  // Check Password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send({ error: 'Invalid Password' });

  // If everything is correct
  // Create and Assign Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .cookie('token', token, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
    })
    .send({ msg: 'Logged In' });
});

// REGISTER ROUTE
router.post('/register', async (req: Request, res: Response) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user is already in the DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Save User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as authRoute };
