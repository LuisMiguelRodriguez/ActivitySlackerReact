import React from 'react';
import { storiesOf } from '@storybook/react';
import GitHubIcon from './GitHubIcon';
import SlackIcon from './SlackIcon';
import CustomIcon from './icons';


  storiesOf('Atoms', module)
    .add('GitHubIcon', () => <GitHubIcon/>)
    .add('SlackIcon', () => <SlackIcon/>)
    .add('icons', () => <CustomIcon name={"01-html-git-css"} width={50} />)
