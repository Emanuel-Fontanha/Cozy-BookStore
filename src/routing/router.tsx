import { createBrowserRouter } from "react-router";
import RootLayout from "./rootLayout.tsx";
import Home from "../pages/home";
import Carrinho from "../pages/carrinho"
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,                 //Criação de um layout base para reutilizar elementos já renderizados
        children: [
            {index: true, element: <Home/>},
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