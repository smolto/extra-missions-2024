import Link from "next/link";
import styles from "./FloatButton.module.css";

type FloatButtonProps = {
  link?: string;
  img?: string;
  withMarginRight?: boolean;
}

export function FloatButton({link = '/sessions', img = '/assets/items/mushroom-house.png', withMarginRight = false}: FloatButtonProps) {
  return (
    <Link href={link}>
      <button className={styles["float-button"]}>
        <img src={img} alt="" />
      </button>
    </Link>
  );
}
