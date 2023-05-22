import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";


export const carroIndex = async (req, res) => {
  try {
    const carros = await Carro.findAll();
    res.status(200).json(carros)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const carroCreate = async (req, res) => {
  const { marca, modelo, dataFab, status,cliente_id} = req.body

  if (!marca || !cliente_id || !modelo || !dataFab|| !status) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const carro = await Carro.create({
      marca, cliente_id, modelo, status,dataFab
    });
    res.status(201).json(carro)
  } catch (error) {
    res.status(400).send(error)
  }
}
