const {required} = require('express');
const express = require('express');
const resrouter = express.Router();
const model = require('../Model/model');
resrouter.use(express.json());



resrouter.post('/createbasket', async (req, res) => {
   const foodModel = new model({
    name: req.body.name,
    email:req.body.email,
    food_name: req.body.food_name,
    quantity: req.body.quantity
   })

   await foodModel.save();

   try{
    res.status(200).send({status:'success',message:'your order has been placed'})

   }catch(error){
    res.status(400).send({status:'failed',message:'unable to save data'})
   }

})

resrouter.get('/getorders', async (req,res) =>{

   try{
      const foodModels = await model.find({})
      if(foodModels.length > 0){
         res.status(200).send({status:'success',message:'data retrieved',response:foodModels})
      }
      else{
         res.status(201).send({status:'success',message:'no data found',response:[]})
      }
   }
   catch(error){
      res.status(400).send({status:'failed',message:'unable to list data'})
   }
})




module.exports = resrouter