import { PostResponse } from "@/types/Post";

export async function getPost(id: string) {
  const query = `
    query MyQuery {
      posts(where: {relatedTask: {id: "${id}"}}) {
        id
        title
        slug
        secondParagraph
        firstParagraph
        thirdParagraph
        footerImage
        headingImage
        date
        name
        linkText
        linkUrl
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
          revalidate: 3600,
        },
      }
    );

    const { data }  = await res.json();

    if(data.posts.length > 0) {
      const response : PostResponse = {
        data: {
          post: data.posts[0]
        },
        error: undefined
      }

      return response;
    }

    const response : PostResponse = {
      data: {
        post: data.posts[0] 
      },
      error: undefined
    }

    return response;
    

    
  } catch (error: unknown) {
    const response : PostResponse = {
      data: {
        post: {}
      },
      error
    }
    return response;
  }
}