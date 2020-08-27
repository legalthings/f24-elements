export interface IncorporationTypes {
    actors: any;
    alias_key: string;
    assets: Array<any>;
    creation: string;
    current: IncorporationStepTypes;
    data: any;
    id: string;
    last_modified: string;
    locale: string;
    name: string;
    next: Array<IncorporationStepTypes>;
    nextCount: number;
    portal: string;
    previous: Array<IncorporationStepTypes>
    previous_action: string;
    redirect_url: string;
    redirect_url_notary: string;
    scenario: string;
    state: string;
    title: string;
}

export interface IncorporationStepTypes {
    activation_date: string;
    response_date: string;
    actor: any;
    allow_actions: Array<any>;
    definition: string;
    description: string;
    document: any;
    dossier: any;
    due_duration: string;
    internal_description: string;
    key: string;
    list_view: any;
    responses: any;
    shareholders: Array<IncorporationStepShareholderTypes>
    title: string;
    viewable: boolean;
}

export interface IncorporationStepShareholderTypes {
    approved: boolean;
    consider: boolean;
    email: string;
    new: boolean,
    verification_methods: Array<any>
}
