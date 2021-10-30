const DataTypes = require("sequelize");
const sequelize = require();

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
        }

});