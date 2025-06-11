import type { IAnchor } from "../../interfaces"
import styles from "./styles.module.css"

export default function Anchor({anchorHref, anchorName, picAlt, picSrc}: IAnchor) {
    return (
        <a
            className={styles.anchor}
            href={anchorHref || "#"}
            target="blank_"
            rel="noopener noreferrer">
            <img 
                src={picSrc}
                alt={picAlt}
                className={styles.image}/>
            {anchorName}
        </a>
    )
}