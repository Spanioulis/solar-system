'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/pages/Planets.module.scss';
import PlanetCard from '@/components/PlanetCard';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
         {/* <main className={styles.main}> */}
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
            {planets ? (
               planets.map((planet) => (
                  <SwiperSlide key={planet.id} className={styles.slide}>
                     <PlanetCard planet={planet} />
                  </SwiperSlide>
               ))
            ) : (
               <p>...loading</p>
            )}
         </Swiper>
         {/* </main> */}
      </>
   );
}
