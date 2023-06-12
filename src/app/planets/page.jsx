import Image from 'next/image';
import Link from 'next/link';

export default function Planets() {
   return (
      <>
         <div>
            <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh', opacity: 0.2 }}>
               <Image src="/assets/moon.png" alt="Sticky star" fill style={{ objectFit: 'cover' }} />
            </div>
         </div>
         <div>
            <Link href="/">Home</Link>
            <p style={{ color: 'crimson' }}>Planets</p>
         </div>
      </>
   );
}
