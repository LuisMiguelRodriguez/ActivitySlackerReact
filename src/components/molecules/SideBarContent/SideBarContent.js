import React, { Component } from 'react';
import { Menu, Sidebar, Grid } from 'semantic-ui-react'
import CustomIcon from '../../atoms/icons';
import ClassDropDown from '../ClassDropDown';
import { connectWithStore } from '../../../store';


class SideBarContent extends Component {
    state = {};


    render() {

        const { activities, handleClass, handleWeek, visible , handleSidebarHide} = this.props;

        return (

            <Sidebar
                style={{
                    fontFamily: 'Conv_SqueakyChalkSound',
                    width: '300px',
                    height: 'none !important',
                    maxHeight: 'none'
                }}

                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={handleSidebarHide}
                vertical
                visible={visible}
            >

                <Menu vertical inverted
                    style={{

                        fontFamily: 'Conv_SqueakyChalkSound',
                        fontSize: '1.25rem'

                    }}>

                    <Menu.Item as='a' style={{ width: '310px' }} >
                        <ClassDropDown handleClass={handleClass} />
                    </Menu.Item>

                    {Object.keys(activities).map((week, index) => (

                        <Menu.Item as='a' key={index} style={{ width: '310px' }}
                            onClick={() => { 
                                handleWeek(week) 
                                handleSidebarHide();
                                }}>

                            <Grid divided='vertically' textAlign='left'>
                                <Grid.Row columns={2} >
                                    <Grid.Column float='left' width='3'>
                                        <CustomIcon name={week} width={50} />
                                    </Grid.Column>
                                    <Grid.Column float='left' width='12' style={{ lineHeight: '70px', marginLeft: '10px', marginRight: '0px' }}>
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
    }
}

export default connectWithStore(SideBarContent);