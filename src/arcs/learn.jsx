import React from 'react';

import consts from '../consts';
import Dialogue from '../convo/Dialogue';
import scroogeConvos from '../convo/scrooge';
import jonConvos from '../convo/jonathan';
import allamConvos from '../convo/allam';
import emilyConvos from '../convo/emily';
import carmenConvos from '../convo/carmen';
import NodeImg from '../NodeImg';

const nodes = {
    "L1": {
        bgm: 'mii.mp3',
        img: <NodeImg src="emergency-button.jpg" alt="Emergency Button" />,
        text: (flags) => `Your committee is very excited! They would like to get started with planning immediately and are discussing all the fun activities they can do with the children at ${flags.name}. Should you intervene?`,
        option: [
            {
                text: "Yes",
                next: "L101"
            },
            {
                text: "No",
                next: "P1",
                fx: (flags) => {
                    flags.decisionVisibility.research = true;
                    flags.decisionVisibility.ncogoal = true;
                }
            }]
    },

    "L101": {
        bgm: 'mii.mp3',
        img: <NodeImg src="emergency-meeting.png" alt="Emergency Button" />,
        text: (flags) => (
            <div>
                <p>How would you like to intervene?</p>
                {flags.ncogoal !== consts.ncogoals.NONE && <p className="informative">[You have already set goals for the NCOs.]</p>}
            </div>
        ),
        option: [
            {
                text: "Research more",
                next: "L2"
            },
            {
                text: "Set goals",
                next: "L20",
                condition: (flags) => flags.ncogoal === consts.ncogoals.NONE
            },
            {
                text: "I have completed the interventions that I want.",
                next: "P1",
                fx: (flags) => {
                    flags.decisionVisibility.research = true;
                    flags.decisionVisibility.ncogoal = true;
                }
            }]
    },

    "L2": {
        text: (flags) => (<div>
            <p>What would you like to do?</p>
            {flags.research.call && <p className="informative">[You have already called the home.]</p>}
            {flags.research.recce && <p className="informative">[You have already visited the home physically.]</p>}
            {flags.research.email === 1 && <p className="informative">[You have already waited 1 week for a reply to your email.]</p>}
            {flags.research.email === 2 && <p className="informative">[Unfortunately, due to the 2 week delay, you don't have time to conduct a reccee.]</p>}
        </div>),
        option: [
            {
                text: "Search the home on the internet",
                next: "L3",
                fx: (flags) => { flags.research.brochure = true },
            },
            {
                text: "Email the home to ask questions",
                next: "L4",
                condition: (flags) => flags.research.email === 0,
                fx: (flags) => { flags.research.email = 1 },
            },
            {
                text: "Wait another week for a reply to the email",
                next: "L5",
                condition: (flags) => flags.research.email === 1,
                fx: (flags) => { flags.research.email = 2 }
            },
            {
                text: "Send a second email",
                next: "L5",
                condition: (flags) => flags.research.email === 1,
                fx: (flags) => { flags.research.email = 2 }
            },
            {
                text: "Call the home to ask questions",
                next: "L8",
                condition: (flags) => !(flags.research.call || flags.research.recce),
                fx: (flags) => { flags.research.call = true },
            },
            {
                text: "Physically visit the home for a recce",
                next: "L13",
                fx: (flags) => { flags.research.recce = true },
                condition: (flags) => flags.research.email < 2 && !flags.research.recce,
            },
            {
                text: "Never mind, my committee is doing good (Back)",
                next: "L101"
            }
        ]
    },

    "L3": {
        img: (flags) => <NodeImg src={flags.name === consts.SESAME ? "qr-sesame.png" : "qr-sunshine.png"} alt="QR code to brochure" />,
        text: (flags) => (
            <p>
                You managed to find the website of the home and have found a brochure. <br/>
                <a target="_blank" rel="noreferrer" href={
                    flags.name === consts.SESAME?
                        "https://drive.google.com/file/d/1y9t6LN6cBId0RCxE4M-7f3DOcUal8K3X/view?usp=sharing" :
                        "https://drive.google.com/file/d/1gesm8PTUZaWnSfcy_KiPKF6H4oT86KGA/view?usp=sharing"}>
                    Link to brochure
                </a>
            </p>),
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L4": {
        img: <NodeImg src="one-week-later.jpg" width="40%" alt="Spongebob One Week Later" />,
        text: "It's been one week but the home hasn't replied you yet. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L5",
                fx: (flags) => { flags.research.email = 2 }
            },
            {
                text: "Send another email.",
                next: "L5",
                fx: (flags) => { flags.research.email = 2 }
            },
            {
                text: "Go back to other research options.",
                next: "L101",
            }
        ]
    },

    "L5": {
        img: (<div className="iframe-container"> <iframe src="https://giphy.com/embed/3o6Ztke2ogPyvyhPXO" frameBorder="0" title="Time is ticking" /> </div>),
        text: "It's been another week but the home still hasn't replied you. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L6"
            },
            {
                text: "Go back to other research options.",
                next: "L101"
            }]
    },

    "L6": {
        img: <NodeImg src="wgt.jpg" alt="where got time" />,
        text: "WHERE GOT TIME TO WAIT??",
        option: [
            {
                text: "BACK",
                next: "L5"
            }]
    },

    "L8": {
        img: (<NodeImg src="scrooge.jpg" alt="scrooge" />),
        text: "Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",
        option: [
            {
                text: "Speak to Mr Scrooge",
                next: "L9",
            }]
    },

    "L9": {
        img: () => nodes["L8"].img,
        text: (flags) => nodes["L14"].text(flags),
        option: [
            {
                text: "One last thing pleeeeeease",
                next: "L201",
            }
        ]
    },

    "L201": {
        img: () => nodes["L8"].img,
        text: (flags) => (<p><span className="scrooge-speech">"Ok fine, you can ask one more question..."</span><br />What would you like to ask?</p>),
        option: [
            {
                text: "What do the kids like to do in their free time?",
                next: "L10",
                fx: (flags) => { flags.research.freeTime = true },
            },
            {
                text: "What facilities are there at the home?",
                next: "L11"
            },
            {
                text: "Is there Wi-Fi at the home?",
                next: "L12"
            }]
    },

    "L10": {
        img: <NodeImg src="soccer.png" alt="soccer" />,
        text: "I think the kids like to play soccer.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L11": {
        img: (<NodeImg src="just-for-laughs.png" alt="just for laugh gags" />),
        text: "We have a TV, a phone and a kitchen. Nothing really interesting plays on TV though... it's usually Just for Laugh Gags.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L12": {
        text: "There is no Wi-Fi at the home.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L13": {
        bgm: 'forlorn-child.mp3',
        text: "You have arrived at the home! You can speak to any of the children or the Home Director. Who would you like to speak to?",
        option: [
            {
                text: "Speak to Home Director, Mr Scrooge",
                next: "L14"
            },
            {
                text: "Speak to 16 year old Jonathan",
                next: "L15"
            },
            {
                text: "Speak to 14 year old Allam",
                next: "L16"
            },
            {
                text: "Speak to 10 year old Emily",
                next: "L17"
            },
            {
                text: "Speak to 9 year old Carmen",
                next: "L18"
            },
            {
                text: "I'm done, let's proceed on",
                next: "L101"
            }]
    },

    "L14": {
        img: () => nodes["L8"].img,
        text: (flags) => (<Dialogue
            startOfConvo={`Welcome to ${flags.name}! I am Ebenzer Scrooge, the Home Director. Feel free to ask me anything about the home!`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            maxQns={4}
            name="Mr. Scrooge" />) ,
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L15": {
        text: () => (<Dialogue 
            startOfConvo="Hi... I'm Jonathan, and I'm 16 years old."
            speakerClass="jon-speech"
            convos={jonConvos}
            name="Jonathan"
            maxQns={3}
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L16": {
        text: () => (<Dialogue 
            startOfConvo="Sup. I'm Allam, and I'm 14."
            speakerClass="allam-speech"
            convos={allamConvos}
            name="Allam"
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L17": {
        text: () => (<Dialogue 
            startOfConvo="Umm... hello! I'm Emily!"
            speakerClass="emily-speech"
            convos={emilyConvos}
            name="Emily"
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L18": {
        text: () => (<Dialogue 
            startOfConvo="I'm Carmen..."
            speakerClass="carmen-speech"
            convos={carmenConvos}
            name="Carmen"
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L20": {
        img: (<NodeImg ext="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png" alt="Thinking emoji"/>),
        text: "How do you want to set goals with your committee?",
        option: [
            {
                text: "Tell your committee what goals they should try to achieve.",
                next: "L21",
                fx: (flags) => flags.ncogoal = consts.ncogoals.VI
            },
            {
                text: "Facilitate your committee in setting their own goals for the VIA.",
                next: "L22"
            }]
    },

    "L21": {
        img: (<NodeImg ext="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/yawning-face_1f971.png" alt="Yawning emoji" />),
        text: "Some of your committee members looked very bored after you told them that they should aim to put in their best as well as learn more from the stories of the residents...",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L22": {
        bgm: 'kahoot.mp3',
        text: () => (<React.Fragment>
            <p>
                You asked your committee to share their goals with you. This is what one of them, Michael, told you.
            </p>
            <Dialogue
                startOfConvo="My goal is to learn how to plan."
                speakerClass="nco-speech"
                convos={[]}
                name="Michael"
                maxQns={null}
            />
            <p>What do you think?</p>
        </React.Fragment>),
        option: [
            {
                text: "I'm okay with it.",
                next: "L101",
                fx: (flags) => { 
                    flags.ncogoal = consts.ncogoals.NOT_SPECIFIC;
                    flags.decisionVisibility.ncogoal = true;
                }
            },
            {
                text: "I don't like it.",
                next: "L23",
                fx: (flags) => flags.ncogoal = consts.ncogoals.NCO
            },
        ]
    },

    "L23": {
        text: "What do you want to tell Michael?",
        option: [
            {
                text: "This is not specific enough. You need to set another goal.",
                next: "L24"
            },
            {
                text: "That's a good start. Let's try to use 3W1H to make this goal more specific!",
                next: "L25"
            }]
    },

    "L24": {
        img: <NodeImg src="pepecry.png" />,
        text: "Michael looks a bit sad. He sets another goal, to learn how to take calculated risks while planning. You are happy with this goal.",
        option: [
            {
                text: "Proceed on",
                next: "L101",
                fx: (flags) => {
                    flags.decisionVisibility.ncogoal = true;
                }
            }]
    },

    "L25": {
        text: "Michael thinks about it and enthusiastically responds that by the end of the VIA, he wants to learn how to appropriately delegate manpower based on need.",
        option: [
            {
                text: "Sounds great!",
                next: "L101",
                fx: (flags) => {
                    flags.decisionVisibility.ncogoal = true;
                }
            }]
    },
}

export default nodes;
