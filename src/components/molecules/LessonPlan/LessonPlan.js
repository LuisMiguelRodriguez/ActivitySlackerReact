import React, { Component } from 'react'
import { Menu, Segment, Container } from 'semantic-ui-react'
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { connectWithStore } from '../../../store';


class Content extends Component {
    state = {
        activeItem: 'Day # 1 Lesson Plan',
        currentLesson: ''
    }


    handleItemClick = (e, { name, value }) => {
        this.setState({ activeItem: name })


        axios.get('/readLessonPlan', {
            params: {
                link: value
            }
        })
            .then((response) => {
                console.log(response.data);

                this.props.handleLesson(response.data)

            })
            .catch((error) => {
                console.log(error);
            });

    }


    render() {
        const { activeItem } = this.state;
        const { currentWeek, currentLesson } = this.props;

        return (
            <div>
                <Menu attached='top' tabular>
                    <Menu.Item
                        name='Day # 1 Lesson Plan'
                        value={`${currentWeek.slice(0, 2)}-Week/01-Day/01-Day-LessonPlan.md`}
                        active={activeItem === 'Day # 1 Lesson Plan'}
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='Day # 2 Lesson Plan'
                        value={`${currentWeek.slice(0, 2)}-Week/02-Day/02-Day-LessonPlan.md`}
                        active={activeItem === 'Day # 2 Lesson Plan'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Day # 3 Lesson Plan'
                        value={`${currentWeek.slice(0, 2)}-Week/03-Day/03-Day-LessonPlan.md`}
                        active={activeItem === 'Day # 3 Lesson Plan'}
                        onClick={this.handleItemClick}
                    />

                </Menu>

                <Segment as={Container} attached='bottom'>
                    <Markdown>
                        {currentLesson}
                    </Markdown>

                </Segment>
            </div>
        )
    }
}
export default connectWithStore(Content);