import en from "@/app/locales/en.json";

import styles from "@/app/styles/home.module.css";
import { Card } from "@/app/components/Card/Card";

export default function Home() {
  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>{en.home.subtitle}</span>
        <span className={styles["title"]}>{en.home.title}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          consequuntur.
        </p>
        <p>
          {" "}
          Natus, eum odit numquam voluptas iure, voluptatem, quaerat porro fuga
        </p>
      </main>
      <div className={styles['grid']}>
        <Card 
          title="Listening 👂"
          image="/assets/items/mario-star.png"
          dificulty="easy"
        />
      </div>
    </div>
  );
}
