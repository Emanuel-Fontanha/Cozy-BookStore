import type { AnchorWithIconProps } from "../../interfaces"
import styles from "./styles.module.css"

export default function Anchor({ anchorHref, anchorName, picAlt, picSrc }: AnchorWithIconProps) {
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