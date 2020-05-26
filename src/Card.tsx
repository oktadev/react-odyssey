import React, { FunctionComponent, ReactNode, ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

export const CardActions: FunctionComponent<ComponentProps<'section'>> = ({ children, className, ...rest }) =>
  <section className={classNames('ods-card--actions', className)} {...rest}>{ children }</section>;

export const CardFooter: FunctionComponent<ComponentProps<'footer'>> = ({ children, className, ...rest }) =>
  <footer className={classNames('ods-card--footer', className)} {...rest}>{ children }</footer>;

export type CardProps = Omit<ComponentProps<'article'>, 'title'> & {
  actions?: ReactNode;
  icon?: ReactNode;
  src?: string;
  meta?: ReactNode;
  title?: ReactNode;
};

export const Card: FunctionComponent<CardProps> = ({ actions, children, icon, title, meta, src, className='', ...rest }) => <article className={classNames('ods-card is-ods-card-action', className)} {...rest}>
  { src && <figure className="ods-card--media">
    <img className="ods-card--media-image" src={src} />
  </figure>}
  { (icon || meta || title) && <header className="ods-card--header">
    { icon && <figure className="ods-card--header-icon">
      { icon }
    </figure> }
    { (meta || title) && <section className="ods-card--header-main">
      { title && <h1 className="ods-card--title">
        { title }
      </h1> }
      { meta && <section className="ods-card--meta">
        { meta }
      </section> }
    </section> }
  </header> }
  <section className="ods-card--main">{ children }</section>
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