import { Excursao } from '../models/Excursao.js'
import { Destino } from '../models/Destino.js'

export const excursaoIndex = async (req, res) => {
  try {
    const excursoes = await Excursao.findAll({
      include: Destino
    });
    res.status(200).json(excursoes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const excursaoCreate = async (req, res) => {
  const { data, preco, quant_lugares, destino_id } = req.body

  // se não informou estes atributos
  if (!data || !preco || !quant_lugares || !destino_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const excursao = await Excursao.create({
      data, preco, quant_lugares, destino_id
    });
    res.status(201).json(excursao)
  } catch (error) {
    res.status(400).send(error)
  }
}
