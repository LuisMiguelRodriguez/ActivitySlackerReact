import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownSelection = (props) => {

  const activities = props.activities.map(act => ({ text: act, value: act }))

  return (
    <Dropdown placeholder='Select Activity'
      onChange={props.updateActivity} fluid selection
      options={activities}
      style={{ marginBottom: '20px' }}
    />
  )
}

export default DropdownSelection;