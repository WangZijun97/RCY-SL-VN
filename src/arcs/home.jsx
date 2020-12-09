import React from 'react';
import consts from '../consts';
import NodeImg from '../NodeImg';

const homeArcNodes = {
    "H0": {
        img: <NodeImg src="sl-gold.png" alt="SL badge" width="200" />,
        text: () => (<React.Fragment>
            <p>Welcome to the Service Learning VIA Adventure! This is a Choose Your Own Adventure-style of game.
            Be prepared to make a lot of choices. Some of these choices will matter, some of these won't.</p>
            <p>Press either button below to start.</p>
            </React.Fragment>),
        option: [
            {
                text: "Start",
                next: "H1"
            },
            {
                text: "START BUT IN CAPS",
                next: "H1"
            },
            {
                text: "Start (Mobile Data-friendly)",
                next: "H0.5"
            },
            {
                text: "Developer only",
                next: "dev0"
            }
        ]
    },

    "H0.5": {
        img: <NodeImg src="school.jpg" alt="Chai Chee Secondary School" />,
        text: "You are a VI attached to Chai Chee Secondary School. It is July 2021, and you unit needs to conduct one more VIA to fulfill the requirements for SL badges. Your teacher has asked you to recommend a VIA project for the unit to do.",
        option: [
            {
                text: "Home Visit",
                next: "H3"
            },
            {
                text: "First Aid Duty for Inter-School Sports Day",
                next: "H2"
            }]
    },
    
    "H1": {
        img: <NodeImg src="school.jpg" alt="Chai Chee Secondary School" />,
        bgm: 'mii.mp3',
        text: "You are a VI attached to Chai Chee Secondary School. It is July 2021, and you unit needs to conduct one more VIA to fulfill the requirements for SL badges. Your teacher has asked you to recommend a VIA project for the unit to do.",
        option: [
            {
                text: "Home Visit",
                next: "H3"
            },
            {
                text: "First Aid Duty for Inter-School Sports Day",
                next: "H2"
            }]
    },

    "H2": {
        img: <NodeImg src="pepecry.png" />,
        text: "Unfortunately, due to COVID, the event got cancelled :(",
        option: [
            {
                text: "Home Visit it is",
                next: "H3"
            }]
    },

    "H3": {
        img: (<div className="img-group-h3">
            <NodeImg src="sesamestreeticon.png" alt="Sesame Street logo" />
            <NodeImg src="sunshineicon.png" alt="Sunshine logo" />
            </div>),
        text: "Your teacher has identified 2 possible beneficiaries for your home visit. The first is Sesame Street Children's Orphanage that your unit has visited before in 2018 and 2019. The second option is Sunshine Children's Home, which your unit has never visited before, but is nearer to your school. Which beneficiary would you recommend?",
        option: [
            {
                text: consts.SESAME,
                next: "L1",
                fx: (flags) => { flags.name = consts.SESAME; },
            },
            {
                text: consts.SUNSHINE,
                next: "L1",
                fx: (flags) => { flags.name = consts.SUNSHINE; },
            }]
    },
}

export default homeArcNodes;
