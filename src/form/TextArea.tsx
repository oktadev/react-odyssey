import React, { forwardRef, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useFakeId, isMobilish } from './utils';
import { FieldSetRaw } from './FieldSet';
import { LabelMakerProps, LabelMaker  } from './Label';

export interface TextAreaPropsRaw extends ComponentProps<'textarea'>, LabelMakerProps {}
export interface TextAreaProps extends TextAreaPropsRaw {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export const TextAreaRaw = forwardRef<HTMLTextAreaElement, TextAreaPropsRaw>(({ className, error, ...otherProps }, ref) =>
  <textarea ref={ref} className={classNames('ods-text-input', className)} data-invalid={error ? true : undefined} {...otherProps} />);
TextAreaRaw.displayName = 'TextAreaRaw';

export const TextAreaWithLabel = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ aside, autoFocus, children, error, id, label, legend, required=true, ...otherProps }, ref) => {
  const fakeID = useFakeId(id);
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }

  return <LabelMaker aside={aside} error={error} htmlFor={fakeID} label={label} legend={legend} optional={!required}>
    <TextAreaRaw autoFocus={autoFocus} id={fakeID} required={required} ref={ref} {...otherProps} error={!!error} />
    { children }
  </LabelMaker>;
});
TextAreaWithLabel.displayName = 'TextAreaWithLabel';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => <FieldSetRaw>
  <TextAreaWithLabel {...props} ref={ref} />
</FieldSetRaw>);

TextArea.displayName = 'TextArea';
TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};
