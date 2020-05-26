import React, { forwardRef, ComponentProps } from 'react';
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, isSecondary, isDanger, isClear, isOverlay, isSmall, type='button', ...rest }, ref) => {
  const classes = classNames('ods-button', {
    'is-ods-button-primary': !isSecondary && !isDanger && !isClear && !isOverlay,
    'is-ods-button-secondary': isSecondary,
    'is-ods-button-clear': isClear,
    'is-ods-button-danger': isDanger,
    'is-ods-button-overlay': isOverlay,
    'is-ods-button-small': isSmall,
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
