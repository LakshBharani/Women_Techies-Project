const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    mobile:String,
    password:String,
    gender:String,
    placesVisited:[],
},{
    collection:"UserInfo"
});
mongoose.model("UserInfo",UserDetailSchema)