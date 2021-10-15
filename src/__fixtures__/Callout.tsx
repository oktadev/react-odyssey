import React from 'react';

import { Callout } from '../components/Callout';
import completeSVG from '../../odyssey/packages/odyssey-icons/src/complete.svg';

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
  <Callout {...standardProps} title="Custom icon callout" icon={<img alt="completeSVG" src={completeSVG}/>}>
    <p>Callout body</p>
  </Callout>
</>;