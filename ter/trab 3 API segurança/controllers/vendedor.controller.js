import { sequelize } from '../databases/conecta.js'
import { Avaliacao } from '../models/Avaliacao.js';
import { Restaurante } from '../models/Restaurante.js';
import { Usuario } from '../models/Usuario.js';

export const avaliacaoIndex = async (req, res) => {

  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const usuarioCreate = async (req, res) => {
  const {  nome, email, senha } = req.body


  if ( !nome || !email || !senha) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const t = await sequelize.transaction();

  try {

    const usuario = await Usuario.create({
       nome, email, senha
    }, { transaction: t });

    //await Restaurante.increment('total',
    //  { by: nota, where: { id: restaurante_id }, transaction: t }
   // );

   // await Restaurante.increment('num',
   //   { by: 1, where: { id: restaurante_id }, transaction: t }
   // );

    await t.commit();
    res.status(201).json(usuario)

  } catch (error) {

    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}

export const usuarioDestroy = async (req, res) => {
  const { id } = req.params

  const t = await sequelize.transaction();

  try {

    const usuario = await Usuario.findByPk(id)

   // await Restaurante.decrement('total',
    //  { by: avaliacao.nota, where: { id: avaliacao.restaurante_id }, transaction: t }
   // );

   // await Restaurante.decrement('num',
    //  { by: 1, where: { id: avaliacao.restaurante_id }, transaction: t }
   // );

    await Usuario.destroy({
         where: { id }
    })

    await t.commit();
    res.status(200).json({msg: "Erro"})

  } catch (error) {

    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}
