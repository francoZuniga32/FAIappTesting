export interface RootObject {
    majors: Major[];
    years: Year[];
    quarters: Quarter[];
    courses: Major[];
    slate: Slate[];
}

export interface Slate {
    majorId: string;
    yearNumber: number;
    quarterNumber: number;
    courseIds: string[];
}

export interface Quarter {
    number: number;
}

export interface Year {
    number: number;
    name: string;
}

export interface Major {
    id: string;
    name: string;
}
