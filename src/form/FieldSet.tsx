import React, { FunctionComponent, ComponentProps } from 'react';
import classNames from 'classnames';

import { LabelMaker, LabelMakerProps } from './Label';


export interface FieldSetProps extends ComponentProps<'fieldset'>, LabelMakerProps {}

export const Legend: FunctionComponent<ComponentProps<'legend'>> = ({ children, className, ...rest }) =>
  <legend className={classNames("ods-group-legend", className)} {...rest}>{ children }</legend>;

export interface AsideProps extends ComponentProps<'aside'> {
  isError?: boolean;
  isHint?: boolean;
}

export const Aside: FunctionComponent<AsideProps> = ({ isError, isHint, children, className, ...rest }) =>
  <aside className={classNames({
    "ods-field--error": isError,
    "ods-field--hint": isHint,
  }, className)} {...rest}>{ children }</aside>;


export interface FieldSetRaw extends ComponentProps<'fieldset'> {
  error?: boolean;
  isFlex?: boolean;
}
// fieldset component. Wraps inputs in the correct markup & classes for Odyssey.
export const FieldSetRaw: FunctionComponent<FieldSetRaw> = ({ children, error, className, isFlex=true, ...rest }) =>
  <fieldset className={classNames('ods-fieldset', className)} {...rest}>
    <div className={classNames({ 'ods-fieldset-flex': isFlex, error })}>
      { children }
    </div>
  </fieldset>;

// legacy export
export const FieldSet: FunctionComponent<FieldSetProps> = ({ legend, htmlFor, label, aside, children, error, optional, ...rest }) =>
  <FieldSetRaw error={!!error} {...rest}>
    <LabelMaker legend={legend} htmlFor={htmlFor} label={label} aside={aside} error={error} optional={optional}>
      { children }
    </LabelMaker>
  </FieldSetRaw>;

export type FieldSetExtraProps = LabelMakerProps;