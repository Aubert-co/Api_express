const Schema = require('../model/sequelizeDB')
module.exports = async function ApiUpdate(req,res){
    try{
        const {name,price,id} = req.body
        if(!id)return res.status(401).send({msg:'id not be null'})
        if(!name || !price )return res.status(401).send({msg:'name or price needs a value'})

        //if(typeof price !== 'number')return res.status(401).send({msg:'price needs to be a number'})
        
        //if(typeof name !== 'string')return res.status(401).send({msg:'name needs to be a string'})

        if(!name && price){
            const UpdateTable = await Schema.update({price},{where:{id}})

            return res.status(200).send({msg:'price updated successfully'})
        }
      
       if(!price && name){
            const UpdateTable = await Schema.update({name},{where:{id}})
            return res.status(200).send({msg:'name updated successfully'})
       }

       const UpdateAllValues = await Schema.update({name,price},{
           where:{id}
       })
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }

}
