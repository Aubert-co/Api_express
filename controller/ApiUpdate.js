const Schema = require('../model/sequelizeDB')
module.exports = async function ApiUpdate(req,res){
    try{
        const {newName,newPrice,id} = req.body
        if(!id)return res.status(401).send({msg:'id null'})
        if(!newName || !newPrice )return res.status(401).send({msg:'name or price needs a value'})

        if(typeof newPrice !== 'number')return res.status(401).send({msg:'price needs to be a number'})
        
        if(typeof newName !== 'string')return res.status(401).send({msg:'name needs to be a string'})

        if(!newName && newPrice){
            const UpdateTable = await Schema.update({newPrice},{where:{id}})

            return res.status(200).send({msg:'price updated successfully'})
        }
      
       if(!newPrice && newName){
            const UpdateTable = await Schema.update({newName},{where:{id}})
            return res.status(200).send({msg:'name updated successfully'})
       }

       const UpdateAllValues = await Schema.update({newName,newPrice},{
           where:{id}
       })
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }

}
