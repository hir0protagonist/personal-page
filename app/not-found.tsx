import Header from '@/components/Header/Header';
import NotFound from '../components/NotFound/NotFound';

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <section
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '120px 0 0 0',
                }}>
                <NotFound />
            </section>
        </>
    );
}
