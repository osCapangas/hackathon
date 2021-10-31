const { response } = require('express');
const Cargo = require('../models/CargoModel');

const create = async(req,res) => {
    try{
          const cargo = await Cargo.create(req.body);
          return res.status(201).json({message: "Cargo criado com sucesso!", cargo: cargo});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const cargos = await Cargo.findAll();
        return res.status(200).json({cargos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const cargo = await Cargo.findByPk(id);
        return res.status(200).json({cargo});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Cargo.update(req.body, {where: {id: id}});
        if(updated) {
            const cargo = await Cargo.findByPk(id);
            return res.status(200).send(cargo);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Cargo não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Cargo.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Cargo deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Cargo não encontrado.");
    }
};


                
module.exports = {
    index,
    show,
    create,
    update,
    destroy  
};

