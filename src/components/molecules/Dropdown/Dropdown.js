import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connectWithStore } from '../../../store';

const DropdownSelection = (props) => {
  
  const { activities, currentWeek, updateActivity } = props;
  const activs = activities[currentWeek].map(act => ({ text: act, value: act }))

  return (
    <Dropdown placeholder='Select Activity'
      onChange={updateActivity} fluid selection
      options={activs}
      style={{ marginBottom: '20px' }}
    />
  )
}

export default connectWithStore(DropdownSelection);