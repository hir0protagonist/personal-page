import styles from './Loader.module.css';

export default function Loader() {
    return (
        <span className={styles.loader}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 3h14" />
                <path d="M5 21h14" />
                <path d="M5 3v3l6 6-6 6v3" />
                <path d="M19 3v3l-6 6 6 6v3" />
                <path d="M11 12h2" />

                <path
                    fill="currentColor"
                    stroke="none"
                    d="M7 5.5
           L12 9
           L17 5.5
           H7
           Z"
                />

                <path
                    fill="currentColor"
                    stroke="none"
                    d="M7 18.5
           H17
           L12 15
           L7 18.5
           Z"
                />
            </svg>
            Loading...
        </span>
    );
}
