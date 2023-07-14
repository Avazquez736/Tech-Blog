
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");
const comments = require("./comments");

router.use("/users", userRoutes);
router.use("/post", blogPRoutes);
router.use("/comment", comments);


module.exports = router;