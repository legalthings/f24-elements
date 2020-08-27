export interface FunnelShareholderTypes {
    slug: string;
    members: Array<FunnelShareholderMembers>;
    amountOfShares: number
    displayName: string;
    isDirector: boolean
    holdingDirectorRepresents: string;
    holdingKvkNumber: string;
    holdingName: string;
    shareholderType: string;
    isHolding: boolean;
    upsellHolding: boolean;
    dutchBv: string;
    hasSalaryPackage: boolean;
}

export interface FunnelShareholderMembers {
    type: string;
    address: FunnelAddress | {};
    dutchLanguage?: boolean;
    countryResidence?: string;
    englishLanguage?: boolean;
    netherlandsResidence?: boolean | string;
    signInNetherlands?: boolean;
    birthCountry?: string;
    countryCode?: string;
    doesNotHaveBSN?: boolean
    email?: string;
    phoneNumber?: string;
    gender?: string;
    firstName?: string;
    lastName?: string;
    hasSalaryPackage?: boolean;
}

export interface FunnelAddress {
    street: string;
    number: string;
    addition: string;
    city: string;
    postalCode: string;
}

export interface FunnelStepsDefinition {
    currentSlug: string;
    product: {
        slug: string;
        options: {
            types: string;
            urgency: string;
            packages: string;
        }
    },
    steps: Array<FunnelStepDefinition>
}

export interface FunnelStepDefinition {
    slug: string;
    steps: [any],
    progress: {
        parentIndex: number;
        childIndex: number;
    }
}

export enum HoldingCompanyTypeEnum {
    Yes = 'YES',
    FoundationStak = 'FOUNDATION_STAK',
    Foreign = 'FOREIGN'
}
