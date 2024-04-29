/* eslint-disable @next/next/no-img-element */
import { TaskCard } from "@/app/components";
import { FloatButton } from "@/app/components/Button/FloatButton/FloatButton";
import styles from "@/app/styles/task.module.css";

export default function Page() {
  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>Session 1</span>
        <img src="/assets/characters/mario.png" alt="Mario characters" />
      </main>
      <div style={{marginTop: '30px', display: 'grid', gridAutoFlow: 'row', gap: '30px'}}>
        <TaskCard
          title="Bowser's challenge"
          subtitle="Task 1"
          image="/assets/tasks/bowsers.png"
          type="mario"
          slug="task-1"
        />
        <TaskCard
          title="Bowser's challenge"
          subtitle="Task 1"
          image="/assets/tasks/bowsers.png"
          type="mario"
          slug="task-1"
        />
        <TaskCard
          title="Bowser's challenge"
          subtitle="Task 1"
          image="/assets/tasks/bowsers.png"
          type="mario"
          slug="task-1"
        />
        <TaskCard
          title="Bowser's challenge"
          subtitle="Task 1"
          image="/assets/tasks/bowsers.png"
          type="mario"
          slug="task-1"
        />
      </div>
      <FloatButton />
    </div>
  );
}