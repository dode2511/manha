import { Aluno } from "../models/Aluno.js";
import { Curso } from "../models/Curso.js";
import { Matricula } from "../models/Matricula.js";
import { Professor } from "../models/Professor.js";
import { sequelize } from '../database/conecta.js'

export const matriculaIndex = async (req, res) => {
  try {
    const matricula = await Matricula.findAll(
      { include: [Aluno,Curso] }
    );
    res.status(200).json(matricula)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const matriculaCreate = async (req, res) => {
  const { aluno_id, curso_id, turno } = req.body

  // se não informou estes atributos
  if (!aluno_id || !curso_id || !turno ) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const t = await sequelize.transaction();

  try {

    const matricula = await Matricula.create({
      aluno_id, curso_id, turno
    }, { transaction: t });

    await Curso.increment('numeroAlunos',
      { by: 1, where: { id: curso_id }, transaction: t }
    );

    await t.commit();
    res.status(201).json(matricula)

  } catch (error) {

    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}

 
export const matriculaDestroy = async (req, res) => {
  const { aluno_id, curso_id, turno } = req.body

  // se não informou estes atributos
  if (!aluno_id || !curso_id || !turno ) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const t = await sequelize.transaction();

  try {

    const matricula = await Matricula.create({
      aluno_id, curso_id, turno
    }, { transaction: t });

    await Curso.increment('numeroAlunos',
      { by: 1, where: { id: curso_id }, transaction: t }
    );

    await t.commit();
    res.status(201).json(matricula)

  } catch (error) {

    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}


  