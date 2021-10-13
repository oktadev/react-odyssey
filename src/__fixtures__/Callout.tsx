import React from 'react';

import { Callout } from '../components/Callout';

const standardProps = { isPending: false, isWarning: false, isError: false };

export default <>
  <Callout {...standardProps} title="Callout">
    <p>Callout body</p>
  </Callout>
  <Callout {...standardProps} isPending title="Pending callout">
    <p>Callout body</p>
  </Callout>
  <Callout {...standardProps} isWarning title="Warning callout">
    <p>Callout body</p>
  </Callout>
  <Callout {...standardProps} isError title="Error callout">
    <p>Callout body</p>
  </Callout>
</>;