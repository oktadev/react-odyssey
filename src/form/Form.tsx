import React, { FunctionComponent, ComponentProps } from 'react';
import classNames from 'classnames';

export const Form: FunctionComponent<ComponentProps<'form'>> =({ children, className, ...otherProps }) =>
  <form className={classNames("ods-form", className)} {...otherProps}>{ children }</form>;

export const FormTitle: FunctionComponent<ComponentProps<'h1'>> = ({ children, className, ...otherProps }) =>
  <h1 className={classNames('ods-form--title', className)} {...otherProps}>{ children }</h1>;

export const FormHeader: FunctionComponent<ComponentProps<'header'>> = ({ children, className, ...otherProps }) =>
  <header className={classNames('ods-form--header', className)} {...otherProps}>{ children }</header>;

export const FormHeaderWithTitle: FunctionComponent<ComponentProps<typeof FormTitle>> = ({ children, ...otherProps }) =>
  <FormHeader>
    <FormTitle {...otherProps}>{ children }</FormTitle>
  </FormHeader>;

export const FormActions: FunctionComponent<ComponentProps<'section'>> = ({ children, className, ...otherProps }) =>
  <section className={classNames('ods-form--actions', className)} {...otherProps}>{ children }</section>;

export const FormFooter: FunctionComponent<ComponentProps<'footer'>> = ({ children, className, ...otherProps }) =>
  <footer className={classNames('ods-form--footer', className)} {...otherProps}>{ children }</footer>;
