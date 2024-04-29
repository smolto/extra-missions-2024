import en from "@/app/locales/en.json";

import styles from "@/app/styles/home.module.css";
import { Card } from "@/app/components";

export default function Home() {
  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>{en.home.subtitle}</span>
        <span className={styles["title"]}>{en.home.title}</span>
        <img src="/assets/background/banner-image.png" alt="Mario characters" />
      </main>
      <div className={styles["grid"]}>
        <Card
          title="Session 1"
          subtitle="What is our mission?"
          image="/assets/characters/mario.png"
          type="mario"
          slug="session-1"
        />
        <Card
          title="Session 2"
          subtitle="What does it say?"
          image="/assets/characters/luigi.png"
          type="luigi"
          slug="session-2"
        />
        <Card
          title="Session 3"
          subtitle="Exchanging roles"
          image="/assets/characters/peach.png"
          type="peach"
          slug="session-3"
        />
        <Card
          title="Session 4"
          subtitle="Drawing letters"
          image="/assets/characters/toad.png"
          type="toad"
          slug="session-4"
        />
        <Card
          title="Session 5"
          subtitle="Wonder flower"
          image="/assets/characters/bowser.png"
          type="bowser"
          slug="session-5"
        />
      </div>
    </div>
  );
}
