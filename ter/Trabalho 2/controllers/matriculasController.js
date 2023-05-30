import { Aluno } from "../models/Aluno.js";
import { Curso } from "../models/Curso.js";
import { Matricula } from "../models/Matricula.js";
import { Professor } from "../models/Professor.js";


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
  const {  turno,curso_id,aluno_id } = req.body

  if (!curso_id || !turno || !aluno_id  ) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const result = await sequelize.transaction(async (transaction) => {
      
      const matricula = await Matricula.create({ aluno_id, curso_id,turno }, { transaction });

      await Curso.increment('numeroAlunos', {
        by: 1,
        where: { id: curso_id },
        transaction
      });

      return matricula;
    });

    res.status(201).json(result)
  } catch (error) {
    res.status(400).send(error)
  }
}




 

  