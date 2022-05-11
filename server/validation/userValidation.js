const joi = require("joi");

const loginSkeleton = {
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi
    .string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#$%^&*])(?=.{8,})"
      )
    )
    .required(),
};

const registerSkeleton = {
  firstName: joi.string().alphanum().required(),
  lastName: joi.string().alphanum().min(1).max(30).required(),
  userName: joi.string().alphanum().min(1).max(30).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: joi.string().min(9).max(14).required(),
  country: joi.string().min(1).max(30).required(),
  state: joi.string().min(1).max(30).required(),
  city: joi.string().min(1).max(30).required(),
  address: joi.string().min(1).max(30).required(),
  password: joi
    .string()
    .min(6)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#$%^&*])(?=.{8,})"
      )
    )
    .required(),
  biz: joi.boolean().required(),
  // isAdmin: joi.boolean().required(),
};
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#\$%\^&\*])(?=.{8,})

// ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$

const loginSchema = joi.object(loginSkeleton);
const registerSchema = joi.object(registerSkeleton);

module.exports = {
  loginSchema,
  registerSchema,
};

// const joi = require('joi')

// function loginSkeleton(req) {
//   const schema = joi.object({
//     email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
//     password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
// });

//   return schema.validate(req);
// }

// function registerSkeleton(user) {
//   const schema = joi.object({
//     firstName: joi.string().alphanum().min(1).max(30).required(),
//     lastName: joi.string().alphanum().min(1).max(30).required(),
//     userName: joi.string().alphanum().min(1).max(30).required(),
//     email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
//     phone: joi.string().min(9).max(14).pattern(new RegExp('^[0-9\-\+]{9,15}$')).required(),
//     country: joi.string().min(1).max(30).required(),
//     state: joi.string().min(1).max(30).required(),
//     city: joi.string().min(1).max(30).required(),
//     address: joi.string().min(1).max(30).required(),
//     password: joi.string().min(6).max(30).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
//     biz: joi.boolean().required(),
//     // isAdmin: joi.boolean().required(),
//   });

//   return schema.validate(user);
// }
