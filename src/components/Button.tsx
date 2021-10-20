import React, { forwardRef, ComponentPropsWithRef } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'style' | 'className'> {
  isSecondary?: boolean;
  isDanger?: boolean;
  isClear?: boolean;
  isOverlay?: boolean;
  isSmall?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isSecondary, isDanger, isClear, isOverlay, isSmall, type='button', ...rest }, ref) => {
  const classes = classNames('ods-button', {
    'is-ods-button-primary': !isSecondary && !isDanger && !isClear && !isOverlay,
    'is-ods-button-secondary': isSecondary,
    'is-ods-button-clear': isClear,
    'is-ods-button-danger': isDanger,
    'is-ods-button-overlay': isOverlay,
    'is-ods-button-small': isSmall,
  });
  return <button ref={ref} className={classes} type={type} {...rest}>
    {children}
  </button>;
});
Button.displayName = 'Button';
