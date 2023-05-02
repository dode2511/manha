import { Bebe } from "../models/bebe";
import { Mae } from "../models/mae";
import { Medico } from "../models/medico";

export const maeIndex = async (req, res) => {
  try {
    const maes = await Mae.findAll();
    res.status(200).json(maes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const maeCreate = async (req, res) => {
  const { nome, indereco,fone,dataNasc } = req.body


  if (!nome || !indereco ||!dataNasc ||!fone) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const mae = await Mae.create({
      nome, indereco,dataNasc,fone
    });
    res.status(201).json(mae)
  } catch (error) {
    res.status(400).send(error)
  }
}
