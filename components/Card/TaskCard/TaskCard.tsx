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
  link = `/session/${slug}/task/post/${id}`
}: CardType) => {
  const bgClass = image?.includes('star') ? styles['white-bg'] : styles[''];
  return (
    <Link href={link}>
      <article className={`${styles["card-item"]} ${styles[type]}`} style={{backgroundImage: `url(${backgroundImage})`}}>
        <img className={`${styles["image"]} ${bgClass}`} src={image} alt={title} />
        <div>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>
      </article>
    </Link>
  );
};