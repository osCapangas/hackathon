const { response } = require('express');
const User = require('../models/UserModel');
const Auth = require("../config/auth");

const create = async(req,res) => {
	try {

		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;
		const newUserData = {
			name: req.body.name,
            DRE: req.body.dre,
			hash: hash,
			salt: salt
		}

		const user = await User.create(newUserData);


		return res.status(201).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        }
    }catch(e){
        return res.status(500).json(e + "!");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};


                
module.exports = {
    index,
    show,
    create,
    update,
    destroy  
};

