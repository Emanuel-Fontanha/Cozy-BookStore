import { RouterProvider } from "react-router";
import router from "./routing/router";

// Uso de sistema de roteamento para criação de páginas encadeadas

export default function App() {
    
    return <RouterProvider router={router}/>
    
}
