import React, { ReactNode, ComponentProps } from 'react';
import classNames from 'classnames';

export interface StatusProps extends ComponentProps<'dd'> {
  label?: ReactNode;
  isHiddenLabel?: boolean;
  isSuccess?: boolean;
  isCaution?: boolean;
  isDanger?: boolean;
}

export const Status = ({ label, children, isSuccess, isCaution, isDanger, isHiddenLabel=false }: StatusProps) => <dl className={classNames("ods-status", {
  "is-ods-status-label-hidden": isHiddenLabel,
  "is-ods-status-caution": isCaution,
  "is-ods-status-success": isSuccess,
  "is-ods-status-danger": isDanger,
})}>
  {label && <dt className="ods-status--label">
    { label }
  </dt>}
  <dd className="ods-status--value">
    { children }
  </dd>
</dl>;