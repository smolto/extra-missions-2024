/* eslint-disable @next/next/no-img-element */
import { Card as CardType } from "@/app/types";
import styles from "./TaskCard.module.css";
import Link from "next/link";

export const TaskCard = ({ title, subtitle, image, type, slug }: CardType) => {
  return (
    <Link href={`/session/${slug}/tasks`}>
      <article className={`${styles["card-item"]} ${styles[type]}`}>
        <img className={styles["image"]} src={image} alt={title} />
        <div>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>
      </article>
    </Link>
  );
};