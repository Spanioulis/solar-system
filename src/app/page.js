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
            {/* TODO -> Cambiarlo como el de TESLA */}
            <nav className={styles.navbar}>
               <div className={styles.block1}>
                  <div style={{ zIndex: -1, position: 'fixed', width: '100%', opacity: 0.8, paddingLeft: '3rem' }}>
                     <Image src="/assets/meteor_planet.png" alt="Moon" width={100} height={75} />
                  </div>
                  <Link href="https://api.le-systeme-solaire.net/en/">
                     <h1>Solar System</h1>
                  </Link>
               </div>

               <nav className={styles.nav1}>
                  <Link href="/planets">Planets</Link>
                  <Link href="/moon">Moon</Link>
                  <Link href="/">Sun</Link>
               </nav>

               <nav className={styles.nav2}>
                  <a
                     href="https://spanioulis.dev/"
                     target="_blank"
                     rel="noreferrer noopener"
                     className={styles['second-anchor']}
                  >
                     @Spanioulis
                  </a>
               </nav>
            </nav>
         </header>
         <main className={styles.main}>
            <div className={styles.container}>
               <div>
                  <Image src="/assets/atronaut_01.png" width={250} height={250} alt="Astronaut image" />
               </div>
            </div>
         </main>
      </>
   );
}
