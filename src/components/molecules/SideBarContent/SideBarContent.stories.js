import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBarContent from './SideBarContent';
import { Provider } from '../../../store';


storiesOf('SideBar', module)
  .add('SideBar', () => <Provider><SideBarContent visible={true}/></Provider>)