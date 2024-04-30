import { TaskCard } from "@/app/components";
import { FloatButton } from "@/app/components/Button/FloatButton/FloatButton";
import styles from "@/app/styles/post.module.css";

export default function Page() {
  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>Bowser&apos;s challenge</span>
        <img src="/assets/tasks/bowsers.png" alt="Mario characters" />
      </main>
      <article style={{padding: "1rem"}}>
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridAutoFlow: "row",
            gap: "20px",
            borderRadius: "10px",
            background: "#cce6ff",
            padding: "1rem",
          }}
        >
          <p style={{color: '#7B000A'}}><span style={{fontWeight: 600 }}>Date:</span> 13/9/2021</p>
          <p className={styles["title"]}>Are you ready for an extra mission?</p>
          <p>
            On this occasion it consists of revising the vocabulary we saw in
            class by using Quizlet. You have different options you can use to
            study the new words.
          </p>
          <p>
            Don’t forget that if you successfully complete this extra mission,
            you will receive 20 coins.
          </p>
          <p>Good luck!</p>
          <a href="https://quizlet.com/_bqdd9g?x=1jqt&amp;amp;i=44z3fl">
            <b>Quizlet Link</b>
          </a>
          <div className={styles["center"]}>
            <img
              className={styles["first-image"]}
              src="/assets/items/mario-luigi-peach.png"
              alt=""
            />
          </div>
        </div>
      </article>

      <FloatButton />
    </div>
  );
}
