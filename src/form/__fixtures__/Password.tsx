import React from 'react';

import { PasswordInput, PasswordRaw } from '../Password';

export default {
  "Text Input FieldSet": <PasswordInput label="Text Input" defaultValue="default value" autoSave="off" autoFocus={false} autoComplete="off" name="TextInput" required={false} error="" />,
  "Text Input Raw": <PasswordRaw defaultValue="default value" autoSave="off" autoComplete="off" autoFocus={false} name="TextInput" required={false} error={false} />,
};