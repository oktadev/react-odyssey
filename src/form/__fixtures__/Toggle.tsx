import React from 'react';

import { Toggle } from '../Toggle';

export default {
  // eslint-disable-next-line no-console
  Toggle: <Toggle defaultChecked checked={undefined} isDanger={false} onChange={(isChecked) => console.log('checked', isChecked)} />,
};
