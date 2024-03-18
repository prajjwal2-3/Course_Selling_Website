const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course}=require("../db")

// Admin Routes
router.post('/signup', (req, res) => {
    const {username,password}=req.body
    Admin.create({
        username: username,
        password: password
    })
    res.json("admin created successfully")
});

router.post('/courses', adminMiddleware, (req, res) => {
     const {title,description,price} = req.body
     Course.create({
        title:title,
        description:description,
        price:price

     })
     res.json("course created successfully")
});

router.get('/courses', adminMiddleware, async (req, res) => {
   const courseslist = await Course.find({})
    res.json({
        course: courseslist
    })
});

module.exports = router;