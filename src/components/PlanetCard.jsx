import styles from '../styles/components/PlanetCard.module.scss';

const PlanetCard = ({ planet }) => {
   return (
      <>
         <h2>{planet?.englishName}</h2>
         <div className={styles.planet_card}>
            <div className={styles['block-left']}>
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
                  <strong>Volume:</strong> {planet?.vol?.volValue} x 10^{planet?.vol?.volExponent} km
                  {String.fromCharCode(179)}
               </p>
            </div>
            <div className={styles['block-right']}>
               <p>
                  <strong>Density:</strong> {planet?.density} g/cm{String.fromCharCode(179)}
               </p>
               <p>
                  <strong>Gravity:</strong> {planet?.gravity} m/s{String.fromCharCode(178)}
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
   );
};

export default PlanetCard;
