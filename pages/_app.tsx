import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import themeConfig from '../theme.config.tsx';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={themeConfig.toString()}>
            <Component {...pageProps} />
            <Analytics />
        </div>
    );
}

export default MyApp;