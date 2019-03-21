import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import errorSVG from '../img/callout-error.svg';
import infoSVG from '../img/callout-info.svg';
import pendingSVG from '../img/callout-pending.svg';
import warningSVG from '../img/callout-warning.svg';

export type Callouts = "pending" | "info" | "warning" | "error";

type SVGs_ = { [K in Callouts]: string };

const SVGs: SVGs_ = {
  pending: pendingSVG,
  info: infoSVG,
  warning: warningSVG,
  error: errorSVG,
};

export type CalloutProps = {
  children: React.ReactNode;
  className?: string;
  kind: Callouts;
  style?: React.CSSProperties;
  title: React.ReactNode;
};

export const Callout: FunctionComponent<CalloutProps> = ({ title, kind, children, style, className="mt-4" }) => <aside
  className={`callout is-callout-${kind === 'info' ? 'help' : kind } ${className}`}
  aria-live={ kind !== 'error' ? "polite" : undefined}
  role={ kind === 'error' ? 'alert' : undefined}
  style={style}
>
  <img alt={kind} className="mr-2" src={ SVGs[kind] } style={{ height: 24, width: 24 }} />
  <div className="callout--content">
    { title && <h1 className="callout--title">
      { title }
    </h1> }
    { children }
  </div>
</aside>;

Callout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.oneOf(Object.keys(SVGs) as Callouts[]),
  style: PropTypes.object,
  title: PropTypes.node,
};
