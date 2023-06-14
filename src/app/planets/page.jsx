import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/pages/Moon.module.scss';

async function getData() {
   const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');

   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   return res.json();
}

export default async function Moon() {
   const data = await getData();
   console.log('data:', data.bodies);

   return (
      <>
         {data ? (
            <>
               <div>
                  <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
                     <Image src="/assets/moon.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
                  </div>
               </div>
               <header className={styles.header}>
                  <nav className={styles.navbar}>
                     <Link href="/">Home</Link>
                     <p style={{ color: 'whitesmoke' }}>Moon</p>
                  </nav>
               </header>
               <main className={styles.main}>
                  <h3>{data.bodies[0].name}</h3>
               </main>
            </>
         ) : (
            <p>...loading</p>
         )}
      </>
   );
}
