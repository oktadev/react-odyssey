import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type ButtonVariants = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isPrimary?: boolean;
  isDanger?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({ children, className, isPrimary=true, isDanger, ...rest }) => {
  const classes = classNames('button', {
    'is-button-primary': isPrimary,
    'is-button-secondary': !isPrimary,
    'is-button-danger': isDanger,
  }, className);
  return <button className={classes} type="button" {...rest}>{children}</button>;
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
};
