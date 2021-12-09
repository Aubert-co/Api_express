const {Sequelize,DataTypes,Op} = require('sequelize')

const Schema = new Sequelize('users','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false

})


const ScheduelItens = Schema.define('greengrocer',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.FLOAT
    }
})

module.exports = ScheduelItens