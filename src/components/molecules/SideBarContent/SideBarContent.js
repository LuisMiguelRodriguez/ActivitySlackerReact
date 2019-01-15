import React from 'react'
import { Menu, Sidebar, Grid } from 'semantic-ui-react'
import CustomIcon from '../../atoms/icons';
import ClassDropDown from '../ClassDropDown';

const SideBarContent = (props) => {

    const { handleSidebarHide, activities, handleClass, handleWeek, visible } = props;

    return (

        <Sidebar
            style={{
                fontFamily: 'Conv_SqueakyChalkSound',
                width: '240px',
            }}
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={visible}
        // width='wide'
        >

            <Menu vertical inverted
                style={{

                    fontFamily: 'Conv_SqueakyChalkSound',

                }}>

                <ClassDropDown handleClass={handleClass} />

                {Object.keys(activities).map((week, index) => (

                    <Menu.Item as='a' key={index} onClick={() => { handleWeek(week) }}>

                        <Grid divided='vertically' textAlign='left'>
                            <Grid.Row columns={2} >
                                <Grid.Column float='left' width='3'>
                                    <CustomIcon name={week} width={25} />
                                </Grid.Column>
                                <Grid.Column float='left' width='12' style={{ lineHeight: '30px' }}>
                                    {week}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Menu.Item>

                ))
                }
            </Menu>

        </Sidebar>
    )

};

export default SideBarContent;