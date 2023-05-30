import { Aluno } from "../models/Aluno.js";
import { Curso } from "../models/Curso.js";
import { Matricula } from "../models/Matricula.js";
import { Professor } from "../models/Professor.js";


export const alunoIndex = async (req, res) => {
  try {
    const alunos = await Aluno.findAll(
      { include: [Curso, Professor,Matricula] }
    );
    res.status(200).json(alunos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const AlunoCreate = async (req, res) => {
  const { nome, datanasc, cpf, endereco, matricula_id,turma } = req.body

  if (!nome || !datanasc || !cpf || !endereco || !matricula_id || !turma) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const aluno = await Aluno.create({
      nome, datanasc, endereco, cpf,turma, matricula_id
    });
    res.status(201).json(aluno)
  } catch (error) {
    res.status(400).send(error)
  }
}
