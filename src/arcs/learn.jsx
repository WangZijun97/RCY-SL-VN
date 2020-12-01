import qrSesame from '../images/qr-sesame.png'
import qrSunshine from '../images/qr-sunshine.png'
import oneWeekLater from '../images/one-week-later.jpg'
import wgt from '../images/wgt.jpg'
import scrooge from '../images/scrooge.jpg'
import soccer from '../images/soccer.png'
import justForLaughs from '../images/just-for-laughs.png'
import consts from '../consts'
import Dialogue from '../convo/Dialogue'
import scroogeConvos from '../convo/scrooge'

const nodes = {
    "L1": {
        index: "L1",
        text: (flags) => `Your NCOs are very excited! They would like to get started with planning immediately and are discussing all the fun activities they can do with the children at ${flags.name}. Should you intervene?`,
        option: [
            {
                text: "Yes",
                next: "L101"
            },
            {
                text: "No",
                next: "P1"
            }]
    },

    "L101": {
        index: "L101",
        text: "How do you want to intervene?",
        option: [
            {
                text: "Research more",
                next: "L2"
            },
            {
                text: "Set goals",
                next: "L20"
            },
            {
                text: "I have completed the interventions that I want.",
                next: "P1"
            }]
    },

    "L2": {
        index: "L2",
        text: (flags) => (<div>
            <p>What would you like your NCOs to do?</p>
            {flags.research.call && <p><em>[You have already called the home.]</em></p>}
            {flags.research.recce && <p><em>[You have already visited the home physically.]</em></p>}
            {flags.research.email && <p><em>[Unfortunately, due to the 2 week delay, you are no longer able to conduct a reccee]</em></p>}
        </div>),
        option: [
            {
                text: "Do more research on the home via the internet",
                next: "L3",
                fx: (flags) => { flags.research.brochure = true },
            },
            {
                text: "Email the home to ask questions",
                next: "L4",
                condition: (flags) => !flags.research.email
            },
            {
                text: "Call the home to ask questions",
                next: "L8",
                condition: (flags) => !(flags.research.call || flags.research.recce),
                fx: (flags) => { flags.research.call = true },
            },
            {
                text: "Physically visit the home for a recce",
                next: "L13",
                fx: (flags) => { flags.research.recce = true },
                condition: (flags) => !(flags.research.email || flags.research.recce),
            }]
    },

    "L3": {
        index: "L3",
        img: (flags) => <img src={flags.name === consts.SESAME ? qrSesame : qrSunshine} />,
        text: (flags) => (
            <p>
                You managed to find the website of the home and have found a brochure. <br/>
                <a target="_blank" href={
                    flags.name === consts.SESAME?
                        "https://drive.google.com/file/d/1y9t6LN6cBId0RCxE4M-7f3DOcUal8K3X/view?usp=sharing" :
                        "https://drive.google.com/file/d/1gesm8PTUZaWnSfcy_KiPKF6H4oT86KGA/view?usp=sharing"}>
                    Link to brochure
                </a>
            </p>),
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L4": {
        index: "L4",
        img: (<img src={oneWeekLater} width="40%" />),
        text: "It's been one week but the home hasn't replied you yet. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L5",
                fx: (flags) => { flags.research.email = true; }
            },
            {
                text: "Go back to other research options.",
                next: "L2"
            }]
    },

    "L5": {
        index: "L5",
        img: (<iframe src="https://giphy.com/embed/3o6Ztke2ogPyvyhPXO" frameBorder="0"></iframe>),
        text: "It's been another week but the home still hasn't replied you. What do you want to do?",
        option: [
            {
                text: "Continue waiting for a reply.",
                next: "L6"
            },
            {
                text: "Go back to other research options.",
                next: "L101"
            }]
    },

    "L6": {
        index: "L6",
        img: (<img src={wgt} />),
        text: "WHERE GOT TIME TO WAIT??",
        option: [
            {
                text: "BACK",
                next: "L5"
            }]
    },

    "L8": {
        index: "L8",
        img: (<img src={scrooge} />),
        text: "Upon calling the home, you were able to speak to the Home Director, Mr Scrooge.",
        option: [
            {
                text: "Speak to Mr Scrooge",
                next: "L9",
            }]
    },

    "L9": {
        index: "L9",
        img: (<img src={scrooge} />),
        text: (flags) => nodes["L14"].text(flags),
        option: [
            {
                text: "Continue",
                next: "L201",
            }
        ]
    },

    "L201": {
        index: "L201",
        img: (<img src={scrooge} />),
        text: "You have time for one last question! What would you like to ask?",
        option: [
            {
                text: "What do the kids like to do in their free time?",
                next: "L10",
                fx: (flags) => { flags.research.freeTime = true },
            },
            {
                text: "What facilities are there at the home?",
                next: "L11"
            },
            {
                text: "Is there Wi-Fi at the home?",
                next: "L12"
            }]
    },

    "L10": {
        index: "L10",
        img: (<img src={soccer} />),
        text: "I think the kids like to play soccer.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L11": {
        index: "L11",
        img: (<img src={justForLaughs} />),
        text: "We have a TV, a phone and a kitchen. Nothing really interesting plays on TV though... it's usually Just for Laugh Gags.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L12": {
        index: "L12",
        text: "There is no Wi-Fi at the home.",
        option: [
            {
                text: "Proceed on",
                next: "L101"
            }]
    },

    "L13": {
        index: "L13",
        text: "You have arrived at the home! You can speak to any of the children or the Home Director. Who would you like to speak to?",
        option: [
            {
                text: "Speak to Home Director, Mr Scrooge",
                next: "L14"
            },
            {
                text: "Speak to 16 year old Jonathan",
                next: "L15"
            },
            {
                text: "Speak to 14 year old Allam",
                next: "L16"
            },
            {
                text: "Speak to 10 year old Emily",
                next: "L17"
            },
            {
                text: "Speak to 9 year old Carmen",
                next: "L18"
            },
            {
                text: "I'm done, let's proceed on",
                next: "L101"
            }]
    },

    "L14": {
        index: "L14",
        img: (<img src={scrooge} />),
        text: (flags) => (<Dialogue
            startOfConvo={`Welcome to ${flags.name}! I am Ebenzer Scrooge, the Home Director. Feel free to ask me anything about the home!`}
            speakerClass="scrooge-speech"
            convos={scroogeConvos}
            name="Mr. Scrooge" />) ,
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L15": {
        index: "L15",
        img: (<img />),
        text: (flags) => {return (<div>
            <p>Jonathan tells you the following:</p>
            <ol>
            <li>I go to Khairuddin Secondary School</li>
            <li>I'm usually very tired in school, school is so boring</li>
            <li>I don't have money for recess/lunch sometimes, often all I can buy is rice and one simple vegetable, Sometimes, I can't even afford that and just have to go hungry...</li>
            <li>My grades aren't really very good... Maybe it's because of how tired and hungry that I am all the time</li>
            <li>To earn money for food, I work to distribute newspapers very early in the morning</li>
            <li>I wonder what will happen to me once I have to leave the home once I am too old to stay here, there's no way I can afford a place to stay and have food...</li>
            <li>I wish I could become a chef so that I can cook my own great food!</li>
            <li>In my little free time, I love playing soccer! Oh I also like to do kite fighting, if you know what that is hehe</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L16": {
        index: "L16",
        img: (<img />),
        text: (flags) => {return (<div>
            <p>Allam tells you the following:</p>
            <ol>
            <li>I don't go to school - got like 130 or something for PSLE then dropped out of Secondary School.</li>
            <li>I work part-time at several shops for some small amount to settle food</li>
            <li>How do I get hired while being so young? Don't tell anyone, but it's all sneaky sneaky. If anyone asks, I'm 16.</li>
            <li>Rap music is the best! I first heard some of the popular rap songs while at work and really like them. I can really feel the meaning in the words for these songs!</li>
            <li>I hope that one that I can become a rapper too, they are soooo cool.</li>
            <li>Football? Go Chelsea!! I'm not really good at playing football, but it's still pretty fun. I like kite fighting too!</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L17": {
        index: "L17",
        img: (<img />),
        text: (flags) => {return (<div>
            <p>Emily tells you the following:</p>
            <ol>
            <li>I go to Chai Chee Primary School.</li>
            <li>School's great, I think I'm doing pretty ok :D</li>
            <li>I have a few friends in school. Not really in with the cool kids but not bullied or anything, schools fine.</li>
            <li>I love reading! Sadly it's so dark here with all the lights off that it's difficult to be able to read properly, but I still try.</li>
            <li>My favourite series is Harry Potter!</li>
            <li>The others... they aren't that cool, seems like they usually spend their time earning money and doing chores. What a waste of time, they could be reading instead!</li>
            <li>I don't really enjoy soccer, but kite-fighting is definitely ten out of ten fun!</li>
            <li>It's great fun to chit chat! Even if my life isn't very exactly to talk about. Come back to talk to me again!</li>
            </ol>
            </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L18": {
        index: "L18",
        img: (<img />),
        text: (flags) => {return (<div>
            <p>Carmen tells you the following:</p>
            <ol>
            <li>School? I go to Chai Chee Primary.</li>
            <li>Yea I'm doing OK, not first place but don't think I'm doing too bad.</li>
            <li>Oh yes my uniform is pretty nasty looking, it's all dirty and patched from all the times those nasty P6 kids tear them.</li>
            <li>I wish I could be like Emily, she's doing so well in school like a queen.</li>
            <li>My favourite show is We Bare Bears! Oh my just look at Icebear he's sooooooo cute and his story is soooooo sad but beautiful.</li>
            <li>Cars is a great movie. I used to have a toy car that looks just like the red one in the movie, but someone threw it away one day. How dare they :(</li>
                <li>We all have to play a part in doing housework, so I do mine as best as I can, but sometimes I get injured especially in our really slippery kitchen. So I don't really like doing that.</li>
                <li>Football and kite-fighting are great fun!</li>
                </ol>
                </div>)},
        option: [
            {
                text: "Go back to talk to the others",
                next: "L13"
            }]
    },

    "L20": {
        index: "L20",
        img: (<img />),
        text: "How do you want to set goals with the NCOs?",
        option: [
            {
                text: "Tell the NCOs what goals they should try to achieve.",
                next: "L21",
                fx: (flags) => flags.ncogoal = "by VIs"
            },
            {
                text: "Facilitate the NCOs in setting their own goals for the VIA.",
                next: "L22"
            }]
    },

    "L21": {
        index: "L21",
        img: (<img />),
        text: "Some of the NCOs looked very bored after you told them that they should aim to put in their best as well as learn more from the stories of the residents...",
        option: [
            {
                text: "Proceed on",
                next: "P1"
            }]
    },

    "L22": {
        index: "L22",
        img: (<img />),
        text: "A NCO sets this goal for himself. Should you intervene?",
        option: [
            {
                text: "Yes",
                next: "L23",
                fx: (flags) => flags.ncogoal = "by NCOs"
            },
            {
                text: "No",
                next: "P1",
                fx: (flags) => flags.ncogoal = "not specific"
            }]
    },

    "L23": {
        index: "L23",
        img: (<img />),
        text: "What do you want to prompt the NCO?",
        option: [
            {
                text: "This is not specific enough, you need to set another goal.",
                next: "L24"
            },
            {
                text: "That's a good start, let's try to use 3W1H to make this goal more specific!",
                next: "L25"
            }]
    },

    "L24": {
        index: "L24",
        img: (<img />),
        text: "The NCO looks a bid sad. He sets another goal, to learn how to take calculated risks while planning. You are happy with this goal.",
        option: [
            {
                text: "Proceed on",
                next: "P1"
            }]
    },

    "L25": {
        index: "L25",
        img: (<img />),
        text: "The NCO thinks about it and enthusiastically responds that by the end of the VIA, he wants to learn how to appropriately delegate manpower based on need.",
        option: [
            {
                text: "Sounds great!",
                next: "P1"
            }]
    },
}

export default nodes;
