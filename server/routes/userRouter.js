const userRouter = require("express").Router();
const UserController = require("../controllers/User.controller");
const { hashPass } = require("../middlewares/hashPass");
const { checkToken } = require("../middlewares/checkToken");
const upload = require("../middlewares/multer");

userRouter.post(
  "/sign-up",
  upload.single("imagePath"),
  hashPass,
  UserController.signUp,
);
userRouter.post("/sign-in", UserController.signIn);

userRouter.post("/refresh", UserController.refreshSession);

userRouter.get("/", checkToken, UserController.getUserData);

module.exports = userRouter;
