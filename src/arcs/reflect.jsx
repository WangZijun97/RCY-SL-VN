import React from 'react'
import consts from '../consts'
import Dialogue from '../convo/Dialogue'
import ncoDebriefConvo, {ncoDebriefConvoFunc} from '../convo/ncoDebrief'
import vagueCadetDebriefConvos from '../convo/vagueCadetDebrief'
import NodeImg from '../NodeImg'
import GroupConvo from '../convo/GrpConvo';
import {cadetChatClsMap} from '../convo/cadetDebrief'; 

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
                text: "Conduct a debrief session with your committee first",
                next: "R1.5",
                fx: (flags) => { 
                    flags.debrief = consts.debrief.NCO;
                }
            },
            {
                text: "Conduct a debrief session with the cadets first",
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
            maxQns={null}
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
        text: () => (<React.Fragment>
            <p>You ask your cadets - How did you all feel about the VIA experience?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    { name: "Roy", text: "I didn't know what to expect. Aren't the VIAs just for the VIA hours anyways? So that we can get our LEAPS points..." },
                        { name: "Liz", text: "Ya, I agree... If Ms Tan didn't call our parents to get us to come, I wouldn't come as well... I was pressured into coming..." }
                ]}
                convos={[]}
            />
        </React.Fragment>),
        option: [{
            text: "Ask another question",
            next: "R12a"
        }]
    },
    
    "R12a": {
        text: () => (<React.Fragment>
            <p>Oh dear... :(</p>
            <p>Nevertheless, you decide to still ask: Okay never mind about that then... What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    { name: "Jack", text: "I feel I didn't really learn anything much, because I didn't set out to learn anything in the first place..." },
                        { name: "Roy", text: "Why do we need to learn from a VIA in the first place? Isn't it just to make the residents a bit happier?" }
                ]}
                convos={[]}
            />
        </React.Fragment>),
        option: [{
            text: "Oh no... this is sad... let's debrief the committee now.",
            next: "R5"
        }]
    },
    
    "R13": {
        text: () => (<React.Fragment>
            <p>You ask your cadets: What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Jack", text: "Oh we set goals? Uh what were they again? I only remember that I wanted to have fun, but I think my idea of fun wasn't the same as the kids' idea of fun..."},
                        {name: "Roy", text: "I think we didn't manage to achieve the goals... we didn't put in much effort into achieving them."}
                ]}
                convos={[]}
            />
            <p>You are upset and don't understand why this happened. Do you want to ask them why this is so?</p>
            </React.Fragment>),
        option: [
            {
                text: "Yes, I want to find out!",
                next: "R13a"
            },
            {
                text: "No, I think the cadets are sad, so we should wrap up...",
                next: "R13b"
            }
        ]
    },

    "R13a": {
        text: () => (<React.Fragment>
            <p>You ask: I don't understand, why were you all unable to achieve the goals? Didn't you all agree to these goals with me?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Liz", text: "I think we felt they were a bit unreasonable, but none of us dared to voice out, because you are the OIC..."},
                        {name: "Jack", text: "Ya, then I think the whole experience just felt a bit bad after that..."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Oh no... let's wrap up...",
            next: "R13b"
        }]
    },
    
    "R13b": {
        text: () => (<React.Fragment>
            <p>You ask: So overall, how did you all feel about this VIA experience?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Roy", text: "I wasn't very motivated to learn much from the VIA... I just went through the motions of talking to the residents... felt it was a waste of time."},
                        {name: "Liz", text: "Yeah, it was boring, I wasn't very interested to put in much effort..."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Oh no... this is sad... let's debrief the committee now.",
            next: "R5"
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
                maxQns={null}
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
