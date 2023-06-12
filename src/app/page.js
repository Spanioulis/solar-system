import Link from 'next/link';
import Image from 'next/image';
import styles from '../Home.module.scss';

export default function Home() {
   return (
      <>
         <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
            <Image src="/assets/stars.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
         </div>
         <header className={styles.header}>
            <nav className={styles.navbar}>
               <h1>Solar System</h1>
               <Link href="/planets">Planets</Link>
               <a
                  href="https://spanioulis.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['second-anchor']}
               >
                  @Spanioulis
               </a>
            </nav>
         </header>
         <main className={styles.main}></main>
      </>
   );
}
