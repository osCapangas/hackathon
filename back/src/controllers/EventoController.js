const { response } = require('express');
const Evento = require('../models/EventoModel');

const create = async(req,res) => {
    try{
          const evento = await Evento.create(req.body);
          return res.status(201).json({message: "Evento criado com sucesso!", evento: evento});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const eventos = await Evento.findAll();
        return res.status(200).json({eventos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const evento = await Evento.findByPk(id);
        return res.status(200).json({evento});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Evento.update(req.body, {where: {id: id}});
        if(updated) {
            const evento = await Evento.findByPk(id);
            return res.status(200).send(evento);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Evento não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Evento.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Evento deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Evento não encontrado.");
    }
};


                
module.exports = {
    index,
    show,
    create,
    update,
    destroy  
};

