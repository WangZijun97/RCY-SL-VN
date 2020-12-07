import React from 'react'
import consts from '../consts'
import {initialFlags} from '../Game'
import Stars from '../stars'

/*
 * NCO goal = 3 stars (1 if not perfect, 0 if none + 1 for doing debrief)
 * Cadet goal = 3 stars (1 if not perfect, 0 if none + 1 for doing debrief)
 * rolesandgoals = 1 star (only for facil and no action)
 */
const calculateLearningScore = (flags) => {
    let score = 0
    switch(flags.ncogoal) {
        case consts.ncogoals.NONE:
            break
        case consts.ncogoals.VI:
            score += 1
            break
        case consts.ncogoals.NOT_SPECIFIC:
            score += 1
            break
        case consts.ncogoals.NCO:
            score += 2
            break
        default:
            break
    }
    
    switch(flags.rolesandgoals) {
        case consts.rolesandgoals.CHECK_ON_THEM:
            score += 1
            break
        case consts.rolesandgoals.NONE:
            score += 1
            break
        default:
            break
    }
    
    switch(flags.cadetgoal) {
        case consts.cadetgoal.NCO:
            score += 1
            break
        case consts.cadetgoal.BAD:
            score += 1
            break
        case consts.cadetgoal.GOOD:
            score += 2
            break
        default:
            break
    }
    
    switch(flags.debrief) {
        case consts.debrief.NCO:
            score += 1
            break
        case consts.debrief.CADET:
            score += 1
            break
        case consts.debrief.BOTH:
            score += 2
            break
        default:
            break
    }
    
    return score
}
    

