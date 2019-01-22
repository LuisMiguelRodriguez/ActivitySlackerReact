import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBarContent from './SideBarContent';
import activities from '../Main/activities';


  storiesOf('SideBar', module)
    .add('SideBar', () => <SideBarContent activities={activities} visible={true}/>)