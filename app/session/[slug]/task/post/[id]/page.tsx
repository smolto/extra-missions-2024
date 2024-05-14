import { TaskCard } from "@/app/components";
import { FloatButton } from "@/app/components/Button/FloatButton/FloatButton";
import styles from "@/app/styles/post.module.css";
import { getPost } from "../../../../../services/post";
import { formatDate } from "../../../../../utils/date";

type Params = {
  params: {
    slug: string;
    id: string;
  }
}

export default async function Page({params}: Params) {
  const response = await getPost(params.id);

  const {data, error} = response;

  return (
    <div>
      <main className={styles["welcome-content"]}>
        <span className={styles["subtitle"]}>{data.post.name}</span>
        <img src={data.post.headingImage} alt="Mario characters" />
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
          <p style={{color: '#7B000A'}}><span style={{fontWeight: 600 }}>Date:</span> {formatDate(data.post.date!!)}</p>
          <p className={styles["title"]}>{data.post.title}</p>
          <p>
            {data.post.firstParagraph}
          </p>
          <p>
          {data.post.secondParagraph}
          </p>
          <p>{data.post.thirdParagraph}</p>
          <a href="https://quizlet.com/_bqdd9g?x=1jqt&amp;amp;i=44z3fl">
            <b>Quizlet Link</b>
          </a>
          <div className={styles["center"]}>
            <img
              className={styles["first-image"]}
              src={data.post.footerImage}
              alt=""
            />
          </div>
        </div>
      </article>

      <FloatButton />
    </div>
  );
}