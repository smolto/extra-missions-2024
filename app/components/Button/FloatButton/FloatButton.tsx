import Link from "next/link";
import styles from "./FloatButton.module.css";

export function FloatButton() {
  return (
    <Link href="/">
      <button className={styles["float-button"]}>
        <img src="/assets/items/mushroom-house.png" alt="" />
      </button>
    </Link>
  );
}
