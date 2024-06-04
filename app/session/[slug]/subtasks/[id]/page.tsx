import styles from '@/styles/task.module.css';
import { FloatButton } from '@/components/Button/FloatButton/FloatButton';
import { getSubtasks, getTask } from '@/services/task';
import { Tasks } from '../../../../../types';
import { TaskCard } from '../../../../../components';
import { Footer } from '../../../../../components/Footer';

type Params = {
  params: {
    slug: string;
    id: string;
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
                link={`/session/${sessionSlug}/task/post/${task.id}`}
              />
            )
          }
          )
        }
    </>
  )
}


export default async function Page({params}: Params) {
  const taskReponse = await getTask(params.id);
  const subtaskResponse = await getSubtasks(`${params.slug}-subtask`);

  const { data: taskData } = taskReponse;
  const { data: subtaskData, error } = subtaskResponse;

  return (
    <>
      <div className={styles['container']}>
        <main className={styles["welcome-content"]}>
          <span className={styles["subtitle"]}>{taskData.task.name}</span>
          <img src={taskData.task.image} alt="Mario characters" />
        </main>
        <div className={styles['task-list']}>
          <TaskList
            error={error}
            tasks={subtaskData.tasks}
            sessionSlug={params.slug}
          />
        </div>
        <div className={styles['float-button-container']}>
          <FloatButton
            link={`/session/${params.slug}/tasks`}
            img='/assets/items/go-back.png'
          />
        </div>
      </div>
      <Footer />
    </>
    
  );
}