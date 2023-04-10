import { MouseEventHandler } from "react";

export interface CardProps {
  id: string;
  image: string;
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
