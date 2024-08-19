import { Metadata } from 'next';
import { SITE } from '~/config.js';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import Script from 'next/script';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="google-site-verification" content="9R74iVP1lIOhW2T4PMG38s7oLM7trFsesu-Ic4XZpgI" />
      </head>
      <body className="tracking-tight antialiased bg-custom-white text-black">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
