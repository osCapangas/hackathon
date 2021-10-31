const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cargo = sequelize.define('Cargo', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    },{
      timestamps: false
    });
    

Cargo.associate = function(models){
    Cargo.belongsTo(models.User);
};

module.exports = Cargo;
