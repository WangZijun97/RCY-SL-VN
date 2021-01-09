const consts = {
    SESAME: "Sesame Street Children's Home",
    SUNSHINE: "Sunshine Children's Home",
    ncogoals: {
        NONE: "did not set",
        NOT_SPECIFIC: "goal set is not specific",
        NCO: "set by NCOs",
        LEARN_STORIES_BEF_RESEARCH: "by OIC - learn stories - no research yet",
        LEARN_STORIES_AFT_RESEARCH: "by OIC - learn stories - research already",
        SOLVE_PROBLEMS_BEF_RESEARCH: "by OIC - solve problems - no research yet",
        SOLVE_PROBLEMS_AFT_RESEARCH: "by OIC - solve problems - research already",
        EXCITING_ACTIVITIES: "by OIC - exciting activities",
    },
    activities: {
        AMONG_US: "play Among Us",
        SOCCER: "play Soccer",
        CHIT_CHAT: "just chit chat",
        KITE: "play Kite Fighting"
    },
    songs: {
        K_POP: "sing K-pop",
        NDP: "sing National Day songs",
        SCHOOL_SONG: "sing School Song and Red Cross Song",
        RAP: "sing Rap",
        OLD: "sing 80s songs"
    },
    books: {
        SNOW_WHITE: "read Snow White + Three Little Pigs",
        GERONIMO: "read Geronimo Stilton + Enid Blyton",
        HARRY_POTTER: "read Harry Potter + Percy Jackson",
        HARD_TRUTHS: "read Hard Truths to Keep Singapore Going"
    },
    rolesandgoals: {
        NONE: "don't intervene",
        SCOLD: "scold",
        YO_SCOLD: "YO scold",
        OIC: "OIC tank",
        CHECK_ON_THEM: "check on them",
        TRADITION: "tradition"
    },
    cadetgoal: {
        NONE: "Did not set",
        NCO: "Set by NCOs",
        CADET: "Set by cadets",
        BAD: "Set by cadets but bad",
        GOOD: "Set by cadets well"
    },
    results: {
        OK: "meh",
        GOOD: "good",
        EXCELLENT: "excellent"
    },
    sessions: {
        ONE: "1 session",
        TWO_TGT: "2 sessions in a month",
        TWO_SPREAD: "2 sessions spread out",
        FOUR: "4 sessions spread out"
    },
    debrief: {
        NCO: "NCOs debriefed only",
        CADET: "Cadets debriefed only",
        BOTH: "Both were debriefed"
    },
    events: {
        MARGIN: "margin width",
        REIMBURSEMENT: "reimbursement",
        CHAPERONE: "chaperone",
        ICE_CREAM: "ice cream",
    }
};

export const allActivities = {
    ...consts.activities,
    ...consts.songs,
    ...consts.books
}

export const motivatedAskQns = [
    consts.ncogoals.LEARN_STORIES_BEF_RESEARCH,
    consts.ncogoals.SOLVE_PROBLEMS_BEF_RESEARCH,
]

export const motivatedTalkToResidents = [
    consts.ncogoals.LEARN_STORIES_BEF_RESEARCH,
    consts.ncogoals.LEARN_STORIES_AFT_RESEARCH
]

export default consts;
