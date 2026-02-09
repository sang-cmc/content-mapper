import React from 'react';
import { createRoot } from 'react-dom/client';
import { init, locations } from '@contentful/app-sdk';
import { GlobalStyles } from '@contentful/f36-components';
import Page from './locations/Page';
import ConfigScreen from './locations/ConfigScreen';

init((sdk) => {
  const root = createRoot(document.getElementById('root'));

  if (sdk.location.is(locations.LOCATION_APP_CONFIG)) {
    root.render(
      <>
        <GlobalStyles />
        <ConfigScreen sdk={sdk} />
      </>
    );
  } else if (sdk.location.is(locations.LOCATION_PAGE)) {
    root.render(
      <>
        <GlobalStyles />
        <Page sdk={sdk} />
      </>
    );
  }
});
