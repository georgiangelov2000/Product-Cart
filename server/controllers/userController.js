import asyncHandler from  'express-async-handler';
import User from  '../models/userModel.js';
import generateToken from  '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {

  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors:erros.array() });
  }

  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await new User({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
    await user.save();
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password:user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });

  }else{
    res.status(404)
    throw new Error('User not found')
  }
});

const getUsers=asyncHandler(async (req, res) => {
  const users=await Users.find({});
  res.json(users);
})

export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers
};
