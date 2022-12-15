import ClientesModel from "../models/ClientesModel.js"

export const getAllClientes = async (req, res) => {
    try 
    {
        const datos = await ClientesModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getClientes = async (req, res) => {
    try
    {
        const datos = await ClientesModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(datos[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createClientes = async (req, res) => {
    try
    {
        await ClientesModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateClientes = async (req, res) => {
    try
    {
        await ClientesModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro actualizado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteClientes = async (req, res) => {
    try
    {
        await ClientesModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado correctamente!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

