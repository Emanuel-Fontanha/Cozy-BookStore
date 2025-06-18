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
        fetch("http://localhost:3000/livros")
            .then(res => res.json())
            .then(data => setLivros(data))
            .catch(error => console.log("ERRO AO CAPTURAR DADOS:", error))
        // Simulação de API REST para capturar os livros em livros.json
        // Dependência vazia para garantir apenas 1 disparo
    }, []);

    useEffect(() => {
        setGeneros([...new Set(livros.map((livro) => {return livro.genero}))])
        // Criação/atualização de uma lista de gêneros com base em "livros"
        // 1: O hook mapeia "livros" extraindo apenas os gêneros para uma lista
        // 2: A lista é transformada em set para excluir duplicatas
        // 3: O set é transformado em lista para usarmos métodos de lista nos componentes
        // 4: setGeneros atribui a lista de gêneros à "generos"
        // 5: O hook é disparado novamente caso altere-se livros.json (consistência de dados)
    }, [livros]);
    
    return (
        //
        livros.length !== 0 ? (
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
                            <GeneroButton key={genero} genero={genero}/>
                        ))
                    }
                </nav>
                {
                    generos.map((genero) => (
                        <section key={genero} className={styles.generoSection}>
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
                <section className={styles.infoSection}>
                    <p className={styles.aBitAboutUs}>
                        Um pouco sobre nós
                    </p>
                    <hr className={styles.underline}/>
                    <p className={styles.aboutUsText}>
                        Durante um inverno rigoroso em que as lavouras de trigo eram pouco produtivas, nosso fundador,
                        <span> Cartagh Wintelfloor, construiu uma pequena instalagem</span> nos fundos de sua casa, na
                        qual buscou prover não só <span>conforto e segurança</span> aos seus compatriotas, mas também promover a<span> esperança de um futuro melhor</span> para a vila, tudo com livros produzidos 
                        pelo próprio Cartagh.
                    </p>
                    <p className={styles.aboutUsText}>
                        <span>Suas primeiras literaturas,</span> inspiradas pelo <span>movimento romântico</span> da época, não foram vendidas, mas emprestadas para leitura dentro do estabelecimento. Com o tempo, cada vez mais pessoas apareciam para ler seus livros, o que o levou a <span>alugar e vender</span> suas criações. Cerca de 1 ano depois, Cartagh tinha <span>um negócio pequeno e estabilizado</span>, do qual conseguia o suprimento de sua família. Nesse mesmo período, Cartagh <span> nomeou seu,</span> chamando-o <span>Cozy BookStore. Atualmente,</span> com mais de 2 séculos de vida, a livraria possui <span>mais de 120 lojas</span> em diferentes localidades do mundo.
                    </p>
                    <p className={styles.aboutUsText}>
                        <span>Cozy BookStore:</span> um lugar em que a mente se enriquece e o coração se aquece.
                    </p>
                    <hr className={styles.underline}/>
                </section>
            </div>
        ) : (
            <div className={styles.container}>
                <h1 className={styles.ohNo}>Oh não!</h1>
                <section className={styles.sorrySection}>
                    <h2 className={styles.sorryText}>As traças comeram nossos livros!</h2>
                    <h2 className={styles.sorryText}>Pedimos desculpas pelo transtorno</h2>
                </section>
                <section className={styles.infoSection}>
                    <p className={styles.aBitAboutUs}>
                        Um pouco sobre nós
                    </p>
                    <hr className={styles.underline}/>
                    <p className={styles.aboutUsText}>
                        Durante um inverno rigoroso em que as lavouras de trigo eram pouco produtivas, nosso fundador,
                        <span> Cartagh Wintelfloor, construiu uma pequena instalagem</span> nos fundos de sua casa, na
                        qual buscou prover não só <span>conforto e segurança</span> aos seus compatriotas, mas também promover a<span> esperança de um futuro melhor</span> para a vila, tudo com livros produzidos 
                        pelo próprio Cartagh.
                    </p>
                    <p className={styles.aboutUsText}>
                        <span>Suas primeiras literaturas,</span> inspiradas pelo <span>movimento romântico</span> da época, não foram vendidas, mas emprestadas para leitura dentro do estabelecimento. Com o tempo, cada vez mais pessoas apareciam para ler seus livros, o que o levou a <span>alugar e vender</span> suas criações. Cerca de 1 ano depois, Cartagh tinha <span>um negócio pequeno e estabilizado</span>, do qual conseguia o suprimento de sua família. Nesse mesmo período, Cartagh <span> nomeou seu,</span> chamando-o <span>Cozy BookStore. Atualmente,</span> com mais de 2 séculos de vida, a livraria possui <span>mais de 120 lojas</span> em diferentes localidades do mundo.
                    </p>
                    <p className={styles.aboutUsText}>
                        <span>Cozy BookStore:</span> um lugar em que a mente se enriquece e o coração se aquece.
                    </p>
                    <hr className={styles.underline}/>
                </section>
            </div>

        )
    );
}