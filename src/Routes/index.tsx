import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageSobre, PagePersonagem, PageCadastro, PageLogin, AdmPage } from "../pages"
import ProtectedRoute from './ProtectedRoute'

export const RouteSoftware = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/Sobre" element={<PageSobre/>} />
                <Route path="/Personagem" element={<PagePersonagem/>} />
                <Route path="/Cadastro" element={<PageCadastro/>} />
                <Route path="/Login" element={<PageLogin/>} />
                <Route element={<ProtectedRoute />}>
                <Route path="/Adm" element={<AdmPage/>} />
            </Route>
            </Route>
        </Routes>
    );
};

export default RouteSoftware;