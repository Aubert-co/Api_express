const Schema = require('../model/sequelizeDB')
module.exports = async function ApiDelete(req,res){
    try{
        const {id} = req.body

        if(!id || typeof id !== 'number')return res.status(401).send({msg:'invalid id'})
        const DeleteTable = await Schema.destroy({where:id})
        res.status(200).send({msg:'successful'})
    }catch(err){
        return res.status(501).send({msg:'something went wrong'})
    }
}