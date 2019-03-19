import React from 'react';
import PropTypes from 'prop-types';

import errorSVG from '../img/callout-error.svg';
import infoSVG from '../img/callout-info.svg';
import pendingSVG from '../img/callout-pending.svg';
import warningSVG from '../img/callout-warning.svg';

const SVGs = {
  pending: pendingSVG,
  info: infoSVG,
  warning: warningSVG,
  error: errorSVG,
};

export const Callout = ({ title, kind, children, style, className="mt-4" }) => <aside
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
  kind: PropTypes.oneOf(Object.keys(SVGs)),
  style: PropTypes.object,
  title: PropTypes.node,
};
