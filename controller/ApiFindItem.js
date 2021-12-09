const {Op} = require('sequelize')
const Schedule = require('../model/sequelize')
module.exports = async function ApiFindItem(req,res){
    try{
        const {id,name,price} = req.body

        if(!id && !name && !price)return res.status(401).send({msg:'id or name or price needs to be a value'})

        if(typeof id !=='number' || typeof name !== 'string' || typeof price !== 'number')return res.status(401).send({msg:`
        id and price needs to be a number and name need to be a string`})

        const data = await Schedule.findAll({
            where:{
                [Op.or]:[
                    {id},
                    {name},
                    {price}
                ]
            }
        })
        res.status(200).send({msg:'sucess',data})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }
}