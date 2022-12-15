import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/clientes/'

const CompCreateClientes = () => {
    const[nombre, setNombre] = useState('')
    const[nit, setNit] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,nit:nit})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Clientes</h5>
            </div>

            <div class="card-body">
                <h5>Clientes Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Nit</label>
                                <input value={nit} onChange={ (e) => setNit(e.target.value) } type="number" class="form-control" placeholder="Enter Nit"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateClientes
