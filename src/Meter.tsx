import React, { ComponentProps, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

export type MeterProps = ComponentProps<'meter'> & {
  children?: ReactNode;
  className?: CSSProperties;
  label?: string;
};

export const Meter = ({ children, className, label, max, value, ...rest }: MeterProps) => <meter className={classNames("ods-meter", className)}
  aria-valuemax={ typeof max === 'number' ? max : parseInt(max, 10) }
  aria-valuenow={ typeof value === 'number'
    ? value
    : parseInt(typeof value === 'string'
      ? value
      : value.join(""), 10) }
  {...rest} max={max} value={value}>
  <figure className="ods-meter--fallback" aria-label={label}>
    { children }
  </figure>
</meter>;
