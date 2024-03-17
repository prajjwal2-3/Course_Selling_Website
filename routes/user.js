const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}= require("../db");
const {default:mongoose}=require("mongoose");


router.post('/signup', (req, res) => {
    const {username,password} = req.body
       User.create({
        username,
        password
       })
       res.send('user created successfully')
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router