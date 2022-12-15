import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/colaboradores/'

const CompShowColaboradores = () => {
    const[colaboradores, setColaboradores] = useState([])
    useEffect(() => {
            getColaboradores()
        },[]
    )

    const getColaboradores = async () => {
        const res = await axios.get(URI)
        setColaboradores(res.data)
    }

    const deleteColaboradores = async (id) => {
        await axios.delete(`${URI}${id}`)
        getColaboradores()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Colaboradores Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Colaboradores!</span>
                <br></br>
                <Link to="/colaboradores/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
                <br></br>
                <Link to="/admin" type="button" className="btn btn-info" data-toggle="tooltip">Retornar a Dashboard</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Usuario</th>
                                <th>Contrasenia</th>
                                <th>Nombre</th>
                                <th>Dpi</th>
                                <th>Telefono</th>
                                <th>Nivelacceso</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                colaboradores.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.usuario}</td>
                                            <td>{dtyo.contrasenia}</td>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.dpi}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>{dtyo.nivelacceso}</td>
                                            <td>
                                                <Link to={`/colaboradores/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteColaboradores(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowColaboradores

