import React from 'react';

import { Switch, SwitchProps } from '../components/Switch';

class SwitchStatesDemo extends React.Component<SwitchProps> {
  render () {
    return <>
      <dl>
        <dt>Disabled</dt>
        <dd><Switch disabled /></dd>
      </dl>
    </>;
  }
}

export default <>
  <dl>
    <dt>No props</dt>
    <dd><Switch /></dd>
    <dt>Checked</dt>
    <dd><Switch checked /></dd>
    <dt>Unchecked</dt>
    <dd><Switch checked={false} /></dd>
  </dl>
  <h4>States</h4>
  <SwitchStatesDemo/>
  <h4>Figure with label</h4>
  <div className="ods-switch--figure" style={{ width: '200px' }}>
    <label className="ods-switch--label">With a label</label>
    <Switch checked />
  </div>
</>;

