import './App.css';

import CompLogin from './login/Login';

import Informedia from './informes/Informe';

import AdminDashboard from './dashboards/AdminDashboard';
import EmpleadoDashboard from './dashboards/EmpleadoDashboard';

import CompShowColaboradores from './colaboradores/ShowColaboradores.js';
import CompCreateColaboradores from './colaboradores/CreateColaboradores.js';
import CompEditColaboradores from './colaboradores/EditColaboradores.js';

import CompShowTipoproducto from './tipoproducto/ShowTipoproducto.js';
import CompCreateTipoproducto from './tipoproducto/CreateTipoproducto.js';
import CompEditTipoproducto from './tipoproducto/EditTipoproducto.js';

import CompShowClientes from './clientes/ShowClientes.js';
import CompCreateClientes from './clientes/CreateClientes.js';
import CompEditClientes from './clientes/EditClientes.js';

import CompShowProducto from './producto/ShowProducto.js';
import CompCreateProducto from './producto/CreateProducto.js';
import CompEditProducto from './producto/EditProducto.js';

import CompShowVentas from './ventas/ShowVentas.js';
import CompCreateVentas from './ventas/CreateVentas.js';
import CompEditVentas from './ventas/EditVentas.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/informedia' element={<Informedia></Informedia>}></Route>
          <Route path='/' element={<CompLogin/>}/>
          <Route path='/empleado' element={<EmpleadoDashboard></EmpleadoDashboard>}></Route>
          <Route path='/admin' element={<AdminDashboard></AdminDashboard>}></Route>

          <Route path='/colaboradores/' element={ <CompShowColaboradores/>}/>
          <Route path='/colaboradores/create' element={ <CompCreateColaboradores/>}/>
          <Route path='/colaboradores/edit/:id' element={ <CompEditColaboradores/>}/>

          <Route path='/tipoproducto/' element={ <CompShowTipoproducto/>}/>
          <Route path='/tipoproducto/create' element={ <CompCreateTipoproducto/>}/>
          <Route path='/tipoproducto/edit/:id' element={ <CompEditTipoproducto/>}/>

          <Route path='/clientes/' element={ <CompShowClientes/>}/>
          <Route path='/clientes/create' element={ <CompCreateClientes/>}/>
          <Route path='/clientes/edit/:id' element={ <CompEditClientes/>}/>

          <Route path='/producto/' element={ <CompShowProducto/>}/>
          <Route path='/producto/create' element={ <CompCreateProducto/>}/>
          <Route path='/producto/edit/:id' element={ <CompEditProducto/>}/>

          <Route path='/ventas/' element={ <CompShowVentas/>}/>
          <Route path='/ventas/create' element={ <CompCreateVentas/>}/>
          <Route path='/ventas/edit/:id' element={ <CompEditVentas/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

