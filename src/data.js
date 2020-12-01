import bridge from './images/bridge.jpg'
import smiley from './images/smiley.png'
import skull from './images/skull.png'
import school from './images/school.jpg'
import pepecry from './images/pepecry.png'
import sschicon from './images/sesamestreeticon.PNG'
import sunshineicon from './images/sunshineicon.PNG'
import qrSesame from './images/qr-sesame.png'
import qrSunshine from './images/qr-sunshine.png'

let flags = {
    name: "default",
    research: "",
    ncogoal: "",
    activity: ""
}

let nodeoof = {
    index: "oof",
    img: (<img />),
    text: "Still under development UwU. Please refresh page.",
    option: []
}

const consts = {
    SESAME: "Sesame Street Children's Orphanage",
    SUNSHINE: "Sunshine Children's Home"
};

let node0 = {
    index: 0,
    img: (<img src={smiley} width="200" height="200" />),
    text: "press a button",
    option: [
        {
            text: "A",
            next: 1
        },
        {
            text: "B",
            next: 2
        }
    ]
}

let node1 = {
    index: 1,
    img: (<img src={bridge} width="200" height="200" />),
    text: "yay u win",
    option: [
        {
            text: "back",
            next: 0
        }
    ]
}

let node2 = {
    index: 2,
    img: (<img src={skull} width="200" height="200" />),
    text: "u die",
    option: [
        {
            text: "back",
            next: 0
        },
        {
            text: "nope",
            next: 1
        }
    ]
}

