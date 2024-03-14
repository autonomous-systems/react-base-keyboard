export interface ButtonStyle {
  className: string;
}

export interface KeyboardButtonProps {
  label?: string;
  onClick?: () => void;
  buttonStyle?: ButtonStyle;
  icon?: React.ReactNode;
}
