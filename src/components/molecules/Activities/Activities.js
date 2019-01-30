import React, { Component, Fragment } from 'react';
import { Grid, Menu, TextArea, Form } from 'semantic-ui-react';
import axios from 'axios';
import FileTable from '../FileTable';
import './activity.css';
import SlackIcon from '../../atoms/SlackIcon';
import GitHubIcon from '../../atoms/GitHubIcon';

import DropdownSelection from '../Dropdown';
import { connectWithStore } from '../../../store';


class Activities extends Component {
  state = {
    activeItem: '',
    currentActivity: '',
    currentReadMe: ''
  }

  componentDidUpdate(prevProps) {

    if (this.props.currentActivity !== prevProps.currentActivity) {
      this.props.handleFiles();
    }

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleOnChange = (e) => this.setState({ currentReadMe: e.target.value })

  getReadme = (e, { name }) => {
    console.log(name)
    console.log('hi from get readme method')

    let link = `/01-Class-Content/${this.props.currentWeek}/01-Activities/${this.props.currentActivity}/README.md`
    let activity = `${this.props.currentActivity}`
    console.log('link: ', link);
    console.log('activity: ', activity);

    this.handleItemClick(e, { name: name });

    axios.get('readMe', {
      params: {
        link,
        activity,
      }
    })
      .then((response) => {
        console.log(response.data);
        var readme = response.data.data
        this.setState({
          currentReadMe: readme
        })
      })
      .catch((error) => {
        console.log(error);
      });

  }

  slackReadme = (e, { name }) => {

    this.handleItemClick(e, { name: name });

    console.log(this.props.currentClass);

    axios.post('/slack', {
      readme: this.state.currentReadMe,
      classChosen: this.props.currentClass
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))

  }

  slackUnsolved = (e, { name }) => {

    this.handleItemClick(e, { name: name });

    let dir = `01-Class-Content/${this.props.currentWeek}/01-Activities/${this.props.currentActivity}`
    console.log('this.props.currentActivity from React ', this.props.currentActivity)
    axios.post('/unsolved', {
      dir,
      activity: this.props.currentActivity,
      classChosen: this.props.currentClass
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  slackSolved = (e, { name }) => {

    this.handleItemClick(e, { name: name });

    let dir = `01-Class-Content/${this.props.currentWeek}/01-Activities/${this.props.currentActivity}`

    axios.post('/solved', {
      dir,
      activity: this.props.currentActivity,
      classChosen: this.props.currentClass
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  }

  gitSolved = (e, { name }) => {

    this.handleItemClick(e, { name: name });

    let dir = `01-Class-Content/${this.props.currentWeek}/01-Activities/${this.props.currentActivity}/Solved`

    axios.post('/git', {
      dir,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }

  render() {
    const { activeItem } = this.state

    const { activities,
      updateActivity,
      handleFiles,
      currentWeek,
      currentFiles
    } = this.props;

    return (
      <Fragment>
        <DropdownSelection
          activities={activities[currentWeek]}
          updateActivity={updateActivity}
          handleFiles={handleFiles}

        />

        <Grid>
          <Grid.Column stretched width={12}>

            <Form>
              <TextArea autoHeight
                placeholder='placeholder text'
                value={this.state.currentReadMe}
                onChange={this.handleOnChange}
              >

              </TextArea>
            </Form>
          </Grid.Column>

          <Grid.Column width={4}>
            <Menu fluid vertical tabular='right' style={{ textAlign: 'left' }}>
              <Menu.Item
                name='getReadme'
                active={activeItem === 'getReadme'}
                onClick={this.getReadme}
              />
              <Menu.Item name='slackReadme' active={activeItem === 'slackReadme'} onClick={this.slackReadme} >
                <span className='slackButtonDescription'>
                  <SlackIcon />
                  Slack Readme
              </span>
              </Menu.Item>
              <Menu.Item name='slackUnsolved' active={activeItem === 'slackUnsolved'} onClick={this.slackUnsolved} >

                <SlackIcon />

                <span className='slackButtonDescription'>
                  Slack Unsolved
              </span>
              </Menu.Item>
              <Menu.Item name='slackSolved' active={activeItem === 'slackSolved'} onClick={this.slackSolved} >
                <SlackIcon />

                <span className='slackButtonDescription'>
                  Slack Solved
              </span>
              </Menu.Item>

              <Menu.Item name='gitSolved' active={activeItem === 'gitSolved'} onClick={this.gitSolved} >

                <GitHubIcon />

                <span className='slackButtonDescription'>
                  Solved
                  </span>
              </Menu.Item>

              <Menu.Item name='files'>

                <FileTable currentFiles={currentFiles} />

              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }

}

export default connectWithStore(Activities);