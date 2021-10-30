const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Evento = sequelize.define('Evento', {
        conteudo:{
            type:DataTypes.STRING,
            allowNull: true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull: false
        },
        data:{
            type:DataTypes.DATE,
            allowNull: false
        },
        conteudo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        usuario_id:{
            type:DataTypes.STRING,
            allowNull:false
        }

});

Evento.associate = function(models){
    Evento.belongsTo(models.User);
    Evento.hasMany(models.Comentario);

};

module.exports = Evento;
