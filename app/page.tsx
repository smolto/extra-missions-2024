import en from "@/locales/en.json";

import styles from "@/styles/home.module.css";
import { Card } from "@/components";

import { getSessions } from "./services/session";
import { Session } from "../types";

function SessionList({data, error} : {data: {sessions: Session[]}; error: unknown}) {

  if(error && !data?.sessions) {
    return <h1>There was an error fetching data</h1>
  }

  return (
    <div className={styles["grid"]}>
      {
        data.sessions.map((session) => (
          <Card
            key={session.id}
            title={session.name}
            subtitle={session.question}
            image={session.characterImage}
            type={session.type}
            slug={session.slug}
          />
        ))
      }
      </div>
  )
}

export default async function Home() {
  const response = await getSessions();

  const {error, data} = response;

  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>{en.home.subtitle}</span>
        <span className={styles["title"]}>{en.home.title}</span>
        <img src="/assets/background/banner-image.png" alt="Mario characters" />
      </main>
      <SessionList error={error} data={data} />
    </div>
  );
}
