//TODO: Inserir configurações do Swagger
const swaggerAutogen = require("swagger-autogen")
const outputFile = "./swagger/swagger_output.json"
const endpointsFiles = ["./src/app.js"]
swaggerAutogen(outputFile, endpointsFiles)