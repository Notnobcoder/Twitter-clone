import bcrypt from "bcrypt";
import { User } from "../model/authModel.js";

export const Register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 100),
      impressions: Math.floor(Math.random() * 3),
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
