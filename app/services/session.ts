import { Session, SessionResponse } from "../types";

export async function getSessions() {
  const query = `
    query MyQuery {
      sessions {
        id
        name
        slug
        question
        characterImage
        type
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

    const { data } : SessionResponse = await res.json();

    return { data, error: undefined };
  } catch (error: unknown) {
    const data: {sessions: Session[]} = {
      sessions: []
    }
    return {error, data};
  }
}