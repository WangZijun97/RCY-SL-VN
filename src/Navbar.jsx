import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import NodeImg from './NodeImg';

const Navbar = (props) => {
    const { isMuted, onMuteToggle } = props;

    return (<header class="navbar">
        <div className="navbar-left">
            <NodeImg src="sl-gold.png" />
            <div className="title">VIA Adventure</div>
        </div>
        <div className="navbar-right">
            <a href="https://tinyurl.com/slnotes2020" target="_blank" className="btn">Notes</a>
            <button className="btn" onClick={onMuteToggle}><FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} /></button>
        </div>
    </header>);

}

export default Navbar;
