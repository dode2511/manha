import { Bebe } from "../models/bebe";
import { Medico } from "../models/medico";



export const medicoIndex = async (req, res) => {
  try {
    const medicos = await Medico.findAll({
        include: Bebe
    });
    res.status(200).json(medicos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const medicoCreate = async (req, res) => {
  const { nome, crm, celular, especialidade} = req.body

  // se não informou estes atributos
  if (!nome || !crm || !celular || !especialidade) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const medico = await Medico.create({
      nome, crm,celulcar,especialidade
    });
    res.status(201).json(mecico)
  } catch (error) {
    res.status(400).send(error)
  }
}
