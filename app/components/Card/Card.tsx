/* eslint-disable @next/next/no-img-element */
import { Card as CardType } from "@/app/types";
import styles from "./Card.module.css";
import Link from "next/link";

export const Card = ({ title, subtitle, image, type, slug }: CardType) => {
  return (
    <Link href={`/session/${slug}/tasks`}>
      <article className={`${styles["card-item"]} ${styles[type]}`}>
        <img className={styles["image"]} src={image} alt={title} />
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["subtitle"]}>{subtitle}</p>
      </article>
    </Link>
  );
};
