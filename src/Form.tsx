import React, {
  forwardRef,
  FunctionComponent,
  ReactNode,
  RefForwardingComponent,
  ComponentProps,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isMobilish } from './util';

export const FormTitle: FunctionComponent<ComponentProps<'h1'>> = ({ children, className, ...rest }) =>
  <h1 className={classNames('form--title', className)} {...rest}>{ children }</h1>;

export const FormHeader: FunctionComponent<ComponentProps<'header'>> = ({ children, className, ...rest }) =>
  <header className={classNames('form--header', className)} {...rest}>{ children }</header>;

export const FormHeaderWithTitle: FunctionComponent<ComponentProps<typeof FormTitle>> = ({ children, ...rest }) =>
  <FormHeader>
    <FormTitle {...rest}>{ children }</FormTitle>
  </FormHeader>;

export const FormActions: FunctionComponent<ComponentProps<'section'>> = ({ children, className, ...rest }) =>
  <section className={classNames('form--actions', className)} {...rest}>{ children }</section>;

export const FormFooter: FunctionComponent<ComponentProps<'footer'>> = ({ children, className, ...rest }) =>
  <footer className={classNames('form--footer', className)} {...rest}>{ children }</footer>;

export type LabelProps = ComponentProps<'label'> & { optional?: boolean };
export const Label: FunctionComponent<LabelProps> = ({ children, className, optional, ...rest }) => <label className={className || "label"} {...rest}>
  { children }{ optional && <span className="label--optional">Optional</span>}
</label>;

type OurFieldSetProps = {
  aside?: ReactNode;
  error?: ReactNode;
  htmlFor?: string;
  label?: ReactNode;
  legend?: ReactNode;
};

export type FieldSetProps = ComponentProps<'fieldset'> & OurFieldSetProps;

// fieldset component. Wraps inputs in the correct markup & classes for Odyssey.
export const FieldSet: FunctionComponent<FieldSetProps> = ({ legend, htmlFor, label, aside, children, error, className, ...rest }) => <fieldset className={classNames('fieldset', className)} {...rest}>
  <div className={classNames('fieldset-flex', { error })}>
    { legend && <legend className="group-legend">{ legend }</legend> }
    { label && <Label htmlFor={htmlFor}>{ label }</Label>}
    { children }
    { error && <aside className="field--error">{ error }</aside> }
    { aside && <aside className="field--hint">{ aside }</aside> }
  </div>
</fieldset>;
FieldSet.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node.isRequired,
  error: PropTypes.node,
  htmlFor: PropTypes.string,
  label: PropTypes.node,
  legend: PropTypes.node,
};

export type InputProps = ComponentProps<'input'> & OurFieldSetProps & {
  ref?: React.Ref<HTMLInputElement>;
};

// TODO (ggreer): this is very similar to FieldSet. Figure out how to fix Odyssey and/or Fieldset to reduce the repetitive code.
export const CheckBox: RefForwardingComponent<HTMLInputElement, InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, aside, error, children, ...otherProps }, ref) => <fieldset className="fieldset">
  <div className={classNames('fieldset-flex', { error })}>
    <label htmlFor={id}>
      <input type="checkbox" id={id} ref={ref} {...otherProps} />
      { label }
      { children }
    </label>
    { error && <aside className="field--error">{ error }</aside> }
    { aside && <aside className="field--hint">{ aside }</aside> }
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

export const TextInput: React.ComponentType<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, legend, aside, error, required = true, className, autoFocus, children, ...otherProps }, ref) => {
  if (isMobilish()) {
    // Probably a mobile device. Autofocus will cause virtual keyboard to pop up, so don't do that.
    autoFocus = false;
  }
  return <FieldSet legend={legend} htmlFor={id} label={label} aside={aside} error={error}>
    { /* Odyssey styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Odyssey also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <input id={id} type="text" className={classNames('text-input', className)} data-invalid={error ? true : undefined} ref={ref} required={required} autoFocus={autoFocus} {...otherProps} />
    { children }
  </FieldSet>;
});

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
};
TextInput.displayName = 'TextInput';

export const PasswordInput: React.ComponentType<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ id, label, legend, aside, error, required = true, className, children, ...otherProps }, ref) =>
  <FieldSet legend={legend} htmlFor={id} label={label} aside={aside} error={error}>
    { /* Odyssey styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Odyssey also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <input id={id} type="password" autoComplete="off" className={classNames('text-input', className)} data-invalid={error ? true : undefined} ref={ref} required={required} {...otherProps} />
    { children }
  </FieldSet>
);
PasswordInput.displayName = 'PasswordInput';
PasswordInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};


export type SelectProps = ComponentProps<'select'> & OurFieldSetProps & {
  ref?: React.Ref<HTMLSelectElement>;
};

export const Select: React.ComponentType<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(({ id, label, legend, aside, error, children, required=true, className, ...otherProps }, ref) =>
  <FieldSet legend={legend} htmlFor={id} label={label} aside={aside} error={error}>
    <select className={classNames('select-input', className)} id={id} required={required} ref={ref} {...otherProps}>
      { children }
    </select>
  </FieldSet>);

Select.displayName = 'Select';
Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export type TextAreaProps = ComponentProps<'textarea'> & OurFieldSetProps & {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export const TextArea: RefForwardingComponent<HTMLTextAreaElement, TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, legend, aside, error, required = true, className, children, ...otherProps }, ref) =>
  <FieldSet legend={legend} htmlFor={id} label={label} aside={aside} error={error}>
    { /* Odyssey styles data-invalid="false" as red. Work around this by un-setting the attribute.
       * Odyssey also adds an "optional" text next to non-required inputs, so default to required.
       */}
    <textarea id={id} ref={ref} className={classNames('text-input', className)} required={required} data-invalid={error ? true : undefined} {...otherProps} />
    { children }
  </FieldSet>);

TextArea.displayName = 'TextArea';
TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};
