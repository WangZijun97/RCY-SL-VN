import React from 'react'
import consts from '../consts'
import NodeImg from '../NodeImg'
import GroupConvo from '../convo/GrpConvo';
import {cadetChatClsMap} from '../convo/cadetDebrief'; 
import {ncoChatClsMap} from '../convo/ncoDebrief';

const reflectArcNodes = {

    "R1": {
        bgm: 'watashi-no-uso.mp3',
        text: "The VIA has ended and you are waiting for the bus to arrive. What do you want to do?",
        option: [
            {
                text: "Conduct FA(S) training refresher for next week's accreds",
                next: "R1.5",
            },
            {
                text: "Play Among Us with your cadets",
                next: "R1.5"
            },
            {
                text: "Just chit-chat with your cadets",
                next: "R1.5"
            },
            {
                text: "Conduct a debrief session with your committee first",
                next: "R1.5",
                fx: (flags) => { 
                    flags.debrief = consts.debrief.NCO;
                }
            },
            {
                text: "Conduct a debrief session with the cadets first",
                next: "R1.5",
                fx: (flags) => {
                    flags.debrief = consts.debrief.CADET;
                }
            }
        ]
    },

    "R1.5": {
        text: "Are you sure about that? The bus is coming really soon and you only have time for one thing...",
        option: [
            {
                text: "Yes",
                next: (flags) => {
                    switch (flags.debrief) {
                        case consts.debrief.NCO:
                            return "R5";
                        case consts.debrief.CADET: 
                            return "R6";
                        default:
                            return "R2";
                    }
                },
            },
            {
                text: "Let me choose something else (back)",
                next: "R1",
                fx: (flags) => { 
                    flags.debrief = "";
                }
            }
        ]
    },

    "R2": {
        text: "You carry on with that until the bus comes.",
        option: [{
            text: "Continue",
            next: "R4"
        }]
    },

    "R3": {
        bgm: 'only-time.mp3',
        img: (<NodeImg src="sunset.jpg" />),
        text: "The cadets were immediately dismissed when you reached school. No debrief means no reflection forms for SL badges means one angry YO >:(",
        option: [{
            text: "Oh well...",
            next: "END",
            fx: (flags) => flags.decisionVisibility.debrief = true,
        }]
    },

    "R4": {
        text: "The bus is here to take the cadets back!",
        option: [
            {
                text: "Guess we are done today!",
                next: "END",
                fx: (flags) => flags.decisionVisibility.debrief = true,
            },
            {
                text: "We can still debrief the cadets back in school",
                next: "R3",
                condition: (flags) => flags.debrief === consts.debrief.NCO,
                fx: (flags) => { flags.noTimeToDebriefCadets = true },
            },
            {
                text: "We can still debrief the committee members back in school after dismissal",
                next: "R5",
                condition: (flags) => flags.debrief === consts.debrief.CADET,
                fx: (flags) => flags.debrief = consts.debrief.BOTH
            }]
    },

    "R5": {
        text: "You are about to conduct a debrief with your committee members.",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.ncogoal === consts.ncogoals.NONE) {
                    return "R7" //no routing change
                } else if (flags.ncogoal === consts.ncogoals.LEARN_STORIES_BEF_RESEARCH) {
                    if (flags.research.spokeToResidents || flags.finalSpokeToResidents) {
                        return "R101"
                    } else {
                        return "R102"
                    }
                } else if (flags.ncogoal === consts.ncogoals.LEARN_STORIES_AFT_RESEARCH) {
                    if (flags.finalSpokeToResidents) {
                        return "R103"
                    } else {
                        return "R104"
                    }
                } else if (flags.ncogoal === consts.ncogoals.SOLVE_PROBLEMS_BEF_RESEARCH) {
                    if (flags.finalSpokeToScrooge) {
                        return "R105"
                    } else {
                        return "R106"
                    }
                } else if (flags.ncogoal === consts.ncogoals.SOLVE_PROBLEMS_AFT_RESEARCH) {
                    return "R107"
                } else if (flags.ncogoal === consts.ncogoals.EXCITING_ACTIVITIES) {
                    return "R108"
                } else if (flags.ncogoal === consts.ncogoals.NOT_SPECIFIC) {
                    return "R9" //no routing change
                } else if (flags.ncogoal === consts.ncogoals.NCO) {
                    return "R10" //no routing change
                }
            },
            fx: (flags) => {
                if (flags.debrief === consts.debrief.CADET) {
                    flags.debrief = consts.debrief.BOTH
                } else if (flags.debrief === consts.debrief.NONE) {
                    flags.debrief = consts.debrief.NCO
                }
            }
        }]
    },

    "R6": {
        text: "Your are about to conduct a debrief with your cadets",
        option: [{
            text: "Proceed",
            next: (flags) => {
                if (flags.cadetgoal === consts.cadetgoal.NONE) {
                    return "R12"
                } else if (flags.cadetgoal === consts.cadetgoal.NCO) {
                    return "R13"
                } else if (flags.cadetgoal === consts.cadetgoal.GOOD) {
                    return "R15"
                } else if (flags.cadetgoal === consts.cadetgoal.BAD) {
                    return "R14"
                }
            }
        }],
        fx: (flags) => {
            if (flags.debrief === consts.debrief.NONE) {
                flags.debrief = consts.debrief.CADET
            } else if (flags.debrief === consts.debrief.NCO) {
                flags.debrief = consts.debrief.BOTH
            }
        }
    },

    "R7": {
        img: (<NodeImg ext="https://i.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256-nqlyaa.jpg" />), 
        text: () => (<React.Fragment>
            <p>Your committee members are very confused about what they need to debrief about... What are goals? {"\u53EF\u4EE5\u5403\u7684\u5417?"} (translator note: can this be eaten?)</p>
            <p className="informative">[You did not set goals with your committee.]</p>
        </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R101": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We have put in out best and have learnt more about the stories of the residents."},
                    {name: "Ryan", text: "Anyway, why is there a need to even learn about the stories of the beneficiaries?"},
                    {name: "Sarah", text: `We would already have passed out when Chai Chee RCY next visits ${flags.name}${flags.sessions === consts.sessions.ONE ? `, even if we choose to visit them again` : ""}, so our learning is of no use.`},
                    {name: "Michael", text: "Well, hopefully it is of some use to our juniors..."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA wasn't very meaningful for your committee members on a personal level... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R102": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We did not learn much about the stories of the residents. We didn't know what to ask so we didn't ask them much."},
                    {name: "Ryan", text: "Anyway, why is there a need to even learn about the stories of the beneficiaries?"},
                    {name: "Sarah", text: `We would already have passed out when Chai Chee RCY next visits ${flags.name}${flags.sessions === consts.sessions.ONE ? `, even if we choose to visit them again` : ""}, so our learning is of no use.`},
                    {name: "Michael", text: "Well, hopefully it is of some use to our juniors..."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA wasn't very meaningful for your committee members.. Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R103": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We have put in out best and have learnt more about the stories of the residents."},
                    {name: "Ryan", text: "It would have been better if we had set our goals before doing out research. We might have been able to ask the right questions during our research. This way, perhaps we could have learnt even more when talking to the residents during the VIA!"},
                    {name: "Sarah", text: "Anyway, why is there a need to even learn about the stories of the beneficiaries?"},
                    {name: "Mary", text: `We would already have passed out when Chai Chee RCY next visits ${flags.name}${flags.sessions === consts.sessions.ONE ? `, even if we choose to visit them again` : ""}, so our learning is of no use.`},
                    {name: "Michael", text: "Well, hopefully it is of some use to our juniors..."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA wasn't very meaningful for your committee members... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R104": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We did not learn much about the stories of the residents. We didn't know what to ask so we didn't ask them much."},
                    {name: "Ryan", text: "It would have been better if we had set our goals before doing out research. We might have been able to ask the right questions during our research. This way, perhaps we could have learnt even more when talking to the residents during the VIA!"},
                    {name: "Sarah", text: "Anyway, why is there a need to even learn about the stories of the beneficiaries?"},
                    {name: "Mary", text: `We would already have passed out when Chai Chee RCY next visits ${flags.name}${flags.sessions === consts.sessions.ONE ? `, even if we choose to visit them again` : ""}, so our learning is of no use.`},
                    {name: "Michael", text: "Well, hopefully it is of some use to our juniors..."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA wasn't very meaningful for your committee members on a personal level... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R105": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We did not find out early enough that the home needs funds, so we were unable to solve their problems."},
                    {name: "Ryan", text: `Would we have been able to get a fundraising campaign approved just ${4 - flags.research.email} weeks before the VIA? I don't think we could have done much`},
                    {name: "Sarah", text: "Sigh. We have failed. We really should have started planning earlier..."},
                    {name: "Mary", text: "While Sarah has a point, we could also have set our goals before doing our research so that we could have found out the residents' problems early enough for us to change our goals."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA was disappointing for your committee members on a personal level... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R106": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We did not find out what the residents need, so we were unable to solve their problems."},
                    {name: "Ryan", text: "Sigh. We have failed."},
                    {name: "Sarah", text: "We could also have set our goals before doing our research so that we could have found out the residents' problems early enough for us to change our goals."}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA was disappointing for your committee members on a personal level... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R107": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "It was good that we knew that the home needed funds."},
                    {name: "Ryan", text: "Unfortunately, there was nothing much we could do."},
                    {name: "Sarah", text: "Then, what is the point behind this VIA? I think I have wasted my time. Should we apologise to the cadets for wasting their time?"}
                ]}
                convos={[]}
            />
            <p>Looks like the VIA was disappointing for your committee members... Oh well...</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R108": {
        text: (flags) => (<React.Fragment>
            <p>Here are what some of your committee members said during the debrief:</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "Haven't we learnt a lot about planning exciting activities? Good job, everyone!"},
                    {name: "Ryan", text: "Sure we might've, Michael, but what's so meaningful about that?"},
                    {name: "Sarah", text: "Hmm... you've got a point, Ryan. There were a lot more things we might've been able to learn from the VIA if we had set a better goal for ourselves to work towards."},
                    {name: "Mary", text: "Honestly, I didn't really enjoy planning activities. I'd much rather have focused on admin work. But at least the rest of you had fun."}
                ]}
                convos={[]}
            />
            <p>Hmm... Ryan may be right. This goal wasn't meaningful for everyone. Some people, like Mary, might have preferred another goal instead.</p>
            </React.Fragment>),
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },
    
    "R8": {
        text: "Your committee tells you that they have put in their best and have learnt more about the stories, but they ask you why is there a need to even learn about the stories of the beneficaries.",
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R9": {
        text: () => (<React.Fragment>
            <p>During the debrief, you checked with your committee members on the goals that they have set at the start of the VIA.</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[
                    {name: "Michael", text: "We have learnt a lot about how to plan"},
                    {name: "Ryan", text: "Yay!"},
                    {name: "Sarah", text: "That seems to be all for our debrief!"}
                ]}
                convos={[
                    {
                        q: "Hold on. What exactly have we learnt about how to plan?",
                        a: [
                            {name: "Michael", text: "Uhh..."},
                            {name: "Ryan", text: "I'm... not sure. We don't have a particular focus, do we?"},
                            {name: "Sarah", text: "We had done the planning for the VIA."},
                            {name: "Mary", text: "Yeah. The VIA is done. That means we have learnt how to plan!"}
                        ]
                    }
                ]}
                endOfConvo="Well, that sounds rather troubling..."
            />
            </React.Fragment>),                    
        option: [
            {
                text: "Time to debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "It's all over!",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R10": {
        text: () => (<React.Fragment>
            <p>During the debrief, you checked with your committee members on the goals that they have set at the start of the VIA.</p>
            <p>You ask: Did you manage to achieve your goals today?</p>
            <GroupConvo
                cssClassMap={ncoChatClsMap}
                startOfConvo={[{name: "Michael", text: "Yep! I definitely learnt more about how to plan."}]}
                convos={[
                    {
                        q: "That's good! How so? I would like the others to share too!",
                        a: [
                            {name: "Michael", text: "I think I learnt to become more actively involved in the planning process, such as by providing feedback to others' ideas in a constructive manner, rather than shooting down their ideas immediately."},
                            {name: "Ryan", text: "I have learnt to be more organised when writing administrative plans in the proposal so that the plans are clear to everyone. This mitigates the risk of misinterpretation."}
                        ]
                    }
                ]}
                endOfConvo="The rest of the committee is eagerly raising their hands too. Wow! Looks like everyone took away something from the VIA."
            />
            </React.Fragment>),
        option: [
            {
                text: "Fast forward to the end of the debrief and debrief the cadets",
                next: "R4",
                condition: (flags) => flags.debrief === consts.debrief.NCO
            },
            {
                text: "Fast forward to the end of the debrief",
                next: "END",
                condition: (flags) => flags.debrief !== consts.debrief.NCO,
                fx: (flags) => flags.decisionVisibility.debrief = true,
            }]
    },

    "R12": {
        text: () => (<React.Fragment>
            <p>You ask your cadets - How did you all feel about the VIA experience?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    { name: "Roy", text: "I didn't know what to expect. Aren't the VIAs just for the VIA hours anyways? So that we can get our LEAPS points..." },
                    { name: "Liz", text: "Ya, I agree... If Ms Tan didn't call our parents to get us to come, I wouldn't come as well... I was pressured into coming..." }
                ]}
                convos={[]}
            />
        </React.Fragment>),
        option: [{
            text: "Ask another question",
            next: "R12a"
        }]
    },
    
    "R12a": {
        text: () => (<React.Fragment>
            <p>Oh dear... :(</p>
            <p>Nevertheless, you decide to still ask: Okay never mind about that then... What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    { name: "Jack", text: "I feel I didn't really learn anything much, because I didn't set out to learn anything in the first place..." },
                    { name: "Roy", text: "Why do we need to learn from a VIA in the first place? Isn't it just to make the residents a bit happier?" }
                ]}
                convos={[]}
            />
        </React.Fragment>),
        option: [{
            text: "Oh no... this is sad... let's debrief the committee now.",
            next: "R5"
        }]
    },
    
    "R13": {
        text: () => (<React.Fragment>
            <p>You ask your cadets: What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Jack", text: "Oh we set goals? Uh what were they again? I only remember that I wanted to have fun, but I think my idea of fun wasn't the same as the kids' idea of fun..."},
                    {name: "Roy", text: "I think we didn't manage to achieve the goals... we didn't put in much effort into achieving them."}
                ]}
                convos={[]}
            />
            <p>You are upset and don't understand why this happened. Do you want to ask them why this is so?</p>
            </React.Fragment>),
        option: [
            {
                text: "Yes, I want to find out!",
                next: "R13a"
            },
            {
                text: "No, I think the cadets are sad, so we should wrap up...",
                next: "R13b"
            }
        ]
    },

    "R13a": {
        text: () => (<React.Fragment>
            <p>You ask: I don't understand, why were you all unable to achieve the goals? Didn't you all agree to these goals with me?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Liz", text: "I think we felt they were a bit unreasonable, but none of us dared to voice out, because you are the OIC..."},
                    {name: "Jack", text: "Ya, then I think the whole experience just felt a bit bad after that..."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Oh no... let's wrap up...",
            next: "R13b"
        }]
    },
    
    "R13b": {
        text: () => (<React.Fragment>
            <p>You ask: So overall, how did you all feel about this VIA experience?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Roy", text: "I wasn't very motivated to learn much from the VIA... I just went through the motions of talking to the residents... felt it was a waste of time."},
                    {name: "Liz", text: "Yeah, it was boring, I wasn't very interested to put in much effort..."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Oh no... this is sad... let's debrief the committee now.",
            next: "R5"
        }]
    },

    "R14": {
        text: () => (<React.Fragment>
            <p>You ask your cadets: How did you all feel about the VIA experience?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Roy", text: "I think it was still ok! I think we served the residents well..."},
                    {name: "Liz", text: "I think I may not have put in 100% but I still did try to serve the residents well."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Ok good start, let's find out more!",
            next: "R14a"
        }]
    },
    
    "R14a": {
        text: () => (<React.Fragment>
            <p>You then proceed to ask: What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Jack", text: "Our goal was to learn as much as possible, which I think I did! I learnt a lot today - in fact I think I learnt as much as possible halfway through, so I stopped thinking about learning after that!"},
                    {name: "Liz", text: "But what is a lot? I'm not sure, I didn't really know what I wanted to learn when I first came here, so didn't put a lot of effort into that... I focused mainly on helping the residents."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Hmm... could the goal have been more specific? It's okay, let's move on to debrief the committee first!",
            next: "R5"
        }]
    },

    "R15": {
        text: () => (<React.Fragment>
            <p>
                You ask your cadets: How did you all feel about the VIA experience?
            </p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Roy", text: "I feel it was a meaningful experience! I was very motivated to serve the residents today and felt I did my best."},
                    {name: "Liz", text: "I agree! I felt that I had a reason to engage with the residents."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "It's great that they felt good! Did they learn?",
            next: "R15a"
        }]
    },
    
    "R15a": {
        text: () => (<React.Fragment>
            <p>You proceed to aks your cadets: What did you guys learn today?</p>
            <GroupConvo
                cssClassMap={cadetChatClsMap}
                startOfConvo={[
                    {name: "Jack", text: "I felt that we hit our learning objective to learn more about the stories of the residents, because it was a clear, specific goal, so we could bear it in mind."},
                    {name: "Liz", text: "Yep, I really learnt a lot about the residents today! For example, I talked to Allam today, and learnt that he wants to become a rapper in future! I hope he succeeds..."}
                ]}
                convos={[]}
            />
            </React.Fragment>),
        option: [{
            text: "Yay they learnt! Let's debrief the committee now!",
            next: "R5"
        }]
    }
}

export default reflectArcNodes
