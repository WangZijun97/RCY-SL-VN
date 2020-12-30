import React from 'react';
import './App.css';
import Game from './Game.js';
import {checkIsMuted, createChangeAction, createDisableAction, createEvolveAction, createMuteAction, createPauseAction, createPlayAction, createPostChangeAction, CROSSFADE_STEP_SIZE, initialMusic, musicStateReducer, musicStates} from './music';
import Navbar from './Navbar';

const FADE_DURATION_IN_MS = 500;

function App() {
    const [audioState, audioDispatch] = React.useReducer(musicStateReducer, initialMusic)
    const [sidebarShown, setSidebarShown] = React.useState(() => {
        return window.innerWidth >= 960
    })

    const handleMuteToggle = () => {
        if (!audioState.active) return;
        if (checkIsMuted(audioState.state)) {
            audioState.active.play();
            audioDispatch(createPlayAction());
        } else {
            audioState.active.pause();
            audioDispatch(createMuteAction());
        }
    }

    const handleMusicChange = (fileName) => {
        audioDispatch(createChangeAction(fileName));
    }

    const handleMusicDisable = () => {
        audioDispatch(createDisableAction());
    }

    const handleSidebarToggle = () => {
        setSidebarShown(!sidebarShown);
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!audioState.active) return;
            audioDispatch(createEvolveAction());

            switch (audioState.state) {
                case musicStates.FADING_IN:
                    audioState.active.volume = Math.sin(audioState.fadeProgress * Math.PI / 2);
                    break;

                case musicStates.FADING_OUT:
                    audioState.active.volume = audioState.active.amplitude * Math.cos(audioState.fadeProgress * Math.PI / 2);
                    break;

                case musicStates.FADED_OUT:
                    audioState.active.pause();
                    audioState.fadeOut.forEach((audio) => { audio.pause() });
                    audioDispatch(createPauseAction());
                    break;

                case musicStates.CROSSFADING:
                    audioState.active.play();
                    audioState.active.volume = Math.sin(audioState.fadeProgress * Math.PI / 2);
                    audioState.fadeOut.forEach((audio) => {
                        audio.volume = audio.amplitude * Math.cos(audioState.fadeProgress * Math.PI / 2);
                    })
                    break;

                case musicStates.CROSSFADED:
                    audioState.active.play();
                    audioState.fadeOut.forEach((audio) => { audio.pause() });
                    audioDispatch(createPostChangeAction());
                    break;

                default:
                    break;
            }
        }, FADE_DURATION_IN_MS * CROSSFADE_STEP_SIZE);

        return () => clearInterval(interval);
    }, [audioDispatch, audioState])

    return (
        <React.Fragment>
            <Navbar isMuted={checkIsMuted(audioState.state)} onMuteToggle={handleMuteToggle} sidebarShown={sidebarShown} onSidebarToggle={handleSidebarToggle} />
            <div className="App App-header">
                <Game audioState={audioState} onMusicChange={handleMusicChange} onMusicDisable={handleMusicDisable} sidebarShown={sidebarShown} onSidebarChange={setSidebarShown} />
            </div>
        </React.Fragment>
    );
}

export default App;
