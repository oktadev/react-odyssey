import React from 'react';

import { Button, ButtonProps } from '../components/Button';
import download from '../../odyssey/packages/odyssey-icons/src/download.svg';
import plus from '../../odyssey/packages/odyssey-icons/src/plus.svg';

const standardProps = { isSecondary: false, isDanger: false, isSmall: false, disabled: false };

class ButtonStatesDemo extends React.Component<ButtonProps> {
  focusRef = React.createRef<HTMLButtonElement>();

  componentDidMount = () => {
    this.focusRef.current.focus();
  };

  render () {
    return <>
      <Button {...standardProps}>Enabled</Button>
      <Button {...standardProps} disabled>Disabled</Button>
      <Button {...standardProps} ref={this.focusRef}>Focus</Button>
    </>;
  }
}

export default {
  "Variants": <>
    <Button {...standardProps} onClick={() => undefined}>Primary</Button>
    <Button {...standardProps} isSecondary>Secondary</Button>
    <Button {...standardProps} isDanger>Danger</Button>
    <Button {...standardProps} isClear>Clear</Button>
    <div style={{ backgroundColor: '#00d1b3', width: '100%', padding: 30, margin: '10px 0' }}>
      <Button {...standardProps} isOverlay>Overlay</Button>
    </div>
  </>,
  "States": <ButtonStatesDemo {...standardProps}></ButtonStatesDemo>,
  "Usage": <>
    <Button {...standardProps}>Max three words</Button>
    <Button {...standardProps} isDanger>Do not capitalize</Button>
    <Button {...standardProps} isSecondary>Except Proper Nouns</Button>
    <Button {...standardProps}><img className="ods-icon" src={download}/> With icons</Button>
    <Button {...standardProps}><img className="ods-icon" src={plus}/></Button>
  </>,
  "Anti-patterns": <div>
    <p>Some common discouraged usage patterns that result in broken buttons (hrefs point at google.com for :visited)</p>
    <p>
      <Button><a href="https://google.com">Anchor in button</a></Button>
      <Button isSecondary><a href="https://google.com">Anchor in button</a></Button>
    </p>
    <p>
      <a href="https://google.com"><Button>Button in anchor</Button></a>
      &nbsp;
      <a href="https://google.com"><Button isSecondary>Button in anchor</Button></a>
    </p>
    <p>
      <a href="https://google.com" className="ods-button is-ods-button-primary">Anchor that is a .button</a>
      &nbsp;
      <a href="https://google.com" className="ods-button is-ods-button-secondary">Anchor that is a .button</a>
    </p>
  </div>
};