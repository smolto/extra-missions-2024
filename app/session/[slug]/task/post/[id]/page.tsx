import { TaskCard } from "@/components";
import { FloatButton } from "@/components/Button/FloatButton/FloatButton";
import styles from "@/styles/post.module.css";
import { getPost } from "@/services/post";
import { formatDate, showItalicWordsOnText } from "@/utils";

// TODO: Justify paragraphs

type Params = {
  params: {
    slug: string;
    id: string;
  }
}

export default async function Page({params}: Params) {
  const response = await getPost(params.id);

  const { data } = response;

  return (
    <div className={styles['container']}>
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
          <p dangerouslySetInnerHTML={{__html: showItalicWordsOnText(data.post.firstParagraph!!)}} />
          <p>
          {data.post.secondParagraph}
          </p>
          <p>{data.post.thirdParagraph}</p>
          {
            data.post.linkText?.split(';').length === 1 ? (
              <a
                className={data.post.linkUrl ? "" : styles['no-url-link']}
                href={data.post.linkUrl ?? ""}
                target={data.post.linkUrl ? "_blank" : '_self'}
              >
                <b>{data.post.linkText}</b>
              </a>
            ) : (
              data.post.linkText?.split(';').map((text, index) => {
                const url = data.post.linkUrl?.split(';')[index]
                
                return (
                  <a
                    className={url ? "" : styles['no-url-link']}
                    href={url ?? ""}
                    target={url ? "_blank" : '_self'}
                  >
                    <b>{text}</b>
                  </a>
                )
              })
            )
          }
          <div className={styles["center"]}>
            <img
              className={styles["first-image"]}
              src={data.post.footerImage}
              alt=""
            />
          </div>
        </div>
      </article>
      <FloatButton
        link={`/session/${params.slug}/tasks`}
        img="/assets/items/go-back.png"
        withMarginRight
      />
    </div>
  );
}
