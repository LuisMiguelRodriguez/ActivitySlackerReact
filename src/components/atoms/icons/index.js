import React from "react";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";
import Jquery from './Jquery';
import Timers from './Timers';
import Ajax from './Ajax';
import Firebase from './Firebase';
import Nodejs from './Nodejs';
import JsConstructors from './JsConstructors';
import Mysql from './Mysql';
import Express from './Express';
import Handlebars from './Handlebars';
import Sequelize from './Sequelize';
import Testing from './Testing';
import Mongo from './Mongo';
import ReactJs from './React';
import ComputerScience from './ComputerScience';
import OtherLanguages from './OtherLanguages';

const Icon = props => {
  switch (props.name) {
    case "01-html-git-css":
      return <Html {...props} />;
    case "02-css-bootstrap":
      return <Css {...props} />;
    case "03-javascript":
      return <Javascript {...props} />;
    case "04-jquery":
      return <Jquery {...props} />;
    case "05-timers":
      return <Timers {...props} />;
    case "06-ajax":
      return <Ajax {...props} />;
    case "07-firebase":
      return <Firebase {...props} />;
    case "10-nodejs":
      return <Nodejs {...props} />;
    case "11-js-constructors":
      return <JsConstructors {...props} />;
    case "12-mysql":
      return <Mysql {...props} />;
    case "13-express":
      return <Express {...props} />;
    case "14-handlebars":
      return <Handlebars {...props} />;
    case "15-sequelize":
      return <Sequelize {...props} />;
    case "16-testing":
      return <Testing {...props} />;
    case "18-mongo-mongoose":
      return <Mongo {...props} />;
    case "19-react":
      return <ReactJs {...props} />;
    case "20-react":
      return <ReactJs {...props} />;
    case "22-computer-science":
      return <ComputerScience {...props} />;
    case "23-other-languages":
      return <OtherLanguages {...props} />;
  
    default:
      return;
  }
};



export default Icon;
