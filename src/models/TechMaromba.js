//TODO: Importar o Mongoose e criar o Model de uma TechMaromba
const mongoose = require("mongoose")
const TechMarombaSchema = mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        name:{
            type: String,
            required: true,
            unique: true
        },
        description:{
            type: String,
            required: true,
        },
        urlProfile:{
            type: String,
            required: true,
        },
        urlImage: {
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            required: true,
        }
    },
    { timeStamp: true }
)

const TechMaromba = mongoose.model("techMaromba", TechMarombaSchema)

module.exports = TechMaromba