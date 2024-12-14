import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
// import NightlifeIcon from '@mui/icons-material/Nightlife';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import './SidebarRow.css'

function SidebarRow({selected , Icon, title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow__icon"/>
        
      <h2 className="sidebarRow__title">{title}</h2>
      
    </div>
  )
}

export default SidebarRow
