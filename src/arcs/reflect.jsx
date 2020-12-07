import React from 'react'
import consts from '../consts'
import Dialogue from '../convo/Dialogue'
import vagueCadetDebriefConvos from '../convo/vagueCadetDebrief'
import NodeImg from '../NodeImg'

const reflectArcNodes = {
    
    "R1": {
        text: "The VIA has ended and you are waiting for the bus to arrive. What do you want to do?",
        option: [
            {
                text: "Conduct FA(S) training refresher for next week's accreds",
                next: "R2fa"
            },
            {
                text: "Play Among Us with your cadets",
                next: "R2"
            },
            {
                text: "Just chit-chat with your cadets",
                next: "R2"
            },
            {
                text: "Conduct a debrief session with NCOs first",
                next: "R5",
                fx: (flags) => flags.debrief = consts.debrief.NCO
            },
            {
                text: "Conduct a debrief session with the cadets first",
                next: "R6",
                fx: (flags) => flags.debrief = consts.debrief.CADET
            }]
    },
    
    "R2fa": {
        img: (<NodeImg src="oak.jpg" />),
        text: "It's good that you are enthusiastic about FA, but perhaps we aren't done with the VIA yet to be moving on this fast...",
        option: [{
            text: "Fine.",
            next: "R1"
        }]
    },
    
    "R2": {
        img: (<NodeImg src="pikaoh.jpg" />),
        text: "Err... They had great fun but didn't learn much from the VIA - you can't help but wonder, what's the point of this whole trip?",
        option: [{
            text: "That's not good... (back)",
            next: "R1"
        }]
    },
    
    "R3": {
        img: (<NodeImg src="sunset.jpg" />),
        text: "The cadets were immediately dismissed when you reached school. No debrief means no reflection forms for SL badges means one angry YO >:(",
        option: [{
            text: "Oh well...",
            next: "END"
        }]
    },
    
    "R4": {
        text: "The bus is here to take the cadets back!",
        option: [
            {
                text: "Guess we are done today!",
                next: "END"
            },
            {
                text: "We can still debrief the cadets back in school",
                next: "R3",
                condition: (flags) => flags.debrief == consts.debrief.NCO
            },
            {
                text: "We can still debrief the NCOs back in school after dismissal",
                next: "R5",
                condition: (flags) => flags.debrief == consts.debrief.CADET,
                fx: (flags) => flags.debrief = consts.debrief.BOTH
            }]
    },
    
    "R5": {
        text: "You are about to conduct a debrief with your NCOs",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.ncogoal == consts.ncogoals.NONE) {
                    return "R7"
                } else if (flags.ncogoal== consts.ncogoals.VI) {
                    return "R8"
                } else if (flags.ncogoal == consts.ncogoals.NOT_SPECIFIC) {
                    return "R9"
                } else if (flags.ncogoal == consts.ncogoals.NCO) {
                    return "R10"
                }
            }
        }]
    },
    
    "R6": {
        text: "You are about to conduct a debrief with your cadets",
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
                    return 
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
                condition: (flags) => flags.debrief == consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief != consts.debrief.NCO
            }]
    },
    
    "R8": {
        text: "Your NCOs tell you that they have put in their best and have learnt more about the stories, but they ask you why is there a need to even learn about the stories of the beneficaries.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief == consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief != consts.debrief.NCO
            }]
    },
    
    "R9": {
        img: (<NodeImg src="bad-nco-reflection.png" />),
        text: "Your NCOs tell you that they have learnt a lot about how to plan.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief == consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief != consts.debrief.NCO
            }]
    },
    
    "R10": {
        text: "Your NCOs happily tell you that they have learnt a lot about how to plan.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO
            }]
    },
    
    "R12": {
        img: (<NodeImg ext="https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg" />), 
        text: () => (<React.Fragment>
            <p>Your cadets are very confused about what they need to debrief about... What are goals? {"\u53EF\u4EE5\u5403\u7684\u5417?"} (translator note: can this be eaten?)</p>
            <p className="informative">[You did not set goals with the cadets.]</p>
            </React.Fragment>),
        option: [{
            text: "Oh dear",
            next: "R4"
        }]
    },
    
    "R13": {
        text: "Your cadets tell you that they didn't manage to solve the problems of the children :( They feel sad. At the same time they are confused over why they even need to achieve this goal in the first place...",
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
                You ask your cadets to share with you what they've managed to learn. Here's what one of them says:
            </p>
            <Dialogue
                startOfConvo="I'm happy that I've managed to learn a lot!"
                speakerClass="cadet-speech"
                convos={vagueCadetDebriefConvos}
                name="Cadet Bobby"
            />
            <p>What do you think?</p>
        </React.Fragment>),
        option: [{
            text: "Hmm...",
            next: "R4"
        }]
    }
}

export default reflectArcNodes
