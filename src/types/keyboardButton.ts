export interface ButtonStyle {
  layout?: string;
  bgColor?: string;
  borderStyle?: string;
  textStyle?: string;
}

export interface KeyboardButtonProps {
  label?: string;
  onClick?: () => void;
  buttonStyle?: ButtonStyle;
  icon?: React.ReactNode;
}
