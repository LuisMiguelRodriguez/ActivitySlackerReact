import axios from 'axios';

export function handleLesson(lesson) {

    console.log(lesson)

    this.setState({
        currentLesson: lesson
    })
}

export function handleWeek(week) {

    this.setState({
        currentWeek: week,
        currentLesson: 'Please Slect a Lesson Above'
    })

    // this.handleHideClick();
}

export function handleFiles() {

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

export function updateActivity(e, data) {

    let activity = data.value;
    this.setState({
        currentActivity: activity
    });

}

export function handleClass(e, data) {

    this.setState({ currentClass: data.value });
    
}
