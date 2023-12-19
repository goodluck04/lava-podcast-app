import { errorHandler } from "../utils/error.js";
import User from "../model/user.model.js";

export const signup = async (req, res, next) => {
  try {
    const { email } = req.body;
    // console.log("Received signup request for email:", email);

    const existingUser = await User.findOne({ email }); // Use findOne instead of find
    if (existingUser) {
      // console.log("User already exists:", existingUser);
      return next(errorHandler(404, "User already exists"));
    }

    const newUser = new User({ email });
    await newUser.save();

    // console.log("New user created:", newUser);
    res.status(200).json(newUser);
  } catch (error) {
    // console.error("Error in signup controller:", error);
    next(error);
  }
};


export const getUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not Found!"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { email,username } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        // only these things you canchange
        $set: {
          username: req.body.username,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
