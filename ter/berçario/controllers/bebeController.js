import { Bebe } from "../models/bebe";
import { Medico } from "../models/medico";
import { Mae } from "../models/mae";

export const bebeIndex = async (req, res) => {
  try {
    const bebes = await Bebe.findAll();
    res.status(200).json(bebes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const bebeCreate = async (req, res) => {
  const { nome, mae_id, altura, peso ,dataNasc,medico_id} = req.body

  // se não informou estes atributos
  if (!nome || !mae_id || !peso || !altura|| !dataNasc|| !medico_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const bebe = await Bebe.create({
      nome, mae_id, altura, peso,dataNasc,medico_id
    });
    res.status(201).json(bebe)
  } catch (error) {
    res.status(400).send(error)
  }
}
