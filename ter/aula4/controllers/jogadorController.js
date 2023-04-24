import { sequelize } from '../data/conecta.js';
import { Jogador } from '../models/Jogador.js'
import {Op} from "sequelize"


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



export const jogadorPesqidade = async (req,res)=>{
 
 if(req.params){
 
 
  const { idade1,idade2 } = res.params


  try {
      const jogador = await Jogador.findAll({
        where : {
          idade: {
            [Op.substring] : [idade1,idade2]
          }
        }
      });

    res.status(201).json(jogador)
  } catch (error) {
    res.status(400).send(error)
  }
 }else{


  const { idade1 } = res.params


  try {
      const jogador = await Jogador.findAll({
        where : {
          idade: {
            [Op.gte] : idade1
          }
        }
      });

    res.status(201).json(jogador)
  } catch (error) {
    res.status(400).send(error)
  }

 }

}
export const jogadorPesqNome = async (req,res)=>{
 const { pesq } = res.params


  try {
      const jogador = await Jogador.findAll({
        where : {
          nome: {
            [Op.substring] : pesq
          }
        }
      });

    res.status(201).json(jogador)
  } catch (error) {
    res.status(400).send(error)
  }

}
export const jogadorPesqClube = async (req,res)=>{
 const { nome_clube_posicao } = res.params


  try {
      const jogador = await Jogador.findAll({
        where : {
          [Op.or]: [{
            nome: {
              [Op.substring] : nome_clube_posicao
            },
            clube:{
              [Op.substring] : nome_clube_posicao
            },
            posicao:{
              [Op.substring] : nome_clube_posicao
            }
          }]
         
        }
      });

    res.status(201).json(jogador)
  } catch (error) {
    res.status(400).send(error)
  }

}

export const jogadorCalculos = async (req,res)=>{

   try {
       const numero = await Jogador.count()
       const soma = await Jogador.sum('salario')
       const somaIdades = await Jogador.sum('idade')
       const media = somaIdades / numero

     res.status(201).json({numero,soma,media})
   } catch (error) {
     res.status(400).send(error)
   }
  }




  export const jogadorAumentarIdade = async (req, res) => {
    try {
     const jogador = await Jogador.increment( {idade:1},{where: {}})

      
      res.status(201).json(jogador)
    } catch (error) {
      res.status(400).send(error)
    }
  }
