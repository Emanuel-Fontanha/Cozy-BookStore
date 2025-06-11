import type { ILabelProps } from "../../interfaces"
import styles from "./styles.module.css"

export default function LabeledInput({ id, labelTitle, inputPlaceholder }: ILabelProps) {
    
    return (
        <label className={styles.container}>
            {labelTitle}
            <input
                className={styles.inputProp}
                type="text" 
                id={id}
                placeholder={inputPlaceholder}/>
        </label>
    )
}