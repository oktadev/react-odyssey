import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import './StyledHeader.scss';

export type Align = "left" | "center" | "right";

export interface StyledHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  action?: ReactNode;
  isSecondary?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  align?: Align;
}

const block = 'styled-header';

export const StyledHeader: FunctionComponent<StyledHeaderProps> = (props) => {
  const { title, subtitle, action, isSecondary, align, className, ...restProps } = props;

  const classes = classNames(block, className, {
    [`${block}--without-subtitle`]: ! subtitle,
    [`${block}--center-align`]: 'center' === align,
    [`${block}--right-align`]: 'right' === align,
  });

  const titleClasses = classNames(`${block}__title`);

  return (
    <div {...restProps} className={classes}>
      { ! isSecondary && <h1 className={titleClasses}>{title}</h1> }
      { isSecondary && <h2 className={titleClasses}>{title}</h2> }
      { subtitle && (
        <div className={`${block}__subtitle`}>{subtitle}</div>
      ) }
    </div>
  );
};