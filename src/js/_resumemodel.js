
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
        volunteerexperience: {},
        leadershipexperience: {},
        projects: {},
        awards: {},
        certificates: {},
        additionalskills: {},
        publications: {},
        references: {},
    },
    type: "",
    template: "",
    order: []
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

