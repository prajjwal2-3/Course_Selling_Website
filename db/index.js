const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://prajjwalbh25:AtZMTaWRJWT6uRl1@cluster0.rbysjio.mongodb.net/Course');


const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number,
    id: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}