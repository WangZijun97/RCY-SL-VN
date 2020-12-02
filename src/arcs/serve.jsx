import consts from '../consts'

const serveArcNodes = {
    
    "S1": {
        index: "S1",
        img: (<img />),
        text: "It is the day of the VIA! You board the bus with the unit to the VIA location.",
        option: [{
            text: "Exciting!",
            next: (flags) => flags.name == consts.SESAME ? "S3" : "S2"
        }]
    },
    
    "S2": {
        index: "S2",
        img: (<img />),
        text: "The children at Sunshine Home are a bit aloof and unfriendly towards the cadets as they have never seen them before.",
        option: [{
            text: "Aww...",
            next: "S3"
        }]
    },
    
    "S3": {
        index: "S3",
        img: (<img />),
        text: "You start with the activities!",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.activity == consts.AMONG_US) {
                    return "S4"
                } else if (Object.values(consts.songs).includes(flags.activity)) {
                    return "S6"
                } else if (Object.values(consts.books).includes(flags.activity)) {
                    return "S12"
                } else if (flags.activity == consts.SOCCER) {
                    return "S17"
                } else if (flags.activity == consts.CHIT_CHAT) {
                    return "S19"
                } else if (flags.activity == consts.KITE) {
                    return "S101"
                }
            }
        }]
    },
    
    "S4": {
        index: "S4",
        img: (<img />),
        text: "Oh dear, you discovered that most of the kids do not have smartphones...",
        option: [
            {
                text: "The cadets play and let the kids watch",
                next: "S18"
            },
            {
                text: "Let's just give up on this and chit chat with them instead...",
                next: "S19"
            }]
    },
    
    "S6": {
        index: "S6",
        img: (<img />),
        text: "You begin with the sing-along session...",
        option: [{
            text: "Let's start singing!",
            next: (flags) => {
                if (flags.activity == consts.songs.K_POP) {
                    return "S7"
                } else if (flags.activity == consts.songs.NDP) {
                    return "S8"
                } else if (flags.activity == consts.songs.RAP) {
                    return "S9"
                } else if (flags.activity == consts.songs.OLD) {
                    return "S10"
                } else if (flags.activity == consts.songs.SCHOOL_SONG) {
                    return "S11"
                }
            }
        }]
    },
    
    "S7": {
        index: "S7",
        img: (<img />),
        text: "Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S8": {
        index: "S8",
        img: (<img />),
        text: "Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S9": {
        index: "S9",
        img: (<img />),
        text: "You find that one of the kids, Allam, is really excited, and in fact sings some songs that even your cadets don't know. However, the rest of the kids quickly lose interest and turn back to their usual activities instead...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S10": {
        index: "S10",
        img: (<img />),
        text: "Some of the kids sing along, but many of the rest go back to doing what they usually do instead...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S11": {
        index: "S11",
        img: (<img />),
        text: "The kids look very confused at all of you, then go back to doing their usual activities...",
        option: [
            {
                text: "Let's just keep singing",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S12": {
        index: "S12",
        img: (<img />),
        text: "Your cadets start reading the books to the children...",
        option: [{
            text: "Continue...",
            next: (flags) => {
                if (flags.activity == consts.books.SNOW_WHITE) {
                    return "S13"
                } else if (flags.activity == consts.books.GERONIMO) {
                    return "S14"
                } else if (flags.activity == consts.books.HARRY_POTTER) {
                    return "S15"
                } else if (flags.activity == consts.books.HARD_TRUTHS) {
                    return "S16"
                }
            }
        }]
    },
    
    "S13": {
        index: "S13",
        img: (<img />),
        text: "The youngest kids listen attentively to the cadets reading, but the older ones got bored and quickly went back to what they were doing before.",
        option: [
            {
                text: "Let's continue reading",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S14": {
        index: "S14",
        img: (<img />),
        text: "The younger kids listen to the cadets reading, but the older ones got bored and went back to what they were doing previously.",
        option: [
            {
                text: "Let's continue reading",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S15": {
        index: "S15",
        img: (<img />),
        text: "Some of the older kids listen to the cadets reading, but the rest get bored and went back to doing their own things. The younger kids are quite confused about the story and frequently interrupt the cadets reading.",
        option: [
            {
                text: "Let's continue reading",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S16": {
        index: "S16",
        img: (<img />),
        text: "The kids looked very confused during the reading session and they went back to what they were doing previously quickly.",
        option: [
            {
                text: "Let's continue reading",
                next: "S18"
            },
            {
                text: "Start chit-chatting with the kids",
                next: "S19"
            }]
    },
    
    "S17": {
        index: "S17",
        img: (<img />),
        text: "Many (but not all) of the kids are very excited to play soccer. The NCOs organized them into various age groups and the kids are having a great time. During the breaks in between some of the games, you start talking to some of the kids from the home...",
        option: [{
            text: "Continue...",
            next: "S19",
            fx: (flags) => flags.result = consts.GOOD
        }]
    },
    
    "S18": {
        index: "S18",
        img: (<img />),
        text: "The VIA is coming to its end. The unit wasn't able to engage the vast majority of the kids at the home. You feel disappointed by the VIA...",
        option: [{
            text: "Oh no...",
            next: "R1"
        }]
    },
    
    "S101": {
        index: "S101",
        img: (<img />),
        text: "Incredibly, all of the kids are ecstatic to play kite-fighting. They start showing off their kites as well as the various techniques they use to defeat others' kites to your cadets. Everyone is enjoying themselves greatly. During the breaks in the game, you start talking to some of the kids from the home.",
        option: [{
            text: "Continue",
            next: "S19",
            fx: (flags) => flags.result = consts.EXCELLENT
        }]
    },
    
    "S19": {
        index: "S19",
        img: (<img />),
        text: "Which of the people at the home would you like to talk to?",
        option: [
            {
                text: "",
                next: ""
            }]
    }
}

export default serveArcNodes
        