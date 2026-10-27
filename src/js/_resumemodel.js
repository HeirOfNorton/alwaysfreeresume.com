
export const BlankResume = {
    basics: {
        name: "",
        phone: "",
        email: "",
        website: "",
        socials: "",
        image: null,
        include_address: false,
        address: {
            line1: "",
            line2: "",
            city: "",
            state: "",
            postalcode: ""
        }
    },
    summary: {
        title: "",
        text: ""
    },
    experience: {
        title: "",
        items: []
    },
    education: {
        title: "",
        items: []
    },
    skills: {
        title: "",
        categorize: false,
        items: []
    },
    extras: {
        volunteer: {
            title: "",
            items: []
        },
        leadership: {
            title: "",
            items: []
        },
        projects: {
            title: "",
            items: []
        },
        awards: {
            title: "",
            items: []
        },
        certificates: {
            title: "",
            items: []
        },
        interests: {
            title: "",
            categorize: false,
            items: []
        },
        references: {
            title: "",
            items: []
        },
    },
    type: "",
    template: "",
    order: []
}

export const BlankBasics = {
    name: "",
    phone: "",
    email: "",
    website: "",
    socials: "",
    image: null,
    include_address: false,
    address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        postalcode: ""
    }
}

export const BlankExperience = {
    jobtitle: "",
    organization: "",
    location: "",
    iscurrent: false,
    startdate: "",
    enddate: "",
    descbullets: true,
    description: ""
}

export const BlankEducation = {
    degree: "",
    field: "",
    organization: "",
    location: "",
    hasgraduated: false,
    graduationdate: "",
    descbullets: true,
    description: ""
}

export const BlankSkills = {
    category: "",
    // not sure yet which of these I'm going to use
    items: [],
    text: ""
}

export const BlankProject = {
    title: "",
    organization: "",
    date: "",
    description: ""
}

export const BlankReference = {
    name: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    relationship: ""
}