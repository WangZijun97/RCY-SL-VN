import React from 'react'
import consts from '../consts'
import Dialogue from '../convo/Dialogue'
import ncoDebriefConvo, {ncoDebriefConvoFunc} from '../convo/ncoDebrief'
import vagueCadetDebriefConvos from '../convo/vagueCadetDebrief'
import NodeImg from '../NodeImg'

const reflectArcNodes = {

    "R1": {
        bgm: 'watashi-no-uso.mp3',
        text: "The VIA has ended and you are waiting for the bus to arrive. What do you want to do?",
        option: [
            {
                text: "Conduct FA(S) training refresher for next week's accreds",
                next: "R1.5",
            },
            {
                text: "Play Among Us with your cadets",
                next: "R1.5"
            },
            {
                text: "Just chit-chat with your cadets",
                next: "R1.5"
            },
            {
                text: "Conduct a debrief session with NCOs first",
                next: "R1.5",
                fx: (flags) => { 
                    flags.debrief = consts.debrief.NCO;
                }
            },
            {
                text: "Get the NCOs to conduct a debrief session with the cadets first",
                next: "R1.5",
                fx: (flags) => {
                    flags.debrief = consts.debrief.CADET;
                }
            }
        ]
    },

    "R1.5": {
        text: "Are you sure about that? The bus is coming really soon and you only have time for one thing...",
        option: [
            {
                text: "Yes",
                next: (flags) => {
                    switch (flags.debrief) {
                        case consts.debrief.NCO:
                            return "R5";
                        case consts.debrief.CADET: 
                            return "R6";
                        default:
                            return "R2";
                    }
                },
            },
            {
                text: "Let me choose something else (back)",
                next: "R1",
                fx: (flags) => { 
                    flags.debrief = "";
                }
            }
        ]
    },

    "R2": {
        text: "You carry on with that until the bus comes.",
        option: [{
            text: "Continue",
            next: "R4"
        }]
    },

    "R3": {
        bgm: 'only-time.mp3',
        img: (<NodeImg src="sunset.jpg" />),
        text: "The cadets were immediately dismissed when you reached school. No debrief means no reflection forms for SL badges means one angry YO >:(",
        option: [{
            text: "Oh well...",
            next: "END",
            fx: (flags) => flags.decisionVisibility.debrief = true,
        }]
    },

    "R4": {
        text: "The bus is here to take the cadets back!",
        option: [
            {
                text: "Guess we are done today!",
                next: "END",
                fx: (flags) => flags.decisionVisibility.debrief = true,
            },
            {
                text: "We can still debrief the cadets back in school",
                next: "R3",
                condition: (flags) => flags.debrief === consts.debrief.NCO,
                fx: (flags) => { flags.noTimeToDebriefCadets = true },
            },
            {
                text: "We can still debrief the NCOs back in school after dismissal",
                next: "R5",
                condition: (flags) => flags.debrief === consts.debrief.CADET,
                fx: (flags) => flags.debrief = consts.debrief.BOTH
            }]
    },

    "R5": {
        text: "You are about to conduct a debrief with your NCOs",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.ncogoal === consts.ncogoals.NONE) {
                    return "R7"
                } else if (flags.ncogoal === consts.ncogoals.VI) {
                    return "R8"
                } else if (flags.ncogoal === consts.ncogoals.NOT_SPECIFIC) {
                    return "R9"
                } else if (flags.ncogoal === consts.ncogoals.NCO) {
                    return "R10"
                }
            }
        }]
    },

    "R6": {
        text: "Your NCOs are about to conduct a debrief with your cadets",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.cadetgoal === consts.cadetgoal.NONE) {
                    return "R12"
                } else if (flags.cadetgoal === consts.cadetgoal.NCO) {
                    return "R13"
                } else if (flags.cadetgoal === consts.cadetgoal.GOOD) {
                    return "R14"
                } else if (flags.cadetgoal === consts.cadetgoal.BAD) {
                    return "R15"
                }
            }
        }]
    },

    "R7": {
        img: (<NodeImg ext="https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg" />), 
        text: () => (<React.Fragment>
            <p>Your NCOs are very confused about what they need to debrief about... What are goals? {"\u53EF\u4EE5\u5403\u7684\u5417?"} (translator note: can this be eaten?)</p>
            <p className="informative">[You did not set goals with the NCOs.]</p>
        </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R8": {
        text: "Your NCOs tell you that they have put in their best and have learnt more about the stories, but they ask you why is there a need to even learn about the stories of the beneficaries.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R9": {
        img: (<NodeImg src="bad-nco-reflection.png" />),
        text: "Your NCOs tell you that they have learnt a lot about how to plan.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R10": {
        text: (<Dialogue
            speakerClass="nco-speech"
            convos={ncoDebriefConvo}
            name="NCO Sarah"
            availableQnGetter={ncoDebriefConvoFunc}
        />),
        option: [
            {
                text: "Fast forward to the end of the debrief and debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "Fast forward to the end of the debrief",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R12": {
        img: (<NodeImg ext="https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg" />), 
        text: () => (<React.Fragment>
            <p>Your cadets are very confused about what they need to debrief about... What are goals? {"\u53EF\u4EE5\u5403\u7684\u5417?"} (translator note: can this be eaten?)</p>
            <p className="informative">[Your NCOs did not set goals with the cadets.]</p>
        </React.Fragment>),
        option: [{
            text: "Oh dear",
            next: "R4"
        }]
    },

    "R13": {
        text: "Your cadets tell your NCOs that they didn't manage to solve the problems of the children :( They feel sad. At the same time they are confused over why they even need to achieve this goal in the first place...",
        option: [{
            text: "Oh dear",
            next: "R4"
        }]
    },

    "R14": {
        text: "Your cadets are happy that they managed to learn stories of the beneficaries and are happy for them, such as hearing how Emily managed to do well in school after putting in effort! They are happy with themselves.",
        option: [{
            text: "That's great!",
            next: "R4"
        }]
    },

    "R15": {
        text: () => (<React.Fragment>
            <p>
                Your NCOs ask your cadets to share with each other what they've managed to learn. Here's what one of them says to her friend:
            </p>
            <Dialogue
                startOfConvo="I'm happy that I've managed to learn a lot!"
                speakerClass="cadet-speech"
                convos={vagueCadetDebriefConvos}
                name="Cadet Bobby"
            />
            <p>You can pop in here if you would like to.</p>
        </React.Fragment>),
        option: [{
            text: "Hmm...",
            next: "R4"
        }]
    }
}

export default reflectArcNodes
