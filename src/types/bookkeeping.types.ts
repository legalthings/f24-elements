export interface BookkeepingTypes {
    address: any;
    bookkeeping: BookkeepingDataTypes;
    bookkeeping_organization: string;
    email: string;
    id: string;
    incorporation_process: string;
    kvk_number: string;
    last_modified: string;
    name: string;
    phonenumber: string;
    sbi_codes: any;
    type: string;
    website: string;
}

export interface BookkeepingDataTypes {
    process_id: string
    subscription: BookkeepingSubscriptionTypes
}

export interface BookkeepingSubscriptionTypes {
    amount: string;
    description: string
    nextPaymentDate: string;
    payments: Array<any>;
    startDate: string;
    status: string;
}
