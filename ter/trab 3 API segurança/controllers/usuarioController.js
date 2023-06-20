import { sequelize } from '../databases/conecta.js'
import { Avaliacao } from '../models/Avaliacao.js';
import { Restaurante } from '../models/Restaurante.js';
import { Usuario } from '../models/Usuario.js';




function validaSenha(senha) {

    const mensa = []
  
    if (senha.length < 8) {
      mensa.push("Erro... senha deve possuir, no mínimo, 8 caracteres")
    }
  
    
    let pequenas = 0
    let grandes = 0
    let numeros = 0
    let simbolos = 0
  
  
  
    for (const letra of senha) {
      if ((/[a-z]/).test(letra)) {
        pequenas++
      }
      else if ((/[A-Z]/).test(letra)) {
        grandes++
      }
      else if ((/[0-9]/).test(letra)) {
        numeros++
      } else {
        simbolos++
      }
    }
  
    if (pequenas == 0 || grandes == 0 || numeros == 0 || simbolos == 0) {
      mensa.push("Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos")
    }
  
    return mensa
  }


export const usuarioIndex = async (req, res) => {

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
  
  const mensaValidacao = validaSenha(senha)
  if (mensaValidacao.length >= 1) {
    res.status(400).json({ id: 0, msg: mensaValidacao })
    return
  }  
  

  try {

    const usuario = await Usuario.create({
       nome, email, senha
    });




    res.status(201).json(usuario)

  } catch (error) {

    
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
