import React, { AnchorHTMLAttributes } from 'react';

export const ExternalA = ({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) =>
  <a target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;