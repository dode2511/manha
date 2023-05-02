import { Vinho } from '../models/Vinho.js'
import { Marca } from '../models/Marca.js'

export const marcaIndex = async (req, res) => {
  try {
    const marcas = await Marca.findAll(
      { include: Vinho }
    );
    res.status(200).json(marcas)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const marcaCreate = async (req, res) => {
  const { nome, cidade } = req.body

  // se não informou estes atributos
  if (!nome || !cidade) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const marca = await Marca.create({
      nome, cidade
    });
    res.status(201).json(marca)
  } catch (error) {
    res.status(400).send(error)
  }
}
