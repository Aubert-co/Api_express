const Schema = require('../model/sequelizeDB')
module.exports = async function ApiAddItem(req,res){
    try{
        const {name,price} = req.body

        if(!name  || typeof name !== 'string')return res.status(401).send({msg:'invalid name'})
        
        if(!price || typeof price !== 'number')return res.status(401).send({msg:'invalid price'})
        
        const ADDvalue = await Schema.create({name,price})
        res.status(200).send({msg:'ok'})
    }catch(err){
        throw err
    }
}