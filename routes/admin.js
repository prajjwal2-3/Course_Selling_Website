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
   res.send("admin exist")
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;