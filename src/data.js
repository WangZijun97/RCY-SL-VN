import bridge from './images/bridge.jpg'
import smiley from './images/smiley.png'
import skull from './images/skull.png'
import school from './images/school.jpg'
import pepecry from './images/pepecry.png'
import sschicon from './images/sesamestreeticon.PNG'
import sunshineicon from './images/sunshineicon.PNG'

let flags = {
    name: "default",
    research: ""
}

let nodeoof = {
    index: "oof",
    img: (<img />),
    text: "Still under development UwU. Please refresh page.",
    option: []
}

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

let nodeh1 = {
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
}

let nodeh2 = {
    index: "H2",
    img: (<img src={pepecry} width="200" height="200" />),
    text: "Unfortunately, due to COVID, the event got cancelled :(",
    option: [
    {
        text: "Home Visit it is",
        next: "H3"
    }]
}

let nodeh3 = {
    index: "H3",
    img: (<div>
        <img src={sschicon} width="500" height="200" />
        <img src={sunshineicon} width="400" height="200" />
    </div>),
    text: "Your teacher has identified 2 possible beneficiaries for your home visit. The first is Sesame Street Children's Orphanage that your unit has visited before in 2018 and 2019. The second option is Sunshine Children's Home, which your unit has never visited before, but is nearer to your school. Which beneficiary would you recommend?",
    option: [
    {
        text: "Sesame Street Children's Orphanage",
        next: "L1",
        fx: () => flags.name = "Sesame Street Children's Orphanage"
    },
    {
        text: "Sunshine Children's Home",
        next: "L1",
        fx: () => flags.name = "Sunshine Children's Home"
    }]
}

let nodel1 = {
    index: "L1",
    img: (<img />),
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
}

let nodel101 = {
    index: "L101",
    img: (<img />),
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
}

let nodel2 = {
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
}

let nodel3 = {
    index: "L3",
    img: (<img />),
    text: "You managed to find the website of the home and have found the following brochure.",
    option: [
    {
        text: "Proceed on",
        next: "L101"
    }]
}

let nodel4 = {
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
}

let nodel5 = {
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
}

let nodel6 = {
    index: "L6",
    img: (<img />),
    text: "WHERE GOT TIME TO WAIT??",
    option: [
    {
        text: "BACK",
        next: "L5"
    }]
}

let nodel7 = {
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
}

let nodel8 = {
    index: "L8",
    img: (<img />),
    text: "Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",
    option: [
    {
        text: "Speak to Mr Scrooge",
        next: "L9"
    }]
}
    
let nodel9 = {
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
}

let nodel10 = {
    index: "L10",
    img: (<img />),
    text: "I think the kids like to play soccer.",
    option: [
    {
        text: "Proceed on",
        next: "L101"
    }]
}

let nodel11 = {
    index: "L11",
    img: (<img />),
    text: "There is a TV playing Just for Laughs Gags",
    option: [
    {
        text: "Proceed on",
        next: "L101"
    }]
}

let nodel12 = {
    index: "L12",
    img: (<img />),
    text: "There is no Wi-Fi",
    option: [
    {
        text: "Proceed on",
        next: "L101"
    }]
}

let nodel13 = {
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
}

let nodel14 = {
    index: "L14",
    img: (<img />),
    text: nodel9.text,
    option: [
    {
        text: "Go back to talk to the others",
        next: "L13"
    }]
}

let nodel15 = {
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
}

let nodel16 = {
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
}

let nodel17 = {
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
}

let nodel18 = {
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
}
    

let allNodes = [nodeoof, node0, node1, node2, nodeh1, nodeh2, nodeh3, nodel1, nodel101, nodel2, nodel3, nodel4, nodel5, nodel6, nodel7, nodel8, nodel9, nodel10, nodel11, nodel12, nodel13, nodel14, nodel15, nodel16, nodel17, nodel18]

export function getNode(i) {
    //alert(flags.name)
    let node = allNodes.filter(node => node.index === i)
    if (node.length < 1) {
        return nodeoof
    }
    return node[0]
}