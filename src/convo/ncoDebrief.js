const ncoDebriefConvo = [
    {
        q: 'Did you manage to achieve your goals today?',
        a: ['Yep! I definitely learnt more about how to plan.'],
    },
    {
        q: "That's good! How so?",
        a: ["I think I learnt to become more actively involved in the planning process, such as by providing feedback to others' ideas in a constructive manner, rather than shooting down their ideas immediately."],
    }
];

export const ncoDebriefConvoFunc = (indicesAvailable) => {
    if (indicesAvailable.length > 1) return [];
    return [indicesAvailable.length];
}

export default ncoDebriefConvo;
