import React from 'react';

import { Switch } from '../components/Switch';

export default <>
  <p>
    <Switch />&nbsp;&nbsp;
    <Switch defaultChecked />&nbsp;&nbsp;
    <Switch defaultChecked checked={false} />&nbsp;&nbsp;
    <Switch checked />
  </p>
  <div className="ods-switch--figure" style={{ width: '200px' }}>
    <label className="ods-switch--label">With a label</label>
    <Switch checked />
  </div>
</>;

