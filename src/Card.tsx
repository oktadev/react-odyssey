import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';

export const CardActions: FunctionComponent<{}> = ({ children }) => <section className="card--actions">{ children }</section>;

export const CardFooter: FunctionComponent<{}> = ({ children }) => <footer className="card--footer">{ children }</footer>;

export type CardProps = {
  actions?: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
  mediaSrc?: string;
  meta?: ReactNode;
  title?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Card: FunctionComponent<CardProps> = ({ actions, children, icon, title, meta, mediaSrc, style, className='' }) => <article style={style} className={`card is-card-action ${className}`}>
  { mediaSrc && <figure className="card--media">
    <img className="card--media-image" src={mediaSrc} />
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
  mediaSrc: PropTypes.string,
  meta: PropTypes.node,
  title: PropTypes.node,
};
