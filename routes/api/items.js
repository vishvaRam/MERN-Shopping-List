const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET the items
// @access Public
router.get('/',(req,res)=>{
    Item.find()
    .sort({date: -1})
    .then(items=> res.json(items));                                              
})

// @route GET api/items
// @desc ADD items
// @access Public
router.post('/',(req,res)=>{
    const newitem = new Item({
        name: req.body.name
    });          
               
    newitem.save()
    .then(item =>res.json({meg:"success"}))
    .catch(err=> console.log(err));
})

// @route DELETE api/items
// @desc DELETE the items
// @access Public
router.delete('/:id',(req,res)=>{
    const itemId = req.params.id;
    Item.findById(itemId)
    .then(item => 
        item.remove()
            .then(()=>res.json({success : true})))
    .catch(err => res.json({success: false}))    
})



module.exports = router;