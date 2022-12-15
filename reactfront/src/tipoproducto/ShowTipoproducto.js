import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/tipoproducto/'

const CompShowTipoproducto = () => {
    const[tipoproducto, setTipoproducto] = useState([])
    useEffect(() => {
            getTipoproducto()
        },[]
    )

    const getTipoproducto = async () => {
        const res = await axios.get(URI)
        setTipoproducto(res.data)
    }

    const deleteTipoproducto = async (id) => {
        await axios.delete(`${URI}${id}`)
        getTipoproducto()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Tipoproducto Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Tipoproducto!</span>
                <br></br>
                <Link to="/tipoproducto/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipoproducto.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>
                                                <Link to={`/tipoproducto/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteTipoproducto(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowTipoproducto

