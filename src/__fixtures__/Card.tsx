import React from 'react';

import { Card as OldCard } from '../Card';
import { Card } from '../components/Card';
import { InternalA } from '../components/Links';
import { Button } from '../components/Button';


const CardActions = <>
  <Button isSecondary isDanger>Oh no!</Button>
  <Button>Cool!</Button>
</>;

const icon = <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labeledby="svg-title">
  <title id="svg-title">The Okta logo</title>
  <path d="M37.5 25c0 6.904-5.596 12.5-12.5 12.5S12.5 31.904 12.5 25 18.096 12.5 25 12.5 37.5 18.096 37.5 25zM0 25c0 13.807 11.193 25 25 25s25-11.193 25-25S38.807 0 25 0 0 11.193 0 25z" fill="#05F"/>
</svg>;

export default <>
  <Card heading="This is a default card">
    This area is reserved for children. No smoking.
  </Card>
  <br/>
  <Card heading="This card is loading" loading>
    This area is reserved for children. No smoking.
  </Card>
  <br/>
  <Card heading="This card has action" action={<InternalA href="another/place">Go somewhere else</InternalA>}>
    This area is reserved for children. No smoking.
  </Card>
  <br/>

  <h4>Cards should go in grids with gaps or in flex containers</h4>
  <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "minmax(476px,1fr) minmax(476px,1fr)", marginBottom: "1rem" }}>
    <Card heading="Card 1">
      This area is reserved for children. No smoking.
    </Card>
    <Card heading="Card 2" loading>
      This area is reserved for children. No smoking.
    </Card>
  </div>

  <h4>This is an old-style card</h4>
  <OldCard
    title="Computer Overheated!"
    meta="Thermite may have been involved"
    src="https://geoff.greer.fm/photos/thermite/thumbs/P1010014_crop.jpg"
    icon={icon}
    actions={CardActions}>
    This card is about a computer getting thermited.
  </OldCard>
</>;