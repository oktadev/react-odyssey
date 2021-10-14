import React from 'react';

import { StyledHeader } from '../components/StyledHeader';
import { Status } from '../components/Status';

export default <>
  <StyledHeader title="This is the title"></StyledHeader>
  <br/>
  <StyledHeader title="This is a secondary title" isSecondary></StyledHeader>
  <br/>
  <StyledHeader title="This is the title" subtitle="With a subtitle"></StyledHeader>
  <br/>
  <StyledHeader title="This is the title" subtitle={(
    <div>
      This is a subtitle with a component.
      <Status isSuccess label="Success status">Success</Status>
    </div>
  )}></StyledHeader>
</>;