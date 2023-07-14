const router = require("express").Router();
 const { BlogPost, User, Comment } = require("../models");
 const withAuth = require("../utils/auth");

 router.get("/", async (req, res) => {
   try {
    
   }
 });

 router.get("/blogPost/:id", async (req, res) => {
   try {
     const blogPostData = await BlogPost.findByPk(req.params.id, {
       include: [
         {
           model: User,
           attributes: ["name"],
         },
       ],
     });

     const blogPost = blogPostData.get({ plain: true });

     res.render("blogPost", {
       ...blogPost,
       logged_in: req.session.logged_in,
     });
   } catch (err) {
     res.status(500).json(err);
   }
 });

 // Use withAuth middleware to prevent access to route
 router.get('/dashboard', withAuth, async (req, res) => {
   try {
     // Find the logged in user based on the session ID
     const userData = await User.findByPk(req.session.user_id, {
       attributes: { exclude: ['password'] },
       include: [{ model: BlogPost }],
     });

     const user = userData.get({ plain: true });

     res.render('dashboard', {
       ...user,
       logged_in: true
     });
   } catch (err) {
     res.status(500).json(err);
   }
 });

 router.get("/login", (req, res) => {
   // If the user is already logged in, redirect the request to another route
   if (req.session.logged_in) {
     res.redirect("/dashboard");
     return;
   }

   res.render("login");
 });

 module.exports = router;