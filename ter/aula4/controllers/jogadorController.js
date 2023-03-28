import { where } from 'sequelize';
import { sequelize } from '../data/conecta.js';
import { Jogador } from '../models/Jogador.js'


export const jogadorCreate = async (req, res) => {
    const { nome, clube, idade, salario,posicao } = req.body
      if (!nome || !clube || !idade || !salario || !posicao) {
      res.status(400).json({ id: 0, msg: "Erro... Informe nome, posiçao, idade ,clube e salário do jogador." })
      return
    }
  
    try {
      const jogador = await Jogador.create({
        nome, clube, idade, salario,posicao
      });
      res.status(201).json(jogador)
    } catch (error) {
      res.status(400).send(error)
    }
  }


  export const jogadorIndex = async (req, res) => {
    try {
      const jogador = await Jogador.findAll();
  
      res.status(201).json(jogador)
    } catch (error) {
      res.status(400).send(error)
    }
  }




  export const jogadorUpdate = async (req, res) => {
    const {id} = req.params
    const { nome, clube, idade, salario,posicao } = req.body
    if (!nome || !clube || !idade || !salario || !posicao) {
      res.status(400).json({ id: 0, msg: "Erro... Informe nome, marca, quant e preco do produto." })
      return
    }
    try {
     const jogador = await Jogador.update( {nome, clube, idade, salario,posicao}, {where:{id}})

      
      res.status(201).json(jogador)
    } catch (error) {
      res.status(400).send(error)
    }
  }



  export const jogadorDestroy= async (req, res) => {


  const {id} = req.params

    try {
     const jogador = await Jogador.destroy( {where:{id}})

      
      res.status(201).json(jogador)
    } catch (error) {
      res.status(400).send(error)
    }
  }




