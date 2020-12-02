import consts from '../consts'
import pepecry from '../images/pepecry.png'
import school from '../images/school.jpg'
import sschicon from '../images/sesamestreeticon.PNG'
import sunshineicon from '../images/sunshineicon.PNG'

const homeArcNodes = {
    "H0": {
        index: "H0",
        img: (<img src={`${process.env.PUBLIC_URL}/sl-gold.png` } width="200" alt="SL badge"/>),
        text: "Welcome to the Service Learning VIA Adventure! Press any button below to start.",
        option: [
            {
                text: "Start",
                next: "H1"
            },
            {
                text: "START BUT IN CAPS",
                next: "H1"
            }
        ]
    },
    "H1": {
        index: "H1",
        img: (<img src={school} width="266" height="200" alt="Chai Chee Secondary School" />),
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
        index: "H2",
        img: (<img src={pepecry} width="200" height="200" alt="" />),
        text: "Unfortunately, due to COVID, the event got cancelled :(",
        option: [
            {
                text: "Home Visit it is",
                next: "H3"
            }]
    },

    "H3": {
        index: "H3",
        img: (<div className="img-group-h3">
            <img src={sschicon} alt="Sesame Street logo" />
            <img src={sunshineicon} alt="Sunshine logo" />
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
