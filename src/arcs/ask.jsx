
const askArcNodes = {
    "A1": {
        index: "A1",
        img: (<img />),
        text: "The home visit is soon approaching. You have requested your NCOs to prepare the unit for the VIA. This is their plan for the training right before the VIA. What feedback do you have for the training plan?",
        option: [
            {
                text: "It's very good, carry on.",
                next: "A3"
            },
            {
                text: "Reduce the buffer time for the briefing",
                next: "A3"
            },
            {
                text: "Get the NCOs to include more things during the training",
                next: "A2"
            }]
    }
}

export default askArcNodes;