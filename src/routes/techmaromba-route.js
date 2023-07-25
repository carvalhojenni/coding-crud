//TODO: Importar o express, o controller e instanciar o Router para chamar os metodos HTTP passando o endereço e função do CRUD referente 
const {addNew,clear, findAll, update } = require("../controllers/techmaromba-controller")
//criar o endereco que vai ser chamado -> o que acontece quando esse endereco é chamado
const express = require('express')
const router = express.Router()


//quando eu chamar o endereco all -> encontre todas as techmarombas
router.get("/all", findAll)

//quando eu chamr o endereco add -> adicione uma tech com os dados que eu vou mandar
router.post("/add", addNew)

//quando eu chamar o endereco update/:id -> atualizar a tech que tem esse id
router.patch("/update/:id", update)

//quando eu chamar o endereco /clear/:id eu quero deletar a tech que tem esse id
router.delete("/clear/:id", clear)

module.exports = router