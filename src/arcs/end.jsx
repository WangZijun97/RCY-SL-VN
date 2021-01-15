import React from 'react'
import consts from '../consts'
import {getInitialFlags} from '../Game'
import Stars from '../stars'
import Timeline from '../timeline'

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

const getEndingBgm = (score, noTimeToDebriefCadets) => {
    if (noTimeToDebriefCadets && score <= 8) return;

    if (score <= 0) {
        return 'astronomia.mp3';
    } else if (score <= 3) {
        return 'i-am-glad.mp3';
    } else if (score <= 6) {
        return 'determination.mp3';
    } else if (score <= 10) {
        return 'raining-somewhere-else.mp3'
    } else if (score <= 13) {
        return 'gate-of-steiner.mp3'
    } else {
        return 'hopes-and-dreams.mp3'
    }
}
    

const endNodes = {
    
    "END": {
        img: (<img />),
        text: "The VIA is finally over! What a long journey it has been. As you start to walk home from school, you can't help but think about how the committee and the participants have done...",
        option: [{
            text: "Did they learn?",
            next: (flags) => {
                const score = calculateLearningScore(flags)
                if (score < 5) {
                    return "end0"
                } else if (score < 7) {
                    return "end1"
                } else if (score === 7) {
                    return "end2"
                }            
            }
        }]
    },
        
    
    "end0": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was certainly an interesting experience, but you can't help but wonder if your cadets have really learnt much through this VIA experience. What will they remember after a few months?",
        option: [{
            text: "End game and view results",
            next: "ANALYSIS"
        }]
    },
    
    "end1": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was definitely an interesting and fruitful experience for you and your unit. You could tell that your committee and the participants have grown much. However, you can't help but wonder - how can you push them to be even clearer and active in their learning?",
        option: [{
            text: "End game and view results",
            next: "ANALYSIS"
        }]
    },
    
    "end2": {
        img: (flags) => (<Stars label="Learning" rating={calculateLearningScore(flags)} />),
        text: "The VIA was an amazing learning experience for both you and your cadets. Scanning through some of your their reflections amazed you at just how much thought they had put into this whole experience. This entire project was hard work, but certainly pushed them evermoreso closer to being a humanitarian youth who uplifts the community around them!",
        option: [{
            text: "End game and view results",
            next: "ANALYSIS"
        }]
    },
    
    "ANALYSIS": {
        bgm: (flags) => getEndingBgm(flags.result + calculateLearningScore(flags), flags.noTimeToDebriefCadets),
        img: (flags) => (<React.Fragment>
            <Stars label="Service" rating={flags.result} />
            <Stars label="Learning" rating={calculateLearningScore(flags)} />
        </React.Fragment>),
        text: (flags) => {
            return (<div className="analysis">
                <h3>Major decisions made</h3>
                <Timeline flags={flags} />
                <p>You have come to the end of the game. We recommend that you play the game at least twice! After your second playthrough, we would also love to hear your feedback at <a href="https://tinyurl.com/viadvfeedback" target="_blank" rel="noreferrer">tinyurl.com/viadvfeedback</a>!</p>
            </div>)
        },
        option: [{
            text: "Play Again!!",
            next: "H0",
            fx: (flags) => {
                Object.assign(flags, getInitialFlags());
            }
        }]
    }
        
    
}

export default endNodes
