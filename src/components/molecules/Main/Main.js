import React, { Component } from 'react'
import { Button, Header, Segment, Sidebar, Container } from 'semantic-ui-react'
import LessonPlan from '../LessonPlan';
import Activities from '../Activities';
import activities from './activities';
import axios from 'axios';
import SideBarContent from '../SideBarContent';
import CustomIcon from '../../atoms/icons';

const styles = {
    display: "",
    flexWrap: "wrap",
    // alignItems: "center",
    fontFamily: 'Conv_SqueakyChalkSound',
    justifyContent: "space-between",
    backgroundColor: "#1b1c1d"
};

export default class SidebarExampleDimmed extends Component {

    state = {
        visible: false,
        activities: activities,
        currentWeek: "01-html-git-css",
        currentActivity: '',
        currentLesson: 'Please Slect a Lesson Above',
        currentFiles: [],
        currentClass: ''
    }


    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    handleWeek = (week) => {

        this.setState({
            currentWeek: week,
            currentLesson: 'Please Slect a Lesson Above'
        })

        this.handleHideClick();
    }

    handleLesson = (lesson) => {

        this.setState({
            currentLesson: lesson
        })
    }

    handleFiles = () => {

        let link = `/01-Class-Content/${this.state.currentWeek}/01-Activities/${this.state.currentActivity}/README.md`
        let activity = `${this.state.currentActivity}`

        axios.get('files', {
            params: {
                link,
                activity,
            }
        })
            .then((response) => {

                let files = response.data.files;

                this.setState({
                    currentFiles: files
                })

            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateActivity = (e, data) => {

        let activity = data.value;
        this.setState({
            currentActivity: activity
        }, () => this.handleFiles());

    }

    handleClass = (e, data) => this.setState({ currentClass: data.value })

    render() {

        const {
            visible,
            currentWeek,
            currentLesson,
            currentActivity,
            currentFiles,
            activities,
            currentClass
        } = this.state;

        return (
            <div style={styles}>

                <Sidebar.Pushable as={Segment}>

                    <SideBarContent
                        handleSidebarHide={this.handleSidebarHide}
                        handleWeek={this.handleWeek}
                        handleClass={this.handleClass}
                        visible={this.state.visible}
                        activities={activities}
                    />

                    <Button.Group>
                        <Button disabled={visible} onClick={this.handleShowClick}>
                            Show sidebar
                            </Button>
                        <Button disabled={!visible} onClick={this.handleHideClick}>
                            Hide sidebar
                            </Button>
                    </Button.Group>

                    <Container style={{ height: '100vh' }}>

                        <Sidebar.Pusher dimmed={visible}>

                            <Segment
                                style={{
                                    height: "450px",
                                    overflow: 'scroll',
                                    fontFamily: 'Conv_SqueakyChalkSound',
                                }}
                                basic >

                                <CustomIcon name={this.state.currentWeek} width={150} />
                                <Header as='h3' style={{fontFamily: 'Conv_SqueakyChalkSound'}}>{currentWeek}</Header>

                                <LessonPlan
                                    handleLesson={this.handleLesson}
                                    currentWeek={currentWeek}
                                    currentLesson={currentLesson}
                                />

                            </Segment>

                            <Activities
                                handleFiles={this.handleFiles}
                                updateActivity={this.updateActivity}
                                currentWeek={currentWeek}
                                activities={activities[currentWeek]}
                                currentActivity={currentActivity}
                                currentFiles={currentFiles}
                                currentClass={currentClass}
                            />

                        </Sidebar.Pusher>

                    </Container>

                </Sidebar.Pushable>

            </div>
        )
    }
}