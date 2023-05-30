import { sequelize } from '../databases/conecta.js'

import { Reserva } from '../models/Reserva.js'
import { Cliente } from '../models/Cliente.js'
import { Excursao } from '../models/Excursao.js'

export const reservaIndex = async (req, res) => {

  try {
    const reservas = await Reserva.findAll({
      include: Cliente
    });
    res.status(200).json(reservas)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const reservaCreate = async (req, res) => {
  const { cliente_id, excursao_id, quant, preco } = req.body

  // se não informou estes atributos
  if (!cliente_id || !excursao_id || !quant || !preco) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const t = await sequelize.transaction();

  try {

    const reserva = await Reserva.create({
      cliente_id, excursao_id, quant, preco
    }, { transaction: t });

    await Excursao.increment('lugares_reservados',
      { by: quant, where: { id: excursao_id }, transaction: t }
    );

    await t.commit();
    res.status(201).json(reserva)

  } catch (error) {

    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}