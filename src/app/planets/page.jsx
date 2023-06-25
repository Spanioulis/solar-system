import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/pages/Planets.module.scss';

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
            {planets ? (
               planets.map((planet) => (
                  <>
                     <h2>{planet?.englishName}</h2>
                     <div className={styles.planet_card} key={planet?.id}>
                        <div className="block-left">
                           <p>
                              <strong>Is Planet:</strong> {planet?.isPlanet ? 'Yes' : 'No'}
                           </p>
                           <p>
                              <strong>Semimajor Axis:</strong> {planet?.semimajorAxis} km
                           </p>
                           <p>
                              <strong>Perihelion:</strong> {planet?.perihelion} km
                           </p>
                           <p>
                              <strong>Aphelion:</strong> {planet?.aphelion} km
                           </p>
                           <p>
                              <strong>Eccentricity:</strong> {planet?.eccentricity}
                           </p>
                           <p>
                              <strong>Inclination:</strong> {planet?.inclination}&deg;
                           </p>
                           <p>
                              <strong>Mass:</strong> {planet?.mass?.massValue} x 10^{planet?.mass?.massExponent} kg
                           </p>
                           <p>
                              <strong>Volume:</strong> {planet?.vol?.volValue} x 10^{planet?.vol?.volExponent} km^3
                           </p>
                        </div>
                        <div className="block-right">
                           <p>
                              <strong>Density:</strong> {planet?.density} g/cm^3
                           </p>
                           <p>
                              <strong>Gravity:</strong> {planet?.gravity} m/s^2
                           </p>
                           <p>
                              <strong>Escape Velocity:</strong> {planet?.escape} m/s
                           </p>
                           <p>
                              <strong>Mean Radius:</strong> {planet?.meanRadius} km
                           </p>
                           <p>
                              <strong>Equatorial Radius:</strong> {planet?.equaRadius} km
                           </p>
                           <p>
                              <strong>Polar Radius:</strong> {planet?.polarRadius} km
                           </p>
                           <p>
                              <strong>Sidereal Orbit:</strong> {planet?.sideralOrbit} days
                           </p>
                           <p>
                              <strong>Sidereal Rotation:</strong> {planet?.sideralRotation} hours
                           </p>
                        </div>
                     </div>
                  </>
               ))
            ) : (
               <p>...loading</p>
            )}
         </main>
      </>
   );
}
