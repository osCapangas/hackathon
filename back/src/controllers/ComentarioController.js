const { response } = require('express');
const Comentario = require('../models/ComentarioModel');

const create = async(req,res) => {
    try{
          const comentario = await Comentario.create(req.body);
          return res.status(201).json({message: "Comentario criado com sucesso!", comentario: comentario});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const comentarios = await Comentario.findAll();
        return res.status(200).json({comentarios});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comentario = await Comentario.findByPk(id);
        return res.status(200).json({comentario});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Comentario.update(req.body, {where: {id: id}});
        if(updated) {
            const comentario = await Comentario.findByPk(id);
            return res.status(200).send(comentario);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Comentario não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Comentario.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Comentario deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Comentario não encontrado.");
    }
};


                
module.exports = {
    index,
    show,
    create,
    update,
    destroy  
};

