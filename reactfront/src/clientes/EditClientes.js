import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/clientes/'

const CompEditClientes = () => {
    const[nombre, setNombre] = useState('')
    const[nit, setNit] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            nit: nit
        })
        navigate('/clientes')
    }

    useEffect( () => 
        { getClientesByid() }, 
        []
    )

    const getClientesByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setNit(res.data.nit)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Clientes</h5>
            </div>

            <div class="card-body">
                <h5>Clientes Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Nit</label>
                                <input value={nit} onChange={ (e) => setNit(e.target.value) } type="number" class="form-control" placeholder="Enter Nit"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditClientes
