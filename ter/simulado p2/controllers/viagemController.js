import { Venda } from '../models/Venda.js'
import { Cliente } from '../models/Cliente.js'
import { Destino } from '../models/Destino.js';
import { Reserva } from '../models/Reserva.js';
import { Excursao } from '../models/Excursao.js';

export const destinoIndex = async (req, res) => {
  try {
    const destino = await Destino.findAll({
      include: Cliente
    });
    res.status(200).json(destino)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const destinoCreate = async (req, res) => {
  const { cliente_id, data,passagem ,tipo,preco} = req.body

  // se não informou estes atributos
  if (!cliente_id || !data ||! tipo ||! preco ||! passagem) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const destino = await Destino.create({
      cliente_id, data,passagem,tipo,preco
    });
    res.status(201).json(destino)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const reservaIndex = async (req, res) => {
    try {
      const reserva = await Reserva.findAll({
        include: Cliente
      });
      res.status(200).json(reserva)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  export const reservaCreate = async (req, res) => {
    const { cliente_id, data,local ,tipo,preco} = req.body
  
    if (!cliente_id || !data ||! tipo ||! preco ||! local) {
      res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
      return
    }
  
    try {
      const reserva = await Reserva.create({
        cliente_id, data,local,tipo,preco
      });
      res.status(201).json(reserva)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  
  export const excursaoIndex = async (req, res) => {
    try {
      const excursao = await Excursao.findAll({
        include: Cliente
      });
      res.status(200).json(excursao)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  export const excurasaoCreate = async (req, res) => {
    const { cliente_id, data,local ,tipo,preco,guia} = req.body
  
    // se não informou estes atributos
    if (!cliente_id || !data ||! tipo ||! preco ||! passagem ||! guia) {
      res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
      return
    }
  
    try {
      const excursao = await Excursao.create({
        cliente_id, data,local,tipo,preco,guia
      });
      res.status(201).json(excursao)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  