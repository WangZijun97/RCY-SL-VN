import React from 'react';
import consts from '../consts';
import Dialogue from '../convo/Dialogue';
import {doP15Check, doP5Check, doP9Check} from '../events';
import NodeImg from '../NodeImg';

const planArcNodes = {
    "P1": {
        img: <NodeImg src="plan.jpg" alt="" />,
        bgm: 'chariots-of-fire.mp3',
        text: (flags) => (<React.Fragment>
            <p>Time to get some planning done - here are some activities that your Sec 2s proposed! Pick one to conduct.</p>
            {(flags.research.brochure || flags.research.freeTime || flags.research.soccer) && <p className="informative">[You have unlocked additional options because of your research.]</p>}
            {(flags.research.recce) && <p className="informative">[You have unlocked additional options because of your physical recce to the home.]</p>}
            </React.Fragment>),
        option: [
            {
                text: "Among Us!",
                next: "P3",
                fx: (flags) => { flags.activity = consts.activities.AMONG_US },
            },
            {
                text: "Sing Songs",
                next: "P4"
            },
            {
                text: "Book Reading",
                next: "P2"
            },
            {
                text: "Play soccer",
                next: "P3",
                fx: (flags) => { flags.activity = consts.activities.SOCCER },
                condition: (flags) => flags.research.brochure || flags.research.freeTime || flags.research.soccer || flags.research.recce
            },
            {
                text: "Chit Chat",
                next: "P3",
                fx: (flags) => { flags.activity = consts.activities.CHIT_CHAT }
            },
            {
                text: "Bring PS5 and Switch to play games",
                next: "P6"
            },
            {
                text: "Kite Fighting",
                next: "P3",
                fx: (flags) => { flags.activity = consts.activities.KITE },
                condition: (flags) => flags.research.recce,
            }
        ]
    },

    "P2": {
        img: () => (<div className="book-catalogue">
            <NodeImg src="snow-white.jpg" alt="Snow White"/>
            <NodeImg src="three-little-pigs.jpg" alt="Three Little Pigs"/>
            <NodeImg src="geronimo-stilton.jpg" alt="Geronimo Stilton"/>
            <NodeImg src="enid-blyton.jpg" alt="Enid Blyton"/>
            <NodeImg src="harry-potter.jpg" alt="Harry Potter"/>
            <NodeImg src="percy-jackson.jpg" alt="Percy Jackson"/>
            <NodeImg src="hard-truths.jpg" alt="Hard Truths"/>
            </div>),
        text: "What books should we bring? We have time for two books:",
        option: [
            {
                text: "Snow White + Three Little Pigs",
                next: "P3",
                fx: (flags) => { flags.activity = consts.books.SNOW_WHITE }
            },
            {
                text: "Geronimo Stilton + Enid Blyton",
                next: "P3",
                fx: (flags) => { flags.activity = consts.books.GERONIMO }
            },
            {
                text: "Harry Potter + Percy Jackson",
                next: "P3",
                fx: (flags) => { flags.activity = consts.books.HARRY_POTTER }
            },
            {
                text: "Hard Truths to Keep Singapore Going (this book is thick enough on its own)",
                next: "P3",
                fx: (flags) => { flags.activity = consts.books.HARD_TRUTHS }
            },
            {
                text: "I don't like any of these choices (Back)",
                next: "P1",
            }
        ]
    },

    "P4": {
        img: <NodeImg src="singing.png" alt="" />,
        text: "Your Sec 2s wonder what type of songs to sing. What will you suggest?",
        option: [
            {
                text: "K-pop",
                next: "P3",
                fx: (flags) => { flags.activity = consts.songs.K_POP }
            },
            {
                text: "National Day songs",
                next: "P3",
                fx: (flags) => { flags.activity = consts.songs.NDP }
            },
            {
                text: "School Song + Red Cross Song",
                next: "P3",
                fx: (flags) => { flags.activity = consts.songs.SCHOOL_SONG }
            },
            {
                text: "English Rap",
                next: "P3",
                fx: (flags) => { flags.activity = consts.songs.RAP }
            },
            {
                text: "Songs from the 80s",
                next: "P3",
                fx: (flags) => { flags.activity = consts.songs.OLD }
            },
            {
                text: "I don't like any of these choices (Back)",
                next: "P1"
            }
        ]
    },

    "P3": {
        text: "How many sessions should the unit go?",
        option: [
            {
                text: "1x6h visit",
                next: doP5Check,
                fx: (flags) => { flags.sessions = consts.sessions.ONE }
            },
            {
                text: "2x3h visits in the same month",
                next: doP5Check,
                fx: (flags) => { flags.sessions = consts.sessions.TWO_TGT }
            },
            {
                text: "2x3h visits, one in March, one in June",
                next: doP5Check,
                fx: (flags) => { flags.sessions = consts.sessions.TWO_SPREAD }
            },
            {
                text: "4x2h visits, one in each term",
                next: doP5Check,
                fx: (flags) => { flags.sessions = consts.sessions.FOUR }
            },
            {
                text: "0x8h visit",
                next: "P7"
            }]
    },

    "P4.5": {
        text: "Your committee is asking you to treat them to ice cream after the whole project is over. How would you like to respond to them?",
        option: [
            {
                text: "Of course!",
                next: "P5",
            },
            {
                text: "Sure, we can have ice cream, but I'm not paying...",
                next: "P5",
            },
            {
                text: "I'm lactose intolerant",
                next: "P5"
            },
            {
                text: "Nah.",
                next: "P5"
            }
        ]
    },

    "P6": {
        img: <NodeImg ext="https://i.kym-cdn.com/photos/images/original/001/861/224/330.jpg" alt="ps5 duck" />,
        text: "That's neat, but you don't have enough budget to buy those things (Besides, it's already a miracle if you even manage to find these in stock)",
        option: [
            {
                text: "Aww (choose something else)",
                next: "P1"
            }]
    },

    "P7": {
        img: <NodeImg ext="https://i.kym-cdn.com/photos/images/original/001/779/895/752.jpg" alt="not stonks" />,
        text: "Haha very funny - by not having the VIA, your unit's EUA dropped :( Your unit is very sad.",
        option: [
            {
                text: "Let's not do that (choose something else)",
                next: "P3"
            }]
    },
    
    "P5": {
        img: <NodeImg src="time-flies.jpg" alt="Time flies" />,
        text: "The committee is spending a lot of time on setting roles and goals. Should you intervene?",
        option: [
            {
                text: "Nah, they are doing fine.",
                next: (flags) => doP9Check(flags, "P10"),
                fx: (flags) => flags.decisionVisibility.rolesandgoals = true,
            },
            {
                text: "Yes",
                next: "P8"
            }
        ]
    },

    "P8": {
        img: () => planArcNodes["P5"].img,
        text: "What will you do?",
        option: [
            {
                text: "Tell everyone to stop wasting time and instead focus on making the activity as exciting as possible",
                next: "P11"
            },
            {
                text: "Tell everyone to just reuse the roles and goals from the last home visit's proposal.",
                next: "P11"
            },
            {
                text: "Tell the Admin IC and 2ICs to set for the rest of the committee",
                next: (flags) => doP9Check(flags, "P14"),
                fx: (flags) => flags.decisionVisibility.rolesandgoals = true,
            },
            {
                text: "Actually, none of these (Let them continue discussing)",
                next: (flags) => doP9Check(flags, "P10"),
                fx: (flags) => flags.decisionVisibility.rolesandgoals = true,
            }
        ]
    },

    "P11": {
        img: <NodeImg ext="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png" alt="Thinking emoji"/>,
        text: "Well that got everyone to move on, but they don't seen too happy about it...",
        option: [{
            text: "Continue",
            next: "P12",
        }]
    },
    
    "P12": {
        img: (<div className="iframe-container"><iframe src="https://giphy.com/embed/XoM1eSwGMXK4huqV2E" frameBorder="0" class="giphy-embed" allowFullScreen title="capoo sleeping" /></div>),
        text: "You realise that the rest of the committee is slacking off. What will you do?",
        option: [
            {
                text: "Assemble them and scold them",
                next: (flags) => doP9Check(flags, "P14"),
                fx: (flags) => { flags.rolesandgoals = consts.rolesandgoals.SCOLD }
            },
            {
                text: "Tell them off to the YO, this is out of your hands!",
                next: (flags) => doP9Check(flags, "P14"),
                fx: (flags) => { flags.rolesandgoals = consts.rolesandgoals.YO_SCOLD }
            },
            {
                text: "Complain to the unit chairperson Meiling.",
                next: (flags) => doP9Check(flags, "P14"),
                fx: (flags) => { flags.rolesandgoals = consts.rolesandgoals.OIC }
            },
            {
                text: "Ask the rest of the committee: What's going on?",
                next: "P13",
                fx: (flags) => { flags.rolesandgoals = consts.rolesandgoals.CHECK_ON_THEM }
            }
        ]
    },
    
    "P13": {
        text: () => (<React.Fragment><Dialogue
            startOfConvo="Our jobs aren't really what we want to do or what we thought they would be like..."
            speakerClass="nco-speech"
            convos={[]}
            name="the committee"
            maxQns={null}
        />
            <p>How do you want to respond to them?</p>
            </React.Fragment>),
        option: [
            {
                text: "Well, RnRs are always set like this and have worked previous years, so let's better just stick to it.",
                next: "P14",
                fx: (flags) => { flags.rolesandgoals =  consts.rolesandgoals.TRADITION }
            },
            {
                text: "Oh if you really want, feel free to swap roles...",
                next: (flags) => doP9Check(flags, "P10"),
                fx: (flags) => flags.decisionVisibility.rolesandgoals = true,
            },
            {
                text: "Ok let's go back to setting your own roles and goals",
                next: (flags) => doP9Check(flags, "P10"),
                fx: (flags) => flags.decisionVisibility.rolesandgoals = true,
            }
        ]
    },
    
    "P9": {
        text: "One of your Sec 2s ask: What margin width should we use for our proposal?",
        option: [
            {
                text: "Default, of course",
                next: "P10"
            },
            {
                text: "Narrow to save some trees",
                next: "P10"
            },
            {
                text: "Exactly 0.75\" just because",
                next: "P10"
            }
        ]
    },

    "P9.5": {
        text: "One of your Sec 2s ask you whether they can be reimbursed for the printing of our proposals? They have the receipts from the photocopy shop. How do you want to respond?",
        option: [
            {
                text: "Yes. Submit the receipts to the YOs.",
                next: "P10",
            },
            {
                text: "Yes. I will reimburse you first and help you claim from the YOs later.",
                next: "P9.75",
            }
        ]
    },

    "P9.75": {
        text: "After reimbursing the Sec 2s, you are $5 poorer... (for now)",
        option: [
            {
                text: "Oh well...",
                next: "P10"
            }
        ]
    },

    "P10": {
        text: "Alright! Your committee has created a beautiful proposal which the teacher approves, with just a week to spare! All seems to be going well :D",
        option: [{
            text: "Nice ^__^",
            next: doP15Check
        }]
    },

    "P14": {
        text: "Your committee finally finished the proposal two nights before the VIA. It's not the best, but at least it's before the VIA, let's hope the teachers find this OK...",
        option: [{
            text: "Fingers crossed...",
            next: doP15Check
        }]
    },

    "P15": {
        text: "Which teacher would you like to ask to bring the unit to the VIA?", option: [
            {
                text: "Mrs Ree",
                next: "P16"
            },
            {
                text: "Mr Shah",
                next: "P17"
            },
            {
                text: "Mdm Ani",
                next: "P18",
            },
            {
                text: "All 3!",
                next: "P19",
            },
            {
                text: "Check with the teachers who they have decided on",
                next: "P19"
            }
        ]
    },

    "P16": {
        text: "Mdm Ree says she is going on maternity leave. Mr Shah will be bringing the unit to the VIA instead",
        option: [{
            text: "Alright!",
            next: "A1"
        }]
    },

    "P17": {
        text: "Mr Shah agrees to join the unit for the VIA.",
        option: [{
            text: "Hooray!",
            next: "A1"
        }]
    },

    "P18": {
        text: "Mdm Ani says she has an important meeting on the day of the VIA. Mr Shah will be bringing the unit to the unit instead.",
        option: [{
            text: "Okay!",
            next: "A1"
        }]
    },

    "P19": {
        text: "The teachers tell you that only Mr Shah will be going with the unit for the VIA as the other two are unavailable.",
        option: [{
            text: "Noted",
            next: "A1"
        }]
    },
}

export default planArcNodes;
