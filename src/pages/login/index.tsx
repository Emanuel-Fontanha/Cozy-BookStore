import styles from "./styles.module.css";
import CozyBack from "../../assets/background_login.jpg";
import Sun from "../../assets/logo_sun.png";
import Moon from "../../assets/logo_moon.png";
import { useNavigate } from "react-router";
import LabeledInput from "../../components/labeled input";

export default function Login() {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>

            <img
                className={styles.cozyBack}
                src={CozyBack}
                alt="Imagem de fundo aconchegante"/>

            <div className={styles.mainDiv}>

                {/* Logotipo duplo: Sol e Lua */}
                <div className={styles.subMainDiv01}>
                    <img
                        className={styles.logo}
                        src={Sun}
                        alt="Logo da livraria (Sol aconchegante)"/>
                    <img
                        className={styles.logo}
                        src={Moon}
                        alt="Logo da livraria (Lua aconchegante)"/>
                </div>

                {/* Títulos principais da página */}
                <div className={styles.subMainDiv02}>
                    <section className={styles.textSection}>
                        <p className={styles.title}>Cozy BookStore</p>
                        <p className={styles.subTitle}>Onde a leitura e o conforto se tornam um só</p>
                    </section>

                    {/* Inputs de login reutilizando o componente LabeledInput */}
                    <section className={styles.inputSection}>
                        <div className={styles.emailDiv}>
                            <LabeledInput 
                                id="inpu01" 
                                labelTitle="E-mail" 
                                inputPlaceholder="Digite seu e-mail"/>
                        </div>
                        <div className={styles.passwordDiv}>
                            <LabeledInput 
                                id="inpu02" 
                                labelTitle="Senha" 
                                inputPlaceholder="Digite sua senha"/>
                        </div>
                    </section>

                    {/* Botões de navegação: login e cadastro */}
                    <section className={styles.buttonSection}>
                        <button
                            onClick={() => navigate("/")}
                            className={styles.loginButton}>
                            Entrar</button>
                        <button
                            onClick={() => navigate("/cadastro")}
                            className={styles.registerButton}>
                            Cadastre-se</button>
                    </section>
                </div>
            </div>
        </div>
    )
}