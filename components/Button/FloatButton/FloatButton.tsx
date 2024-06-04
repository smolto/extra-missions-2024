import Link from "next/link";
import styles from "./FloatButton.module.css";

type FloatButtonProps = {
  link?: string;
  img?: string;
}

export function FloatButton({link = '/sessions', img = '/assets/items/mushroom-house.png'}: FloatButtonProps) {
  return (
    <Link href={link} style={{position: 'sticky', display: 'block', width: 'max-content', marginLeft: 'auto', bottom: '10px', marginTop: '1rem'}}>
      <button className={styles["float-button"]}>
        <img src={img} alt="" />
      </button>
    </Link>
  );
}
