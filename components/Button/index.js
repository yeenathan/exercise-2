import styles from './Button.module.css'

export default function Button ({
    title="button",
    color="var(--blue)"
}) {
    return(
        <>
            <button className={styles.button} style={{backgroundColor: color}}>{title}</button>
        </>
    );
}