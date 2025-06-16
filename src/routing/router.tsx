import { createBrowserRouter } from "react-router";
import RootLayout from "./rootLayout.tsx";
import Home from "../pages/home";
import Carrinho from "../pages/carrinho"
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Genero from "../pages/genero/";
import Detalhes from "../pages/detalhes/index.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,                 //Criação de um layout base para reutilizar elementos já renderizados
        children: [
            {index: true, element: <Home/>},
            {path: "/genero/:genero", element: <Genero/>},
            {path: "/detalhes/:titulo", element: <Detalhes/>},
            {path: "/carrinho", element: <Carrinho/>}
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    }
])

export default router;