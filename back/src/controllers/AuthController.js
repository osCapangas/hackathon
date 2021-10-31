const User = require("../models/UserModel");
const Auth = require("../config/auth");
const express = require('express')
const app = express()

const login = async(req, res)=>{
	try {
		const user = await User.findOne({where: {email: req.body.email}});
		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
		const {password} = req.body;
		if(Auth.checkPassword(password, user.hash, user.salt)){
			const token = Auth.generateJWT(user);
			return res.status(200).json({token: token});
		} else{
			return res.status(401).json({message: "Senha invalida"});
		}
	} catch (e) {
		return res.status(500).json({err: e})
	}
}

const logout = async(req, res) => {
	try {
		req.logout();
		res.redirect('/');
		res.status(200).json({message: "Usuário deslogado"});
	} catch (e) {
		return res.status(500).json(e + "!")
	}
}

const getDetails = async(req, res) => {
	try {
		const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
		return res.status(200).json({user:user});
	} catch (e) {
		return res.status(500).json({err: e})
	}
}



module.exports = {
	login,
	logout,
	getDetails
}
