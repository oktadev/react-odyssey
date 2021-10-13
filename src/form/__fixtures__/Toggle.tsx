import React from 'react';

import { Switch } from '../../components/Switch';

export default {
  // eslint-disable-next-line no-console
  Switch: <Switch defaultChecked checked={undefined} isDanger={false} onChange={(isChecked) => console.log('checked', isChecked)} />,
};
