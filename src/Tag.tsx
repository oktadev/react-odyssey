import React, { ReactNode, ComponentProps } from 'react';
import classNames from 'classnames';

export type TagsProps = ComponentProps<'ul'> & {
  tags: ReactNode[];
}

export const Tags = ({ tags, className, ...rest }: TagsProps) => <ul className={classNames("ods-tag--list", className)} {...rest}>
  { tags.map((t, i) => <li className="ods-tag" key={typeof t === 'string' ? t : i}>{ t }</li>)}
</ul>;