import styles from './button.module.css';

type ButtonProps = {
    text?: string;
};

export default function Button({ text = 'Submit' }: ButtonProps) {
    return <button className={styles.button}>{text}</button>;
}
