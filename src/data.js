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
    

let allNodes = [nodeoof, node0, node1, node2, nodeh1, nodeh2, nodeh3, nodel1, nodel101, nodel2, nodel3, nodel4, nodel5, nodel6, nodel7, nodel8, nodel9]

export function getNode(i) {
    //alert(flags.name)
    let node = allNodes.filter(node => node.index === i)
    if (node.length < 1) {
        return nodeoof
    }
    return node[0]
}