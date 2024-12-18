const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.usernameGet);
indexRouter.get("/new", indexController.usernameCreateGet);
indexRouter.post("/new", indexController.usernameCreatePost);

module.exports = indexRouter;
