import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/ventas/'
const URI2 = 'http://localhost:8000/producto/'
const URI3 = 'http://localhost:8000/colaboradores/'

const Informedia = () => {
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

    function filtrarVentas() {
        document.getElementById("add_content").innerHTML = "";

        //alert(document.getElementById("ck2p").value)

        ventas.map(
            function (dtyo) {
                let pflag = true

                if (document.getElementById('ck1').checked) {
                    if (dtyo.fechahora.split('-')[2].split('T')[0] != document.getElementById("ck1p").value) {
                        pflag = false
                    }
                }

                if (document.getElementById('ck2').checked) {
                    if (dtyo.fechahora.split('-')[1] != document.getElementById("ck2p").value) {
                        pflag = false
                    }
                }

                if (document.getElementById('ck3').checked) {
                    if (dtyo.fechahora.split('-')[0] != document.getElementById("ck3p").value) {
                        pflag = false
                    }
                }

                if (document.getElementById('ck4').checked) {
                    if (dtyo.producto != document.getElementById("ck4p").value) {
                        pflag = false
                    }
                }

                if (document.getElementById('ck5').checked) {
                    if (dtyo.colaborador != document.getElementById("ck5p").value) {
                        pflag = false
                    }
                }
                
                if (pflag) {
                    document.getElementById("add_content").innerHTML += "<tr key="+dtyo.id+"> <th scope='row'>"+dtyo.id+"</th> <td>"+dtyo.fechahora+"</td> <td>"+dtyo.cantidadproducto+"</td> <td>"+dtyo.producto+"</td> <td>"+dtyo.colaborador+"</td> <td>"+dtyo.cliente+"</td> </tr>";                    
                }
            }
        )
    }

    //onChange={(e) => setProducto(e.target.options[e.target.selectedIndex].text)}
    //onChange={(e) => setColaborador(e.target.options[e.target.selectedIndex].text)}

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Informes</h5>
                <span className="d-block m-t-5">Habilite o deshabilite los filtros que desee!</span>
                <br></br>
                <div>
                    <input id="ck1" type="checkbox"></input> Filtro por día:
                    <input id="ck1p" type="number"></input>
                </div>
                <br></br>
                <div>
                    <input id="ck2" type="checkbox"></input> Filtro por mes:
                    <select id="ck2p" className="select">
                        <option selected value='1'>Enero</option>
                        <option value='2'>Febrero</option>
                        <option value='3'>Marzo</option>
                        <option value='4'>Abril</option>
                        <option value='5'>Mayo</option>
                        <option value='6'>Junio</option>
                        <option value='7'>Julio</option>
                        <option value='8'>Agosto</option>
                        <option value='9'>Septiembre</option>
                        <option value='10'>Octubre</option>
                        <option value='11'>Noviembre</option>
                        <option value='12'>Diciembre</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <input id="ck3" type="checkbox"></input> Filtro por año:
                    <input id="ck3p" type="number"></input>
                </div>
                <br></br>
                <div>
                    <input id="ck4" type="checkbox"></input> Filtro por producto: 
                    <select id="ck4p" className="select">
                        {
                            productos.map(
                                (dtyo) => (
                                    <option>{dtyo.nombre}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <br></br>
                <div>
                    <input id="ck5" type="checkbox"></input> Filtro por colaborador:
                    <select id="ck5p" className="select">
                        {
                            colaboradores.map(
                                (dtyo) => (
                                    <option>{dtyo.nombre}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <br></br>
                <div>
                    <button onClick={ () => filtrarVentas() } type="button" className="btn btn-info">Presione para aplicar los filtros y mostrar los datos</button>
                </div>
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
                            </tr>
                        </thead>
                        <tbody id="add_content">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Informedia