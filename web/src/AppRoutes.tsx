import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro";
import RotaPrivada from "./utils/rotaPrivada";


function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element= {<PaginaBase/> }>
                 <Route path="paginaInicial" element= {<PaginaInicial/> } />
                 <Route element={<RotaPrivada/>}>
               
                <Route path= "dashboard" element= {<Dashboard/>} />
                </Route>
                </Route>
                <Route path="/" element= {<PaginaBaseFormulario />}>
                    <Route path="/login" element = {<Login/>}/>
                    <Route path="/Cadastro" element= {<Cadastro/> }/>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes