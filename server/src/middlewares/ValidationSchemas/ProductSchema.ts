import * as Joi from 'joi'
import { Request, Response, NextFunction } from 'express';

const ProductSchema= Joi.object({
    name:Joi.string()
         .required(),
    category:Joi.string()
            .required(),
    min_qty:Joi.number()
           .required(),
    unit:Joi.string()
           .required(),
    description:Joi.string()
               .required(),
 
});


export const ProductValidator=async(req:Request, res:Response, next:NextFunction)=>{
    const {error}= ProductSchema.validate(req.body);
    if(error){
        
        return res.status(400).send(error.details[0].message);
    }
    next();
}