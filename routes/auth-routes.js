const { Router } = require("express");
const { validate, signupValRules, updateValRules } = require("../middleware/validator");
const authController = require("../controllers/auth-controller");
const requireAuth = require("../middleware/auth");

const router = Router();

router.get("/check", authController.checkUser);
router.post("/signup", signupValRules(), validate, authController.signup);
router.post("/login", authController.login);
router.put("/update", requireAuth, updateValRules(), validate, authController.updateUser);
router.get("/logout", authController.logout);

module.exports = router;
