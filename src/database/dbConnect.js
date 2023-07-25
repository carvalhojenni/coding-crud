//TODO: Inserir configurações para integrar o MongoDB
const mongoose = require("mongoose")

const connect = async () =>{
    try{
        mongoose.connect("coloque aqui sua url do mongodb",{
            useNewUrlParser: true,
            useUniFiedTopology: true
        })

        console.log("Database connected")
    } catch (error){
        console.log(error)
    }   
}

module.exports = { connect }