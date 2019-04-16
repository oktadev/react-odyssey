import React, { forwardRef, ReactNode, RefForwardingComponent, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface ButtonPropsNoRef extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isSecondary?: boolean;
  isDanger?: boolean;
};

export interface ButtonProps extends ButtonPropsNoRef {
  ref?: React.RefObject<HTMLButtonElement>;
}

export const Button: RefForwardingComponent<HTMLButtonElement, ButtonProps> = forwardRef<HTMLButtonElement, ButtonPropsNoRef>(({ children, className, isSecondary, isDanger, ...rest }, ref) => {
  const classes = classNames('button', {
    'is-button-primary': !isSecondary,
    'is-button-secondary': isSecondary,
    'is-button-danger': isDanger,
  }, className);
  return <button ref={ref} className={classes} type="button" {...rest}>{children}</button>;
});
Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  isDanger: PropTypes.bool,
};
