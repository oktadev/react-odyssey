import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type ButtonVariants = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
};

export const Button: FunctionComponent<ButtonProps> = ({ children, className, variant='primary', ...rest }) => <button className={classNames('button', `is-button-${variant}`, className)} type="button" {...rest}>{children}</button>;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};
