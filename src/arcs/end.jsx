import React from 'react'
import consts from '../consts'
import {getInitialFlags} from '../Game'
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
        text: "The VIA is finally over! What a long journey it has been. As you start to walk home from school, you can't help but think about how your cadets and NCOs have done...",
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
        text: "The VIA was definitely an interesting and fruitful experience for you and your unit. You could tell that your NCOs and cadets have grown much. However, you can't help but wonder - how can you push them to be even clearer and active in their learning?",
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
            let service = []
            let learning = []
            
            // Choice of home 1 service star
            if (flags.name === consts.SESAME) {
                service.push(`Your unit went to ${flags.name}, which you have a well established relation with. The children there are much more familiar as a result. This is a good choice because sustained engagement with a target community builds trust between the two of you, which makes any interaction that much more fruitful!`)
            } else {
                service.push(`Your unit went to ${flags.name}, which is unfamiliar with you. As a result, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them. This choice reduced the effectiveness of this VIA project. Instead, you should consider a unit that you have already built up a sustained, trusting relationship with to eliminate this fear of strangers.`)
            }
            
            // Choice of sessions 1 service star
            if ([consts.sessions.TWO_SPREAD, consts.sessions.FOUR].includes(flags.sessions)) {
                service.push(`You chose to have ${flags.sessions}. By continuously engaging with the home, you managed to build a long-lasting and trusting relationship with the home, enhaning the effectivenss of any service learning project with them. Good choice! `)
            } else if (flags.sessions === consts.sessions.ONE) {
                service.push(`You chose to have only ${flags.sessions}. After the VIA, the children wonder if any of you will be back ever again? They miss you. This choice does not help to build trust with the home's residents. Consider having more sustained engagement with them instead (short sessions are ok, it's more important to be regular).`)
            } else if (flags.sessions === consts.sessions.TWO_TGT) {
                service.push(`You chose to have only ${flags.sessions}. After the two sessions, the children look forward to the third, but it never happened... They miss you. This choice does not help to build trust with the home's residents. Consider having more sustained engagement with them instead (short sessions are ok, it's more important to be regular).`)
            }
            
            // Choice of activity, up to 4 stars
            if (flags.activity === consts.activities.SOCCER) {
                service.push(`You chose to play soccer, which most (but not all) of the children like! As a result, most of them had great fun playing, and a break away from the boredom of daily life. This is a decent (but not the best) choice as you fulfilled the needs of most of the children there.`)
            } else if (flags.activity === consts.activities.KITE) {
                service.push(`You chose to play kite fighting, which all the children like. As a result, they had incredible fun playing, a great break away from their usual routines. Nice! This is the best choice as you fulfilled the needs of all of the children there. `)
            } else if (flags.activity === consts.activities.CHIT_CHAT) {
                service.push(`You chose to just chit chat with the children. The children were happy to share, though they did hope for a little more excitement. That's a decent option, though certainly there are more exciting activities out there that the children enjoy doing. Try learning more about the children before planning to figure out what is the best activity to fulfil all of their needs.`)
            } else {
                service.push(`You chose to ${flags.activity}, which was not very effective at engaging the children. Many of them returned to their regular routines instead. Perhaps it would be good to find out more about the children before planning next time?`)
            }
            
            // NCO goal setting
            if (flags.ncogoal === consts.ncogoals.NONE) {
                learning.push("You did not set any learning goals with the NCOs. As a result, the NCOs did not keep their own learning goals in mind when planning and executing the whole project. By not being intentional about learning, it is difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to set such goals before the planning process begins.")
            } else if (flags.ncogoal === consts.ncogoals.VI) {
                learning.push("You set the learning goals for the NCOs. While it is great that there are goals, it is difficult for the NCOs to take ownership and strive towards goals that may not align with their own interest areas. As a result, any learning would not be intentional, and it would be more difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to allow the NCOs to set their own goals before the planning process begins.")
            } else if (flags.ncogoal === consts.ncogoals.NOT_SPECIFIC) {
                learning.push("You allowed the NCOs to set goals for themselves. That's great! Perhaps you could push the NCOs' learning even further by helping them craft more specific goals [The NCOs set \"My goal is to learn how to plan\" as their goal]. Without specific goals, the NCOs might end up picking up lots of tips and idea that are \"good to know\" rather than learing points that they want for their personal development. Being specific also helps the NCOs with intentionally trying out roles or actions that will help them develop towards these goals. In future, perhaps it would be helpful to help develop your NCOs' goals towards more specific ones.")
            } else if (flags.ncogoal === consts.ncogoals.NCO) {
                learning.push("You guided the NCOs to set specific goals for themselves. As a result, they took ownership over their learning and intentionally worked towards the goals set. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. Good job!")
            }
            
            // NCO roles and goals
            if ([consts.rolesandgoals.NONE, consts.rolesandgoals.CHECK_ON_THEM].includes(flags.rolesandgoals)) {
                learning.push("You let the NCOs figure out their various roles, and the goals of these roles themselves. As a result, they could take full ownership and adjust the roles towards what each of them want to do. They would also be more motivated to work on and do well in the project. Great choice!")
            } else if (flags.rolesandgoals === consts.rolesandgoals.TRADITION) {
                learning.push("You asked the NCOs to just follow the previous year's roles and goals. While this does help them figure out their operations easily, some of the NCOs did not agree with some of the responsibilities that they are assigned with, while others were sad that they were not assigned some responsibilities that they were interested in. As a result, there was less ownership over the project and a few of them had to tank the project. Perhaps it would be helpful to let the NCOs set their own roles and goals in future.")
            } else if (flags.rolesandgoals === consts.rolesandgoals.OIC) {
                learning.push("You asked the OIC to just set the roles and goals for the rest of the batch.While this does help them figure out their operations easily, some of the NCOs did not agree with some of the responsibilities that they are assigned with, while others were sad that they were not assigned some responsibilities that they were interested in. As a result, there was less ownership over the project and a few of them had to tank the project. Perhaps it would be helpful to guide/facilitate the NCOs to set their own roles and goals in future.")
            } else {
                const varpart = flags.rolesandgoals === consts.rolesandgoals.SCOLD ? "you scolded" : "you asked your YO to scold"
                learning.push(`You did not give the cadets an opportunity to set their own roles and goals, and ${varpart} them instead of finding out why they were not doing their work. That got them to finish the job, but not to own it. As a result, some of the NCOs only did their responsibilities out of obligation. This encourages last minute and poor quality work, while also restricting learning as they would not be engaged with their tasks well. Perhaps it would be helpful to guide/facilitate the NCOs to set their own roles and goals in future.`)
            }
            
            // Cadet goal setting
            if (flags.cadetgoal === consts.cadetgoal.NONE) {
                learning.push("There were no goals set for the cadets. As a result, the cadets did not keep their own learning goals in mind when carrying out the whole project. By not being intentional about learning, it is difficult for new learning points from this project to take root within the cadets. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to set such goals the training before each VIA session begins.")
            } else if (flags.cadetgoal === consts.cadetgoal.NCO) {
                learning.push("Cadet goals were set by the NCOs. While there were goals set, cadets are less likely to take up these goals and own them when they are set by others. What about those who want to learn about something else? These cadets would not be focused on the learning point set on them during the VIA project. As a result, any learning would not be intentional, and it would be more difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to guide/facilitate (or get the NCOs to guide/facilitate) the cadets to set their own goals before the planning process begins.")
            } else if (flags.cadetgoal === consts.cadetgoal.BAD) {
                learning.push("You let the cadets set their own goals. That's great! Perhaps you could push the cadets' learning even further by helping them craft more specific goals [A cadet set \"I want to learn as much as possible\" as their goal]. Without specific goals, the cadets might end up picking up lots of tips and idea that are \"good to know\" rather than learing points that they want for their personal development. Being specific also helps the cadets with intentionally trying out actions that will help them develop towards these goals. In future, perhaps it would be helpful to guide/facilitate your cadets to develop their goals towards more specific ones.")
            } else if (flags.cadetgoal === consts.cadetgoal.GOOD) {
                learning.push("Cadets were able to set their own goals and set them well. As a result, they took ownership over their learning and intentionally worked towards the goals set. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. Good job!")
            }
            
            // Debriefs
            const debriefPerhapsClause = "Perhaps it would be good to have debriefs for both cadets and NCOs at the end of each VIA session in future."
            if (flags.debrief === "") {
                learning.push("No debriefs were carried out. Debriefs are important in eliciting learning from raw experiences. Without the consolidation, learning is lost :(" + debriefPerhapsClause)
            } else if (flags.debrief === consts.debrief.NCO) {
                learning.push("You only debriefed the NCOs. Debriefs are important in eliciting learning from raw experiences. Without debriefs to consolidate their learning, cadets' learning is lost :(" + debriefPerhapsClause)
            } else if (flags.debrief === consts.debrief.CADET) {
                learning.push("You only debriefed the cadets. Debriefs are important in eliciting learning from raw experiences. Without debriefs to consolidate their learning, NCOs' learning is lost :(" + debriefPerhapsClause)
            } else if (flags.debrief === consts.debrief.BOTH) {
                learning.push("You debriefed both cadets and NCOs. By having debriefs, cadets and NCOs can consolidate and think about what they have learnt and can learn from the experiences that they have gone through. The debriefs were hugely helpful in maximizing your unit's learning from this VIA. Well done :D")
            }
            
            return (<div className="analysis">
                <h3><u>Service</u></h3><ul>{service.map((point, i) => (<li key={i}>{point}</li>))}</ul>
                <h3><u>Learning</u></h3><ul>{learning.map((point, i) => (<li key={i}>{point}</li>))}</ul>
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
