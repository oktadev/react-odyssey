import React, { ReactNode, ComponentProps, ReactElement, JSXElementConstructor } from 'react';
import classNames from 'classnames';

export interface TooltipProps extends ComponentProps<'span'> {
  tooltip: ReactNode;
  children: ReactElement<{ "aria-describedby": string }, JSXElementConstructor<any>>;
  describes?: string;
  isLeft?: boolean;
  isRight?: boolean;
  isBottom?: boolean;
}

export const Tooltip = ({ describes, tooltip, children, className, isLeft, isRight, isBottom, ...rest }: TooltipProps) => {
  describes = describes || children.props['aria-describedby'];
  return <span className={classNames("has-ods-tooltip", className)} {...rest}>
    { children }
    <aside aria-describes={describes} role="tooltip" className={classNames("ods-tooltip", {
      "is-ods-tooltip-top": !isLeft && !isRight && !isBottom,
      "is-ods-tooltip-left": isLeft,
      "is-ods-tooltip-right": isRight,
      "is-ods-tooltip-bottom": isBottom,
    })}>
      { tooltip }
    </aside>
  </span>;
};