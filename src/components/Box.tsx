import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import './Box.scss';

type BoxProps = {
  heading: string;
  loading?: boolean;
  action?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  'data-se'?: string;
};

const BaseBox: FunctionComponent<BoxProps> = (props) => {
  const { heading, children = <></>, action, loading, ...restProps } = props;
  const selectorTitle = heading.replace(/\s+/g, '-').toLowerCase();
  const dataSe = restProps['data-se']
    ? restProps['data-se']
    : `${selectorTitle}-card`;
  return (
    <div {...restProps} className="card" data-se={dataSe}>
      <div className={classNames('card--header')}>
        <div data-se="card--title" className={classNames('card--title', { loading })}>
          {heading}
        </div>
        <div data-se="card--action">{action}</div>
      </div>
      <div className={classNames('card--main')}>{children}</div>
    </div>
  );
};

export const Box = BaseBox;