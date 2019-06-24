import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Omit } from './util';

export const CardActions: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ children, className='', ...rest }) =>
  <section className={`card--actions ${className}`} {...rest}>{ children }</section>;

export const CardFooter: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ children, className='', ...rest }) =>
  <footer className={`card--footer ${className}`} {...rest}>{ children }</footer>;

export type CardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  actions?: ReactNode;
  icon?: ReactNode;
  src?: string;
  meta?: ReactNode;
  title?: ReactNode;
};

export const Card: FunctionComponent<CardProps> = ({ actions, children, icon, title, meta, src, style, className='', ...rest }) => <article style={style} className={`card is-card-action ${className}`} {...rest}>
  { src && <figure className="card--media">
    <img className="card--media-image" src={src} />
  </figure>}
  { (icon || meta || title) && <header className="card--header">
    { icon && <figure className="card--header-icon">
    </figure> }
    { (meta || title) && <section className="card--header-main">
      { title && <h1 className="card--title">
        { title }
      </h1> }
      { meta && <section className="card--meta">
        { meta }
      </section> }
    </section> }
  </header> }
  <section className="card--main">{ children }</section>
  { actions && <CardFooter>
    <CardActions>
      { actions }
    </CardActions>
  </CardFooter> }
</article>;

Card.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  src: PropTypes.string,
  meta: PropTypes.node,
  title: PropTypes.node,
};
