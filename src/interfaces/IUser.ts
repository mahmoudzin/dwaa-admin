import Joi from 'joi';
export interface IUser {
  id: string
  userName: string
  email: string
  imgUrl: string
  displayName: string
  phoneNumber: string
  roles: any[]
}


export const validationObject = {
  id: Joi.number(),
  image: Joi.object().instance(File).allow(""),
  displayName: Joi.string().required().min(3).max(100),
  email: Joi.string().required()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "org"] } }),
  phoneNumber: Joi.string().required().pattern(/^[0-9]{6,13}$/),
  imgUrl: Joi.string(),
  password: Joi.string().pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
  roles: Joi.any()
}