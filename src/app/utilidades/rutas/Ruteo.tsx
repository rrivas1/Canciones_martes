import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Canciones_crear } from "../../componentes/canciones/Cancion_crear";
import { Canciones_listas } from "../../componentes/canciones/Cancion_listar";
import { Canciones_admin } from "../../componentes/canciones/Cancion_admin";
import { Cancion_actualizar } from "../../componentes/canciones/Cancion_actualizar";
import { Noencontrado } from "../../componentes/contenedor/Noencontrado";

export const Ruteo =()=>{
    return(
        <Routes>
            <Route path="/"element={<Inicio />}/>
            <Route path="/cancre"element={<Canciones_crear />}/>
            <Route path="/canlist"element={<Canciones_listas />}/>
            <Route path="/canadmin"element={<Canciones_admin />}/>

            <Route path="/canact/:codigo"element={<Cancion_actualizar />}/>
            <Route path="*"element={<Noencontrado />}/>
        </Routes>
    )
}