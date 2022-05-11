const jwt = require('jsonwebtoken')
 
const crateToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, "ggtumesmvrrmviemr", { expiresIn: '7d'}, (err,token) =>{
            if(err) rej(err)
            else res(token)
        })
    })
}  

const verifyToken = token =>{
    return new Promise((res,rej)=>{
        jwt.verify(token, "ggtumesmvrrmviemr", (err, decoded)=>{
            if(err) rej(err)
            else res(decoded)
        } )
    })
}
 
module.exports = {
    crateToken,
    verifyToken
}
