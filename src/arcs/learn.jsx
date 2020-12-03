import React from 'react';

import emergencyButton from '../images/emergency-button.jpg';
import emergencyMeeting from '../images/emergency-meeting.png';
import qrSesame from '../images/qr-sesame.png';
import qrSunshine from '../images/qr-sunshine.png';
import oneWeekLater from '../images/one-week-later.jpg';
import wgt from '../images/wgt.jpg';
import scrooge from '../images/scrooge.jpg';
import soccer from '../images/soccer.png';
import justForLaughs from '../images/just-for-laughs.png';

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
        index: "L1",
        img: <img src={emergencyButton} alt="Emergency Button" />,
        text: (flags) => `Your NCOs are very excited! They would like to get started with planning immediately and are discussing all the fun activities they can do with the children at ${flags.name}. Should you intervene?`,
        option: [
            {
                text: "Yes",
                next: "L101"
            },
            {
                text: "No",
                next: "P1"
            }]
    },

    "L101": {
        index: "L101",
        img: <img src={emergencyMeeting} alt="Emergency Meeting" />,
        text: (flags) => (
            <div>
                <p>How would you like to intervene?</p>
                {flags.ncogoal !== "" && <p class="informative">[You have already set goals for the NCOs.]</p>}
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
                condition: (flags) => flags.ncogoal === "",
            },
            {
                text: "I have completed the interventions that I want.",
                next: "P1"
            }]
    },

    "L2": {
        index: "L2",
        text: (flags) => (<div>
            <p>What would you like your NCOs to do?</p>
            {flags.research.call && <p class="informative">[You have already called the home.]</p>}
            {flags.research.recce && <p class="informative">[You have already visited the home physically.]</p>}
            {flags.research.email === 1 && <p class="informative">[You have already waited 1 week for a reply to your email.]</p>}
            {flags.research.email === 2 && <p class="informative">[Unfortunately, due to the 2 week delay, you don't have time to conduct a reccee.]</p>}
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
                text: "Never mind, they're doing good (Back)",
                next: "L101"
            }
        ]
    },

    "L3": {
        index: "L3",
        img: (flags) => <img src={flags.name === consts.SESAME ? qrSesame : qrSunshine} alt="QR code to brochure" />,
        text: (flags) => (
            <p>
                You managed to find the website of the home and have found a brochure. <br/>
                <a target="_blank" href={
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
        index: "L4",
        img: (<img src={oneWeekLater} width="40%" alt="Spongebob One Week Later" />),
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
        index: "L5",
        img: (<iframe src="https://giphy.com/embed/3o6Ztke2ogPyvyhPXO" frameBorder="0" title="Time is ticking" />),
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
        index: "L6",
        img: (<img src={wgt} alt="where got time" />),
        text: "WHERE GOT TIME TO WAIT??",
        option: [
            {
                text: "BACK",
                next: "L5"
            }]
    },

    "L8": {
        index: "L8",
        img: (<img src={scrooge} alt="scrooge" />),
        text: "Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",
        option: [
            {
                text: "Speak to Mr Scrooge",
                next: "L9",
            }]
    },

    "L9": {
        index: "L9",
        img: (<img src={scrooge} alt="scrooge" />),
        text: (flags) => nodes["L14"].text(flags),
        option: [
            {
                text: "Continue",
                next: "L201",
            }
        ]
    },

    "L201": {
        index: "L201",
        img: (<img src={scrooge} alt="scrooge" />),
        text: "You have time for one last question! What would you like to ask?",
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
        index: "L10",
        img: (<img src={soccer} alt="soccer" />),
        text: "I think the kids like to play soccer.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L11": {
        index: "L11",
        img: (<img src={justForLaughs} alt="just for laugh gags" />),
        text: "We have a TV, a phone and a kitchen. Nothing really interesting plays on TV though... it's usually Just for Laugh Gags.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L12": {
        index: "L12",
        text: "There is no Wi-Fi at the home.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L13": {
        index: "L13",
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
        index: "L14",
        img: (<img src={scrooge} alt="scrooge" />),
        text: (flags) => (<Dialogue
            startOfConvo={`Welcome to ${flags.name}! I am Ebenzer Scrooge, the Home Director. Feel free to ask me anything about the home!`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            name="Mr. Scrooge" />) ,
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L15": {
        index: "L15",
        img: (<img />),
        text: () => (<Dialogue 
            startOfConvo="Hi... I'm Jonathan, and I'm 16 years old."
            speakerClass="jon-speech"
            convos={jonConvos}
            name="Jonathan"
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L16": {
        index: "L16",
        img: (<img />),
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
        index: "L17",
        img: (<img />),
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
        index: "L18",
        img: (<img />),
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
        index: "L20",
        img: (<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png" alt="Thinking emoji"/>),
        text: "How do you want to set goals with the NCOs?",
        option: [
            {
                text: "Tell the NCOs what goals they should try to achieve.",
                next: "L21",
                fx: (flags) => flags.ncogoal = "by VIs"
            },
            {
                text: "Facilitate the NCOs in setting their own goals for the VIA.",
                next: "L22"
            }]
    },

    "L21": {
        index: "L21",
        img: (<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/yawning-face_1f971.png" alt="Yawning emoji" />),
        text: "Some of the NCOs looked very bored after you told them that they should aim to put in their best as well as learn more from the stories of the residents...",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L22": {
        index: "L22",
        img: (<img />),
        text: (flags) => (<React.Fragment>
            <p>
                You asked the NCOs to share their goals with you. This is what one of the NCOs told you.
            </p>
            <Dialogue
                startOfConvo="My goal is to learn how to plan."
                speakerClass="nco-speech"
                convos={[]}
                name="the NCO"
            />
            <p>What do you think?</p>
        </React.Fragment>),
        option: [
            {
                text: "I'm okay with it.",
                next: "L101",
                fx: (flags) => flags.ncogoal = "not specific"
            },
            {
                text: "I don't like it.",
                next: "L23",
                fx: (flags) => flags.ncogoal = "by NCOs"
            },
        ]
    },

    "L23": {
        index: "L23",
        text: "What do you want to tell the NCO?",
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
        index: "L24",
        img: <NodeImg src="pepecry.png" />,
        text: "The NCO looks a bit sad. He sets another goal, to learn how to take calculated risks while planning. You are happy with this goal.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L25": {
        index: "L25",
        text: "The NCO thinks about it and enthusiastically responds that by the end of the VIA, he wants to learn how to appropriately delegate manpower based on need.",
        option: [
            {
                text: "Sounds great!",
                next: "L101"
            }]
    },
}

export default nodes;
