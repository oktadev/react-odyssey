import React from 'react';

import { Tabs } from '../components/Tab';

export default <Tabs id="example-tabs" selectedId="tab-2" ariaLabel="Describes the purpose of the tabs.">
  <Tabs.Panel id="tab-1" label="Tab One">TabPanel One Content</Tabs.Panel>
  <Tabs.Panel id="tab-2" label="Tab Two">TabPanel Two Content</Tabs.Panel>
  <Tabs.Panel id="tab-3" label="Tab Three">TabPanel Three Content</Tabs.Panel>
  <Tabs.Panel id="tab-4" label="Tab Four">TabPanel Four Content</Tabs.Panel>
</Tabs>;
