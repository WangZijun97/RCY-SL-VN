import consts from './consts';

export const events = Object.values(consts.events);

export const getRandomEvent = () => {
    return events[Math.floor(Math.random() * events.length)];
}

export const doP9Check = (flags, altOption = "P10") => {
    return (flags.midEvent === consts.events.MARGIN) ? "P9" : 
        (flags.midEvent === consts.events.REIMBURSEMENT) ? "P9.5" :
        altOption;
}

export const doP15Check = (flags) => {
    return (flags.midEvent === consts.events.CHAPERONE) ? "P15" : "A1";
}

export const doP5Check = (flags) => {
    return (flags.midEvent === consts.events.ICE_CREAM) ? "P4.5" : "P5";
}
