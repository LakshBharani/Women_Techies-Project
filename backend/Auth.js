const jwt = require("jsonwebtoken");
const User = require("./Users")
const asyncHandler = require("express-async-handler");

const JWT_SECRET = "mysecretkey";

const userAuth = asyncHandler(async(req,res,next)=>{
    //check and get cookie/token
    const token = req?.headers?.cookie.slice(6) || req?.header("token") || req?.cookie.token;

    console.log(token)

    // try {

    //     if(!token){
    //         return res.status(401).json({
    //             message: "No entry without authorization",
    //         })
    //     }

    //     const user = jwt.verify(token, "mysecretkey");

    //     const userFound = await User.findById(user.id).select("-password");

    //     req.user = userFound;

    //     //Log user to see if it is working
    //     console.log(userFound);

    // } catch (error) {
    //     return res.json({message: "Error at Authentication",error})
    // }

    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"})
    }
    try {
        
        const data = jwt.verify(token,JWT_SECRET);
    
        req.user = data.user;
    
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token 1"})
        
    }

})

module.exports = userAuth;