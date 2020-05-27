import React from 'react';

import { Select, OptGroup } from '../Select';

export default <Select label="Select me" aside="This is a select thingy." name="Select" required={false} error="" style={{ minWidth: '30em' }}>
  <OptGroup label="Group 1">
    <option value="1">One</option>
    <option value="2">Two</option>
  </OptGroup>
  <OptGroup label="Group 2">
    <option value="3">Three</option>
    <option value="4">Four</option>
  </OptGroup>
</Select>;