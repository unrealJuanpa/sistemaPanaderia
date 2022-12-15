import ColaboradoresModel from "../models/ColaboradoresModel.js"

export const getAllColaboradores = async (req, res) => {
    try 
    {
        const datos = await ColaboradoresModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getColaboradores = async (req, res) => {
    try
    {
        const datos = await ColaboradoresModel.findAll({
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

export const createColaboradores = async (req, res) => {
    try
    {
        await ColaboradoresModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateColaboradores = async (req, res) => {
    try
    {
        await ColaboradoresModel.update(req.body, {
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

export const deleteColaboradores = async (req, res) => {
    try
    {
        await ColaboradoresModel.destroy({
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

