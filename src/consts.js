const consts = {
    SESAME: "Sesame Street Children's Orphanage",
    SUNSHINE: "Sunshine Children's Home",
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
        SCOLD: "scold",
        YO_SCOLD: "YO scold",
        OIC: "nothing",
        CHECK_ON_THEM: "check on them",
        TRADITION: "tradition"
    },
    cadetgoal: {
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
        ONE: "1",
        TWO_TGT: "2 in a month",
        TWO_SPREAD: "2 spread out",
        FOUR: "4"
    }
};

export const allActivities = {
    ...consts.activities,
    ...consts.songs,
    ...consts.books
}

export default consts;