const endNodes = {
    
    "END": {
        img: (<img />),
        text: "The VIA is finally over! What a long journey it has been. As you start to walk home from school, you can't help but think about how your cadets and NCOs have done...",
        option: [{
            text: "Did they learn?",
            next: (flags) => {
                const score = calculateLearningScore(flags)
                if (score < 5) {
                    return "end0"
                } else if (score < 7) {
                    return "end1"
                } else if (score == 7) {
                    return "end2"
                }            
            }
        }]
    },
        
    
    "end0": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was certainly an interesting experience, but you can't help but wonder if your cadets have really learnt much through this VIA experience. What will they remember after a few months?",
        option: [{
            text: "END GAME",
            next: "ANALYSIS"
        }]
    },
    
    "end1": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was definitely an interesting and fruitful experience for you and your unit. You could tell that your NCOs and cadets have grown much. However, you can't help but wonder - how can you push them to be even clearer and active in their learning?",
        option: [{
            text: "END GAME",
            next: "ANALYSIS"
        }]
    },
    
    "end2": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was an amazing learning experience for both you and your cadets. Scanning through some of your their reflections amazed you at just how much thought they had put into this whole experience. This entire project was hard work, but certainly pushed them evermoreso closer to being a humanitarian youth who uplifts the community around them!",
        option: [{
            text: "END GAME",
            next: "ANALYSIS"
        }]
    },
    
    "ANALYSIS": {
        img: (flags) => (<React.Fragment>
            <Stars label="Service" rating={flags.result} />
            <Stars label="Learning" rating={calculateLearningScore(flags)} />
        </React.Fragment>),
        text: (flags) => {
            let service = []
            let learning = []
            
            // Choice of home 1 service star
            if (flags.name === consts.SESAME) {
                service.push(`Your unit went to ${flags.name}, which you have a well established relation with. The children there are much more familiar as a result.`)
            } else {
                service.push(`Your unit went to ${flags.name}, which is unfamiliar with you. As a result, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them.`)
            }
            
            // Choice of sessions 1 service star
            if ([consts.sessions.TWO_SPREAD, consts.sessions.FOUR].includes(flags.sessions)) {
                service.push(`You chose to have ${flags.sessions}, which is great for building a long-lasting and trusting relationship with the home, good choice!`)
            } else if (flags.sessions === consts.sessions.ONE) {
                service.push(`You chose to have only ${flags.sessions}. After the VIA, the children wonder if any of you will be back ever again? They miss you.`)
            } else if (flags.sessions === consts.sessions.TWO_TGT) {
                service.push(`You chose to have only $(flags.sessions}. After the two sessions, the children look forward to the third, but it never happened... They miss you.`)
            }
            
            // Choice of activity, up to 4 stars
            if (flags.activity === consts.activities.SOCCER) {
                service.push(`You chose to play soccer, which most (but not all) of the children like!`)
            } else if (flags.activity === consts.activities.KITE) {
                service.push(`You chose to play kite fighting, which all the children like. Nice!`)
            } else if (flags.activity === consts.activities.CHIT_CHAT) {
                service.push(`You chose to just chit chat with the children. That's a decent option, though certainly there are more exciting activities out there.`)
            } else {
                service.push(`You chose to ${flags.activity}, which was not very effective at engaging the children. Perhaps it would be good to find out more about the children next time?`)
            }
            
            // NCO goal setting
            if (flags.ncogoal === consts.ncogoals.NONE) {
                learning.push("You did not set any learning goals with the NCOs")
            } else if (flags.ncogoal === consts.ncogoals.VI) {
                learning.push("You set the learning goals for the NCOs. While it is great that there are goals, it is difficult for the NCOs to take ownership and strive towards goals that may not align with their own interest areas.")
            } else if (flags.ncogoal === consts.ncogoals.NOT_SPECIFIC) {
                learning.push("You guided the NCOs to set goals for themselves. That's great! Perhaps you could push the NCOs' learning even further by helping them craft more specific goals [The NCOs set \"My goal is to learn how to plan\" as their goal]")
            } else if (flags.ncogoal === consts.ncogoals.NCO) {
                learning.push("You guided the NCOs to set specific goals for themselves. Good job!")
            }
            
            // NCO roles and goals
            if ([consts.rolesandgoals.NONE, consts.rolesandgoals.CHECK_ON_THEM].includes(flags.rolesandgoals)) {
                learning.push("You let the NCOs figure out their various roles, and the goals of these roles themselves. They owned it!")
            } else if (flags.rolesandgoals === consts.rolesandgoals.TRADITION) {
                learning.push("You asked the NCOs to just follow the previous year's roles and goals. While this does help them figure out their operations easily, some of the NCOs did not really make use of the set roles and goals since they were not set my them on their own.")
            } else if (flags.rolesandgoals === consts.rolesandgoals.OIC) {
                learning.push("You asked the OIC to just set the roles and goals for the rest of the batch.While this does help them figure out their operations easily, some of the NCOs did not really make use of the set roles and goals since they were not set my them on their own.")
            } else {
                const varpart = flags.rolesandgoals === consts.rolesandgoals.SCOLD ? "you scolded" : "you asked your YO to scold"
                learning.push(`You did not give the cadets an opportunity to set their own roles and goals, and ${varpart} them instead of finding out why they were not doing their work. That got them to finish the job, but not to own it.`)
            }
            
            // Cadet goal setting
            if (flags.cadetgoal === consts.cadetgoal.NONE) {
                learning.push("There were no goals set for the cadets. It is difficult to learn without goals :(")
            } else if (flags.cadetgoal === consts.cadetgoal.NCO) {
                learning.push("Cadet goals were set by the NCOs. While there were goals set, cadets are less likely to take up these goals and own them when they are set by others. What about those who want to learn about something else?")
            } else if (flags.cadetgoal === consts.cadetgoal.BAD) {
                learning.push("You let the cadets set their own goals. That's great! It would be even better for the cadets' learning if their goals were set to be more specific, such that they can be more conscious about working towards that learning during the project.")
            } else if (flags.cadetgoal === consts.cadetgoal.GOOD) {
                learning.push("Cadets were able to set their own goals and set them well. They owned their learning!")
            }
            
            // Debriefs
            if (flags.debrief === "") {
                learning.push("No debriefs were carried out. Debriefs are important in eliciting learning from raw experiences. Without the consolidation, learning is lost :(")
            } else if (flags.debrief === consts.debrief.NCO) {
                learning.push("You only debriefed the NCOs. Debriefs are important in eliciting learning from raw experiences. Without debriefs to consolidate their learning, cadets' learning is lost :(")
            } else if (flags.debrief === consts.debrief.CADET) {
                learning.push("You only debriefed the cadets. Debriefs are important in eliciting learning from raw experiences. Without debriefs to consolidate their learning, NCOs' learning is lost :(")
            } else if (flags.debrief === consts.debrief.BOTH) {
                learning.push("You debriefed both cadets and NCOs. That's great :D")
            }
            
            return (<div className="analysis">
                <h3><u>Service</u></h3><ul>{service.map(point => (<li>{point}</li>))}</ul>
                <h3><u>Learning</u></h3><ul>{learning.map(point => (<li>{point}</li>))}</ul>
            </div>)
        },
        option: [{
            text: "Play Again!!",
            next: "H0",
            fx: (flags) => {window.location.reload()}
        }]
    }
        
    
}

export default endNodes