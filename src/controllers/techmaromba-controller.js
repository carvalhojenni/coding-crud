//TODO: Importar o Model e criar as funções que vão realizar as operações do CRUD
const TechMaromba = require("../models/TechMaromba")
const findAll = async (request, response) =>{
    try{
        const techmarombaList = await TechMaromba.find()
        response.status(200).json(techmarombaList)
    } catch (error){
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
}

const addNew = async (request, response) =>{
    try{
        const {
            name,
            description,
            urlProfile,
            urlImage
        } = request.body

        const techMarombaCreated = new TechMaromba({
            name,
            description,
            urlProfile,
            urlImage,
            createdAt: new Date()
        })
        
        const result = await techMarombaCreated.save()
        response.status(201).json({ techmaromba: result })

    } catch (error){
        console.error(error)
        response.status(500).json(error.message)
    }
}

const update = async (request, response)=>{
    try{
        const techMarombaFound = await TechMaromba.findById({_id: request.params.id })

        if(request.body.name){
            techMarombaFound.name = request.body.name
        }
        if(request.body.description){
            techMarombaFound.description = request.body.description
        }
        if(request.body.urlProfile){
            techMarombaFound.urlProfile = request.body.urlProfile
        }
        if(request.body.urlImage){
            techMarombaFound.urlImage = request.body.urlImage
        }

        const techMarombaUpdated = await techMarombaFound.save()

        response.status(200).json(techMarombaUpdated)
        
    } catch (error){
        console.error(error)
        response.status(500).json({ message: "Não foi possível atualizar, tente novamente! "})
    }
}

const clear = async (request, response) =>{
    try{
        const { id } = request.params

        await TechMaromba.findByIdAndDelete(id)

        response.status(200).json({ message: `${id} foi deletada.`})

    } catch (error){
        console.error(error)
        response.status(500).json({message: error.message})

    }
}

module.exports = {
    findAll,
    addNew,
    update,
    clear

}