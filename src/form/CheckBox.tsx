import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { FieldSetRaw } from './FieldSet';
import { UpsideDownLabelMaker } from './Label';
import { InputProps, InputRawProps } from './Input';
import { useFakeId, isMobilish } from './utils';

export const CheckBoxRaw = forwardRef<HTMLInputElement, InputRawProps>(({ className, error, ...otherProps }, ref) =>
  <input ref={ref} className={classNames("ods-checkbox", className)} type="checkbox" data-invalid={error ? true : undefined} {...otherProps} /> );

CheckBoxRaw.displayName = 'CheckBoxRaw';


export const CheckBoxWithLabel = forwardRef<HTMLInputElement, InputProps>(({ aside, autoFocus, children, error, id, label, legend, ...otherProps }, ref) => {
  const fakeID = useFakeId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }

  return <UpsideDownLabelMaker aside={aside} className="ods-checkbox--label" error={error} htmlFor={fakeID} label={label} legend={legend}>
    <CheckBoxRaw autoFocus={autoFocus} id={fakeID} ref={ref} error={!!error} {...otherProps} />
    { children }
  </UpsideDownLabelMaker>;
});
CheckBoxWithLabel.displayName = 'CheckBoxWithLabel';


export const CheckBoxFieldSet = forwardRef<HTMLInputElement, InputProps>((props, ref) => <FieldSetRaw>
  <CheckBoxWithLabel ref={ref} {...props} />
</FieldSetRaw>);

CheckBoxFieldSet.displayName = 'CheckBoxFieldSet';

// Legacy exports...
export const CheckBox = CheckBoxFieldSet;