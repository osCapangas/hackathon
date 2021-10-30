const DataTypes = require("sequelize")
const sequelize = requiere()

const Comentario = sequelize.define({
    usuario_id:{
        type:DataTypes.STRING,
        allowNull: false
    },
    evento_id:{
        type:DataTypes.STRING,
        allowNull:false
    },
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

};

model.exports = Comentario;