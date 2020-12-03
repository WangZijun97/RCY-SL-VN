import consts from '../consts'
import {allActivities} from '../consts'

const devNodes = {
    
    "dev0": {
        index: "dev0",
        img: (<img />),
        text: "Hacker page wew",
        option: [
            {
                text: "modify flags",
                next: "dev1"
            },
            {
                text: "jump sections",
                next: "dev2"
            }]
    },
    
    "dev1": {
        index: "dev1",
        img: (<img />),
        text: (flags) => {
            let str = ""
            for (let key in flags) {
                str += key + ": " + flags[key] + " | "
                if (flags[key] instanceof Object) {
                    for (let k in flags[key]) {
                        str += k + ": " + flags[key][k] + " | "
                    }
                }
            }
            return str
        },
        option: [
            {
                text: "Change home",
                next: "dev1",
                fx: (flags) => flags.name == consts.SESAME ? flags.name = consts.SUNSHINE : flags.name = consts.SESAME
            },
            {
                text: "Toggle call",
                next: "dev1",
                fx: (flags) => flags.research.call == true ? flags.research.call = false : flags.research.call = true
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
                fx: (flags) => {
                    const allVals = Object.values(consts.results)
                    if (allVals.includes(flags.result)) {
                        flags.result = allVals[(allVals.indexOf(flags.result) + 1) % allVals.length]
                    } else {
                        flags.result = allVals[0]
                    }
                }
            },
            {
                text: "Done",
                next: "dev0"
            }]
    },
    
    "dev2": {
        index: "dev2",
        img: (<img />),
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
            }]
    }
}

export default devNodes