import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
// import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import profile from "./images/profile.jpg";
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    const handleMicClick = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.lang = 'en-US'; // Language setting, change if needed
            recognition.interimResults = false; // Final results only

            recognition.onstart = () => {
                console.log("Voice recognition started");
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log("Transcript:", transcript);
                setInputSearch(transcript); // Set the recognized text into the input
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
            };

            recognition.onend = () => {
                console.log("Voice recognition ended");
            };

            recognition.start(); // Start recognition
        } else {
            alert("Speech recognition not supported in this browser. Please try Google Chrome.");
        }
    };





    return (
        <div className="header">
            <div className="header__left">

                <MenuIcon className='menuicon' />
                <Link to="/">

                    <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" alt="" />
                </Link>
            </div>
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />

                </Link>

                <MicIcon onClick={handleMicClick} className="header__micButton" />

                {/* <MicIcon /> */}
            </div>


            <div className="header__iconw">

                <VideoCallIcon className='header__icon' />
                {/* <AppsIcon/> */}
                <NotificationsIcon />
                <PersonPinIcon alt="Remy Sharp" src={profile} />
            </div>

        </div>
    )
}

export default Header


