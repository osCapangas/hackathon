const Cargo = require('../models/CargoModel');

const mesmoUser = async(req, res, next) => {
    const {id} = req.params
    try{
        const cargo = await Cargo.findOne({where : {UserId: id}});
        if (cargo.name == 'admin' || req.params == req.body.UserId){ 
            return next();}
        else return res.status(401).json({'error' : 'Sem autorização'});
    } catch (e){
        return res.status(500).json(e + "!");
    };
}

module.exports = mesmoUser;
