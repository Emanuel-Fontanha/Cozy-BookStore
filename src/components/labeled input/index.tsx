import type { LabelProps } from "../../interfaces"
import styles from "./styles.module.css"

export default function LabeledInput({ id, title, placeholder }: LabelProps) {
    
    return (
        <label className={styles.container}>
            {title}
            <input
                className={styles.inputProp}
                type="text" 
                id={id}
                placeholder={placeholder}/>
        </label>
    )
}