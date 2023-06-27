'use client';
import styles from '../../styles/pages/Gallery.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import '../../swiper-gallery.css';

// import required modules
import { EffectCube, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// TODO -> Pensar qué hacer en esta página...

export default function Gallery() {
   return (
      <>
         <div>
            <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
               <Image src="/assets/milky_way_01.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
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
            <Swiper
               effect={'cube'}
               grabCursor={true}
               cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94
               }}
               pagination={true}
               modules={[EffectCube, Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <Image src="/assets/astronaut_02.png" alt="img" fill />
               </SwiperSlide>
               <SwiperSlide>
                  <Image src="/assets/astronaut_01.png" alt="img" fill />
               </SwiperSlide>
               <SwiperSlide>
                  <Image src="/assets/astronaut_02.png" alt="img" fill />
               </SwiperSlide>
               <SwiperSlide>
                  <Image src="/assets/astronaut_01.png" alt="img" fill />
               </SwiperSlide>
            </Swiper>
         </main>
      </>
   );
}
