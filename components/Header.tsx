import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (<header className={styles.header}>
        <Link href="/" className={styles.home_link}>
            <Image src="/logo.svg" alt="Bruno's Portfolio" width={100} height={100} />
            <h1>Bruno</h1>
        </Link>
        <nav className={styles.nav_links}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </header>);
}