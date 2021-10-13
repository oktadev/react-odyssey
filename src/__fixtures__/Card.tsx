import React from 'react';

import { Card } from '../Card';
import { Button } from '../components/Button';


const CardActions = <>
  <Button isSecondary isDanger>Oh no!</Button>
  <Button>Cool!</Button>
</>;

const icon = <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labeledby="svg-title">
  <title id="svg-title">The Okta logo</title>
  <path d="M37.5 25c0 6.904-5.596 12.5-12.5 12.5S12.5 31.904 12.5 25 18.096 12.5 25 12.5 37.5 18.096 37.5 25zM0 25c0 13.807 11.193 25 25 25s25-11.193 25-25S38.807 0 25 0 0 11.193 0 25z" fill="#05F"/>
</svg>;

export default <Card
  title="Computer Overheated!"
  meta="Thermite may have been involved"
  src="https://geoff.greer.fm/photos/thermite/thumbs/P1010014_crop.jpg"
  icon={icon}
  actions={CardActions}>
  This card is about a computer getting thermited.
</Card>;