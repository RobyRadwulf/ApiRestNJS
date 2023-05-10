const usuario = require("../models/usuarios");

//CRUD


function findAllUsuarios(req, res) {

    usuario.find().then(
        (usuarios) => {
            return res.status(200).json({
                error: false,
                message: "Success",
                data: usuarios,
                code: 10,
            });
        }).catch((error) => {
            console.log(error);
            return res.status(500).json({
                error: true,
                message: "Error",
                code: 0,
            });
        }
    );
}
module.exports ={
    findAllUsuarios,
};

