import React from 'react'
import consts from '../consts'
import NodeImg from '../NodeImg'
import Dialogue from '../convo/Dialogue'
import scroogeConvos from '../convo/scrooge'
import jonConvos from '../convo/jonathan'
import allamConvos from '../convo/allam'
import emilyConvos from '../convo/emily'
import carmenConvos from '../convo/carmen'
import Stars from '../stars'

const POOR_RESULTS = [consts.activities.AMONG_US, consts.books.HARD_TRUTHS, consts.songs.SCHOOL_SONG];

const calculateScore = (flags, finalChitChat) => {
    const sustainability = flags.name === consts.SESAME ? 1 : 0;
    const sessionSus = [consts.sessions.TWO_SPREAD, consts.sessions.FOUR].includes(flags.sessions) ? 1 : 0;
    const chitChatScore = finalChitChat ? 1 : 0;
    
    let result = sustainability + chitChatScore + sessionSus

    if (POOR_RESULTS.includes(flags.activity)) {
        result += 0 //lol
    } else if (flags.activity === consts.activities.CHIT_CHAT) {
        result += 2
    } else if (flags.activity === consts.activities.SOCCER) {
        result += 3
    } else if (flags.activity === consts.activities.KITE) {
        result += 4
    } else {
        result += 1
    }
    return result
}

