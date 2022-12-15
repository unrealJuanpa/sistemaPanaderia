import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/tipoproducto/'

const CompCreateTipoproducto = () => {
    const[nombre, setNombre] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre})
        navigate('/tipoproducto')
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Tipoproducto</h5>
            </div>

            <div class="card-body">
                <h5>Tipoproducto Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateTipoproducto
