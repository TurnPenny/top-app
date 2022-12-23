import styles from "./Footer.mdoule.css";
import { FooterProps } from "./Footer.props";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>footer</div>;
};
