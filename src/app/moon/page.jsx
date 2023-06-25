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
   const moon = data.bodies[0];

   return (
      <>
         <div>
            <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
               <Image src="/assets/moon.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
            </div>
         </div>
         <header className={styles.header}>
            <nav className={styles.navbar}>
               <Image src="/assets/moon_2.png" alt="Moon" width={115} height={115} />

               <Link href="/">
                  {' '}
                  <Image src="/assets/atronaut_01.png" width={50} height={50} alt="Astronaut image" />
               </Link>
            </nav>
         </header>
         <main className={styles.main}>
            {data ? (
               <>
                  <h2>{moon?.englishName}</h2>
                  <div className={styles.planet_card} key={moon?.id}>
                     <div className="block-left">
                        <p>
                           <strong>Is Planet:</strong> {moon?.isPlanet ? 'Yes' : 'No'}
                        </p>
                        <p>
                           <strong>Semimajor Axis:</strong> {moon?.semimajorAxis} km
                        </p>
                        <p>
                           <strong>Perihelion:</strong> {moon?.perihelion} km
                        </p>
                        <p>
                           <strong>Aphelion:</strong> {moon?.aphelion} km
                        </p>
                        <p>
                           <strong>Eccentricity:</strong> {moon?.eccentricity}
                        </p>
                        <p>
                           <strong>Inclination:</strong> {moon?.inclination}&deg;
                        </p>
                        <p>
                           <strong>Mass:</strong> {moon?.mass?.massValue} x 10^{moon?.mass?.massExponent} kg
                        </p>
                        <p>
                           <strong>Volume:</strong> {moon?.vol?.volValue} x 10^{moon?.vol?.volExponent} km^3
                        </p>
                     </div>
                     <div className="block-right">
                        <p>
                           <strong>Density:</strong> {moon?.density} g/cm^3
                        </p>
                        <p>
                           <strong>Gravity:</strong> {moon?.gravity} m/s^2
                        </p>
                        <p>
                           <strong>Escape Velocity:</strong> {moon?.escape} m/s
                        </p>
                        <p>
                           <strong>Mean Radius:</strong> {moon?.meanRadius} km
                        </p>
                        <p>
                           <strong>Equatorial Radius:</strong> {moon?.equaRadius} km
                        </p>
                        <p>
                           <strong>Polar Radius:</strong> {moon?.polarRadius} km
                        </p>
                        <p>
                           <strong>Sidereal Orbit:</strong> {moon?.sideralOrbit} days
                        </p>
                        <p>
                           <strong>Sidereal Rotation:</strong> {moon?.sideralRotation} hours
                        </p>
                     </div>
                  </div>
               </>
            ) : (
               <p>...loading</p>
            )}
         </main>
      </>
   );
}
