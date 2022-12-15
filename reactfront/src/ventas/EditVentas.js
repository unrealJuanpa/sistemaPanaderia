import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/ventas/'
const URI2 = 'http://localhost:8000/producto/'
const URI3 = 'http://localhost:8000/colaboradores/'
const URI4 = 'http://localhost:8000/clientes/'

const CompEditVentas = () => {
    const[fechahora, setFechahora] = useState('')
    const[cantidadproducto, setCantidadproducto] = useState('')
    const[producto, setProducto] = useState('')
    const[colaborador, setColaborador] = useState('')
    const[cliente, setCliente] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()

        await axios.put(URI + id, {
            fechahora: fechahora,
            cantidadproducto: cantidadproducto,
            producto: producto,
            colaborador: colaborador,
            cliente: cliente
        })
        navigate('/ventas')
    }

    useEffect( () => 
        { getVentasByid() }, 
        []
    )

    const getVentasByid = async () => {
        const res = await axios.get(URI + id)
            setFechahora(res.data.fechahora)
            setCantidadproducto(res.data.cantidadproducto)
            setProducto(res.data.producto)
            setColaborador(res.data.colaborador)
            setCliente(res.data.cliente)
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

    function mymatch(p1, p2) {
        if (p1.nombre == p2) {
            return (
                <option selected>{p1.nombre}</option>
            )
        }
        return (
            <option>{p1.nombre}</option>
        )
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Ventas</h5>
            </div>

            <div class="card-body">
                <h5>Ventas Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Fechahora</label>
                                <input value={fechahora} onChange={ (e) => setFechahora(e.target.value) } type="date" class="form-control" placeholder="Enter Fechahora"></input>
                            </div>
                            <div class="form-group">
                                <label>Cantidadproducto</label>
                                <input value={cantidadproducto} onChange={ (e) => setCantidadproducto(e.target.value) } type="number" class="form-control" placeholder="Enter Cantidadproducto"></input>
                            </div>
                            <div class="form-group">
                                <label>Producto</label>
                                <br></br>
                                <select className="select" onChange={(e) => setProducto(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        productos.map(
                                            (dtyo) => (
                                                mymatch(dtyo, producto)
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Colaborador</label>
                                <br></br>
                                <select className="select" onChange={(e) => setColaborador(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        colaboradores.map(
                                            (dtyo) => (
                                                mymatch(dtyo, colaborador)
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Cliente</label>
                                <br></br>
                                <select className="select" onChange={(e) => setCliente(e.target.options[e.target.selectedIndex].text)}>
                                    {
                                        clientes.map(
                                            (dtyo) => (
                                                mymatch(dtyo, cliente)
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditVentas
