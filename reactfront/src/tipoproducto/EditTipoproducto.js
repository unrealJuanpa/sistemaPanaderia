import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/tipoproducto/'

const CompEditTipoproducto = () => {
    const[nombre, setNombre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre
        })
        navigate('/tipoproducto')
    }

    useEffect( () => 
        { getTipoproductoByid() }, 
        []
    )

    const getTipoproductoByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Tipoproducto</h5>
            </div>

            <div class="card-body">
                <h5>Tipoproducto Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditTipoproducto
