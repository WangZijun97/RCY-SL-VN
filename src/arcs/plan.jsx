import React from 'react';
import consts from '../consts';
import Dialogue from '../convo/Dialogue';
import NodeImg from '../NodeImg';

const planArcNodes = {
    "P1": {
        img: <NodeImg src="plan.jpg" alt="" />,
        text: (flags) => (<React.Fragment>
            <p>Time to get some planning done - here are some activities that your NCOs have proposed! They are seeking your opinion -- which one should they focus on?</p>
            {(flags.research.internet || flags.research.freeTime || flags.research.soccer) && <p class="informative">[You have unlocked additional options because of your NCOs' research.]</p>}
            {(flags.research.recce) && <p class="informative">[You have unlocked additional options because of your NCOs' physical recce to the home.]</p>}
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
                condition: (flags) => flags.research.internet || flags.research.freeTime || flags.research.soccer || flags.research.recce
            },
            {
                text: "Chit Chat",
                next: "P3",
                fx: (flags) => { flags.activity = consts.activitiesCHIT_CHAT }
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
        text: "What books should the NCOs bring? They have time for two books:",
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
        text: "The NCOs wonder what type of songs to sing. What will you suggest?",
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
        text: "How many sessions should the cadets go?",
        option: [
            {
                text: "1x6h visit",
                next: "P5",
                fx: (flags) => { flags.sessions = consts.sessions.ONE }
            },
            {
                text: "2x3h visits in the same month",
                next: "P5",
                fx: (flags) => { flags.sessions = consts.sessions.TWO_TGT }
            },
            {
                text: "2x3h visits, one in March, one in June",
                next: "P5",
                fx: (flags) => { flags.sessions = consts.sessions.TWO_SPREAD }
            },
            {
                text: "4x2h visits, one in each term",
                next: "P5",
                fx: (flags) => { flags.sessions = consts.sessions.FOUR }
            },
            {
                text: "0x8h visit",
                next: "P7"
            }]
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
        text: "Haha very funny - by not having the VIA, your unit's EUA dropped from Gold to Silver :( Your unit is very sad.",
        option: [
            {
                text: "Let's not do that (choose something else)",
                next: "P3"
            }]
    },
    
    "P5": {
        img: <NodeImg src="time-flies.jpg" alt="Time flies" />,
        text: "The NCOs are spending a lot of time on setting roles and goals. Should you intervene?",
        option: [
            {
                text: "Nah, they are doing fine.",
                next: "P9",
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
                text: "Tell them to stop wasting time and instead focus on making the activity as exciting as possible",
                next: "P11"
            },
            {
                text: "Give them roles and goals from last year's proposal and just ask them to copy it.",
                next: "P11"
            },
            {
                text: "Tell the OIC and O2ICs to set for the rest of the committee",
                next: "P9"
            },
            {
                text: "Actually, none of these",
                next: "P9"
            }
        ]
    },

    "P11": {
        img: <NodeImg ext="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png" alt="Thinking emoji"/>,
        text: "Well that got them to move on, but they don't seen too happy about it...",
        option: [{
            text: "Continue",
            next: "P12",
        }]
    },
    
    "P12": {
        img: <iframe src="https://giphy.com/embed/XoM1eSwGMXK4huqV2E" frameBorder="0" class="giphy-embed" allowFullScreen title="capoo sleeping" />,
        text: "OIC John complains to you that the rest of the NCOs are slacking off. What will you do?",
        option: [
            {
                text: "Assemble the rest of the NCOs and scold them",
                next: "P14",
                fx: (flags) => { flags.rolesandgoals = "Scold" }
            },
            {
                text: "Tell them off to the YO, this is getting out of your hands!",
                next: "P121",
                fx: (flags) => { flags.rolesandgoals = "YO Scold" }
            },
            {
                text: "Tell John to handle it himself - he is the OIC after all. At most get the chairperson Meiling to help him out.",
                next: "P122",
                fx: (flags) => { flags.rolesandgoals = "Nothing" }
            },
            {
                text: "Ask the rest of the NCOs: What's going on?",
                next: "P13",
                fx: (flags) => { flags.rolesandgoals = "Check on them" }
            }
        ]
    },
    
    "P13": {
        text: () => (<React.Fragment><Dialogue
            startOfConvo="Our jobs aren't really what we want to do or what we thought they would be like..."
            speakerClass="nco-speech"
            convos={[]}
            name="the NCOs"
        />
            <p>How do you want to respond to them?</p>
            </React.Fragment>),
        option: [
            {
                text: "Well, RnRs are always set like this and have worked previous years, so let's better just stick to it.",
                next: "P14",
                fx: (flags) => { flags.rolesandgoals =  "Tradition" }
            },
            {
                text: "Oh if you really want, feel free to swap roles...",
                next: "P9"
            },
            {
                text: "Ok let's go back to setting your own roles and goals",
                next: "P9"
            }
        ]
    },
    
    "P9": {
        text: "The NCOs ask: What margin width should we use for our proposal?",
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
            },
            {
                text: "Figure it out yourselves",
                next: "P10"
            }
        ]
    },
    
    "P10": {
        text: "Alright! Your NCOs have created a beautiful proposal which the teacher approves, with just a week to spare! All seems to be going well :D",
        option: [{
            text: "Nice ^__^",
            next: "A1"
        }]
    },
    
    "P14": {
        text: "Your NCOs have finally finished off the proposal two nights before the VIA. It's not the best, but at least it's before the VIA. Let's hope the teacher find's this OK...",
        option: [{
            text: "Fingers crossed...",
            next: "A1"
        }]
    }
}

export default planArcNodes;
