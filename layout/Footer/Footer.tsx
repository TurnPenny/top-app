import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>All rights reserved</div>
      <div>
        <a href='#' target='_blank'>
          User agreements
        </a>
        <a href='#' target='_blank'>
          User agreements
        </a>
      </div>
    </div>
  );
};
