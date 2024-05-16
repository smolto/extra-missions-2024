/* eslint-disable @next/next/no-img-element */
import { TaskCard } from "@/app/components";
import { FloatButton } from "@/app/components/Button/FloatButton/FloatButton";
import styles from "@/app/styles/task.module.css";
import { getSession } from "../../../services/session";
import { getTasks } from "../../../services/task";
import { Tasks } from "../../../types";

type Params = {
  params: {
    slug: string;
  }
}

function TaskList({tasks, error, sessionSlug}: {tasks: Tasks; error: unknown; sessionSlug: string}) {
  if(error) {
    return <h1>There was an error fetching data</h1>
  }

  if(tasks.length < 1) {
    return <h1>There is no tasks published</h1>
  }

  return (
    <>
      {
          tasks.map((task) => {
            if(Object.keys(task).length === 0) return null;

            return (
              <TaskCard
                key={task.id}
                title={task.name!!}
                subtitle={`Task ${task.taskNumber}`}
                image={task.image!!}
                type="mario"
                slug={sessionSlug}
                id={task.id!!}
                backgroundImage={task.backgroundImage!!}
              />
            )
          }
          )
        }
    </>
  )
}

export default async function Page({params}: Params) {
  const response = await getSession(params.slug);
  const tasksResponse = await getTasks(params.slug);

  const { data, error } = response;
  const { data: {tasks}, error: tasksError } = tasksResponse;

  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>{data.session?.name}</span>
        <img src={data.session?.characterImage} alt="Mario characters" />
      </main>
      <div style={{marginTop: '30px', display: 'grid', gridAutoFlow: 'row', gap: '30px'}}>
        <TaskList
          error={tasksError}
          tasks={tasks}
          sessionSlug={data.session?.slug!!}
        />
      </div>
      <FloatButton />
    </div>
  );
}