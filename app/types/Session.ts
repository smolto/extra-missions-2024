import { CardType } from "./Card";

export type Session = {
  id: string;
  name: string;
  slug: string;
  question: string;
  characterImage: string;
  type: CardType;
}

export type SessionResponse = {
  data: {
    sessions: Session[]
  };
  error: unknown | undefined
}