import Header from '@/ui/layout/header/header';
import NotFound from '../ui/shared/NotFound/NotFound';

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
