import NotFound from '@/ui/components/NotFound/NotFound';
import Header from '@/ui/components/Header/Header';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Not Found',
        description: '',
    };
}

export default function NotFoundPage() {
    return (
        <>
            <Header
                links={[
                    { href: '/', title: 'About' },
                    { title: 'Posts', href: '/posts' },
                ]}
            />
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
