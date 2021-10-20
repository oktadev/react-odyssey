import React from 'react';

import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';

const standardProps = { isLeft: false, isRight: false, isBottom: false };

export default <>
  <p>
    <Tooltip id="wthdtama" tooltip="What The Hell Does That Acronym Mean Anyway" {...standardProps}>
      <span>The acronym <abbr aria-describedby="wthdtama">WTHDTAMA</abbr> is pretty meta.</span>
    </Tooltip>
  </p>
  <p>
    <Tooltip id="top-tip" tooltip="A top tip [default]" {...standardProps}>
      <abbr aria-describedby="top-tip">Top</abbr>
    </Tooltip>&nbsp;&nbsp;
    <Tooltip id="right-tip" tooltip="A right tip" {...standardProps} isRight>
      <abbr aria-describedby="right-tip">Right</abbr>
    </Tooltip>&nbsp;&nbsp;
    <Tooltip id="bottom-tip" tooltip="A bottom tip" {...standardProps} isBottom>
      <abbr aria-describedby="bottom-tip">Bottom</abbr>
    </Tooltip>&nbsp;&nbsp;
    <Tooltip id="left-tip" tooltip="A left tip" {...standardProps} isLeft>
      <abbr aria-describedby="left-tip">Left</abbr>
    </Tooltip>
  </p>
  <p>
    <Tooltip id="edit" tooltip="Edit Button">
      <Button aria-labelledby="edit">Edit</Button>
    </Tooltip>
  </p>
</>;