const serveArcNodes = {
    "S1": {
        bgm: 'chariots-of-fire.mp3',
        img: <NodeImg src="magic-schoolbus.jpg" alt="School Bus" />,
        text: "It is the day of the VIA! You board the bus with the unit to the VIA location.",
        option: [{
            text: "Exciting!",
            next: (flags) => flags.name === consts.SESAME ? "S3" : "S2"
        }]
    },

    "S2": {
        img: <NodeImg src="scared-kid.png" alt="Scared" />,
        text: "The children at Sunshine Home are a bit aloof and unfriendly towards the cadets as they have never seen them before.",
        option: [{
            text: "Aww...",
            next: "S3"
        }]
    },

    "S3": {
        bgm: (flags) => {
            if (flags.activity === consts.activities.AMONG_US) {
                return 'among-us.mp3';
            } else if (Object.values(consts.songs).includes(flags.activity)) {
                return serveArcNodes["S6"].bgm(flags);
            } else if (Object.values(consts.books).includes(flags.activity)) {
                return serveArcNodes["S12"].bgm(flags);
            } else if (flags.activity === consts.activities.KITE) {
                return null;
            } else if (flags.activity === consts.activities.SOCCER) {
                return 'this-time-for-africa.mp3';
            }
        },
        img: (flags) => {
            if (flags.activity === consts.activities.AMONG_US) {
                return <NodeImg src="among-us.jpg" alt="Among Us" />;
            } else if (Object.values(consts.songs).includes(flags.activity)) {
                return serveArcNodes["S6"].img(flags);
            } else if (Object.values(consts.books).includes(flags.activity)) {
                return serveArcNodes["S12"].img(flags);
            } else if (flags.activity === consts.activities.KITE) {
                return serveArcNodes["S101"].img;
            } else if (flags.activity === consts.activities.SOCCER) {
                return serveArcNodes["S17"].img;
            } else return <div />;
        },
        text: (flags) => `Let's begin with the activities! Your unit decided to ${flags.activity}.`,
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.activity === consts.activities.AMONG_US) {
                    return "S4"
                } else if (Object.values(consts.songs).includes(flags.activity)) {
                    return "S6"
                } else if (Object.values(consts.books).includes(flags.activity)) {
                    return "S12"
                } else if (flags.activity === consts.activities.SOCCER) {
                    return "S17"
                } else if (flags.activity === consts.activities.CHIT_CHAT) {
                    return "S19"
                } else if (flags.activity === consts.activities.KITE) {
                    return "S101"
                }
            },
        }]
    },

    "S4": {
        img: <NodeImg src="NotLikeDuck.png" />,
        text: "Oh dear, you discovered that most of the kids do not have smartphones... What should you do?",
        option: [
            {
                text: "Let the cadets play and let the kids watch",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Let's just give up on this and chit chat with them instead...",
                next: "S19",
                fx: (flags) => { flags.result = calculateScore(flags, true); }
            }]
    },

    "S6": {
        bgm: (flags) => {
            if (flags.activity === consts.songs.K_POP) {
                return 'public/bgm/dynamite.mp3';
            } else if (flags.activity === consts.songs.NDP) {
                return 'home.mp3';
            } else if (flags.activity === consts.songs.RAP) {
                return 'eminem.mp3';
            } else if (flags.activity === consts.songs.OLD) {
                return null;
            } else if (flags.activity === consts.songs.SCHOOL_SONG) {
                return 'make-a-change.mp3';
            }
        },
        img: (flags, isMuted) => {
            if (flags.activity === consts.songs.K_POP) {
                return <NodeImg src="bts.jpg" alt="BTS" />;
            } else if (flags.activity === consts.songs.NDP) {
                return <NodeImg src="home.png" alt="Home" />;
            } else if (flags.activity === consts.songs.RAP) {
                return <NodeImg src="eminem.png" alt="Eminem" />;
            } else if (flags.activity === consts.songs.OLD) {
                return (<div className="iframe-container"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="80s song" /></div>);
            } else return <div />;
        },
        text: "You begin with the sing-along session...",
        option: [{
            text: "Let's start singing!",
            next: (flags) => {
                if (flags.activity === consts.songs.RAP) {
                    return "S9"
                } else if (flags.activity === consts.songs.SCHOOL_SONG) {
                    return "S11"
                } else return "S7";
            }
        }]
    },

    "S7": {
        img: (flags) => serveArcNodes["S6"].img(flags),
        text: "Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S9": {
        img: (flags) => serveArcNodes["S6"].img(flags),
        text: (flags) => (<p>
            You find that one kid{flags.research.recce && ", Allam,"} is very excited, and in fact sings
            some songs that even your cadets don't know. However, the rest of the kids quickly lose interest and turn
            back to their usual activities instead...
        </p>),
        option: [
            {
                text: "Let's just keep singing",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S11": {
        img: <NodeImg src="jerry.jpg" />,
        text: "The kids look very confused at all of you, then go back to doing their usual activities...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S12": {
        bgm: (flags) => {
            if (flags.activity === consts.books.SNOW_WHITE) {
                return "twinkle-twinkle.mp3";
            } else if (flags.activity === consts.books.GERONIMO) {
                return "geronimo.mp3";
            } else if (flags.activity === consts.books.HARRY_POTTER) {
                return "harry-potter.mp3";
            } else if (flags.activity === consts.books.HARD_TRUTHS) {
                return "tentera.mp3";
            }
        },
        img: (flags) => serveArcNodes[serveArcNodes["S12"].option[0].next(flags)].img,
        text: "Your cadets start reading the books to the children...",
        option: [{
            text: "Continue...",
            next: (flags) => {
                if (flags.activity === consts.books.SNOW_WHITE) {
                    return "S13"
                } else if (flags.activity === consts.books.GERONIMO) {
                    return "S14"
                } else if (flags.activity === consts.books.HARRY_POTTER) {
                    return "S15"
                } else if (flags.activity === consts.books.HARD_TRUTHS) {
                    return "S16"
                }
            }
        }]
    },

    "S13": {
        img: (<div className="book-catalogue">
            <NodeImg src="snow-white.jpg" alt="Snow White"/>
            <NodeImg src="three-little-pigs.jpg" alt="Three Little Pigs"/>
        </div>),
        text: "The youngest kids listen attentively to the cadets reading, but the older ones get bored and quickly go back to doing their work.",
        option: [
            {
                text: "Let's continue reading",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S14": {
        img: (<div className="book-catalogue">
            <NodeImg src="geronimo-stilton.jpg" alt="Geronimo Stilton"/>
            <NodeImg src="enid-blyton.jpg" alt="Enid Blyton"/>
        </div>),
        text: "The younger kids listen to the cadets reading, but the older ones get bored and go back to doing their work.",
        option: [
            {
                text: "Let's continue reading",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S15": {
        img: (<div className="book-catalogue">
            <NodeImg src="harry-potter.jpg" alt="Harry Potter"/>
            <NodeImg src="percy-jackson.jpg" alt="Percy Jackson"/>
        </div>),
        text: "Some of the older kids listen to the cadets reading, but the rest get bored and go back to doing their work. The younger kids are quite confused about the story and frequently interrupt the cadets reading.",
        option: [
            {
                text: "Let's continue reading",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S16": {
        img: <NodeImg src="hard-truths.jpg" alt="Hard Truths"/>,
        text: "The kids look very confused during the reading session and they go back to doing their work.",
        option: [
            {
                text: "Let's continue reading",
                next: "S32767",
                fx: (flags) => { flags.result = calculateScore(flags, false); }
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },

    "S17": {
        img: <NodeImg src="soccer.png" alt="Soccer" />,
        text: "Many (but not all) of the kids are very excited to play soccer. Your committee organized them into various age groups and the kids are having a great time. During the breaks in between some of the games, you start talking to some of the kids from the home...",
        option: [{
            text: "Continue...",
            next: "S19",
        }]
    },

    "S18": {
        img: (<Stars label="Service" rating={1} />), // 1-star activity
        text: "The VIA is coming to its end. The unit wasn't able to engage the vast majority of the kids at the home. You feel disappointed by the VIA...",
        option: [{
            text: "Oh no...",
            next: "R1"
        }]
    },

    "S101": {
        img: (<div className="iframe-container"><iframe src="https://www.youtube.com/embed/1TroueqxAtM" frameborder="0" width="100%" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Kite-Fighting" /></div>),
        text: "Incredibly, all of the kids are ecstatic to play kite-fighting. They start showing off their kites as well as the various techniques they use to defeat others' kites to your cadets. Everyone is enjoying themselves greatly. During the breaks in the game, you start talking to some of the kids from the home.",
        option: [{
            text: "Continue",
            next: "S19",
        }]
    },

    "S19": {
        bgm: 'reunited.mp3',
        text: "Which of the people at the home would you like to talk to?",
        option: [
            {
                text: "Speak to Home Director, Mr Scrooge",
                next: "S20"
            },
            {
                text: "Speak to 16 year old Jonathan",
                next: "S21"
            },
            {
                text: "Speak to 14 year old Allam",
                next: "S22"
            },
            {
                text: "Speak to 10 year old Emily",
                next: "S23"
            },
            {
                text: "Speak to 9 year old Carmen",
                next: "S24"
            },
            {
                text: "Wrap up the VIA",
                next: "S32767",
                fx: (flags) => { 
                    flags.finalChitChat = true;
                    flags.result = calculateScore(flags, true);
                }
            }]
    },

    "S20": {
        img: (<NodeImg src="scrooge.jpg" alt="scrooge" />),
        text: (flags) => (<Dialogue
            startOfConvo={`Hope you are having a great time here at ${flags.name}! I am Ebenzer Scrooger, the Home Director. Feel free to ask me anything about this place!`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            name="Mr. Scrooge" />),
        option: [{
            text: "Go back to talk to the others",
            next: "S19"
        }]
    },

    "S21": {
        text: () => (<Dialogue
            startOfConvo="Hi... I'm Jonathan, and I'm 16 years old."
            speakerClass="jon-speech"
            convos={jonConvos}
            name="Jonathan"
        />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "S19"
            }]
    },

    "S22": {
        text: () => (<Dialogue 
            startOfConvo="Sup. I'm Allam, and I'm 14."
            speakerClass="allam-speech"
            convos={allamConvos}
            name="Allam"
        />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "S19"
            }]
    },

    "S23": {
        text: () => (<Dialogue 
            startOfConvo="Umm... hello! I'm Emily!"
            speakerClass="emily-speech"
            convos={emilyConvos}
            name="Emily"
        />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "S19"
            }]
    },

    "S24": {
        text: () => (<Dialogue 
            startOfConvo="I'm Carmen..."
            speakerClass="carmen-speech"
            convos={carmenConvos}
            name="Carmen"
        />),
        option: [
            {
                text: "Go back to talk to the others",
                next: "S19"
            }]
    },

    "S32767": {
        bgm: 'watashi-no-uso.mp3',
        img: (flags) => (<Stars label="Service" rating={flags.result} />),
        text: (flags) => (<p>{makeDescription(flags.name === consts.SESAME, flags.activity, flags.result)}</p>),
        option: [{
            text: "Continue",
            next: "R1",
        }]
    },
}

const makeDescription = (isSesame, activity, score) => {
    let str = isSesame ? "Many of the kids remember your unit from the previous visit and were excited to see you again." : "The atmosphere was rather awkward as many of the kids at the home were unfriendly with you."

    if (POOR_RESULTS.includes(activity)) {
        const didChitChat = (score - isSesame ? 1 : 0) === 1;
        str += isSesame ? " Unfortunately," : " Furthermore,";
        if (didChitChat) str += " the VIA had a pretty disastrous start as";
        str += " the vast majority of the kids at the home were uninterested in what your unit planned."

        if (didChitChat) str += " At least some of the kids and cadets are talking with each other..."

        // Chit chat
    } else if (activity === consts.activities.CHIT_CHAT) {
        str += isSesame ? "" : " Nevertheless, they warmed up to the cadets.";
        str += " You see that many of the kids and the cadets were talking animatedly with each other.";

        // Soccer
    } else if (activity === consts.activities.SOCCER) {
        str += isSesame ? " M" : " Nevertheless, m";
        str += "ost of the kids and the cadets were enjoying themselves greatly playing soccer, and many of them bonded closely over the fun that they are having.";

        // Kite-fighting
    } else if (activity === consts.activities.KITE) {
        str += isSesame ? " Incredibly," : " Despite that,";
        str += " you notice that all of the kids had a lot of fun fighting kites and your cadets felt very satisfied learning how to fight kites from the children from the home.";

        // otherwise
    } else {
        const didChitChat = (score - isSesame ? 1 : 0) === 2;
        str += isSesame ? " Unfortunately," : " Furthermore,";
        if (didChitChat) str += " the VIA had a pretty weak start as";
        str += " many kids at the home weren't engaged by what your unit planned."

        if (didChitChat) str += " At least some of the kids and cadets are talking with each other..."
    }

    if (score === 7) {
        str += " This VIA has been an incredible success and you are extremely proud of your committee and your cadets for that!";
    } else if (score > 4 && score < 7) {
        str += " This VIA has been rather successful. Nevertheless, you can't help but wonder what you could have done to make it even better...";
    } else if (score < 5 && score > 2) {
        str += " This VIA has been okay but there is definitely room for improvement...";
    } else if (score === 2) {
        str += " This VIA wasn't so good and there was definitely a lot that needed improvement...";
    } else {
        str += " This VIA has gone pretty badly and you feel very disappointed...";
    }

    return `The VIA has come to an end. ${str}`
}

export default serveArcNodes

