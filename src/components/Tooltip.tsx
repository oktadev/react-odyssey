import React, { ReactNode, ComponentProps, ReactElement, JSXElementConstructor } from 'react';
import classNames from 'classnames';

export interface TooltipProps extends ComponentProps<'span'> {
  tooltip: ReactNode;
  children: ReactElement<{ "aria-describedby": string }, JSXElementConstructor<any>>;
  describes?: string;
  labels?: string;
  isLeft?: boolean;
  isRight?: boolean;
  isBottom?: boolean;
}

export const Tooltip = ({ describes, labels, tooltip, children, className, isLeft, isRight, isBottom, ...rest }: TooltipProps) => {
  const classes = classNames('ods-tooltip', {
    "is-ods-tooltip-top": !isLeft && !isRight && !isBottom,
    "is-ods-tooltip-left": isLeft,
    "is-ods-tooltip-right": isRight,
    "is-ods-tooltip-bottom": isBottom,
  });
  describes = describes || children.props['aria-describedby'];
  labels = labels || children.props['aria-describedby'];
  return <span className={classNames("has-ods-tooltip", className)} {...rest}>
    { children }
    { labels ?
      <aside id={labels} role="tooltip" className={classes}>
        { tooltip }
      </aside>
      : <aside aria-describes={describes} role="tooltip" className={classes}>
        { tooltip }
      </aside>
    }
  </span>;
};