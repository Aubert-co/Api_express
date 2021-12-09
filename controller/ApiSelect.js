const Schema = require('../model/sequelizeDB')
module.exports = async function ApiSelect(req,res){
    try{

        const data =await  Schema.findAll()

        res.status(200).send({msg:'sucess',data})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }
}