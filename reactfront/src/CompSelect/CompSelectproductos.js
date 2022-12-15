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

            <select className="select">

            </select>

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
        </div>
    )
}

export default CompShowProducto

