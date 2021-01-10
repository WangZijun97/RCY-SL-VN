import React from 'react';
import consts from '../consts';
import NodeImg from '../NodeImg';

const askArcNodes = {
    "A1": {
        bgm: 'chariots-of-fire.mp3',
        img: () => (<table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Activity</th>
                    <th>Location</th>
                    <th>Briefing Pointers</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1400 - 1430</td>
                    <td>Reporting Parade</td>
                    <td>Parade Square</td>
                    <td rowspan="4"><ul>
                        <li>Home Location</li>
                        <li>VIA Programme</li>
                        <li>Safety Details</li>
                    </ul></td>
                </tr>
                <tr>
                    <td>1430 - 1515</td>
                    <td>VIA Briefing</td>
                    <td>Classroom</td>
                </tr>
                <tr>
                    <td>1515 - 1600</td>
                    <td>Buffer</td>
                    <td>Classroom</td>
                </tr>
                <tr>
                    <td>1600 - 1630</td>
                    <td>Dismissal Parade</td>
                    <td>Parade Square</td>
                </tr>
            </tbody>
            </table>
            ),
        text: (flags) => (<React.Fragment>
            <p>The home visit is soon approaching, and you need to prepare the unit for the VIA. Currently, this is the plan for the training <em>right before the VIA</em>. What feedback do you have for the training plan?</p>
            <p className="informative">[Reminder: your unit has chosen to {flags.activity}.]</p>
            </React.Fragment>),
        option: [
            {
                text: "It's very good, carry on.",
                next: "A3"
            },
            {
                text: "You should reduce the time for the parades and give them to the briefing",
                next: "A3"
            },
            {
                text: "You should reduce the buffer time for the briefing and end training early",
                next: "A3"
            },
            {
                text: "You should add something to the training",
                next: "A2"
            }
        ]
    },
    
    "A2": {
        text: (flags) => (<React.Fragment>
            <p>What would you like to include in the training?</p>
            <p className="informative">[Reminder: your unit has chosen to {flags.activity}.]</p>
        </React.Fragment>
            ),
        option: [
            {
                text: "The NCOs should tell the cadets what they should try and learn from the VIA",
                next: "A3",
                fx: (flags) => flags.cadetgoal = consts.cadetgoal.NCO
            },
            {
                text: "A facilitation session for the cadets to set their individual goals for the VIA",
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
            },
            {
                text: "Never mind, the training is okay as it is. (Back)",
                next: "A1"
            }
        ]
    },
    
    "A3": {
        img: (<NodeImg src="footdrill.png" />),
        text: "It is the day of the training. During reporting parade, some of your batchmates observed that the cadets' foot drill standards are very bad and they want to spend the whole training revising foot drill. Should you intervene?",
        option: [
            {
                text: "Let your committee go ahead with the foot drill lesson",
                next: "A4"
            },
            ...["Let them spend 15 minutes on foot drill before carrying on with the original plan", "Rush them through reporting parade"].map((text) => ({
                text,
                next: "A5"
                }
            )),
        ]
    },
    
    "A4": {
        img: (<NodeImg src="NotLikeDuck.png" alt="notlikeduck" />),
        text: "Your cadets don't know anything about the VIA and it fails spectacularly.",
        option: [{
            text: "Let's not do that... (Back)",
            next: "A3"
        }]
    },
    
    "A5": {
        text: "The parade is done and the committee are starting the briefing session.",
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
            },
            fx: (flags) => {
                if (flags.cadetgoal !== consts.cadetgoal.CADET) {
                    flags.decisionVisibility.cadetgoal = true;
                }
            }
        }]
    },
    
    "A6": {
        bgm: 'kahoot.mp3',
        img: (<div className="textbox">
            <div className="qn">What do you want to learn from this VIA visit?</div>
            <div className="ans">I want to learn as much as possible.</div>
        </div>),
        text: "During the facilitation session, one of your cadets set this goal for herself. Do you intervene?",
        option: [
            {
                text: "Yes",
                next: "A7"
            },
            {
                text: "No",
                next: "A10",
                fx: (flags) => { 
                    flags.cadetgoal = consts.cadetgoal.BAD;
                    flags.decisionVisibility.cadetgoal = true;
                }
            }
        ]
    },
    
    "A7": {
        img: (<div className="textbox">
            <div className="qn">What do you want to learn from this VIA visit?</div>
            <div className="ans">I want to learn the stories of the children at the home.</div>
        </div>),
        text: "She comes up with a new goal. Are you happy with this goal or do you want to set a goal for her?",
        option: [
            {
                text: "This goal is good!",
                next: "A9",
                fx: (flags) => { 
                    flags.cadetgoal = consts.cadetgoal.GOOD;
                    flags.decisionVisibility.cadetgoal = true;
                }
            },
            {
                text: "How about something else? You could try and learn how to solve the problems of the children.",
                next: "A8",
                fx: (flags) => { 
                    flags.cadetgoal = consts.cadetgoal.NCO;
                    flags.decisionVisibility.cadetgoal = true;
                }
            }
        ]
    },

    "A8": {
        bgm: 'chariots-of-fire.mp3',
        img: (<NodeImg src="sunset.jpg" alt="sunset" />),
        text: "The training has ended and the cadets are clear of what will be happening during the VIA. However, the cadets looked quite bored when your committee tells them what their goal for the VIA should be...",
        option: [{
            text: "Continue",
            next: "S1"
        }]
    },

    "A9": {
        bgm: 'chariots-of-fire.mp3',
        img: () => askArcNodes["A8"].img,
        text: "The training has ended and the cadets are clear of what will be happening during the VIA. Everyone is very excited!",
        option: [{
            text: "Let's hope the VIA goes well too!",
            next: "S1"
        }]
    },

    "A10": {
        bgm: 'chariots-of-fire.mp3',
        img: () => askArcNodes["A8"].img,
        text: "The training has ended and the cadets are clear of what will be happening during the VIA.",
        option: [{
            text: "Continue",
            next: "S1"
        }]
    }

}

export default askArcNodes;
