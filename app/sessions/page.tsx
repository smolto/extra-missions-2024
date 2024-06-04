import en from "@/locales/en.json";

import styles from "@/styles/home.module.css";
import { Card } from "@/components";

import { getSessions } from "@/services/session";
import { Session } from "@/types";
import { Footer } from "../../components/Footer";

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
    <>
        <div className={styles["container"]}>
          <main className={styles["welcome-content"]}>
            <span className={styles["subtitle"]}>{en.home.subtitle}</span>
            <span className={styles["title"]}>{en.home.title}</span>
            <img src="/assets/background/banner-image.png" alt="Mario characters" />
          </main>
          <SessionList error={error} data={data} />
          <hr />
          <div className="feedback-box">
            <h4>Did you like this unit?</h4>
            <a href="https://padlet.com/irenebermudezz99/did-you-like-this-unit-epvpffzdmfb8l031 ">Let us know</a>
          </div>
        </div>
        <Footer />
    </>
    
  );
}