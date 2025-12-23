import styles from './Button.module.css';

type ButtonProps = {
    text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ text = 'Submit', ...props }: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            {text}
        </button>
    );
}
