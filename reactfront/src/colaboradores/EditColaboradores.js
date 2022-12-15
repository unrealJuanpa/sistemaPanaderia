import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/colaboradores/'

const CompEditColaboradores = () => {
    const[usuario, setUsuario] = useState('')
    const[contrasenia, setContrasenia] = useState('')
    const[nombre, setNombre] = useState('')
    const[dpi, setDpi] = useState('')
    const[telefono, setTelefono] = useState('')
    const[nivelacceso, setNivelacceso] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            usuario: usuario,
            contrasenia: contrasenia,
            nombre: nombre,
            dpi: dpi,
            telefono: telefono,
            nivelacceso: nivelacceso
        })
        navigate('/colaboradores')
    }

    useEffect( () => 
        { getColaboradoresByid() }, 
        []
    )

    const getColaboradoresByid = async () => {
        const res = await axios.get(URI + id)
            setUsuario(res.data.usuario)
            setContrasenia(res.data.contrasenia)
            setNombre(res.data.nombre)
            setDpi(res.data.dpi)
            setTelefono(res.data.telefono)
            setNivelacceso(res.data.nivelacceso)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Colaboradores</h5>
            </div>

            <div class="card-body">
                <h5>Colaboradores Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Usuario</label>
                                <input value={usuario} onChange={ (e) => setUsuario(e.target.value) } type="text" class="form-control" placeholder="Enter Usuario"></input>
                            </div>
                            <div class="form-group">
                                <label>Contrasenia</label>
                                <input value={contrasenia} onChange={ (e) => setContrasenia(e.target.value) } type="text" class="form-control" placeholder="Enter Contrasenia"></input>
                            </div>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Dpi</label>
                                <input value={dpi} onChange={ (e) => setDpi(e.target.value) } type="number" class="form-control" placeholder="Enter Dpi"></input>
                            </div>
                            <div class="form-group">
                                <label>Telefono</label>
                                <input value={telefono} onChange={ (e) => setTelefono(e.target.value) } type="tel" class="form-control" placeholder="Enter Telefono"></input>
                            </div>
                            <div class="form-group">
                                <label>Nivelacceso</label>
                                <input value={nivelacceso} onChange={ (e) => setNivelacceso(e.target.value) } type="integer" class="form-control" placeholder="Enter Nivelacceso"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditColaboradores
