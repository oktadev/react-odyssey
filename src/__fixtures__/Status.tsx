import React from 'react';

import { Status } from '../components/Status';

const standardProps = { isHiddenLabel: false, isSuccess: false, isDanger: false, isCaution: false };

export default {
  "Variants": <>
    <Status {...standardProps} label="Neutral status">Neutral</Status>
    <Status {...standardProps} isSuccess label="Success status">Success</Status>
    <Status {...standardProps} isCaution label="Caution status">Caution</Status>
    <Status {...standardProps} isDanger label="Danger status">Danger</Status>
  </>
};