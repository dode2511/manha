import { Cliente } from "../models/Cliente";


export const ClienteIndex = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const ClienteCreate = async (req, res) => {
  const { nome, endereco, RG, fone} = req.body

  if (!nome || !endereco || !RG || !fone) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const clientes = await Cliente.create({
      nome, endereco, RG, fone
    });
    res.status(201).json(clientes)
  } catch (error) {
    res.status(400).send(error)
  }
}
