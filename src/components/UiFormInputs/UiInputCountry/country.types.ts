export interface Country {
    id: string;
    icon: string;
    name: string;
    native: string;
    order: number;
}

export interface CountryOption {
    name: string;
    id: Country;
}

export interface Countries {
    label: string;
    items: CountryOption[];
}

export interface CountryList {
    preferred: CountryOption[];
    others: CountryOption[];
}
