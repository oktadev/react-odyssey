import React, { forwardRef, ReactNode, ComponentProps } from 'react';
import classNames from 'classnames';

import { useFakeId, isMobilish } from './utils';
import { FieldSetRaw } from './FieldSet';
import { LabelMaker } from './Label';

type OurFieldSetProps = {
  aside?: ReactNode;
  error?: ReactNode;
  htmlFor?: string;
  label?: ReactNode;
  legend?: ReactNode;
  optional?: boolean;
};

export interface InputProps extends ComponentProps<'input'>, OurFieldSetProps {
  ref?: React.Ref<HTMLInputElement>;
}
export interface InputRawProps extends ComponentProps<'input'> { error?: boolean }

{ /* Odyssey styles data-invalid="false" as red. Work around this by un-setting the attribute. */ }
export const InputRaw: React.ComponentType<InputRawProps> = forwardRef<HTMLInputElement, InputRawProps>(({ className, error, ...otherProps }, ref) =>
  <input className={classNames('ods-text-input', className)} data-invalid={error ? true : undefined} ref={ref} type="text"  {...otherProps} />);
InputRaw.displayName = 'InputRaw';

export const InputWithLabel: React.ComponentType<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ aside, autoFocus, children, error, id, label, legend, required=true, ...otherProps }, ref) => {
  const fakeID = useFakeId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }
  return <LabelMaker aside={aside} error={error} htmlFor={fakeID} label={label} legend={legend} optional={!required}>
    <InputRaw id={fakeID} error={!!error} ref={ref} required={required} autoFocus={autoFocus} {...otherProps} />
    { children }
  </LabelMaker>;
});
InputWithLabel.displayName = 'InputWithLabel';

export const InputFieldSet: React.ComponentType<InputProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => <FieldSetRaw>
  <InputWithLabel ref={ref} {...props} />
</FieldSetRaw>);

InputFieldSet.displayName = 'InputFieldSet';


// Legacy Aliases
export const TextInput = InputFieldSet;
export const TextInputRaw = InputRaw;
