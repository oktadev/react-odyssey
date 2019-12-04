import React, { forwardRef, RefForwardingComponent, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type ButtonProps = ComponentProps<'button'> & {
  ref?: React.Ref<HTMLButtonElement>;
  isSecondary?: boolean;
  isDanger?: boolean;
  isClear?: boolean;
  isOverlay?: boolean;
  isSmall?: boolean;
}

export const Button: RefForwardingComponent<HTMLButtonElement, ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, isSecondary, isDanger, isClear, isOverlay, isSmall, type='button', ...rest }, ref) => {
  const classes = classNames('button', {
    'is-button-primary': !isSecondary && !isDanger && !isClear && !isOverlay,
    'is-button-secondary': isSecondary,
    'is-button-clear': isClear,
    'is-button-danger': isDanger,
    'is-button-overlay': isOverlay,
    'is-button-small': isSmall,
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
