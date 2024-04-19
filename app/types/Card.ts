type Dificulty = "easy" | "medium" | "hard";

export type Card = {
  title: string;
  image: string;
  dificulty: Dificulty;
}