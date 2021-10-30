const DataTypes = require("sequelize");
const sequelize = require();

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

};

model.exports = User;