const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    DRE: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

User.associate = function(models){
    User.hasOne(models.Cargo);
    User.hasMany(models.Evento);
    User.hasMany(models.Comentario);
};

module.exports = User;