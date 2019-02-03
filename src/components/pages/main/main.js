import React, { Component } from 'react'
import { Button, Segment, Sidebar, Container } from 'semantic-ui-react'
import LessonPlan from '../../molecules/LessonPlan'
import Activities from '../../organisms/Activities';
import SideBarContent from '../../molecules/SideBarContent';
import Header from '../../molecules/Header';

import { connectWithStore } from '../../../store';

const styles = {
    display: "",
    flexWrap: "wrap",
    fontFamily: 'Conv_SqueakyChalkSound',
    justifyContent: "space-between",
    backgroundColor: "#1b1c1d"
};

class Main extends Component {

    state = {
        visible: false,
    }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {

        const { visible } = this.state;
        const { currentWeek } = this.props;

        return (
            <div style={styles}>

                <SideBarContent
                    handleSidebarHide={this.handleSidebarHide}
                    visible={visible}
                    style={{ height: 'none', maxHeight: 'none' }}

                />

                <Sidebar.Pushable as={Segment} >

                    <Button.Group>
                        <Button disabled={visible} onClick={this.handleShowClick} >
                            Show sidebar
                            </Button>
                        <Button disabled={!visible} onClick={this.handleHideClick}>
                            Hide sidebar
                            </Button>
                    </Button.Group>

                    <Container style={{ height: '100vh' }}>

                        <Sidebar.Pusher dimmed={visible} style={{ height: '100vh' }}>

                            <Segment
                                style={{
                                    height: "450px",
                                    overflow: 'scroll',
                                    fontFamily: 'Conv_SqueakyChalkSound',
                                }}
                                basic >

                                <Header currentWeek={currentWeek}/>
                                <LessonPlan />

                            </Segment>

                            <Activities />

                        </Sidebar.Pusher>

                    </Container>

                </Sidebar.Pushable>

            </div>
        )
    }
}

export default connectWithStore(Main);