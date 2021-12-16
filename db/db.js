const mongoose = require('mongoose');

const conectarMongoDB = async () => {
    try{
        console.log("Conectando a MongoDB a través de Mongoose...");

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a MongoDB.');
    }catch(e) {
        console.log("Error al establecer conexión con MongoDB.");
        console.log(e);
    }
}

const cerrarMongoDB = async () => {
    if (mongoose.connection) {
        try {
            console.log("Cerrando conexión a MongoDB...");
            await mongoose.connection.close();
            console.log("Conexión a MongoDB cerrada.");
        }catch (e) {
            console.log("Ocurrió un error al intentar la desconexión: ");
            console.log(e);
        }
        
    }
}


// exports.ListaUsuarios = async () =>{

//         try {
//             const cursor = mongoose.connection().db("CodereDb").collection("usuarios").find();
//             return cursor.sort({nombre: 1}).toArray();
                       
//         }catch (e) {
//             console.log("Ocurrió un error al intentar la conexión de la base ");
//             console.log(e);
//             await cerrarMongoDB();
//         }
        
      
// }

exports.conectarMongoDB = conectarMongoDB;
exports.cerrarMongoDB = cerrarMongoDB;
