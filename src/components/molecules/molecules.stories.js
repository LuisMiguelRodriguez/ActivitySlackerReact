import React from 'react';
import { storiesOf } from '@storybook/react';
import LessonPlan from './LessonPlan';
import SideBarContent from './SideBarContent'
import Activities from './Activities';
import {Provider} from '../../store';


  storiesOf('Molecules', module)
    .add('LessonPlan', () => <Provider><LessonPlan/></Provider>)
    .add('SideBar', () => <Provider><SideBarContent visible={true}/></Provider>)
    .add('Activities', () => <Provider><Activities/></Provider>)
