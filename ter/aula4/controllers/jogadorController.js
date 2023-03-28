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
  export const jogadorUpdate = async (req, res) => {}
  export const jogadorDestroy= async (req, res) => {}
