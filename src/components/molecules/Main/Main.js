import React, { Component } from 'react'
import { Button, Header, Segment, Sidebar } from 'semantic-ui-react'
import LessonPlan from '../LessonPlan';
import Activity from '../Activity';
import DropdownSelection from '../Dropdown';
import activities from './activities';
import axios from 'axios';
import SideBarContent from '../SideBarContent';

const styles = {
    display: "",
    flexWrap: "wrap",
    // alignItems: "center",
    fontFamily: 'Conv_SqueakyChalkSound',
    justifyContent: "space-between",
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
        const { visible } = this.state

        return (
            <div style={styles}>
                <Sidebar.Pushable as={Segment}>
                    
                    <SideBarContent
                        handleSidebarHide={this.handleSidebarHide}
                        handleClass={this.handleClass}
                        activities={this.state.activities}
                        handleWeek={this.handleWeek}
                        visible={this.state.visible}
                    />
                  
                        <Button.Group>
                            <Button disabled={visible} onClick={this.handleShowClick}>
                                Show sidebar
                            </Button>
                            <Button disabled={!visible} onClick={this.handleHideClick}>
                                Hide sidebar
                            </Button>
                        </Button.Group>


                        <Sidebar.Pusher dimmed={visible}>

                            <Segment style={{
                                height: "450px",
                                overflow: 'scroll'
                            }} basic >
                                <Header as='h3'>{this.state.currentWeek}</Header>

                                <LessonPlan
                                    currentWeek={this.state.currentWeek}
                                    handleLesson={this.handleLesson}
                                    currentLesson={this.state.currentLesson}

                                />


                            </Segment>

                            <DropdownSelection
                                activities={this.state.activities[this.state.currentWeek]}
                                updateActivity={this.updateActivity}
                                handleFiles={this.handleFiles} />
                            <Activity
                                currentWeek={this.state.currentWeek}
                                activities={this.state.activities}
                                currentActivity={this.state.currentActivity}
                                currentFiles={this.state.currentFiles}
                                currentClass={this.state.currentClass}

                            />



                        </Sidebar.Pusher>
         

                </Sidebar.Pushable>
            </div>
        )
    }
}