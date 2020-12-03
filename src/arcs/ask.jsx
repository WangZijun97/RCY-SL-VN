import consts from '../consts'

import timeline from '../images/timeline.png'
import footdrill from '../images/footdrill.png'
import notlikeduck from '../images/NotLikeDuck.png'
import sunset from '../images/sunset.jpg'

const askArcNodes = {
    "A1": {
        index: "A1",
        img: (<img src={timeline} alt="Timeline. 1400-1430 Reporting Parade; 1430-1515 Briefing for VIA; 1515-1600 Buffer; 1600-1630 Dismissal Parade" />),
        text: "The home visit is soon approaching. You have requested your NCOs to prepare the unit for the VIA. This is their plan for the training right before the VIA. What feedback do you have for the training plan?",
        option: [
            {
                text: "It's very good, carry on.",
                next: "A3"
            },
            {
                text: "Reduce the time for the parades and give them to the briefing",
                next: "A3"
            },
            {
                text: "Reduce the buffer time for the briefing",
                next: "A3"
            },
            {
                text: "Get the NCOs to include more things during the training",
                next: "A2"
            }]
    },
    
    "A2": {
        index: "A2",
        img: (<img />),
        text: "What would you like the NCOs to include in the training?",
        option: [
            {
                text: "The NCOs should tell the cadets what they should try and learn from the VIA",
                next: "A3",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.NCO
            },
            {
                text: "A facilitation session for the cadets to set their own individual goals for the VIA",
                next: "A3",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.CADET
            },
            {
                text: "Conduct a dry run of the activities during the VIA",
                next: "A3"
            },
            {
                text: "Bring the whole unit to the Red Cross Room to help pack the logistics for the VIA",
                next: "A3"
            }]
    },
    
    "A3": {
        index: "A3",
        img: (<img src={footdrill} />),
        text: "It is the day of the training. During reporting parade, the NCOs observed that the cadets' foot drill standards are very bad and they want to spend the whole training revising foot drill. Should you intervene?",
        option: [
            {
                text: "Let the NCOs go ahead with the foot drill lesson",
                next: "A4"
            },
            ...["Let them spend 15 minutes on foot drill before carrying on with the original plan", "Rush them through reporting parade"].map((text) => ({
                text,
                next: (flags) => {
                    switch (flags.cadetgoal) {
                        case consts.cadetgoal.CADET: 
                            return "A5";
                        case consts.cadetgoal.NCO: 
                            return "A7";
                        default:
                            return "A9";
                    }
                }
            })),
        ]
    },
    
    "A4": {
        index: "A4",
        img: (<img src={notlikeduck} alt="notlikeduck" />),
        text: "Your cadets are woefully unprepared for the VIA and it fails spectacularly.",
        option: [{
            text: "Let's not do that... (Back)",
            next: "A3"
        }]
    },
    
    "A5": {
        index: "A5",
        img: (<img />),
        text: "The parade is done and the NCOs are starting the briefing session.",
        option: [{
            text: "Continue",
            next: (flags) => {
                switch (flags.cadetgoal) {
                    case consts.cadetgoal.CADET:
                        return "A6"
                    case consts.cadetgoal.NCO:
                        return "A8"
                    default:
                        return "A10"
                }
            }
        }]
    },
    
    "A6": {
        index: "A6",
        img: (<div className="textbox">
            <div className="qn">What do you want to learn from this VIA visit?</div>
            <div className="ans">I want to learn as much as possible.</div>
        </div>),
        text: "During the facilitation session, one of your cadets set this goal for herself. Do you accept this goal?",
        option: [
            {
                text: "Yes",
                next: "A10",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.BAD
            },
            {
                text: "No",
                next: "A7"
            }
        ]
    },
    
    "A7": {
        index: "A7",
        img: (<div className="textbox">
            <div className="qn">What do you want to learn from this VIA visit?</div>
            <div className="ans">I want to learn the stories of the children at the home.</div>
        </div>),
        text: "She comes up with a new goal. Are you happy with this goal?",
        option: [
            {
                text: "This goal is good!",
                next: "A9",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.GOOD
            },
            {
                text: "How about something else? You caould try and learn how to solve the problems of the children.",
                next: "A8",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.NCO
            }]
    },
    
    "A8": {
        index: "A8",
        img: (<img src={sunset} alt="sunset" />),
        text: "The training has ended and the cadets are clear of what will be happening during the VIA. However, the cadets looked quite bored when the NCOs tell them what their goal for the VIA should be...",
        option: [{
            text: "Continue",
            next: "S1"
        }]
    },
    
    "A9": {
        index: "A9",
        img: (<img src={sunset} alt="sunset" />),
        text: "The training has ended and the cadets are clear of what will be happening during the VIA. Everyone is very excited!",
        option: [{
            text: "Let's hope the VIA goes well too!",
            next: "S1"
        }]
    },
    
    "A10": {
        index: "A10",
        img: (<img src={sunset} alt="sunset" />),
        text: "The training has ended and the cadets are clear of what will be happening during the VIA.",
        option: [{
            text: "Continue",
            next: "S1"
        }]
    }
    
}

export default askArcNodes;
