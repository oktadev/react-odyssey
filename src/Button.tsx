import React, { forwardRef, RefForwardingComponent, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>;
  isSecondary?: boolean;
  isDanger?: boolean;
}

export const Button: RefForwardingComponent<HTMLButtonElement, ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, isSecondary, isDanger, type='button', ...rest }, ref) => {
  const classes = classNames('button', {
    'is-button-primary': !isSecondary,
    'is-button-secondary': isSecondary,
    'is-button-danger': isDanger,
  }, className);
  return <button ref={ref} className={classes} type={type} {...rest}>{children}</button>;
});
Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  isDanger: PropTypes.bool,
};
