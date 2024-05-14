import { Task, TaskResponse, Tasks, TasksResponse } from "../types";

export async function getTasks(sessionSlug: string) {
  const query = `
    query MyQuery {
      tasks(where: {session: {Session: {slug: "${sessionSlug}"}}}) {
        id
        image
        name
        slug
        backgroundImage
        taskNumber
        subtask {
          slug
        }
      }
    }
  `;
  
  try {
    const res = await fetch(
      `https://eu-west-2.cdn.hygraph.com/content/cluvfoi400wja07umf258pram/master?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${process.env.WEB_TOKEN}`,
        },
        next: {
          revalidate: 0,
        },
      }
    );

    const { data }  = await res.json();

    const response : TasksResponse = {
      data,
      error: undefined
    }

    return response;
  } catch (error: unknown) {
    const tasks: Tasks = [];
    const response : TasksResponse = {
      data: {
        tasks
      },
      error
    }
    return response;
  }
}

export async function getTask(slug: string) {
  const query = `
    query MyQuery {
      tasks(where: {slug: "${slug}"}) {
        id
        image
        name
        slug
        backgroundImage
        taskNumber
        subtask {
          slug
        }
      }
    }
  `;
  
  try {
    const res = await fetch(
      `https://eu-west-2.cdn.hygraph.com/content/cluvfoi400wja07umf258pram/master?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${process.env.WEB_TOKEN}`,
        },
        next: {
          revalidate: 0,
        },
      }
    );

    const { data }  = await res.json();

    const response : TaskResponse = {
      data,
      error: undefined
    }

    return response;
  } catch (error: unknown) {
    const response : TaskResponse = {
      data: {
        task: {}
      },
      error
    }
    return response;
  }
}