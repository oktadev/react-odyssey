import React from 'react';

import { ExternalA, InternalA } from '../components/Links';

export default <>
  <h4>Internal links</h4>
  <p>
    <InternalA href="some/resource">View your resource</InternalA>
  </p>
  <h4>External links</h4>
  <p>
    <ExternalA href="https://github.com">https://github.com</ExternalA>
  </p>
</>;