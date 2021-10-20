import React, { FunctionComponent, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import errorSVG from '../../odyssey/packages/odyssey-icons/src/error.svg';
import infoSVG from '../../odyssey/packages/odyssey-icons/src/get-info.svg';
import warningSVG from '../../odyssey/packages/odyssey-icons/src/caution.svg';

export type Callouts = "pending" | "info" | "warning" | "error";

type SVGs_ = { [K in Callouts]: string };

const SVGs: SVGs_ = {
  pending: warningSVG,
  info: infoSVG,
  warning: warningSVG,
  error: errorSVG,
};

export interface CalloutProps extends Omit<ComponentProps<'aside'>, 'title'> {
  isPending?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Callout: FunctionComponent<CalloutProps> = ({ title, icon, isPending, isWarning, isError, children, className, ...rest }) => {
  let kind: Callouts = 'info';
  if (isPending) {
    kind = 'pending';
  } else if (isWarning) {
    kind = 'warning';
  } else if (isError) {
    kind = 'error';
  }

  return <aside
    className={classNames('ods-callout', className, {
      'is-ods-callout-help': !isPending && !isWarning && !isError,
      'is-ods-callout-pending': isPending,
      'is-ods-callout-warning': isWarning,
      'is-ods-callout-error': isError,
    })}
    aria-live={ isError ? "polite" : undefined}
    role={ isError ? 'alert' : undefined}
    {...rest}
  >
    <div className="ods-callout--icon">
      {icon || <img alt={kind} src={SVGs[kind]}/>}
    </div>
    <div className="ods-callout--content">
      { title && <h3 className="ods-callout--title">
        { title }
      </h3> }
      { children }
    </div>
  </aside>;
};

Callout.propTypes = {
  isPending: PropTypes.bool,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.node,
  icon: PropTypes.node,
};
