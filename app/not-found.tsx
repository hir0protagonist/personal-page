import Header from '@/ui/layout/Header/Header';
import NotFound from '../ui/components/NotFound/NotFound';

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '120px 0 0 0',
                }}>
                <NotFound />
            </div>
        </>
    );
}
