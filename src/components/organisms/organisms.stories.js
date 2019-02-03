import React from 'react';
import { storiesOf } from '@storybook/react';
import Activities from './Activities';
import { Provider } from '../../store';

storiesOf('Organisms', module)
    .add('Activities', () => <Provider><Activities /></Provider>)
