const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.use("/", indexController.usernameGet);
indexRouter.use("/new", indexController.usernameCreateGet);

module.exports = indexRouter;
