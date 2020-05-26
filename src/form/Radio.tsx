import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { FieldSetRaw } from './FieldSet';
import { InputProps, InputRawProps } from './Input';
import { UpsideDownLabelMaker } from './Label';
import { useFakeId, isMobilish } from './utils';

export const RadioRaw = forwardRef<HTMLInputElement, InputRawProps>(({ className, error, ...otherProps }, ref) =>
  <input ref={ref} className={classNames("ods-radio", className)} type="Radio" data-invalid={error ? true : undefined} {...otherProps} /> );

RadioRaw.displayName = 'RadioRaw';

export const RadioWithLabel = forwardRef<HTMLInputElement, InputProps>(({ aside, autoFocus, children, error, id, label, legend, ...otherProps }, ref) => {
  const fakeID = useFakeId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }
  return <UpsideDownLabelMaker aside={aside} className="ods-radio--label" error={error} htmlFor={fakeID} label={label} legend={legend}>
    <RadioRaw autoFocus={autoFocus} id={fakeID} ref={ref} {...otherProps} />
    { children }
  </UpsideDownLabelMaker>;
});
RadioWithLabel.displayName = 'RadioWithLabel';


// TODO (ggreer): this is very similar to FieldSet. Figure out how to fix Odyssey and/or Fieldset to reduce the repetitive code.
export const RadioFieldSet = forwardRef<HTMLInputElement, InputProps>((props, ref) => <FieldSetRaw>
  <RadioWithLabel ref={ref} {...props} />
</FieldSetRaw>);

RadioFieldSet.displayName = 'RadioFieldSet';

// Legacy exports...
export const Radio = RadioFieldSet;