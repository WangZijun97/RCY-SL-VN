import {faBars, faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import NodeImg from './NodeImg';

const Navbar = (props) => {
    const { isMuted, onMuteToggle, sidebarShown, onSidebarToggle } = props;

    return (<header className="navbar">
        <div className="navbar-left">
            <NodeImg src="sl-gold.png" />
            <div className="title">VIA Adventure</div>
        </div>
        <div className="navbar-right">
            <button className="btn" onClick={onMuteToggle}><FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} /></button>
            <button className={clsx("btn", sidebarShown && "active")} onClick={onSidebarToggle}><FontAwesomeIcon icon={faBars} /></button>
        </div>
    </header>);

}

export default Navbar;
