'use client';

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from '@/styles/intro.module.css';
import { disableScrolling, enableScrolling } from "../utils/scroll";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    disableScrolling();
    setTimeout(() => {
      enableScrolling();
      router.push('/sessions');
    }, 27000);
  }, [])

  //TODO: Fix desktop
  return (
    <section className={styles['container']} style={{height: '100vh', background: '#000'}}>
      <div>
        <div className={styles['stars-container']}>
          <img className={styles['stars-1']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-2']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-3']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-4']} src="/assets/items/mario-star.png" alt="" />
        </div>
        <div className={styles['intro-container']}>
          <h2>Travelling to World 5...</h2>
          <img className={styles['intro-image']} src="/assets/intro/giphy.gif" alt="" />
        </div>
        <div className={styles['stars-container']}>
          <img className={styles['stars-7']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-8']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-9']} src="/assets/items/mario-star.png" alt="" />
          <img className={styles['stars-10']} src="/assets/items/mario-star.png" alt="" />
        </div>
      </div>
    </section>
  );
}
