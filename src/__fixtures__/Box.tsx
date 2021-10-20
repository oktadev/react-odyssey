import React from 'react';

import { Box } from '../components/Box';
import { InternalA } from '../components/Links';

export default <>
  <Box heading="This is a default box">
    This area is reserved for children. No smoking.
  </Box>
  <br/>
  <Box heading="This box is loading" loading>
    This area is reserved for children. No smoking.
  </Box>
  <br/>
  <Box heading="This box has action" action={<InternalA href="another/place">Go somewhere else</InternalA>}>
    This area is reserved for children. No smoking.
  </Box>
  <br/>

  <h4>Boxes should go in grids with gaps or in flex containers</h4>
  <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "minmax(476px,1fr) minmax(476px,1fr)", marginBottom: "1rem" }}>
    <Box heading="Box 1">
      This area is reserved for children. No smoking.
    </Box>
    <Box heading="Box 2" loading>
      This area is reserved for children. No smoking.
    </Box>
  </div>
</>;