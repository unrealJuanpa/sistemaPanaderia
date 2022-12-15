import TipoproductoModel from "../models/TipoproductoModel.js"

export const getAllTipoproducto = async (req, res) => {
    try 
    {
        const datos = await TipoproductoModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getTipoproducto = async (req, res) => {
    try
    {
        const datos = await TipoproductoModel.findAll({
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

export const createTipoproducto = async (req, res) => {
    try
    {
        await TipoproductoModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateTipoproducto = async (req, res) => {
    try
    {
        await TipoproductoModel.update(req.body, {
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

export const deleteTipoproducto = async (req, res) => {
    try
    {
        await TipoproductoModel.destroy({
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

