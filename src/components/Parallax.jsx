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

   useEffect(() => {
      gsap.to(ast1.current, {
         x: 0,
         y: -560,
         rotate: 180,
         duration: 9,
         ease: 'bounce.out',
         scale: 0.9
         // scrollTrigger: ast1.current
      });

      // gsap.to(ast1.current, {
      //    x: -450,
      //    y: -380,
      //    rotate: 360,
      //    duration: 7,
      //    ease: 'back.out(1.7)',
      //    scrollTrigger: astronaut1.current
      // });

      gsap.set(ast2.current, {
         x: -100,
         y: 0,
         opacity: 0
      });

      gsap.to(ast2.current, {
         x: 0,
         y: 0,
         opacity: 1,
         duration: 3,
         scrollTrigger: {
            trigger: ast2.current,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true
         }
      });
   }, []);

   return (
      <main>
         {/* Section 1 */}
         <section className={styles.section_1}>
            <div className={styles.ast1}>
               <Image ref={ast1} src="/assets/astronaut_02.png" width={100} height={100} alt="Astronaut image" />
            </div>
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
