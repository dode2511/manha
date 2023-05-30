import { Aluno } from "../models/Aluno.js";
import { Curso } from "../models/Curso.js";
import { Matricula } from "../models/Matricula.js";
import { Professor } from "../models/Professor.js";


export const cursoIndex = async (req, res) => {
  try {
    const cursos = await Curso.findAll(
      { include: [Professor] }
    );
    res.status(200).json(cursos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const cursoCreate = async (req, res) => {
  const { nome,  descricao, endereco, turno,professor_id ,numeorAlunos} = req.body

  if (!nome || !descricao || !endereco || !turno || !professor_id ||!numeorAlunos) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const curso = await Curso.create({
      nome, descricao, endereco, turno, professor_id,numeorAlunos
    });
    res.status(201).json(curso)
  } catch (error) {
    res.status(400).send(error)
  }
}
