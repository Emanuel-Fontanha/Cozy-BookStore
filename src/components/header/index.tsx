import { useNavigate } from "react-router"
import styles from "./styles.module.css"
import Sun from "../../assets/logo_sun.png"
import Moon from "../../assets/logo_moon.png"
import UserIcon from "../../assets/icon_user.png"
import CartIcon from "../../assets/icon_cart.png"


export default function Header() {
    
    const navigate = useNavigate()
    
    return (
        <div className={styles.container}>

            {/* Logotipos do site, Sol e Lua, que também são botões para voltar à Home */}
            <nav className={styles.logoNavigation}>
                <button
                    className={styles.logoButton}
                    onClick={() => navigate("/")}>
                    <img
                        className={styles.logo}
                        src={Sun}
                        alt="Logo da livraria (Sol aconchegante)"/>
                </button>
                <button
                    className={styles.logoButton}
                    onClick={() => navigate("/")}>
                    <img
                        className={styles.logo}
                        src={Moon}
                        alt="Logo da livraria (Lua aconchegante)"/>
                </button>
            </nav>

            <h1 className={styles.mainTitle}>Cozy BookStore</h1>

            {/* Botões/ícones de navegação: login e carrinho (de compras) */}
            <nav className={styles.iconNavigation}>

                {/* Botõão de login */}
                <button
                    className={styles.iconButton}
                    onClick={() => navigate("/login")}>
                    <img
                        className={styles.icon}
                        src={UserIcon} 
                        alt="Ícone do botão de login" />
                    </button>

                {/* Botõão de carrinho */}
                <button
                    className={styles.iconButton}
                    onClick={() => navigate("/carrinho")}>
                    <img
                        className={styles.icon}
                        src={CartIcon} 
                        alt="Ícone do botão de carrinho de compras"/>
                    </button>
            </nav>
        </div>
    )
}