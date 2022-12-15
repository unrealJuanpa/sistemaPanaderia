import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/producto/'

const CompEditProducto = () => {
    const[nombre, setNombre] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[precio, setPrecio] = useState('')
    const[tipoproducto, setTipoproducto] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            tipoproducto: tipoproducto
        })
        navigate('/producto')
    }

    useEffect( () => 
        { getProductoByid() }, 
        []
    )

    const getProductoByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setDescripcion(res.data.descripcion)
            setPrecio(res.data.precio)
            setTipoproducto(res.data.tipoproducto)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Producto</h5>
            </div>

            <div class="card-body">
                <h5>Producto Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Descripcion</label>
                                <input value={descripcion} onChange={ (e) => setDescripcion(e.target.value) } type="text" class="form-control" placeholder="Enter Descripcion"></input>
                            </div>
                            <div class="form-group">
                                <label>Precio</label>
                                <input value={precio} onChange={ (e) => setPrecio(e.target.value) } type="number" class="form-control" placeholder="Enter Precio"></input>
                            </div>
                            <div class="form-group">
                                <label>Tipoproducto</label>
                                <input value={tipoproducto} onChange={ (e) => setTipoproducto(e.target.value) } type="text" class="form-control" placeholder="Enter Tipoproducto"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditProducto
