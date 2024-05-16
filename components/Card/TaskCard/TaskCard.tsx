/* eslint-disable @next/next/no-img-element */
import { Card as CardType } from "@/types";
import styles from "./TaskCard.module.css";
import Link from "next/link";
import { url } from "inspector";

export const TaskCard = ({ 
  title,
  subtitle,
  image,
  type,
  slug,
  id,
  backgroundImage,
}: CardType) => {
  return (
    <Link href={`/session/${slug}/task/post/${id}`}>
      <article className={`${styles["card-item"]} ${styles[type]}`} style={{backgroundImage: `url(${backgroundImage})`}}>
        <img className={styles["image"]} src={image} alt={title} />
        <div>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>
      </article>
    </Link>
  );
};