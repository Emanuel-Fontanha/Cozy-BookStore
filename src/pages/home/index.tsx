import styles from "./styles.module.css";
import Banner from "../../assets/home_mainBanner.png";
import GeneroButton from "../../components/genero button home";
import { useEffect, useState } from "react";
import type { Livro } from "../../interfaces";
import LivroCardHome from "../../components/livro card home";

export default function Home() {

    const [livros, setLivros] = useState<Livro[]>([]);
    const [generos, setGeneros] = useState<string[]>([]);
    
    useEffect(() => {
        // Simulação de API REST para capturar os livros em livros.json
        // Dependência vazia para garantir apenas 1 disparo
        fetch("http://localhost:3000/livros")
            .then(res => res.json())
            .then(data => setLivros(data))
            .catch(error => console.log("ERRO AO CAPTURAR DADOS:", error))
    }, []);

    useEffect(() => {
        // Criação/atualização de uma lista de gêneros com base em "livros"
        // 1: O hook mapeia "livros" extraindo apenas os gêneros para uma lista
        // 2: A lista é transformada em set para excluir duplicatas
        // 3: O set é transformado em lista para usarmos métodos de lista nos componentes
        // 4: setGeneros atribui a lista de gêneros à "generos"
        // 5: O hook é disparado novamente caso altere-se livros.json (consistência de dados)
        setGeneros([...new Set(livros.map((livro) => {return livro.genero}))])
    }, [livros]);

    return (
        <div className={styles.container}>
            <img
                className={styles.banner}
                src={Banner}
                alt="Banner principal da home page" />
            <p className={styles.text}>Visite um de nossos gêneros literários!</p>
            <hr className={styles.underline}/>
            <nav
                className={styles.linkNavigation}>
                {
                    generos.map((genero) => (
                        <GeneroButton genero={genero}/>
                    ))
                }
            </nav>
            {
                generos.map((genero) => (
                    <section className={styles.generoSection}>
                        <h1 className={styles.title}>{genero}</h1>
                        <div className={styles.livroCardsDiv}>
                            <LivroCardHome
                                arrayLivros={livros
                                    .filter((livro) => livro.genero === genero)
                                    .slice(0,3)}/>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}