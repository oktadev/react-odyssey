import React, { ComponentProps } from 'react';

export const ExternalA = ({ children, ...rest }: ComponentProps<'a'>) =>
  <a target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;

export const InternalA = ({ children, ...rest }: ComponentProps<'a'>) =>
  <a {...rest}>{children}</a>;