
const router = require("express").Router();
const mainRoutes = require("./mainPRoutes");
const apiRoutes = require("./api");

router.use("/", mainRoutes);
router.use("/api", apiRoutes);


module.exports = router;