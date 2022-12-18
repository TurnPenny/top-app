import styles from "./Ptag.module.css";
import { PtagProps } from "./Ptag.props";
import cn from "classnames";

export const Ptag = ({
  size = "m",
  children,
  classname,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.large]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
