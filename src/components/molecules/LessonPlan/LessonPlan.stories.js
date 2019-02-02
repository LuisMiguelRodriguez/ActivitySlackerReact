import React from 'react';
import { storiesOf } from '@storybook/react';
import LessonPlan from './LessonPlan';
import {Provider} from '../../../store';


  storiesOf('LessonPlan', module)
    .add('LessonPlan', () => <Provider><LessonPlan/></Provider>);