import Joi from "joi";

const userSchema = Joi.object({
    firstName: Joi.string()
                .required(),

    lastName:Joi.string()
                .required(),

    password:Joi.string()
                .required()
                .length(6),

    email:Joi.string()
             .email()
             .required()   
    
})


export{
    userSchema
}