export type Post = {
  id?: string;
  title?: string;
  slug?: string;
  secondParagraph?: string;
  firstParagraph?: string;
  thirdParagraph?: string;
  footerImage?: string;
  headingImage?: string;
  date?: string;
  name?: string;
  linkText?: string;
  linkUrl?: string;
}

export type PostResponse = {
  data: {
    post: Post
  },
  error: unknown | undefined
}