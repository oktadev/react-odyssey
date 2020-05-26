import React from 'react';

import { Button } from '../Button';
// import { useValue } from 'react-cosmos/fixture';

const standardProps = { isSecondary: false, isDanger: false, isSmall: false, disabled: false };
export default {
  "button button": <Button {...standardProps} onClick={() => window.alert('onclick')}>
    I am Button
  </Button>,
  "button in overlay": <div style={{ backgroundColor: '#00d1b3', width: '100%', padding: 30, margin: '10px 0' }}>
    <Button isOverlay {...standardProps}>Overlay</Button>
  </div>,
  "often broken buttons": <ul>Some commonly broken buttons (that point at google.com for :visited)
    <li>
      <Button><a href="https://google.com">Anchor in Button</a></Button>
      <Button isSecondary><a href="https://google.com">Anchor in Button</a></Button>
    </li>
    <li>
      <a href="https://google.com"><Button>Button in Anchor</Button></a>
      &nbsp;
      <a href="https://google.com"><Button isSecondary>Button in Anchor</Button></a>
    </li>
    <li>
      <a href="https://google.com" className="ods-button is-ods-button-primary">Anchor that is a .button</a>
      &nbsp;
      <a href="https://google.com" className="ods-button is-ods-button-secondary">Anchor that is a .button</a>
    </li>
  </ul>
};