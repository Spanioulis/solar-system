import Image from 'next/image';
import styles from '../styles/components/Parallax.module.scss';
// import styles from '../styles/components/PlanetCard.module.scss';

export default function Parallax() {
   return (
      <main>
         <div className={styles.container}>
            <div>
               <Image
                  src="/assets/atronaut_01.png"
                  width={250}
                  height={250}
                  alt="Astronaut image"
                  style={{ marginBottom: '-0.5em' }}
               />
            </div>
         </div>
      </main>
   );
}
