import consts from '../consts'
import {allActivities} from '../consts'
import {events} from '../events';
import NodeImg from '../NodeImg'

const objToKeyValArray = (obj, keyPrefix = "") => {
    return Object.entries(obj).map(([k, v]) => {
        if (v instanceof Object) {
            return objToKeyValArray(v, `${keyPrefix}${k}.`);
        } else {
            return `${keyPrefix}${k}: ${v}`;
        }
    });
}

const devNodes = {
    
    "dev0": {
        img: (<NodeImg ext="https://i.kym-cdn.com/photos/images/newsfeed/001/480/544/6c1.jpg" />),
        text: "Hacker page wew",
        option: [
            {
                text: "modify flags",
                next: "dev1"
            },
            {
                text: "jump sections",
                next: "dev2",
            },
            {
                text: "go back to last section",
                next: (flags) => flags.lastNode,
            }
        ]
    },
    
    "dev1": {
        text: (flags) => objToKeyValArray(flags).flat().join(' | '),
        option: [
            {
                text: "Change home",
                next: "dev1",
                fx: (flags) => flags.name === consts.SESAME ? flags.name = consts.SUNSHINE : flags.name = consts.SESAME
            },
            {
                text: "Toggle call",
                next: "dev1",
                fx: (flags) => flags.research.call = !flags.research.call,
            },
            {
                text: "Toggle freeTime",
                next: "dev1",
                fx: (flags) => flags.research.freeTime = !flags.research.freeTime
            },
            {
                text: "Toggle recce",
                next: "dev1",
                fx: (flags) => flags.research.recce = !flags.research.recce
            },
            {
                text: "Toggle brochure",
                next: "dev1",
                fx: (flags) => flags.research.brochure = !flags.research.brochure
            },
            {
                text: "Change email",
                next: "dev1",
                fx: (flags) => flags.research.email = (flags.research.email + 1) % 3
            },
            {
                text: "Change sessions",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(consts.sessions)
                    if (allVals.includes(flags.sessions)) {
                        flags.sessions = allVals[(allVals.indexOf(flags.sessions) + 1) % allVals.length]
                    } else {
                        flags.sessions = allVals[0]
                    }
                }
            },
            {
                text: "Change nco goal",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(consts.ncogoals)
                    if (allVals.includes(flags.ncogoal)) {
                        flags.ncogoal= allVals[(allVals.indexOf(flags.ncogoal) + 1) % allVals.length]
                    } else {
                        flags.ncogoal= allVals[0]
                    }
                }
            },
            {
                text: "Change activity",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(allActivities)
                    if (allVals.includes(flags.activity)) {
                        flags.activity = allVals[(allVals.indexOf(flags.activity) + 1) % allVals.length]
                    } else {
                        flags.activity = allVals[0]
                    }
                }
            },
            {
                text: "Change roles and goals",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(consts.rolesandgoals)
                    if (allVals.includes(flags.rolesandgoals)) {
                        flags.rolesandgoals= allVals[(allVals.indexOf(flags.rolesandgoals) + 1) % allVals.length]
                    } else {
                        flags.rolesandgoals= allVals[0]
                    }
                }
            },
            {
                text: "Change cadet goal",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(consts.cadetgoal)
                    if (allVals.includes(flags.cadetgoal)) {
                        flags.cadetgoal = allVals[(allVals.indexOf(flags.cadetgoal) + 1) % allVals.length]
                    } else {
                        flags.cadetgoal = allVals[0]
                    }
                }
            },
            {
                text: "Change results",
                next: "dev1",
                fx: (flags) => { flags.result = (flags.result + 1) % 6; }
            },
            {
                text: "Change debrief",
                next: "dev1",
                fx: (flags) => {
                    const allVals = Object.values(consts.debrief)
                    if (allVals.includes(flags.debrief)) {
                        flags.debrief= allVals[(allVals.indexOf(flags.debrief) + 1) % allVals.length]
                    } else {
                        flags.debrief= allVals[0]
                    }
                }
            },
            {
                text: "Change event",
                next: "dev1",
                fx: (flags) => {
                    if (events.includes(flags.midEvent)) {
                        flags.midEvent = events[(events.indexOf(flags.midEvent) + 1) % events.length]
                    } else {
                        flags.midEvent = events[0]
                    }
                }

            },
            {
                text: "Done",
                next: "dev0"
            }]
    },
    
    "dev2": {
        text: "jump",
        option: [
            {
                text: "Home",
                next: "H0"
            },
            {
                text: "Learn",
                next: "L1"
            },
            {
                text: "Plan",
                next: "P1"
            },
            {
                text: "Ask",
                next: "A1"
            },
            {
                text: "Serve",
                next: "S1"
            },
            {
                text: "Reflect",
                next: "R1"
            },
            {
                text: "End",
                next: "END"
            }]
    }
}

export default devNodes
