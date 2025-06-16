import { useNavigate } from "react-router";
import styles from "./styles.module.css";

export default function GeneroButtonHome({genero} : {genero: string}) {

    const navigate = useNavigate();

    return (
        <button
            key={genero}
            className={styles.generoButton}
            onClick={() => navigate(`/genero/${genero.toLowerCase().replace(/ /g, "-")}`)}>
            {genero}
        </button>
    )
}