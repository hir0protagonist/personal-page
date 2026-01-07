import NotFound from '@/ui/components/NotFound/NotFound';
import Header from '@/ui/components/Header/Header';

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
                <NotFound backLink={{ href: '/', text: 'Back home' }} />
            </div>
        </>
    );
}
