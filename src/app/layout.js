import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'WithsKey',
    description: 'WithsKey',
};

export default function RootLayout({ children }) {

    return (
        <html lang='ko'>
            <body className={`relative ${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}
