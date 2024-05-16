export type CardType = 'mario' | 'luigi' | 'peach' | 'toad' | 'bowser'

export type Card = {
  title: string;
  subtitle: string;
  image: string;
  type: CardType;
  slug: string;
  id?: string;
  backgroundImage?: string;
  link?: string;
}