import React from 'react';

import consts, {motivatedAskQns} from '../consts';
import Dialogue from '../convo/Dialogue';
import scroogeConvos from '../convo/scrooge';
import jonConvos from '../convo/jonathan';
import allamConvos from '../convo/allam';
import emilyConvos from '../convo/emily';
import carmenConvos from '../convo/carmen';
import NodeImg from '../NodeImg';
import GroupConvo from '../convo/GrpConvo';
import {ncoChatClsMap} from '../convo/ncoDebrief';

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
                {flags.ncogoal !== consts.ncogoals.NONE && <p className="informative">[You have already set goals for the committee.]</p>}
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
                fx: (flags) => { 
                    flags.research.call = true;
                    flags.spokeToScrooge = true;
                },
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
                fx: (flags) => {
                    flags.research.spokeToScrooge = true;
                }
            }]
    },

    "L9": {
        img: () => nodes["L8"].img,
        text: (flags) => (<Dialogue 
            startOfConvo={`Hello, this is Ebenzer Scrooge, Home Director of ${flags.name}. My receptionist informed me that you wanted to speak to me about a visit? I'm afraid we're rather busy right now, but I can take a few quick questions.`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            maxQns={4}
            name="Mr. Scrooge"
            />),
        option: [
            {
                text: "One last thing pleeeeeease",
                next: "L201",
            }
        ]
    },

    "L201": {
        img: () => nodes["L8"].img,
        text: () => (<p><span className="scrooge-speech">"Ok fine, you can ask one more question..."</span><br />What would you like to ask?</p>),
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
        text: (flags) => ( 
            <React.Fragment>
                <p>Your teacher has brought you to {flags.name}. She informs you that unfortunately, you only have time to ask each person a few questions. You can speak to any of the children or the Home Director. Who would you like to speak to?</p>
                {flags.ncogoal === consts.ncogoals.LEARN_STORIES_BEF_RESEARCH && <p className="informative">[Your committee is extra motivated to learn the stories of the residents. You can ask each person 1 additional question.]</p>}
            </React.Fragment>),
        option: [
            {
                text: "Speak to Home Director, Mr Scrooge",
                next: "L14",
                fx: (flags) => {
                    flags.research.spokeToScrooge = true;
                }
            },
            {
                text: "Speak to 16 year old Jonathan",
                next: "L15",
                fx: (flags) => { flags.research.spokeToResidents = true; }
            },
            {
                text: "Speak to 14 year old Allam",
                next: "L16",
                fx: (flags) => { flags.research.spokeToResidents = true; }
            },
            {
                text: "Speak to 10 year old Emily",
                next: "L17",
                fx: (flags) => { flags.research.spokeToResidents = true; }
            },
            {
                text: "Speak to 9 year old Carmen",
                next: "L18",
                fx: (flags) => { flags.research.spokeToResidents = true; }
            },
            {
                text: "I'm done, let's proceed on",
                next: "L101"
            }]
    },

    "L14": {
        img: (flags) => nodes["L8"].img,
        text: (flags) => (<Dialogue
            startOfConvo={`Welcome to ${flags.name}! I am Ebenzer Scrooge, the Home Director. Feel free to ask me anything about the home!`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            maxQns={motivatedAskQns.includes(flags.ncogoal) ? 5 : 4}
            name="Mr. Scrooge" />) ,
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L15": {
        text: (flags) => (<Dialogue 
            startOfConvo="Hi... I'm Jonathan, and I'm 16 years old."
            speakerClass="jon-speech"
            convos={jonConvos}
            name="Jonathan"
            maxQns={motivatedAskQns.includes(flags.ncogoal) ? 3 : 2}
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L16": {
        text: (flags) => (<Dialogue 
            startOfConvo="Sup. I'm Allam, and I'm 14."
            speakerClass="allam-speech"
            convos={allamConvos}
            name="Allam"
            maxQns={motivatedAskQns.includes(flags.ncogoal) ? 3 : 2}
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L17": {
        text: (flags) => (<Dialogue 
            startOfConvo="Umm... hello! I'm Emily!"
            speakerClass="emily-speech"
            convos={emilyConvos}
            name="Emily"
            maxQns={motivatedAskQns.includes(flags.ncogoal) ? 3 : 2}
            />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L18": {
        text: (flags) => (<Dialogue 
            startOfConvo="I'm Carmen..."
            speakerClass="carmen-speech"
            convos={carmenConvos}
            name="Carmen"
            maxQns={motivatedAskQns.includes(flags.ncogoal) ? 3 : 2}
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
            },
            {
                text: "Facilitate your committee in setting their own goals for the VIA.",
                next: "L22"
            }]
    },

    "L21": {
        bgm: 'kahoot.mp3',
        text: "What goal do you wish to set for your committee?",
        option: [
            {
                text: "We should learn more about the stories of the residents",
                next: (flags) => flags.research.recce ? "L302" : "L301",
            },
            {
                text: "We should try to solve the problems of the residents",
                condition: (flags) => flags.ncogoal !== consts.ncogoals.SOLVE_PROBLEMS_AFT_RESEARCH,
                next: (flags) => (flags.research.brochure || flags.research.spokeToScrooge) ? "L304" : "L303",
            },
            {
                text: "We should put in our best to plan exciting activities",
                next: "L306",
            }
        ]
    },

    "L301": {
        text: (flags) => (<React.Fragment>
            <p>You tell the committee that they should learn more about the stories of the residents.</p>
            <GroupConvo 
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    { name: "Michael", text: "I don’t quite like it. I don’t feel like I will be learning anything to improve myself." },
                        { name: "Ryan", text: "Hey, we’ll still be learning something, right?" },
                        { name: "Sarah", text: "Let’s work harder for our research. Shall we give it a try?" }
                ]}
                convos={[]}
            />
            <p className="informative">[Your committee is now extra motivated when talking to the people from {flags.name}. You can ask each person 1 additional question whenever you talk to them.]</p>
        </React.Fragment>),
        option: [
            {
                text: "Continue",
                next: "L101",
                fx: (flags) => flags.ncogoal = consts.ncogoals.LEARN_STORIES_BEF_RESEARCH,
            }
        ]
    },

    "L302": {
        text: (flags) => (<React.Fragment>
            <p>You tell the committee that they should learn more about the stories of the residents.</p>
            <GroupConvo 
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    { name: "Michael", text: "I don’t quite like it. I don’t feel like I will be learning anything to improve myself." },
                        { name: "Ryan", text: "Hey, we’ll still be learning something. We can try to learn more about the residents by talking to them during the VIA." },
                        { name: "Sarah", text: "Sigh… only if we had set our goals before visiting the home." }
                ]}
                convos={[]}
            />
            <p className="informative">[Your committee is now motivated when talking to the people from {flags.name}. You can ask each person 1 additional question if you chit-chat with them during the VIA.]</p>
        </React.Fragment>),
        option: [
            {
                text: "Continue",
                next: "L101",
                fx: (flags) => flags.ncogoal = consts.ncogoals.LEARN_STORIES_AFT_RESEARCH,
            }
        ]

    },

    "L303": {
        text: (flags) => (<React.Fragment>
            <p>You tell the committee that they should try to solve the problems of the residents.</p>
            <GroupConvo 
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    { name: "Michael", text: "I don’t quite like it. I don’t feel like I will be learning anything to improve myself." },
                        { name: "Ryan", text: "Hey, we’ll still be learning something, right?" },
                        { name: "Sarah", text: "What if we are unable to solve the problems of the residents? We don’t even know what they need." },
                        { name: "Mary", text: "Let’s work harder for our research to find out what the residents need. Shall we give it a try?" },
                ]}
                convos={[]}
            />
            <p className="informative">[Your committee is now motivated when researching {flags.name} for the VIA. You can ask each person 1 additional question whenever talking to someone from the home <em>before</em> the VIA.]</p>
        </React.Fragment>),
        option: [
            {
                text: "Continue",
                next: "L101",
                fx: (flags) => flags.ncogoal = consts.ncogoals.SOLVE_PROBLEMS_BEF_RESEARCH
            }
        ]
    },

    "L304": {
        text: (flags) => (<React.Fragment>
            <p>You tell the committee that they should try to solve the problems of the residents.</p>
            <GroupConvo 
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    { name: "Michael", text: "Hmm... we learnt from our research that the home needs more money. So should we do a fundraising campaign?" },
                        { name: "Mary", text: "Isn’t there not enough time to get a fundraising campaign approved?" },
                        { name: "Ryan", text: `That’s probably right, considering that the VIA is in ${4 - flags.research.email} weeks’ time` },
                ]}
                convos={[]}
            />
            <p>How do you respond?</p>
        </React.Fragment>),
        option: [
            {
                text: "Sorry for my oversight. Let's set another goal.",
                next: "L21",
                fx: (flags) => flags.ncogoal = consts.ncogoals.SOLVE_PROBLEMS_AFT_RESEARCH
            },
            {
                text: "That’s not the spirit. We must try our best to solve other problems.",
                next: "L305",
                fx: (flags) => flags.ncogoal = consts.ncogoals.SOLVE_PROBLEMS_AFT_RESEARCH
            }
        ]
    },

    "L305": {
        text: "Your committee members look blankly at one another, visibly confused. They do not seem very inspired, but shrug in acceptance of your decision.",
        option: [{
            text: "Continue",
            next: "L101"
        }]
    },

    "L306": {
        text: (flags) => (<React.Fragment>
            <p>You tell the committee that they should put in their best to plan exciting activities for the children at {flags.name}.</p>
            <GroupConvo 
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    { name: "Michael", text: "This sounds like a good idea! I have so many exciting activities in mind." },
                        { name: "Ryan", text: "I can’t wait to get started!" },
                ]}
                convos={[]}
            />
            <p className="informative">[You have unlocked more exciting activities to pick from later.]</p>
            <p className="informative">[Your committee will not propose any "boring" activities.]</p>
        </React.Fragment>),
        option: [{
            text: "Continue",
            next: "L101",
            fx: (flags) => {
                flags.ncogoal = consts.ncogoals.EXCITING_ACTIVITIES;
            }
        }],
    },

    "L22": {
        bgm: 'kahoot.mp3',
        text: () => (<React.Fragment>
            <p>
                You asked your committee to share their goals with you. This is what one of them, Michael, told you.
            </p>
            <Dialogue
                startOfConvo="My goal is to learn how to plan."
                speakerClass="michael-speech dialogue"
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
