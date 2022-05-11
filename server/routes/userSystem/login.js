const express = require('express')
const router = express.Router()
const UserValidation = require('../../validation/userValidation')
const UserModel = require('../../model/userModel')
const bcrypt = require('../../config/bcrypt')
const jwt = require('../../config/jwt')


router.post('/', async (req,res)=>{
    try{
        const value = await UserValidation.loginSchema.validateAsync(req.body, { abortEarly: false }) 

        const userArr = await UserModel.findUserByEmail(value.email)

        if(userArr.length != 0){
            const rightPassword = await bcrypt.CompareHash(value.password, userArr[0].password)
            
            if(rightPassword === true){
                const token = await jwt.crateToken({ id: userArr[0].id, biz: userArr[0].biz, isAdmin: userArr[0].isAdmin})

                res.json({ status: 200, msg: `welcome back ${userArr[0].userName}`, token:token })
            }
            else {
                throw 'wrong password' 
                // "Invalid email or password"
            }
        }
        else {
            throw 'this email does not exist in the system'
            // Invalid email or password
        }
        

    } catch (err){
        res.status(400).json({ status: 400, err:err})
    }
})

module.exports = router 






// router.post("/", async (req, res) => {
//   const { error } = loginSkeleton(req.body);
//   if (error) {
//     console.log(error.details[0].message);
//     return res.status(400).send(error.details[0].message);
//   }

//   let user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     console.log("Invalid email");
//     return res.status(400).send("Invalid email or password.");
//   }

//   const validPassword = CompareHash(req.body.password, user.password);
//   if (!validPassword) {
//     console.log("Invalid password");
//     return res.status(400).send("Invalid email or password.");
//   }
 
//   res.json({
//     token: generateAuthToken(user),
//   });
// });












// const express = require('express')
// const router = express.Router()
// const UserValidation = require('../../validation/userValidation')
// // const {loginSchema} = require('../../model/userModel')
// // const bcrypt = require('../../config/bcrypt')
// // const {jwt} = require('../../config/jwt')
// const {generateAuthToken} = require('../../config/jwt')
// const { comparePassword } = require('../../config/bcrypt')
// const UserModel = require('../../model/userModel')




// router.post("/", async (req, res) => {
//   const { error } = UserValidation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let user = await UserModel.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("Invalid email or password.");

//   const validPassword = comparePassword(req.body.password, user.password);
//   if (!validPassword) return res.status(400).send("Invalid email or password.");

//   res.json({
//     token: generateAuthToken(user),
//   });
// });