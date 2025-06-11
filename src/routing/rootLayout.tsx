import { Outlet } from "react-router";
import Header from "../components/header"
import Footer from "../components/footer"


// O layout consiste em 1 header, 1 footer e 1 tag outlet
// Outlet: tag em que a renderização será alterada conforme a movimentação do usuário nas páginas
// Apenas as páginas de login e cadastro estão fora do layout base

export default function rootLayout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}