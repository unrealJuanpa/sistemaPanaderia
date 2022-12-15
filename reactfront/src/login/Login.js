import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/colaboradores/'

const CompLogin = () => {
    let us = ''
    let pass = ''
    const navigate = useNavigate()
    const[colaboradores, setColaboradores] = useState([])

    useEffect(() => { getColaboradores() },[])

    const getColaboradores = async () => {
        const res = await axios.get(URI)
        setColaboradores(res.data)
    }


    function setUsername(username) {
        us = username
    }

    function setPassword(passwd) {
        pass = passwd
    }

    const store = (e) => {
        let nivel = -1

        function evaluar(dato) {
            if (dato.usuario == us && dato.contrasenia == pass) {
                nivel = dato.nivelacceso
            }
        }

        colaboradores.flatMap( (data) => ( evaluar(data) ) )

        if (nivel === -1) {
            alert("Usuario o contraseña incorrectos!")
        }
        else {
            if (nivel === 0) {
                navigate('/admin')
            }
            else {
                if (nivel === 1) {
                    navigate('/empleado')
                }
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={store}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="form-group">
                    <label>Usuario</label>
                        <input onChange={ (e) => setUsername(e.target.value) } type="text" class="form-control" placeholder="Enter User Name"></input>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                        <input onChange={ (e) => setPassword(e.target.value) } type="password" class="form-control" placeholder="Enter Password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Authenticate</button>
            </form>
        </div>
    )
}

export default CompLogin

