import React from 'react';

import { InputFieldSet, InputRaw } from '../Input';

export default {
  "Text Input FieldSet": <InputFieldSet label="Text Input" defaultValue="default value" autoSave="off" autoComplete="off" autoFocus={false} name="TextInput" required={false} error="" />,
  "Text Input Raw": <InputRaw defaultValue="default value" autoSave="off" autoComplete="off" autoFocus={false} name="TextInput" required={false} error={false} />,
};