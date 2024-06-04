/* eslint-disable @next/next/no-img-element */
import { TaskCard } from "@/components";
import { FloatButton } from "@/components/Button/FloatButton/FloatButton";
import styles from "@/styles/task.module.css";
import { getSession } from "@/services/session";
import { getTasks } from "@/services/task";
import { Tasks } from "@/types";
import { Footer } from "../../../../components/Footer";

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
                link={task.subtasks && task.subtasks?.length < 1 
                  ? 
                    `/session/${sessionSlug}/task/post/${task.id}` 
                  : 
                    `/session/${sessionSlug}/subtasks/${task.slug}` }
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

  const { data } = response;
  const { data: { tasks }, error: tasksError } = tasksResponse;

  return (
    <>
      <div className={styles['container']}>
        <main className={styles["welcome-content"]}>
          <span className={styles["subtitle"]}>{data.session?.name}</span>
          <img src={data.session?.characterImage} alt="Mario characters" />
        </main>
        <div className={styles['task-list']}>
          <TaskList
            error={tasksError}
            tasks={tasks}
            sessionSlug={data.session?.slug!!}
          />
        </div>
        <FloatButton />
      </div>
      <Footer />
    </>
  );
}