// Imports
const router = require("express").Router();
const { post } = require("../../models");
const withAuth = require("../../utils/auth");

// Route for new post
router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newpost = await post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newpost);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Route to edit post
router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const postData = await post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete post
router.delete("/:id", withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    const postData = await post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;