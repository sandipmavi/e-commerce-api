const express = require("express");
const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
