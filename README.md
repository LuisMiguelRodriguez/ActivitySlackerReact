
# ActivitySlacker

## Gif Preview

![Demo Gif](/images/ActivitySlackerReact.gif)

## Current StorybookJS Link
[https://luismiguelrodriguez.github.io/ActivitySlackerReact/](https://luismiguelrodriguez.github.io/ActivitySlackerReact/)


## Author
  - [Luis Rodriguez](https://github.com/LuisMiguelRodriguez)( Full Stack )


## Description
  ActivitySlacker is an interface that works with a local repository which holds lesson plans and activities that is also integrated with slack to provide an interactive class room experience.

## Current Features
- Currently only works with 3 Lessons per Subject
- access Lesson 3 lessons per subject
- access readme files for activities
- Slack readme files into a channel
- ability to edit readme file before slacking
- upload unsolved folder for the activity
- upload solved folder for the activity
- add solved folder to a designated github repo which 
  automatically gets pushed to github

## Future Features
- 5 Lessons per subject

## Installation 

1 - Create a slack app @ [Slack](https://api.slack.com/apps/new)
  - You will need to choose the slack workspace at where you could like use the app and you will also need to name it.
  - Set permissions 
    - click add features and functionality
    - click Permissions
    - scroll down to Scopes
    - In the drop you need to select the following
      - Under Conversations choose: Send messages as user
      - Under Conversations choose: Post to specific channels in Slack
      - Under Files choose: Upload and modify files as user
  - Click Save Changes
  - @ the top of the page click Install App to workspace
    - choose #_all to install the app to
    - now you will be given an OAuth Access Token
  - Now you can place the Token in your .env file 
    ```
    TOKEN=[Your new Token]
    ```

2 - Finish setting up your .env
  - In the .env file set the following
    ```
    TRILOGY_DIR=[Absolute Path to Trilogy's Repo]
    STUDENT_REPO=[Absolute Path to Student Facing Repo]
    ```
3 - Test App and Enjoy !


## Technologies Used

  ### Front-end  
  - ReactJS
  - Semantic-UI

  ### Back-end
  - Nodejs

  ### Database
  - Local File System

  ### Testing
  - StorybookJS

  ### Deployment
  - Local (Copyrighted Material)

## Available Scripts

In the project directory, you can run:

### `npm run Dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run storybook`

Runs a local instance of storybookjs.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


---
## License & Copyright
© Luis Miguel Rodriguez 

