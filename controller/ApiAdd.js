const Schema = require('../model/sequelizeDB')
module.exports = async function ApiAddItem(req,res){
    try{
        const {name,price} = req.body

        if(!name || !price || typeof price !== 'number' || typeof name !== 'string')return res.status(401).send({msg:'invalid datas'})
        
        
        const ADDvalue = await Schema.create({name,price})
        res.status(200).send({msg:'successful'})
    }catch(err){
        res.status(501).send({msg:'something went wrong try again'})
    }
}