import '../styles/globals.scss';
import { Space_Grotesk, Noto_Sans_JP } from 'next/font/google';

const font = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata = {
   title: 'Solar System',
   description: '@Spanioulis'
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={font.className}>{children}</body>
      </html>
   );
}
