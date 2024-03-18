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

router.get('/courses',async (req, res) => {
    const courseslist = await Course.find({})
    res.json({
        course: courseslist
    })
}
    )

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    const {username} = req.headers;
    const id = req.params.courseId;
   const product = await Course.find({
    id:id
   })
   await User.updateOne({
    username:username
   },
   {
    $push:{
        purchasedCourses: product
    }
   })
   res.send("purchase complete  " + product)
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    try {
        const { username } = req.headers;
        const user = await User.findOne({ username: username });
        
        if (!user) {
           return res.status(404).send("User not found");
        }
        
        const purchasedCourses = await Course.find({ _id: { $in: user.purchasedCourses } });
        
        res.send(purchasedCourses);
     } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
     }
  
});

module.exports = router