const nodes = {

    "H1": {
        index: "H1",
        img: (<img src={school} width="266" height="200" />),
        text: "You are a VI attached to Chai Chee Secondary School. It is July 2021, and you unit needs to conduct one more VIA to fulfill the requirements for SL badges. Your teacher has asked you to recommend a VIA project for the unit to do.",
        option: [
            {
                text: "Home Visit",
                next: "H3"
            },
            {
                text: "First Aid Duty for Inter-School Sports Day",
                next: "H2"
            }]
    },

    "H2": {
        index: "H2",
        img: (<img src={pepecry} width="200" height="200" />),
        text: "Unfortunately, due to COVID, the event got cancelled :(",
        option: [
            {
                text: "Home Visit it is",
                next: "H3"
            }]
    },

    "H3": {
        index: "H3",
        img: (<div>
            <img src={sschicon} width="500" height="200" />
            <img src={sunshineicon} width="400" height="200" />
            </div>),
        text: "Your teacher has identified 2 possible beneficiaries for your home visit. The first is Sesame Street Children's Orphanage that your unit has visited before in 2018 and 2019. The second option is Sunshine Children's Home, which your unit has never visited before, but is nearer to your school. Which beneficiary would you recommend?",
        option: [
            {
                text: consts.SESAME,
                next: "L1",
                fx: () => flags.name = consts.SESAME
            },
            {
                text: consts.SUNSHINE,
                next: "L1",
                fx: () => flags.name = consts.SUNSHINE
            }]
    },

    "L1": {
        index: "L1",
        text: () => {return "Your NCOs are very excited! They would like to get started with planning immediately and are discussing all the fun activities they can do with the children at " + flags.name + ". Should you intervene?"},
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
        text: "How do you want to intervene?",
        option: [
            {
                text: "Research more",
                next: "L2"
            },
            {
                text: "Set goals",
                next: "L20"
            },
            {
                text: "I have completed the interventions that I want.",
                next: "P1"
            }]
    },

    "L2": {
        index: "L2",
        img: (<img />),
        text: "What would you like your NCOs to do?",
        option: [
            {
                text: "Do more research on the home via the internet",
                next: "L3",
                fx: () => flags.research = "Internet"
            },
            {
                text: "Email the home to ask questions",
                next: "L4",
            },
            {
                text: "Call the home to ask questions",
                next: "L8"
            },
            {
                text: "Physically visit the home for a recce",
                next: "L13",
                fx: () => flags.research = "Recee"
            }]
    },

    "L3": {
        index: "L3",
        img: () => <img src={flags.name === consts.SESAME ? qrSesame : qrSunshine} />,
        text: () => (
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
        img: (<img />),
        text: "It's been one week but the home hasn't replied you yet. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L5"
            },
            {
                text: "Go back to other research options.",
                next: "L2"
            }]
    },

    "L5": {
        index: "L5",
        img: (<img />),
        text: "It's been another week but the home still hasn't replied you. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L6"
            },
            {
                text: "Go back to other research options.",
                next: "L7"
            }]
    },

    "L6": {
        index: "L6",
        img: (<img />),
        text: "WHERE GOT TIME TO WAIT??",
        option: [
            {
                text: "BACK",
                next: "L5"
            }]
    },

    "L7": {
        index: "L7",
        img: (<img />),
        text: (<span>What would you like your NCOs to do? <br/><em>[Unfortunately, due to the 2 week delay, you are no longer able to conduct a reccee]</em></span>),
        option: [
            {
                text: "Do more research on the home via the Internet",
                next: "L3",
                fx: () => flags.research = "Internet"
            },
            {
                text: "Call the home to ask questions",
                next: "L8"
            }]
    },

    "L8": {
        index: "L8",
        img: (<img />),
        text: "Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",
        option: [
            {
                text: "Speak to Mr Scrooge",
                next: "L9"
            }]
    },

    "L9": {
        index: "L9",
        img: (<img />),
        text: () => {return (<div>
            <p>Mr Scrooge tells you the following: </p>
            <ol>
            <li>My number one worry is the budget. We don't have enough donations, so we really cannot afford to overspend!</li>
            <li>I really rather receive money than volunteers, we have barely enough for the lights.</li>
            <li>I live here too and the conditions are really... ugh</li>
            <li>I really hope that the children will get adopted so that the budget can be spread less thinly.</li>
            <li>It's quite sad that they have to live in such poor conditions, I really feel bad for them, they deserve better lives than this...</li>
            <li>Hope that someone would come along to help him with managing the home too, there's too much to do for one person.</li>
            <li>TV shows? Don't tell anyone, but I love those romance series.</li>
            </ol>
            <p>You have time for one last question as well! What would you like to ask?</p>
            </div>)},
        option: [
            {
                text: "What do the kids like to do in their free time?",
                next: "L10",
                fx: () => flags.research = "Scrooge"
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
        img: (<img />),
        text: "I think the kids like to play soccer.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L11": {
        index: "L11",
        img: (<img />),
        text: "There is a TV playing Just for Laughs Gags",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L12": {
        index: "L12",
        img: (<img />),
        text: "There is no Wi-Fi",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L13": {
        index: "L13",
        img: (<img />),
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
        img: (<img />),
        text: () => nodes["L9"].text(),
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L15": {
        index: "L15",
        img: (<img />),
        text: () => {return (<div>
            <p>Jonathan tells you the following:</p>
            <ol>
            <li>I go to Khairuddin Secondary School</li>
            <li>I'm usually very tired in school, school is so boring</li>
            <li>I don't have money for recess/lunch sometimes, often all I can buy is rice and one simple vegetable, Sometimes, I can't even afford that and just have to go hungry...</li>
            <li>My grades aren't really very good... Maybe it's because of how tired and hungry that I am all the time</li>
            <li>To earn money for food, I work to distribute newspapers very early in the morning</li>
            <li>I wonder what will happen to me once I have to leave the home once I am too old to stay here, there's no way I can afford a place to stay and have food...</li>
            <li>I wish I could become a chef so that I can cook my own great food!</li>
            <li>In my little free time, I love playing soccer! Oh I also like to do kite fighting, if you know what that is hehe</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L16": {
        index: "L16",
        img: (<img />),
        text: () => {return (<div>
            <p>Allam tells you the following:</p>
            <ol>
            <li>I don't go to school - got like 130 or something for PSLE then dropped out of Secondary School.</li>
            <li>I work part-time at several shops for some small amount to settle food</li>
            <li>How do I get hired while being so young? Don't tell anyone, but it's all sneaky sneaky. If anyone asks, I'm 16.</li>
            <li>Rap music is the best! I first heard some of the popular rap songs while at work and really like them. I can really feel the meaning in the words for these songs!</li>
            <li>I hope that one that I can become a rapper too, they are soooo cool.</li>
            <li>Football? Go Chelsea!! I'm not really good at playing football, but it's still pretty fun. I like kite fighting too!</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L17": {
        index: "L17",
        img: (<img />),
        text: () => {return (<div>
            <p>Emily tells you the following:</p>
            <ol>
            <li>I go to Chai Chee Primary School.</li>
            <li>School's great, I think I'm doing pretty ok :D</li>
            <li>I have a few friends in school. Not really in with the cool kids but not bullied or anything, schools fine.</li>
            <li>I love reading! Sadly it's so dark here with all the lights off that it's difficult to be able to read properly, but I still try.</li>
            <li>My favourite series is Harry Potter!</li>
            <li>The others... they aren't that cool, seems like they usually spend their time earning money and doing chores. What a waste of time, they could be reading instead!</li>
            <li>I don't really enjoy soccer, but kite-fighting is definitely ten out of ten fun!</li>
            <li>It's great fun to chit chat! Even if my life isn't very exactly to talk about. Come back to talk to me again!</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L18": {
        index: "L18",
        img: (<img />),
        text: () => {return (<div>
            <p>Carmen tells you the following:</p>
            <ol>
            <li>School? I go to Chai Chee Primary.</li>
            <li>Yea I'm doing OK, not first place but don't think I'm doing too bad.</li>
            <li>Oh yes my uniform is pretty nasty looking, it's all dirty and patched from all the times those nasty P6 kids tear them.</li>
            <li>I wish I could be like Emily, she's doing so well in school like a queen.</li>
            <li>My favourite show is We Bare Bears! Oh my just look at Icebear he's sooooooo cute and his story is soooooo sad but beautiful.</li>
            <li>Cars is a great movie. I used to have a toy car that looks just like the red one in the movie, but someone threw it away one day. How dare they :(</li>
                <li>We all have to play a part in doing housework, so I do mine as best as I can, but sometimes I get injured especially in our really slippery kitchen. So I don't really like doing that.</li>
                <li>Football and kite-fighting are great fun!</li>
                </ol>
                </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L20": {
        index: "L20",
        img: (<img />),
        text: "How do you want to set goals with the NCOs?",
        option: [
            {
                text: "Tell the NCOs what goals they should try to achieve.",
                next: "L21",
                fx: () => flags.ncogoal = "by VIs"
            },
            {
                text: "Facilitate the NCOs in setting their own goals for the VIA.",
                next: "L22"
            }]
    },

    "L21": {
        index: "L21",
        img: (<img />),
        text: "Some of the NCOs looked very bored after you told them that they should aim to put in their best as well as learn more from the stories of the residents...",
        option: [
            {
                text: "Proceed on",
                next: "P1"
            }]
    },

    "L22": {
        index: "L22",
        img: (<img />),
        text: "A NCO sets this goal for himself. Should you intervene?",
        option: [
            {
                text: "Yes",
                next: "L23",
                fx: () => flags.ncogoal = "by NCOs"
            },
            {
                text: "No",
                next: "P1",
                fx: () => flags.ncogoal = "not specific"
            }]
    },

    "L23": {
        index: "L23",
        img: (<img />),
        text: "What do you want to prompt the NCO?",
        option: [
            {
                text: "This is not specific enough, you need to set another goal.",
                next: "L24"
            },
            {
                text: "That's a good start, let's try to use 3W1H to make this goal more specific!",
                next: "L25"
            }]
    },

    "L24": {
        index: "L24",
        img: (<img />),
        text: "The NCO looks a bid sad. He sets another goal, to learn how to take calculated risks while planning. You are happy with this goal.",
        option: [
            {
                text: "Proceed on",
                next: "P1"
            }]
    },

    "L25": {
        index: "L25",
        img: (<img />),
        text: "The NCO thinks about it and enthusiastically responds that by the end of the VIA, he wants to learn how to appropriately delegate manpower based on need.",
        option: [
            {
                text: "Sounds great!",
                next: "P1"
            }]
    },

    "P1": {
        index: "P1",
        img: (<img />),
        text: "Time to get some planning done - here are some activities that your NCOs have proposed! Pick one to encourage your NCOs to conduct -",
        option: [
            {
                text: "Among Us!",
                next: "P3",
                fx: () => flags.activity = "Among Us"
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
                fx: () => flags.activity = "Soccer",
                condition: () => ["Scrooge", "Internet", "Recee"].includes(flags.research)
            },
            {
                text: "Chit Chat",
                next: "P3",
                fx: () => flags.activity = "Chit Chat"
            },
            {
                text: "Bring PS5 and Switch to play games",
                next: "P6"
            }]
    },

    "P2": {
        index: "P2",
        img: (<img />),
        text: "What books should the NCOs bring? They have time for two books:",
        option: [
            {
                text: "Snow White + Three Little Pigs",
                next: "P3",
                fx: () => flags.activity = "Snow White"
            },
            {
                text: "Geronimo Stilton + Enid Blyton",
                next: "P3",
                fx: () => flags.activity = "Geronimo"
            },
            {
                text: "Harry Potter + Percy Jackson",
                next: "P3",
                fx: () => flags.activity = "Harry Potter"
            },
            {
                text: "Hard Truths to Keep Singapore Going (this book is thick enough on its own)",
                next: "P3",
                fx: () => flags.activity = "Hard Truths"
            }]
    },

    "P4": {
        index: "P4",
        img: (<img />),
        text: "The NCOs wonder what type of songs to sing. What will you suggest?",
        option: [
            {
                text: "K-pop",
                next: "P3",
                fx: () => flags.activity = "K-pop"
            },
            {
                text: "National Day songs",
                next: "P3",
                fx: () => flags.activity = "NDP"
            },
            {
                text: "School Song + Red Cross Song",
                next: "P3",
                fx: () => flags.activity = "School Song"
            },
            {
                text: "English Rap",
                next: "P3",
                fx: () => flags.activity = "Rap"
            },
            {
                text: "Songs from the 80s",
                next: "P3",
                fx: () => flags.activity = "80s Songs"
            }]
    },

    "P3": {
        index: "P3",
        img: (<img />),
        text: "How many sessions should the cadets go?",
        option: [
            {
                text: "1x6h visit",
                next: "P5",
                fx: () => flags.sessions = "1"
            },
            {
                text: "2x3h visits in the same month",
                next: "P5",
                fx: () => flags.sessions = "2 in a month"
            },
            {
                text: "2x3h visits, one in March, one in June",
                next: "P5",
                fx: () => flags.sessions = "2 spread out"
            },
            {
                text: "4x2h visits, one in each term",
                next: "P5",
                fx: () => flags.sessions = "4"
            },
            {
                text: "0x8h visit",
                next: "P7"
            }]
    },

    "P6": {
        index: "P6",
        img: (<img />),
        text: "That's neat, but you don't have enough budget to buy those things (Besides, it's already a miracle if you even manage to find these in stock)",
        option: [
            {
                text: "Aww (choose something else)",
                next: "P1"
            }]
    },

    "P7": {
        index: "P7",
        img: (<img />),
        text: "Haha very funny - by not having the VIA, your unit's EUA dropped from Gold to Silver :( Your unit is very sad.",
        option: [
            {
                text: "Let's not do that (choose something else)",
                next: "P3"
            }]
    },
    
    "P5": {
        index: "P5",
        img: (<img />),
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
        img: () => nodes["P5"].img,
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
        img: (<img />),
        text: "Well that got them to move on, but they don't seen too happy about it...",
        option: [{
            text: "Continue",
            next: "P12",
        }]
    },
    
    "P12": {
        index: "P12",
        img: (<img />),
        text: "OIC John complains to you that th rest of the NCOs are slacking off. What will you do?",
        option: [
            {
                text: "Assemble the rest of the NCOs and scold them",
                next: "P14",
                fx: () => flags.rolesandgoals = "Scold"
            },
            {
                text: "Tell them off to the YO, this is getting out of your hands!",
                next: "P121",
                fx: () => flags.rolesandgoals = "YO Scold"
            },
            {
                text: "Tell John to handle it himself - he is the OIC after all. At most get the chairperson Meiling to help him out.",
                next: "P122",
                fx: () => flags.rolesandgoals = "Nothing"
            },
            {
                text: "Ask the rest of the NCOs: What's going on?",
                next: "P13",
                fx: () => flags.rolesandgoals = "Check on them"
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
                fx: () => flags.rolesandgoals =  "Tradition"
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

export function getNode(i) {
    let node = nodes[i];
    if (node === undefined) {
        return nodeoof
    }
    return node;
}
