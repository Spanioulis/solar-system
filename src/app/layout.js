import '../styles/globals.scss';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ weight: '400', subsets: ['latin'] });

export const metadata = {
   title: 'Solar System',
   description: '@Spanioulis'
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={spaceGrotesk.className}>{children}</body>
      </html>
   );
}
