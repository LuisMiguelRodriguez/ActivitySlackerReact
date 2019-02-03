import React, { Component, Fragment } from 'react';
import { Grid, TextArea, Form } from 'semantic-ui-react';
import FileTable from '../../molecules/FileTable';
import AsideCTA from '../../molecules/AsideCTA';

import './activity.css';

import DropdownSelection from '../../molecules/Dropdown';
import { connectWithStore } from '../../../store';


class Activities extends Component {
  state = {
    activeItem: '',
    currentActivity: '',
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

            <AsideCTA />

            <FileTable />

          </Grid.Column>
        </Grid>
      </Fragment >
    )
  }

}

export default connectWithStore(Activities);