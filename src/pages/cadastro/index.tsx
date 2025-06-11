import LabeledInput from "../../components/labeled input"
import styles from "./styles.module.css"
import Sun from "../../assets/logo_sun.png";
import Moon from "../../assets/logo_moon.png";
import { useNavigate } from "react-router";

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>

            {/* Lado esquerdo com logo (Sol) */}
            <div className={styles.sides}>
                <img
                    className={styles.logo}
                    src={Sun}
                    alt="Logo da livraria (Sol aconchegante)"/>
            </div>

            {/* Conteúdo central do cadastro */}
            <div className={styles.mainDiv}>

                {/* Títulos da seção */}
                <section className={styles.titleSection}>
                    <h1 className={styles.titleH1}>Cadastro</h1>
                    <h2 className={styles.titleH2}>Cozy BookStore</h2>
                </section>

                {/* Formulário de cadastro com inputs reutilizáveis */}
                <section className={styles.formsSection}>
                    <LabeledInput 
                        labelTitle="E-mail"
                        id="input03"
                        inputPlaceholder="Digite seu e-mail"/>
                    <LabeledInput
                        labelTitle="Nome completo"
                        id="input04"
                        inputPlaceholder="Digite seu nome completo"/>
                    <LabeledInput 
                        labelTitle="Senha" 
                        id="input05"
                        inputPlaceholder="Digite sua senha"/>
                    <LabeledInput 
                        labelTitle="Confirmar senha" 
                        id="input06"
                        inputPlaceholder="Confirme sua senha"/>
                </section>

                {/* Botão de cadastro */}
                <button 
                    className={styles.registerButton}
                    onClick={() => navigate("/login")}>Cadastrar</button>
            </div>

            {/* Lado direito com logo (Lua) */}
            <div className={styles.sides}>
                <img
                    className={styles.logo}
                    src={Moon}
                    alt="Logo da livraria (Lua aconchegante)"/>
            </div>
        </div>
    )
}