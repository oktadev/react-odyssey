import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { FieldSetRaw } from './FieldSet';
import { InputProps, InputRawProps } from './Input';
import { LabelMaker } from './Label';
import { useAutoId, isMobilish } from './utils';


export const PasswordRaw: React.ComponentType<InputRawProps> = forwardRef<HTMLInputElement, InputRawProps>(({ className, error, required, ...otherProps }, ref) =>
  <input type="password" ref={ref} autoComplete="off" className={classNames('ods-text-input', className)} data-invalid={error ? true : undefined} required={required} {...otherProps} />);
PasswordRaw.displayName = 'PasswordRaw';

export const PasswordWithLabel = forwardRef<HTMLInputElement, InputProps>(({ aside, autoFocus, children, error, id, label, legend, required=true, ...otherProps }, ref) => {
  id = useAutoId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }
  return <LabelMaker aside={aside} error={error} htmlFor={id} label={label} legend={legend} optional={!required}>
    <PasswordRaw id={id} data-invalid={error ? true : undefined} ref={ref} autoFocus={autoFocus} {...otherProps} />
    { children }
  </LabelMaker>;
});
PasswordWithLabel.displayName = 'PasswordWithLabel';

export const PasswordFieldSet: React.ComponentType<InputProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => <FieldSetRaw>
  <PasswordWithLabel ref={ref} {...props} />
</FieldSetRaw>);

PasswordFieldSet.displayName = 'PasswordFieldSet';

// legacy exports
export const PasswordInput = PasswordFieldSet;