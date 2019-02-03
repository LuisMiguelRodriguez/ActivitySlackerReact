import React, { Fragment } from 'react';
import { Header as SemanticHeader} from 'semantic-ui-react'
import CustomIcon from '../../atoms/icons';


function Header(props) {
    return (
        <Fragment>
            <CustomIcon name={props.currentWeek} width={150} />
            <SemanticHeader as='h3' style={{ fontFamily: 'Conv_SqueakyChalkSound' }}>{props.currentWeek}</SemanticHeader>
        </Fragment>
    )
}

export default Header;
