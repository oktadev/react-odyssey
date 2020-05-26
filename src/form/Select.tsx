import React, { forwardRef, ComponentProps } from 'react';
import classNames from 'classnames';

import { FieldSetRaw } from './FieldSet';
import { LabelMaker, LabelMakerProps } from './Label';
import { useAutoId, isMobilish } from './utils';

export interface SelectProps extends ComponentProps<'select'>, LabelMakerProps {
  ref?: React.Ref<HTMLSelectElement>;
}

export const SelectRaw = forwardRef<HTMLSelectElement, SelectProps>(({ id, error, children, required=true, className, ...otherProps }, ref) =>
  <select className={classNames('ods-select', className)} id={id} required={required} ref={ref} {...otherProps} data-invalid={error ? true : undefined}>
    { children }
  </select>
);
SelectRaw.displayName = 'SelectRaw';


export const SelectWithLabel = forwardRef<HTMLSelectElement, SelectProps>(({ aside, autoFocus, children, error, id, label, legend, required=true, ...otherProps }, ref) => {
  id = useAutoId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }

  return <LabelMaker aside={aside} error={error} htmlFor={id} label={label} legend={legend} optional={!required}>
    <SelectRaw autoFocus={autoFocus} id={id} required={required} ref={ref} {...otherProps} error={!!error}>
      { children }
    </SelectRaw>
  </LabelMaker>;
});
SelectWithLabel.displayName = 'SelectWithLabel';

export const SelectFieldSet = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => <FieldSetRaw>
  <SelectWithLabel {...props} ref={ref} />
</FieldSetRaw>);

SelectFieldSet.displayName = 'SelectFieldSet';

export const OptGroup: React.ComponentType<ComponentProps<'optgroup'>> = ({ children, ...rest }) =>  <optgroup {...rest}>{ children }</optgroup>;


// legacy exports
export const Select = SelectFieldSet;