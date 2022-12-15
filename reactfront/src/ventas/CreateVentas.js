import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/ventas/'
const URI2 = 'http://localhost:8000/producto/'
const URI3 = 'http://localhost:8000/colaboradores/'
const URI4 = 'http://localhost:8000/clientes/'

const CompCreateVentas = () => {
    const[fechahora, setFechahora] = useState('')
    const[cantidadproducto, setCantidadproducto] = useState('')
    const[producto, setProducto] = useState('')
    const[colaborador, setColaborador] = useState('')
    const[cliente, setCliente] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fechahora:fechahora,cantidadproducto:cantidadproducto,producto:producto,colaborador:colaborador,cliente:cliente})
        window.history.go(-1)
    }

    const[productos, setProductos] = useState([])
    useEffect(() => {
            getProductos()
        },[]
    )

    const getProductos = async () => {
        const res = await axios.get(URI2)
        setProductos(res.data)
    }

    const[colaboradores, setColaboradores] = useState([])
    useEffect(() => {
            getColaboradores()
        },[]
    )

    const getColaboradores = async () => {
        const res = await axios.get(URI3)
        setColaboradores(res.data)
    }

    const[clientes, setClientes] = useState([])
    useEffect(() => {
            getClientes()
        },[]
    )

    const getClientes = async () => {
        const res = await axios.get(URI4)
        setClientes(res.data)
    }
    
    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Ventas</h5>
            </div>

            <div class="card-body">
                <h5>Ventas Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Fechahora</label>
                                <input value={fechahora} onChange={ (e) => setFechahora(e.target.value) } type="datetime-local" class="form-control" placeholder="Enter Fechahora"></input>
                            </div>
                            <div class="form-group">
                                <label>Cantidadproducto</label>
                                <input value={cantidadproducto} onChange={ (e) => setCantidadproducto(e.target.value) } type="number" class="form-control" placeholder="Enter Cantidadproducto"></input>
                            </div>
                            
                            <div class="form-group">
                                <label>Producto</label>
                                <br></br>
                                <select id="sl1" className="select" onChange={(e) => setProducto(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        productos.map(
                                            (dtyo) => (
                                                <option>{dtyo.nombre}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Colaborador</label>
                                <br></br>
                                <select id="sl2" className="select" onChange={(e) => setColaborador(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        colaboradores.map(
                                            (dtyo) => (
                                                <option>{dtyo.nombre}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Cliente</label>
                                <br></br>
                                <select id="sl3" className="select" onChange={(e) => setCliente(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        clientes.map(
                                            (dtyo) => (
                                                <option>{dtyo.nombre}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateVentas
