import { CardType } from "./Card";

export type Session = {
  id: string;
  name: string;
  slug: string;
  question: string;
  characterImage: string;
  type: CardType;
}

export type SessionsResponse = {
  data: {
    sessions: Session[]
  };
  error: unknown | undefined;
}

export type SessionResponse = {
  data: {
    session: Session;
  };
  error: unknown | undefined;
}