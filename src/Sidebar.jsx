import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {getCadetGoalTitleAndEntry, getChitChatTitleAndEntry, getDebriefTitleAndEntry, getLocationChoiceText, getNcoGoalTitleAndEntry, getNcoRnGTitleAndEntry, getResearchTitleAndEntry} from './analysis';
import './sidebar.css';
import {SimpleEntry} from './timeline';

const Sidebar = (props) => {
    const { sidebarShown, flags, volume, onVolumeChange, isMuted, onMuteToggle } = props;

    const handleVolumeChange = (event) => {
        onVolumeChange(event.target.value);

        if (isMuted && event.target.value > 0) {
            onMuteToggle()
        }
    }

    const handleMuteToggle = () => {
        if (!isMuted && volume < 1) onVolumeChange(70);
        else onMuteToggle();
    }

    return (<div className={clsx("sidebar", sidebarShown && "active")}>
            <a href="https://tinyurl.com/slnotes2020" target="_blank" rel="noreferrer" className="btn">SL Notes</a>
            <div className="volume-control">
                <button className="icon-btn" onClick={handleMuteToggle}><FontAwesomeIcon icon={(isMuted || volume < 1) ? faVolumeMute : faVolumeUp} size="lg" /></button>
                <div className="slider-container">
                    <input type="range" name="Volume" min="0" max="100" className="slider" value={isMuted ? 0 : volume} onChange={handleVolumeChange} />
                </div>
                <div className="volume-number">{isMuted ? 0 : volume}</div>
            </div>
            <div className="analysis">
                <h5>Major Decisions Made</h5>
                <div className="timeline">
                    <SimpleEntry>Start</SimpleEntry>
                    {flags.name === "default" || <SimpleEntry>{getLocationChoiceText(flags.name)[0]}</SimpleEntry>}
                    {flags.decisionVisibility.ncogoal && <SimpleEntry>{getNcoGoalTitleAndEntry(flags.ncogoal)[0]}</SimpleEntry>}
                    {flags.decisionVisibility.research && <SimpleEntry>{getResearchTitleAndEntry(flags.research)[0]}</SimpleEntry>}
                    {flags.activity && <SimpleEntry>Your unit chose to {flags.activity}.</SimpleEntry>}
                    {flags.sessions && <SimpleEntry>Your unit chose to have {flags.sessions}.</SimpleEntry>}
                    {flags.decisionVisibility.rolesandgoals && <SimpleEntry>{getNcoRnGTitleAndEntry(flags.rolesandgoals)[0]}</SimpleEntry>}
                    {flags.decisionVisibility.cadetgoal && <SimpleEntry>{getCadetGoalTitleAndEntry(flags.cadetgoal)[0]}</SimpleEntry>}
                    {flags.result === null || <SimpleEntry>{getChitChatTitleAndEntry(flags.activity, flags.finalChitChat)[0]}</SimpleEntry>}
                    {flags.decisionVisibility.debrief && <SimpleEntry>{getDebriefTitleAndEntry(flags.debrief)[0]}</SimpleEntry>}
                </div>
            </div>
    </div>)
}

export default Sidebar;
