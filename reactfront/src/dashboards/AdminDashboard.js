import { Link } from "react-router-dom";

const AdminDashboard = () => {
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
            <h3>Hola Administrador</h3>

            <div>
                <Link to='/clientes'>Administración de clientes</Link>
            </div>

            <div>
                <Link to='/colaboradores'>Administración de colaboradores</Link>
            </div>

            <div>            
                <Link to='/producto'>Administración de productos</Link>
            </div>

            <div>
                <Link to='/ventas'>Administración de ventas</Link>
            </div>

            <br></br>

            <div>
                <Link className="btn btn-danger" to='/'>Logout</Link>
            </div>
        </div>
    )
}

export default AdminDashboard