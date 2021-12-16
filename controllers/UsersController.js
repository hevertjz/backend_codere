const { Router, request, response } = require("express");
const express = require("express");
const { User } = require("../models/User");
const router=express.Router();



//Creacion del usuario "seevian datosa mogo"
router.post('/nuevo', async (request, response)=>{

    const usr = new User(request.body);

    try {
        await usr.save();
        response.send({"mensaje" : "Usuario registrado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error con la base de datos de usuarios.");
        console.log(error);
    }
});

//esto es lo unico que debo exportar al proyecto raiz.
// funcion para traer datos de mongo
router.get('/lista', async (request, response) =>{

    try {
        
        const datosU = await User.find().exec();
        response.send(datosU);
        console.log("se recibieron los datos");

    }catch (e) {
        response.status(500).send("Ocurrió un error al intentar la conexión con la base de datos");
        console.log(e);
        await cerrarMongoDB();
    }
        
});

// aqui termina adicion proyecto raiz



module.exports = router;