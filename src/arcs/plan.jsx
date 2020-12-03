import consts from '../consts'

import singing from '../images/singing.png'
import snowWhite from '../images/snow-white.jpg'
import threeLittlePigs from '../images/three-little-pigs.jpg'
import geronimo from '../images/geronimo-stilton.jpg'
import enidBlyton from '../images/enid-blyton.jpg'
import harryPotter from '../images/harry-potter.jpg'
import percyJackson from '../images/percy-jackson.jpg'
import hardTruths from '../images/hard-truths.jpg'
import timeFlies from '../images/time-flies.jpg'

const planArcNodes = {
    "P1": {
        index: "P1",
        img: (<img />),
        text: "Time to get some planning done - here are some activities that your NCOs have proposed! Pick one to encourage your NCOs to conduct -",
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
                condition: (flags) => flags.research.internet || flags.research.freeTime || flags.research.soccer,
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
        index: "P2",
        img: () => (<div className="book-catalogue">
            <img src={snowWhite} alt="Snow White"/>
            <img src={threeLittlePigs} alt="Three Little Pigs"/>
            <img src={geronimo} alt="Geronimo Stilton"/>
            <img src={enidBlyton} alt="Enid Blyton"/>
            <img src={harryPotter} alt="Harry Potter"/>
            <img src={percyJackson} alt="Percy Jackson"/>
            <img src={hardTruths} alt="Hard Truths"/>
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
        index: "P4",
        img: (<img src={singing} alt="" />),
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
        index: "P3",
        text: "How many sessions should the cadets go?",
        option: [
            {
                text: "1x6h visit",
                next: "P5",
                fx: (flags) => { flags.sessions = "1" }
            },
            {
                text: "2x3h visits in the same month",
                next: "P5",
                fx: (flags) => { flags.sessions = "2 in a month" }
            },
            {
                text: "2x3h visits, one in March, one in June",
                next: "P5",
                fx: (flags) => { flags.sessions = "2 spread out" }
            },
            {
                text: "4x2h visits, one in each term",
                next: "P5",
                fx: (flags) => { flags.sessions = "4" }
            },
            {
                text: "0x8h visit",
                next: "P7"
            }]
    },

    "P6": {
        index: "P6",
        img: (<img src="https://i.kym-cdn.com/photos/images/original/001/861/224/330.jpg" alt="ps5 duck" />),
        text: "That's neat, but you don't have enough budget to buy those things (Besides, it's already a miracle if you even manage to find these in stock)",
        option: [
            {
                text: "Aww (choose something else)",
                next: "P1"
            }]
    },

    "P7": {
        index: "P7",
        img: (<img src="https://i.kym-cdn.com/photos/images/original/001/779/895/752.jpg" alt="not stonks" />),
        text: "Haha very funny - by not having the VIA, your unit's EUA dropped from Gold to Silver :( Your unit is very sad.",
        option: [
            {
                text: "Let's not do that (choose something else)",
                next: "P3"
            }]
    },
    
    "P5": {
        index: "P5",
        img: (<img src={timeFlies} alt="Time flies" />),
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
        index: "P8",
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
        index: "P11",
        img: (<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/thinking-face_1f914.png" alt="Thinking emoji"/>),
        text: "Well that got them to move on, but they don't seen too happy about it...",
        option: [{
            text: "Continue",
            next: "P12",
        }]
    },
    
    "P12": {
        index: "P12",
        img: (<iframe src="https://giphy.com/embed/XoM1eSwGMXK4huqV2E" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>),
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
        index: "P13",
        img: (<img />),
        text: "NCOs: Our jobs aren't really what we want to do or what we thought they would be like...",
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
        index: "P9",
        img: (<img />),
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
        index: "P10",
        img: (<img />),
        text: "Alright! Your NCOs have created a beautiful proposal which the teacher approves, with just a week to spare! All seems to be going well :D",
        option: [{
            text: "Nice ^__^",
            next: "A1"
        }]
    },
    
    "P14": {
        index: "P14",
        img: (<img />),
        text: "Your NCOs have finally finished off the proposal two nights before the VIA. It's not the best, but at least it's before the VIA. Let's hope the teacher find's this OK...",
        option: [{
            text: "Fingers crossed...",
            next: "A1"
        }]
    }
}

export default planArcNodes;
