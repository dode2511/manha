import { Porduto } from "../models/Produto";


export const ProdutoIndex = async (req, res) => {
  try {
    const produtos = await Porduto.findAll();
    res.status(200).json(produtos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const ProdutoCreate = async (req, res) => {
  const { nome, preco, tipo, qtsEstq} = req.body

  if (!nome || !preco || !qtsEstq || !tipo) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const produtos = await Porduto.create({
      nome, tipo, preco, qtsEstq
    });
    res.status(201).json(produtos)
  } catch (error) {
    res.status(400).send(error)
  }
}
