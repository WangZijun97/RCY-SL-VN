import React from 'react';
import './App.css';
import Game from './Game.js';
import {createChangeAction, createEvolveAction, createMuteAction, createPauseAction, createPlayAction, createPostChangeAction, CROSSFADE_STEP_SIZE, initialMusic, musicStateReducer, musicStates} from './music';
import Navbar from './Navbar';

const FADE_DURATION_IN_MS = 500;

function App() {
    const [audioState, audioDispatch] = React.useReducer(musicStateReducer, initialMusic)

    const handleMuteToggle = () => {
        if (audioState.state === musicStates.MUTED) {
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

    React.useEffect(() => {
        const interval = setInterval(() => {
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
            <Navbar isMuted={audioState.state === musicStates.MUTED} onMuteToggle={handleMuteToggle} />
            <div className="App App-header">
                <Game audioState={audioState} onMusicChange={handleMusicChange} isMuted={audioState.state === musicStates.MUTED} />
            </div>
        </React.Fragment>
    );
}

export default App;
