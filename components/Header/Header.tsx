import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';
const links: { text: string; href: string }[] = [
    { text: 'CV', href: '/cv' },
    {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sergey-poteryuha-46216b88',
    },
    {
        text: 'Github',
        href: 'https://github.com/hir0protagonist',
    },
];

type HeaderProps = {
    title?: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className={styles.header}>
            <section className={styles.navigation}>
                {title && <h1>{title}</h1>}
                {/* <nav>
                    <ul>
                        {links.map(({ href, text }) => (
                            <li key={href}>
                                <a target="_blank" rel="noopener noreferrer" href={href}>
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav> */}
            </section>
            <ThemeToggle />
        </header>
    );
}
