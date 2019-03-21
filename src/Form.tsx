import React, { forwardRef, FunctionComponent, ReactNode, TextareaHTMLAttributes, InputHTMLAttributes, RefForwardingComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isMobilish } from './util';

export const FormTitle: FunctionComponent<{}> = ({ children }) => <header className="form--header">
  <h1 className="form--title">{ children }</h1>
</header>;

export const FormActions: FunctionComponent<{}> = ({ children }) => <section className="form--actions">{ children }</section>;

export const FormFooter: FunctionComponent<{}> = ({ children }) => <footer className="form--footer">{ children }</footer>;

export type FieldSetProps = {
  htmlFor: string;
  label?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  error?: ReactNode;
};

// fieldset component. Wraps inputs in the correct markup & classes for Nim.
export const FieldSet: FunctionComponent<FieldSetProps> = ({ htmlFor, label, aside, children, error }) => <fieldset className="fieldset">
  <div className={classNames('fieldset-flex', { error })}>
    { label && <label className="label" htmlFor={htmlFor}>{ label }</label> }
    { children }
    { aside && <aside className="field--hint">{ aside }</aside> }
    { error && <aside className="field--error">{ error }</aside>}
  </div>
</fieldset>;
FieldSet.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node.isRequired,
  error: PropTypes.node,
  htmlFor: PropTypes.string,
  label: PropTypes.node,
};

interface InputPropsNoRef extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  aside?: ReactNode;
  error?: ReactNode;
  htmlFor?: string;
};

export interface InputProps extends InputPropsNoRef {
  ref?: React.RefObject<HTMLInputElement>;
}

// TODO (ggreer): this is very similar to FieldSet. Figure out how to fix Nim and/or Fieldset to reduce the repetitive code.
export const CheckBox: RefForwardingComponent<HTMLInputElement, InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, aside, error, ...otherProps }, ref) => <fieldset className="fieldset">
  <div className={classNames('fieldset-flex', { error })}>
    <label htmlFor={id}>
      <input type="checkbox" id={id} ref={ref} {...otherProps} />
      { label }
    </label>
    { aside && <aside className="field--hint">{ aside }</aside> }
    { error && <aside className="field--error">{ error }</aside>}
  </div>
</fieldset>);
CheckBox.displayName = 'CheckBox';
CheckBox.propTypes = {
  aside: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.node,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool,
};

/* TextInput component - React counterpart to o-text-input. Uses FieldSet component above.
 * This pattern could be used by other components for checkboxes, selects, etc.
 */
export const TextInput: RefForwardingComponent<HTMLInputElement, InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, aside, error, required = true, className='text-input', autoFocus, ...otherProps }, ref) => {
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }
  return <FieldSet htmlFor={id} label={label} aside={aside} error={error}>
    { /* Nim styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Nim also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <input id={id} type="text" className={className} data-invalid={error ? true : undefined} ref={ref} required={required} autoFocus={autoFocus} {...otherProps} />
  </FieldSet>;
});

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};
TextInput.displayName = 'TextInput';

export const PasswordInput: RefForwardingComponent<HTMLInputElement, InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, aside, error, required = true, className='text-input', ...otherProps }, ref) =>
  <FieldSet htmlFor={id} label={label} aside={aside} error={error}>
    { /* Nim styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Nim also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <input id={id} type="password" autoComplete="off" className={className} data-invalid={error ? true : undefined} ref={ref} required={required} {...otherProps} />
  </FieldSet>
);
PasswordInput.displayName = 'PasswordInput';
PasswordInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

interface TextAreaPropsNoRef extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: ReactNode;
  aside?: ReactNode;
  error?: ReactNode;
  required?: boolean;
};

export interface TextAreaProps extends TextAreaPropsNoRef {
  ref?: React.RefObject<HTMLTextAreaElement>;
}
export const TextArea: RefForwardingComponent<HTMLTextAreaElement, TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, aside, error, required = true, className='text-input', ...otherProps }, ref) =>
  <FieldSet htmlFor={id} label={label} aside={aside} error={error}>
    { /* Nim styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Nim also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <textarea id={id} ref={ref} className={className} required={required} data-invalid={error ? true : undefined} {...otherProps} />
  </FieldSet>
);
TextArea.displayName = 'TextArea';
TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};
