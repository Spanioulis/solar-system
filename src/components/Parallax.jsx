'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Parallax.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

export default function Parallax() {
   const ast1 = useRef(null);
   const ast2 = useRef(null);
   const asteroid1 = useRef(null);
   const asteroid2 = useRef(null);

   useEffect(() => {
      // Astronaut1
      gsap.to(ast1.current, {
         x: 100,
         y: -685,
         rotate: 180,
         duration: 9,
         ease: 'bounce.out',
         scale: 0.9
      });
      // Astronaut2
      gsap.set(ast2.current, {
         x: -100,
         y: -30,
         opacity: 0
      });
      gsap.to(ast2.current, {
         x: 0,
         y: 0,
         opacity: 1,
         duration: 2,
         scrollTrigger: {
            trigger: ast2.current,
            start: 'top 10%',
            end: 'bottom 20%'
            // scrub: true
            // pin: true
         }
      });

      // Asteroid1
      gsap.to(asteroid1.current, {
         x: -500,
         y: -850,
         rotate: 360,
         duration: 15,
         scale: 0.8,
         delay: 2
      });
      // Asteroid2
      gsap.set(asteroid2.current, {
         x: 1000,
         y: -1300,
         opacity: 1
      });
      gsap.to(asteroid2.current, {
         x: 450,
         y: 120,
         duration: 10,
         rotate: 270,
         scale: 0.8
      });
   }, []);

   return (
      <main>
         {/* Section 1 */}
         <section className={styles.section_1}>
            <div className={styles.block1}>
               <Image ref={ast1} src="/assets/astronaut_02.png" width={100} height={100} alt="Astronaut image" />
               <Image ref={asteroid1} src="/assets/asteroid_01.png" width={100} height={100} alt="Asteroid image" />
               <Image ref={asteroid2} src="/assets/asteroid_02.png" width={100} height={100} alt="Asteroid image" />
            </div>
            {/* <div className={styles.block2}></div> */}
         </section>

         {/* Section 2 */}
         <section className={styles.section_2}>
            <div className={styles.ast2}>
               <Image
                  ref={ast2}
                  src="/assets/astronaut_05.png"
                  width={150}
                  height={150}
                  alt="Astronaut image"
                  style={{ marginBottom: '-0.5em' }}
               />
            </div>
         </section>
      </main>
   );
}
