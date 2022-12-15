import { Link } from "react-router-dom";

const EmpleadoDashboard = () => {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Hola Colaborador</h3>

            <div>
                <Link to="/ventas/create">Nueva venta</Link>
            </div>

            <div>
                <Link to="/clientes/create">Nuevo Cliente</Link>
            </div>

            <br></br>

            <div>
                <Link className="btn btn-danger" to="/">Logout</Link>
            </div>
        </div>
    )
}

export default EmpleadoDashboard