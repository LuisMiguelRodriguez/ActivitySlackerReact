import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const stateOptions = [ 
{ key: 'All Classes', value: 1, text: 'All Classes' },
{ key: 'Mon / Wed', value: 2, text: 'Mon / Wed' },
{ key: 'Tue / Thu', value: 3, text: 'Tue / Thu' },
{ key: 'Testing', value: 4, text: 'Testing' },  ]

const ClassDropDown = ( props ) => (
  <Dropdown placeholder='State' search selection options={stateOptions} onChange={props.handleClass } />
)

export default ClassDropDown;