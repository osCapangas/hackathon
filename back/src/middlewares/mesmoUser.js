const Cargo = require('../models/CargoModel');

const mesmoUser = async(req, res, next) => {
    try{
        const cargo = await Cargo.findOne({where : {UserId: req.body.requerenteId}});
        console.log(cargo.titulo);
        if (cargo.titulo == 'admin' || id == req.body.UserId){ 
            return next();}
        else return res.status(401).json({'error' : 'Sem autorização'});
    } catch (e){
        return res.status(500).json(e + "!");
    };
}

module.exports = mesmoUser;
