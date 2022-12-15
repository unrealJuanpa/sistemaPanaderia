import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/clientes/'

const CompShowClientes = () => {
    const[clientes, setClientes] = useState([])
    useEffect(() => {
            getClientes()
        },[]
    )

    const getClientes = async () => {
        const res = await axios.get(URI)
        setClientes(res.data)
    }

    const deleteClientes = async (id) => {
        await axios.delete(`${URI}${id}`)
        getClientes()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Clientes Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Clientes!</span>
                <br></br>
                <Link to="/clientes/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
                <br></br>
                <Link to="/admin" type="button" className="btn btn-info" data-toggle="tooltip">Retornar a Dashboard</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Nit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.nit}</td>
                                            <td>
                                                <Link to={`/clientes/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteClientes(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowClientes

