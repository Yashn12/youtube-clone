import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';

function ChannelRow({
    image,
    Channel,
    verified,
    subs,
    noOfVideos,
    description }) {

    return (
        <div className='ChannelRow'>
            <Avatar className="ChannelRow__logo" alt={Channel} src={image} />
            <div className="ChannelRow__text">
                <h4>{Channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
