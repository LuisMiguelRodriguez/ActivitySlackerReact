import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from '../../store';
import Main from './main'

storiesOf('Pages', module)
    .add('LessonPlan', () =>  <Provider><Main/></Provider>)
