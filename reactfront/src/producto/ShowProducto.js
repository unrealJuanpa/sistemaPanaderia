import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/producto/'

const CompShowProducto = () => {
    const[producto, setProducto] = useState([])
    useEffect(() => {
            getProducto()
        },[]
    )

    const getProducto = async () => {
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    const deleteProducto = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProducto()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Producto Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Producto!</span>
                <br></br>
                <Link to="/producto/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
                <br></br>
                <Link to="/admin" type="button" className="btn btn-info" data-toggle="tooltip">Retornar a Dashboard</Link>
            </div>

            <div className="card-block table-border-style">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Tipoproducto</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                producto.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.descripcion}</td>
                                            <td>{dtyo.precio}</td>
                                            <td>{dtyo.tipoproducto}</td>
                                            <td>
                                                <Link to={`/producto/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteProducto(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowProducto

