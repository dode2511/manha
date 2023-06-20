import bcrypt from 'bcrypt'

const senha = "sabonete"

console.time("Tempo")
const salt = bcrypt.genSaltSync(14)
const hash = await bcrypt.hash(senha, salt)
console.timeEnd("Tempo")

console.log(senha)
console.log(salt)
console.log(hash)
