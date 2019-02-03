import React, { Component, Fragment } from 'react';
import { Grid, Menu, TextArea, Form } from 'semantic-ui-react';
import FileTable from '../FileTable';
import AsideCTA from '../AsideCTA';

import './activity.css';

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

  handleOnChange = (e) => this.props.handleReadMe(e.target.value)

  render() {

    const { readMe, } = this.props

    return (
      <Fragment>
        <DropdownSelection

        />

        <Grid>
          <Grid.Column stretched width={12}>

            <Form>
              <TextArea autoHeight
                placeholder='placeholder text'
                value={readMe}
                onChange={this.handleOnChange}
              >

              </TextArea>
            </Form>
          </Grid.Column>

          <Grid.Column width={4}>
            <Menu fluid vertical tabular='right' style={{ textAlign: 'left' }}>

              <AsideCTA />

              <Menu.Item name='files'>

                <FileTable />

              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }

}

export default connectWithStore(Activities);