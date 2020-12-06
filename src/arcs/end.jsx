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
    }
        
    
}

export default endNodes