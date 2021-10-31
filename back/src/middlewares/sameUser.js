const Role = require('../models/RoleModel');

const sameUser = async(req, res, next) => {
    const {id} = req.params
    try{
        const role = await Role.findOne({where : {UserId: id}});
        if (role.name == 'admin' || req.params == req.body.UserId){ 
            return next();}
        else return res.status(401).json({'error' : 'Sem autorização'});
    } catch (e){
        return res.status(500).json(e + "!");
    };
}

module.exports = sameUser;
