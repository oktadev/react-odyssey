import React from 'react';

import { Meter } from '../components/Meter';

export default <div style={{ width: 500 }}>
  <h4>Progress-type meter</h4>
  <Meter label="meter" min={0} max={100} value={30} />
  <Meter label="meter" min={0} max={100} value={60} />
  <Meter label="meter" min={0} max={100} value={90} />
  <Meter label="meter" min={0} max={100} low={10} high={90} optimum={99} value={15} />
  <Meter label="meter" min={0} max={100} low={10} high={90} optimum={99} value={70} />
  <Meter label="meter" min={0} max={100} low={10} high={90} optimum={99} value={95} />
  <Meter label="meter" min={0} max={100} low={50} high={90} optimum={99} value={15} />
  <Meter label="meter" min={0} max={100} low={50} high={90} optimum={99} value={70} />
  <Meter label="meter" min={0} max={100} low={50} high={90} optimum={99} value={95} />
  <h4>Limit-type meter</h4>
  <Meter label="meter" min={0} max={100} low={30} high={80} optimum={1} value={30} />
  <Meter label="meter" min={0} max={100} low={30} high={80} optimum={1} value={60} />
  <Meter label="meter" min={0} max={100} low={30} high={80} optimum={1} value={90} />
  <Meter label="meter" min={0} max={100} low={65} high={90} optimum={1} value={10} />
  <Meter label="meter" min={0} max={100} low={65} high={90} optimum={1} value={50} />
  <Meter label="meter" min={0} max={100} low={65} high={90} optimum={1} value={70} />
  <Meter label="meter" min={0} max={100} low={65} high={90} optimum={1} value={95} />
</div>;
