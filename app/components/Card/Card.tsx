/* eslint-disable @next/next/no-img-element */
import { Card as CardType } from '@/app/types';
import styles from './Card.module.css';

export const Card = ({title, image, dificulty} : CardType) => {
  return (
    <article className={styles['card-item']}>
      <img className={styles['image']} src={image} alt={title} />
      <h2 className={styles['title']}>{title}</h2>
      <span className={styles['dificulty']}>{dificulty}</span>
    </article>
  );
}