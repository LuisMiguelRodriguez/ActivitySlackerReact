import React from 'react';
import { storiesOf } from '@storybook/react';
import LessonPlan from './LessonPlan';
import SideBarContent from './SideBarContent'
import Activities from './Activities';
import { Provider } from '../../store';
import ClassDropDown from './ClassDropDown';
import DropSelection from './Dropdown';
import FileTable from './FileTable';
import AsideCTA from './AsideCTA';

storiesOf('Molecules', module)
    .add('LessonPlan', () => <Provider><LessonPlan /></Provider>)
    .add('SideBar', () => <Provider><SideBarContent visible={true} /></Provider>)
    .add('Activities', () => <Provider><Activities /></Provider>)
    .add('ClassDropDown', () => <ClassDropDown />)
    .add('DropSelection', () => <Provider><DropSelection /></Provider>)
    .add('FileTable', () => <FileTable currentFiles={['ReadMe.MD', 'Solved', 'Unsolved']} />)
    .add('AsideCTA', () => <AsideCTA/>)
