import React, { FunctionComponent, ComponentProps, ReactNode } from 'react';

import { Legend, Aside } from "./FieldSet";

export type LabelProps = ComponentProps<'label'> & { optional?: boolean };
export const Label: FunctionComponent<LabelProps> = ({ children, className, optional, ...rest }) => <label className={className || "ods-label"} {...rest}>
  { children }{ optional && <span className="ods-label--optional">Optional</span>}
</label>;

export interface LabelMakerProps {
  aside?: ReactNode;
  error?: ReactNode;
  isFlex?: boolean;
  htmlFor?: string;
  label?: ReactNode;
  legend?: ReactNode;
  optional?: boolean;
  className?: string;
}

export const LabelMaker: FunctionComponent<LabelMakerProps> = ({ legend, htmlFor, label, aside, children, error, optional, className }) => <>
  { legend && <Legend>{ legend }</Legend> }
  { label && <Label htmlFor={htmlFor} optional={optional} className={className}>{ label }</Label>}
  { aside && <Aside isHint>{ aside }</Aside> }
  { children }
  { error && <Aside isError>{ error }</Aside> }
</>;

// Checkboxes and Radios need labels after their inputs.
export const UpsideDownLabelMaker: FunctionComponent<LabelMakerProps> = ({ legend, htmlFor, label, aside, children, error, optional, className }) => <>
  { legend && <Legend>{ legend }</Legend> }
  { aside && <Aside isHint>{ aside }</Aside> }
  { children }
  { label && <Label htmlFor={htmlFor} optional={optional} className={className}>{ label }</Label>}
  { error && <Aside isError>{ error }</Aside> }
</>;