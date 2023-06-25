import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/pages/Planets.module.scss';
import PlanetCard from '@/components/PlanetCard';

async function getData() {
   const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');

   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   return res.json();
}

export default async function Planets() {
   const data = await getData();
   const planets = data.bodies;

   return (
      <>
         <div>
            <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
               <Image src="/assets/moon.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
            </div>
         </div>
         <header className={styles.header}>
            <nav className={styles.navbar}>
               <Image src="/assets/mars.png" alt="Moon" width={100} height={100} />
               <Link href="/">
                  {' '}
                  <Image src="/assets/atronaut_01.png" width={50} height={50} alt="Astronaut image" />
               </Link>
            </nav>
         </header>
         <main className={styles.main}>
            {planets ? planets.map((planet) => <PlanetCard planet={planet} key={planet.id} />) : <p>...loading</p>}
         </main>
      </>
   );
}
