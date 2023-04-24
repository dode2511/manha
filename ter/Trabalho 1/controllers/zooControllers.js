import { Animal } from '../models/Animal.js'
import {Op} from "sequelize"




export const zooIndex = async(req,res)=>{
  try {
    const animal = await Animal.findAll();

    res.status(201).json(animal)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const zooCreate = async(req,res)=>{
    const { nome, raca,idade,custo_mensal } = req.body
    if (!nome || !raca || !idade  || !custo_mensal) {
    res.status(400).json({ id: 0, msg: "Erro... Informe nome, raca, idade e custo  mensal  do animal." })
    return
  }

  try {
    const animal = await Animal.create({
      nome, raca, idade, custo_mensal
    });
    res.status(201).json(animal)
  } catch (error) {
    res.status(400).send(error)
  }
}





export const zooDestroy = async(req,res)=>{

  const {id} = req.params

    try {
     const animal = await Animal.destroy( {where:{id}})

      
      res.status(201).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
}






export const zooUpdate = async(req,res)=>{
  const {id} = req.params
  const { nome, raca, idade, custo_mensal } = req.body
  if (!nome || !raca || !idade || !custo_mensal) {
    res.status(400).json({ id: 0, msg: "Erro... Informe nome, raca, idade e custo mensal do animal." })
    return
  }
  try {
   const animal = await Animal.update( {nome, raca, idade, custo_mensal}, {where:{id}})

    
    res.status(201).json(animal)
  } catch (error) {
    res.status(400).send(error)
  }
}



export const zooSomaCustos = async(req,res)=>{

try {
  const numero = await Animal.count()
  const soma = await Animal.sum('custo_mensal')

res.status(201).json({numero,soma})
} catch (error) {
res.status(400).send(error)
}
}

export const zooPesqRaca = async (req, res) => {
  const { pesq } = req.params
  try {
    const animal = await Animal.findAll({
      where: {
        raca: {
          [Op.substring]: pesq
        }
      }
    });
    res.status(200).json(animal)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const zooPesqCustoMensal= async (req, res) => {
  const { pesq } = req.params
  try {
    const animal = await Animal.findAll({
      where: {
        custo_mensal: {
          [Op.substring]: pesq
        }
      }
    });
    res.status(200).json(animal)
  } catch (error) {
    res.status(400).send(error)
  }
}


    

    
