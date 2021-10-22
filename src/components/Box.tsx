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
    : `${selectorTitle}-box`;
  return (
    <div {...restProps} className="box" data-se={dataSe}>
      <div className={classNames('box--header')}>
        <div data-se="box--title" className={classNames('box--title', { loading })}>
          {heading}
        </div>
        <div data-se="box--action">{action}</div>
      </div>
      <div className={classNames('box--main')}>{children}</div>
    </div>
  );
};

export const Box = BaseBox;