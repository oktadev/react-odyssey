import React from 'react';

import { StyledHeader } from '../components/StyledHeader';
import { Status } from '../components/Status';

export default <>
  <div style={{ marginBottom: "1rem", padding: "1rem", background: "#eee" }}>
    <StyledHeader title="This is the title"></StyledHeader>
  </div>
  <div style={{ marginBottom: "1rem", padding: "1rem", background: "#eee" }}>
    <StyledHeader title="This is a secondary title" isSecondary></StyledHeader>
  </div>
  <div style={{ marginBottom: "1rem", padding: "1rem", background: "#eee" }}>
    <StyledHeader title="This is the title" subtitle="With a subtitle"></StyledHeader>
  </div>
  <div style={{ marginBottom: "1rem", padding: "1rem", background: "#eee" }}>
    <StyledHeader title="This is the title" subtitle={(
      <div>
        This is a subtitle with a component.
        <Status isSuccess label="Success status">Success</Status>
      </div>
    )}></StyledHeader>
  </div>
</>;