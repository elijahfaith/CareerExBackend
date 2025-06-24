const jwt = require("jsonwebtoken")
const Auth = require("../models/authModel")


const validateRegister =  (req, res, next)=>{

    const { fullName, email, password, } = req.body

    const error = []

    if(!email){
        error.push("pleaser add your email")
    }

     if(!password){
        error.push("pleaser add correct password")
    }

    if(error.length > 0){
        return res.status(400).json({message:errors})
    }

    next()

}

const authorization = async (req, res, next)=>{

          const token = req.header("Authorization")

          if(!token){
            return res.status(401).json({message:"please submit details!"})
          }

          const splitToken = token.split(" ")

          const realToken = splitToken[1]
    
          const decoded = jwt.verify(realToken, `${process.env.ACCESS_TOKEN}`)
         
          if(!decoded){
            return res.status(401).json({message:"please submit right details!"})
          }

          const user = await Auth.findById(decoded.id)

          if(!user){
            return res.status(404).json({message:"User account does not exist"})
          }

          req.user = user


          next();

        
    
}

const authorizeRole = async (req, res, next) => {

    if(!req.use){
        res.status(401).json({message:"please authorise."})
    }else if (req.user.role !== "agent") {
        res.status(403).json({message:"Access deniel"})
    }else{
        next();
    }
    
};





module.exports = {
    validateRegister,
    authorization,
    authorizeRole
}