const Product = require('../../db').Product
const route = require('express').Router()   

route.get('/',(req,res)=>{
  //get all products
  Product.findAll()
  .then((products)=>{
      res.status(201).send(products)
  })
  .catch((err)=>{
      res.status(5201).send({
          error:"Could not retrive data"
      })
  })
})

route.post('/',(req,res)=>{
  //Validate the  values
  if(isNaN(parseFloat(req.body.price))){

     return res.status(403).send({
         error:"Price is not a valid number"
     })
  }

  //Add a new product
  Product.create({
      name:req.body.name,
      manufacturer:req.body.manu,
      price:parseFloat(req.body.price)    
  }).then((products)=>{
      res.status(201).send(products)
  }).catch((err)=>{
      res.status(501).send({
          error:"Error adding file"
      })
  })
})
exports = module.exports = route