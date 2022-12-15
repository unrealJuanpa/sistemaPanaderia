import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/ventas/'

const CompShowVentas = () => {
    const[ventas, setVentas] = useState([])
    useEffect(() => {
            getVentas()
        },[]
    )

    const getVentas = async () => {
        const res = await axios.get(URI)
        setVentas(res.data)
    }

    const deleteVentas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getVentas()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Ventas Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Ventas!</span>
                <br></br>
                <Link to="/ventas/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
                <br></br>
                <Link to="/admin" type="button" className="btn btn-info" data-toggle="tooltip">Retornar a Dashboard</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Fechahora</th>
                                <th>Cantidadproducto</th>
                                <th>Producto</th>
                                <th>Colaborador</th>
                                <th>Cliente</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ventas.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.fechahora}</td>
                                            <td>{dtyo.cantidadproducto}</td>
                                            <td>{dtyo.producto}</td>
                                            <td>{dtyo.colaborador}</td>
                                            <td>{dtyo.cliente}</td>
                                            <td>
                                                <Link to={`/ventas/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteVentas(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowVentas

