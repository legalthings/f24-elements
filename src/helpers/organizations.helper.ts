const shareTypes: any = {
    common_shares: 'COMMON_SHARES',
    voting_shares: 'VOTING_SHARES',
    preferred_shares: 'PREFERRED_SHARES',
    cum_preferred_shares: 'CUM_PREFERRED_SHARES',
    priority_shares: 'PRIORITY_SHARES',
    letter_shares: 'LETTER_SHARES'
};

const shareTypesSymbol: any = {
    common_shares: 'COMM',
    voting_shares: 'VOTE',
    preferred_shares: 'PREF',
    cum_preferred_shares: 'CUMP',
    priority_shares: 'PRIO',
    letter_shares: 'LETT'
};

const eventTypes: any = {
    created: '',
    updated: '',
    deleted: '',
    employee_added: '',
    employee_removed: '',
    shareholder_added: '',
    shareholder_updated: '',
    shareholder_removed: '',
    member_added: '',
    member_updated: '',
    member_removed: ''
};

export function getShareTypeName(code: string) {
    return shareTypes[code];
}

export function getEventTypeName(code: string) {
    return eventTypes[code];
}

export function getShareTypeSymbol(code: string) {
    return shareTypesSymbol[code];
}
