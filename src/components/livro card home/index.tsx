import { Link, useNavigate } from "react-router";
import type { Livro } from "../../interfaces";
import styles from "./styles.module.css"

export default function LivroCardHome ({arrayLivros} : {arrayLivros : Livro[]}) {

    const navigate = useNavigate();

    return (
        arrayLivros.map((livro) => (
            <div
                key={livro.id}
                className={styles.container}>
                
                <Link
                    className={styles.coverLink}
                    to={`/detalhes/${livro.titulo.toLowerCase().replace(/ /g, "-")}`}>
                    <img
                        src={livro.capa}
                        alt="Capa do livro"
                        className={styles.cover}
                        />
                </Link>

                <section className={styles.infoSection}>
                    <div className={styles.textDiv}>
                        <h2
                            className={styles.title}>
                            {livro.titulo.length > 47 ? (livro.titulo.slice(0, 47) + "...") : livro.titulo}</h2>
                        <h3
                            className={styles.author}>
                            {livro.autor}</h3>
                    </div>
                    <h3
                        className={styles.price}>
                        R$ {livro.preco.toFixed(2)}</h3>
                    <button 
                        className={styles.detailsButton}
                        onClick={() => navigate(`/detalhes/${livro.titulo.toLowerCase().replace(/ /g, "-")}`)}>
                        Detalhes
                    </button>
                </section>
            </div>
        ))
    )
}