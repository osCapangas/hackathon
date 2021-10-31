const DataTypes = require("sequelize")
const sequelize = require("../config/sequelize")

const Comentario = sequelize.define('Comentario', {
    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    conteudo:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

Comentario.associate = function(models){
    Comentario.belongsTo(models.User);
    Comentario.belongsTo(models.Evento);

};

module.exports = Comentario;