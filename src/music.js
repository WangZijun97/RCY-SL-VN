export const CROSSFADE_STEP_SIZE = 0.02;

const createHTMLAudioElement = (fileName) => {
    const el = new Audio(`${process.env.PUBLIC_URL}/bgm/${fileName}`);
    el.loop = true;
    return el;
}

export const musicStates = {
    START: 'start',
    PLAYING: 'playing',
    MUTED: 'muted',
    CROSSFADING: 'cross-fading',
    CROSSFADED: 'cross-faded',
    FADING_IN: 'fading in',
    FADING_OUT: 'fading out',
    FADED_OUT: 'faded out',
}

// active and next[...] are instances of HTMLAudioElement
export const initialMusic = {
    state: musicStates.START,
    active: createHTMLAudioElement('tunak.mp3'),
    fadeOut: [],
    fadeProgress: 1, // varies from 0 to 1
}

export const actionTypes = {
    PLAY: 'PLAY',
    MUTE: 'MUTE',
    PAUSE: 'PAUSE',
    CHANGE: 'CHANGE',
    CLEANUP_CHANGE: 'CLEANUP_CHANGE',
    EVOLVE: 'EVOLVE', // for the state to evolve during crossfade
}

export const musicStateReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.PLAY:
            return {
                state: musicStates.FADING_IN,
                active: state.active,
                fadeOut: [],
                fadeProgress: 1 - state.fadeProgress,
            };

        case actionTypes.MUTE:
            state.active.amplitude = state.active.volume;

            return {
                state: musicStates.FADING_OUT, 
                active: state.active, 
                fadeOut: [], 
                fadeProgress: 1 - state.fadeProgress,
            };

        case actionTypes.PAUSE:
            return {
                state: musicStates.MUTED,
                active: state.active,
                fadeOut: [],
                fadeProgress: 1,
            };

        case actionTypes.CHANGE:
            if (state.active.src === action.payload.src) return state;
            state.fadeOut.forEach((audio) => { audio.amplitude = audio.volume });
            state.active.amplitude = state.active.volume;

            return {
                state: musicStates.CROSSFADING,
                active: action.payload,
                fadeOut: [...state.fadeOut, state.active],
                fadeProgress: 0,
            };

        case actionTypes.CLEANUP_CHANGE:
            return {
                state: musicStates.PLAYING,
                active: state.active,
                fadeOut: [],
                fadeProgress: 1,
            }

        default: {
            // evolution
            const oldProgress = state.fadeProgress;
            if (oldProgress === 1) return state;

            const newProgress = Math.min(oldProgress + action.payload, 1);

            let newState;

            if (newProgress !== 1) {
                newState = state.state;
            } else if (state.state === musicStates.FADING_OUT) {
                newState = musicStates.FADED_OUT;
            } else if (state.state === musicStates.FADING_IN) {
                newState = musicStates.PLAYING;
            } else {
                newState = musicStates.CROSSFADED;
            }

            return {
                state: newState,
                active: state.active,
                fadeOut: state.fadeOut,
                fadeProgress: newProgress
            };
        }
    }
}

export const createPlayAction = () => ({ type: actionTypes.PLAY });
export const createMuteAction = () => ({ type: actionTypes.MUTE });
export const createPauseAction = () => ({ type: actionTypes.PAUSE });
export const createEvolveAction = (stepSize = CROSSFADE_STEP_SIZE) => ({ type: actionTypes.EVOLVE, payload: stepSize });
export const createChangeAction = (fileName) => ({ type: actionTypes.CHANGE, payload: createHTMLAudioElement(fileName) });
export const createPostChangeAction = () => ({ type: actionTypes.CLEANUP_CHANGE });
