'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Parallax.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

export default function Parallax() {
   const astronaut1 = useRef(null);
   const astronaut2 = useRef(null);

   useEffect(() => {
      gsap.to(astronaut1.current, {
         x: 0,
         y: -430,
         rotate: 180,
         duration: 5,
         scrollTrigger: astronaut1.current
      });

      gsap.to(astronaut2.current, {
         x: 1500,
         y: 500,
         duration: 3,
         scrollTrigger: astronaut2.current
      });
   }, []);

   return (
      <main>
         <section className={styles.section_1}>
            <Image
               ref={astronaut1}
               src="/assets/astronaut_02.png"
               width={100}
               height={100}
               alt="Astronaut image"
               style={{ marginBottom: '-0.5em' }}
            />
         </section>
         <section className={styles.section_2}>
            {/* <div className={styles.square} ref={astronaut1}></div> */}
            <Image
               ref={astronaut2}
               src="/assets/astronaut_01.png"
               width={250}
               height={250}
               alt="Astronaut image"
               style={{ marginBottom: '-0.5em' }}
            />
         </section>
      </main>
   );
}
