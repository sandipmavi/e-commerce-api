const { protectRoute } = require("../controllers/product.controller");
const express = require("express");
const {
  login,
  logout,
  signup,
  refreshToken,
  getProfile,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);
