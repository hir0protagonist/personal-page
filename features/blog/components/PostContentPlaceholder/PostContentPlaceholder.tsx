import Loader from '@/ui/components/Loader/Loader';
import styles from './PostContentPlaceholder.module.css';

export default function PostContentPlaceholder() {
    return (
        <div className={styles.skeleton}>
            <Loader />
        </div>
    );
}
