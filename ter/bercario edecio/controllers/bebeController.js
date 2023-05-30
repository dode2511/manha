import { Bebe } from '../models/Bebe.js'
import { Mae } from '../models/Mae.js'
import { Medico } from '../models/Medico.js'

export const bebeIndex = async (req, res) => {
  try {
    const bebes = await Bebe.findAll(
      { include: [Mae, Medico] }
    );
    res.status(200).json(bebes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const bebeCreate = async (req, res) => {
  const { nome, datanasc, peso, altura, mae_id, medico_id } = req.body

  // se não informou estes atributos
  if (!nome || !datanasc || !peso || !altura || !mae_id || !medico_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const bebe = await Bebe.create({
      nome, datanasc, peso, altura, mae_id, medico_id
    });
    res.status(201).json(bebe)
  } catch (error) {
    res.status(400).send(error)
  }
}
