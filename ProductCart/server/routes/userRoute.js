const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUserProfile,updateUserProfile,getUsers} =require("../controllers/userController");
const {auth} =require("../middleware/authMiddleware");

router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user/profile/:id").get(auth,getUserProfile);
router.route("/user/update/profile/:id").put(auth,updateUserProfile);

module.exports = router