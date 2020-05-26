import React from 'react';

import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

export default <Tooltip tooltip="am button" isLeft={false} isRight={false} isBottom={false}>
  <Button aria-describedby="id">tooltip me</Button>
</Tooltip>;
