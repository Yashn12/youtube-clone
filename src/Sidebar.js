import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import WifiIcon from '@mui/icons-material/Wifi';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={PlaylistPlayIcon} title="Playlists" />
      <SidebarRow Icon={OndemandVideoIcon} title="Videos" />
      <SidebarRow Icon={GolfCourseIcon} title="Your Course" />
      <SidebarRow Icon={AccessTimeIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpIcon} title="Likes" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="Show more" />
      <hr />
      <SidebarRow Icon={ShoppingCartCheckoutIcon} title="Shopping" />
      <SidebarRow Icon={MusicNoteIcon} title="Music" />
      <SidebarRow Icon={MovieFilterIcon} title="Movie" />
      <SidebarRow Icon={WifiIcon} title="Live" />
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={DryCleaningIcon} title="Fashion & Beauty" />
      {/* <SidebarRow Icon={KeyboardArrowDownIcon} title="Show more" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="Show more" /> */}
      <SidebarRow Icon={SettingsIcon} title="Settings" />
      
    </div>
  )
}

export default Sidebar














