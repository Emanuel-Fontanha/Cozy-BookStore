import Anchor from "../anchor tag"
import styles from "./styles.module.css"
import LinkedIn from "../../assets/icon_linkedin.png"
import Instagram from "../../assets/icon_instagram.png"
import Whatsapp from "../../assets/icon_whatsapp.png"
import Twitter from "../../assets/icon_twitter.png"

export default function Header() {
    
    
    return (
        <div className={styles.container}>
            <section className={styles.iframeSection}>
                <iframe
                    className={styles.iframeTag}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2180031113203!2d151.23249327571148!3d-33.935520673201076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b3d8d4ab7669%3A0xf1df6f4658a3a8d8!2sWallaby%20Way%20Field!5e0!3m2!1spt-BR!2sbr!4v1749665596145!5m2!1spt-BR!2sbr">
                </iframe>
                <div className={styles.textDiv}>
                    <p className={styles.text}>Cozy BookStore</p>
                    <p className={styles.text}>P. Sherman 42 Wallaby Way</p>
                    <p className={styles.text}>Sydney</p>
                    <p className={styles.text}>Australia</p>
                </div>
            </section>
            <nav className={styles.linkNavigation}>
                <Anchor
                    anchorHref="http://www.linkedin.com/in/emanuel-fontanha"
                    anchorName="LinkedIn"
                    picSrc={LinkedIn}
                    picAlt="Imagem-link para o Linkedin"/>
                <Anchor
                    anchorHref=""
                    anchorName="Twitter"
                    picSrc={Twitter}
                    picAlt="Imagem-link para o Twitter"/>
                <Anchor
                    anchorHref=""
                    anchorName="Instagram"
                    picSrc={Instagram}
                    picAlt="Imagem-link para o Instagram"/>
                <Anchor
                    anchorHref=""
                    anchorName="Whatsapp"
                    picSrc={Whatsapp}
                    picAlt="Imagem-link para o Whatsapp"/>
            </nav>
        </div>
    )
}