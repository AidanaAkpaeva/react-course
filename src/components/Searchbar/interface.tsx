import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

export interface InputChangeInterface {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyPress: KeyboardEventHandler<HTMLInputElement>;
  handleReset: MouseEventHandler<HTMLButtonElement>;
  value: string;
}
