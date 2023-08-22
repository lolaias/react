import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageSobre, PagePersonagem } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/Sobre" element={<PageSobre/>} />
                <Route path="/Personagem" element={<PagePersonagem/>} />
            </Route>
        </Routes>
    )
}