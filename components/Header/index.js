import styles from "./Header.module.css"
import Link from 'next/link'

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/About'>About</Link></li>
                </ul>
            </header>
        </>
    )
}