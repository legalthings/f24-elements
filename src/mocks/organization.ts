export const sharesValues = [
    {
        asset: 'common_shares',
        value: 0.01,
        created: '2020-03-31T14:14:40.911Z'
    }, { asset: 'preferred_shares', value: 1, created: '2020-03-31T14:23:28.985Z' }, {
        asset: 'voting_shares',
        value: 0.2,
        created: '2020-03-31T14:23:28.985Z'
    }, {
        asset: 'priority_shares',
        value: 0.6,
        created: '2020-03-31T14:23:28.986Z'
    }, { asset: 'cum_preferred_shares', value: 0.5, created: '2020-03-31T14:23:28.986Z' }, {
        asset: 'letter_shares',
        value: 1.5,
        created: '2020-03-31T14:23:28.986Z'
    }
];

export const organizationData = {
    types: ['client'],
    name: 'Renatex B.V.',
    registration_number: '123456789',
    registered_city: 'Amsterdam',
    incorporation_date: '2019-01-01T00:00:00.000Z',
    shareholders: [
        {
            boardmember: true,
            user: {
                first_name: 'Renatex Luis',
                last_name: 'Cardoso',
                roles: ['user'],
                email: 're2005@gmail.com',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'A',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                created: '2020-02-27T09:24:52.378Z',
                birth_country: 'Portugal',
                birth_date: '1980-03-01T23:00:00.000Z',
                locale: 'nl_NL',
                id: '5e45398276051600118cf608'
            }
        }, {
            boardmember: true,
            user: {
                first_name: 'Reno',
                last_name: 'Firm24',
                roles: ['user'],
                gender: 'male',
                email: 'renato@firm24.com',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'A',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                locale: 'en_GB',
                birth_date: '1927-01-11T23:40:28.000Z',
                birth_country: 'New Caledonia',
                created: '2020-03-03T14:13:10.903Z',
                id: '5e5e65f6c1f29100111b5aba'
            }
        }, {
            boardmember: true,
            organization: {
                types: ['client'],
                shares: [{ type: 'common_shares', value: 10 }],
                name: 'Firmy B.V',
                registration_number: '12345678',
                registered_city: 'Amsterdam',
                incorporation_date: '2020-01-31T00:00:00.000Z',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'a',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
                employees: [],
                members: [{
                    user: '5e5e65f6c1f29100111b5aba',
                    role: 'shareholder'
                }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
                created: '2020-03-04T15:51:47.153Z',
                id: '5e5fce9391d6b600116cd306'
            }
        }, {
            boardmember: true,
            organization: {
                types: ['client'],
                name: 'Acme',
                registration_number: '12345678',
                registered_city: 'Amsterdam',
                incorporation_date: '2020-01-31T00:00:00.000Z',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'a',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
                employees: [],
                members: [{
                    user: '5e45398276051600118cf608',
                    role: 'shareholder'
                }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
                created: '2020-02-26T13:38:11.092Z',
                id: '5e5674c36b34cb0013daa170'
            }
        }],
    employees: [],
    members: [
        {
            role: {
                permissions: [{
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'employees'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'documents'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'organizations'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'shareholders'
                }, {
                    access_levels: ['read', 'write'],
                    scope: 'shares'
                }, { access_levels: ['read', 'write', 'delete'], scope: 'members' }, {
                    access_levels: ['read'],
                    scope: 'events'
                }],
                created: '2020-02-21T08:19:56.629Z',
                id: 'shareholder'
            },
            user: {
                first_name: 'Renatex Luis',
                last_name: 'Cardoso',
                roles: ['user'],
                email: 're2005@gmail.com',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'A',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                created: '2020-02-27T09:24:52.378Z',
                birth_country: 'Portugal',
                birth_date: '1980-03-01T23:00:00.000Z',
                locale: 'nl_NL',
                id: '5e45398276051600118cf608'
            }
        }, {
            organization: {
                types: ['notary'],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc'
            },
            role: {
                permissions: [{ access_levels: ['admin'], scope: 'employees' }, {
                    access_levels: ['admin'],
                    scope: 'documents'
                }, { access_levels: ['admin'], scope: 'organizations' }, {
                    access_levels: ['admin'],
                    scope: 'shareholders'
                }, { access_levels: ['admin'], scope: 'shares' }, {
                    access_levels: ['admin'],
                    scope: 'members'
                }, { access_levels: ['read'], scope: 'events' }],
                applicability: ['notary'],
                created: '2020-02-21T08:19:56.641Z',
                id: 'notary'
            }
        }, {
            user: {
                first_name: 'Reno',
                last_name: 'Firm24',
                roles: ['user'],
                gender: 'male',
                email: 'renato@firm24.com',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'A',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                locale: 'en_GB',
                birth_date: '1927-01-11T23:40:28.000Z',
                birth_country: 'New Caledonia',
                created: '2020-03-03T14:13:10.903Z',
                id: '5e5e65f6c1f29100111b5aba'
            },
            role: {
                permissions: [{
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'employees'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'documents'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'organizations'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'shareholders'
                }, {
                    access_levels: ['read', 'write'],
                    scope: 'shares'
                }, { access_levels: ['read', 'write', 'delete'], scope: 'members' }, {
                    access_levels: ['read'],
                    scope: 'events'
                }],
                created: '2020-02-21T08:19:56.629Z',
                id: 'shareholder'
            }
        }, {
            organization: {
                types: ['client'],
                shares: [{ type: 'common_shares', value: 10 }],
                name: 'Firmy B.V',
                registration_number: '12345678',
                registered_city: 'Amsterdam',
                incorporation_date: '2020-01-31T00:00:00.000Z',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'a',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
                employees: [],
                members: [{
                    user: '5e5e65f6c1f29100111b5aba',
                    role: 'shareholder'
                }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
                created: '2020-03-04T15:51:47.153Z',
                id: '5e5fce9391d6b600116cd306'
            },
            role: {
                permissions: [{
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'employees'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'documents'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'organizations'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'shareholders'
                }, {
                    access_levels: ['read', 'write'],
                    scope: 'shares'
                }, { access_levels: ['read', 'write', 'delete'], scope: 'members' }, {
                    access_levels: ['read'],
                    scope: 'events'
                }],
                created: '2020-02-21T08:19:56.629Z',
                id: 'shareholder'
            }
        }, {
            organization: {
                types: ['client'],
                name: 'Acme',
                registration_number: '12345678',
                registered_city: 'Amsterdam',
                incorporation_date: '2020-01-31T00:00:00.000Z',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'a',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
                employees: [],
                members: [{
                    user: '5e45398276051600118cf608',
                    role: 'shareholder'
                }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
                created: '2020-02-26T13:38:11.092Z',
                id: '5e5674c36b34cb0013daa170'
            },
            role: {
                permissions: [{
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'employees'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'documents'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'organizations'
                }, {
                    access_levels: ['read', 'write', 'delete'],
                    scope: 'shareholders'
                }, {
                    access_levels: ['read', 'write'],
                    scope: 'shares'
                }, { access_levels: ['read', 'write', 'delete'], scope: 'members' }, {
                    access_levels: ['read'],
                    scope: 'events'
                }],
                created: '2020-02-21T08:19:56.629Z',
                id: 'shareholder'
            }
        }],
    created: '2020-02-12T09:24:01.396Z',
    shares: [],
    id: '5e43c431f7c0fc0011406d67',
    share_values_summary: sharesValues,
    total_shares_amount: 942
};

export const organizationSharesSummary = [{
    shares: [{ asset: 'preferred_shares', amount: 212 }, { asset: 'common_shares', amount: 31 }],
    organization: {
        types: ['client'],
        shares: [{ type: 'common_shares', value: 10 }],
        name: 'Firmy B.V',
        registration_number: '12345678',
        registered_city: 'Amsterdam',
        incorporation_date: '2020-01-31T00:00:00.000Z',
        address: {
            street: 'Jan Ligthartstraat',
            postal_code: '1964 HH',
            number: '132',
            addition: 'a',
            city: 'Heemskerk',
            province: 'Noord-Holland',
            country: 'Netherlands'
        },
        shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
        employees: [],
        members: [{
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
        created: '2020-03-04T15:51:47.153Z',
        id: '5e5fce9391d6b600116cd306'
    }
}, {
    shares: [{ asset: 'preferred_shares', amount: 145 }, { asset: 'voting_shares', amount: 45 }],
    organization: {
        types: ['client'],
        name: 'Acme',
        registration_number: '12345678',
        registered_city: 'Amsterdam',
        incorporation_date: '2020-01-31T00:00:00.000Z',
        address: {
            street: 'Jan Ligthartstraat',
            postal_code: '1964 HH',
            number: '132',
            addition: 'a',
            city: 'Heemskerk',
            province: 'Noord-Holland',
            country: 'Netherlands'
        },
        shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
        employees: [],
        members: [{
            user: '5e45398276051600118cf608',
            role: 'shareholder'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
        created: '2020-02-26T13:38:11.092Z',
        id: '5e5674c36b34cb0013daa170'
    }
}, {
    shares: [{ asset: 'common_shares', amount: 24 }],
    user: {
        first_name: 'Reno',
        last_name: 'Firm24',
        roles: ['user'],
        gender: 'male',
        email: 'renato@firm24.com',
        address: {
            street: 'Jan Ligthartstraat',
            postal_code: '1964 HH',
            number: '132',
            addition: 'A',
            city: 'Heemskerk',
            province: 'Noord-Holland',
            country: 'Netherlands'
        },
        locale: 'en_GB',
        birth_date: '1927-01-11T23:40:28.000Z',
        birth_country: 'New Caledonia',
        created: '2020-03-03T14:13:10.903Z',
        id: '5e5e65f6c1f29100111b5aba'
    }
}, {
    shares: [{ asset: 'voting_shares', amount: 11 }, { asset: 'common_shares', amount: 131 }],
    user: {
        first_name: 'Renatex Luis',
        last_name: 'Cardoso',
        roles: ['user'],
        email: 're2005@gmail.com',
        address: {
            street: 'Jan Ligthartstraat',
            postal_code: '1964 HH',
            number: '132',
            addition: 'A',
            city: 'Heemskerk',
            province: 'Noord-Holland',
            country: 'Netherlands'
        },
        created: '2020-02-27T09:24:52.378Z',
        birth_country: 'Portugal',
        birth_date: '1980-03-01T23:00:00.000Z',
        locale: 'nl_NL',
        id: '5e45398276051600118cf608'
    }
}];

export const organizationShares = [{
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'transfer',
    asset: 'common_shares',
    amount: 10,
    from: {
        user: {
            first_name: 'Louiss',
            last_name: 'Cardoso',
            roles: ['user'],
            email: 're2005@gmail.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            created: '2020-02-27T09:24:52.378Z',
            birth_country: 'Brazil',
            birth_date: '1980-03-01T23:00:00.000Z',
            locale: 'en_GB',
            id: '5e45398276051600118cf608'
        }
    },
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            name: 'Acme',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
            employees: [],
            members: [{
                user: '5e45398276051600118cf608',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-02-26T13:38:11.092Z',
            id: '5e5674c36b34cb0013daa170',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-27T13:45:11.263Z',
    number: [],
    id: '5e7e0367da0ba10011da39c8'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'voting_shares',
    amount: 100,
    to: {
        user: {
            first_name: 'Louiss',
            last_name: 'Cardoso',
            roles: ['user'],
            email: 're2005@gmail.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            created: '2020-02-27T09:24:52.378Z',
            birth_country: 'Brazil',
            birth_date: '1980-03-01T23:00:00.000Z',
            locale: 'en_GB',
            id: '5e45398276051600118cf608'
        }
    },
    created: '2020-03-12T19:27:36.576Z',
    number: [],
    id: '5e6a8d2889f7d700116338c9'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'priority_shares',
    amount: 365,
    to: {
        user: {
            first_name: 'Reno',
            last_name: 'Firm24',
            roles: ['user'],
            gender: 'male',
            email: 'renato@firm24.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            locale: 'en_GB',
            birth_date: '1927-01-11T23:40:28.000Z',
            birth_country: 'New Caledonia',
            created: '2020-03-03T14:13:10.903Z',
            id: '5e5e65f6c1f29100111b5aba'
        }
    },
    created: '2020-03-10T12:42:56.629Z',
    number: [],
    id: '5e678b507fd4270014a8b9da'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'priority_shares',
    amount: 365,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            shares: [{ type: 'common_shares', value: 10 }],
            name: 'Firmy B.V',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
            employees: [],
            members: [{
                user: '5e5e65f6c1f29100111b5aba',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-03-04T15:51:47.153Z',
            id: '5e5fce9391d6b600116cd306',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-10T09:56:22.108Z',
    number: [],
    id: '5e6764467fd4270014a8b9d8'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'letter_shares',
    amount: 312,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            shares: [{ type: 'common_shares', value: 10 }],
            name: 'Firmy B.V',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
            employees: [],
            members: [{
                user: '5e5e65f6c1f29100111b5aba',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-03-04T15:51:47.153Z',
            id: '5e5fce9391d6b600116cd306',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-10T09:56:06.794Z',
    number: [],
    id: '5e6764367fd4270014a8b9d6'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'letter_shares',
    amount: 212,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            name: 'Acme',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
            employees: [],
            members: [{
                user: '5e45398276051600118cf608',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-02-26T13:38:11.092Z',
            id: '5e5674c36b34cb0013daa170',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-10T09:55:46.359Z',
    number: [],
    id: '5e6764227fd4270014a8b9d4'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'priority_shares',
    amount: 312,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            name: 'Acme',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
            employees: [],
            members: [{
                user: '5e45398276051600118cf608',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-02-26T13:38:11.092Z',
            id: '5e5674c36b34cb0013daa170',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-10T09:55:30.375Z',
    number: [],
    id: '5e6764127fd4270014a8b9d2'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'preferred_shares',
    amount: 212,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            shares: [{ type: 'common_shares', value: 10 }],
            name: 'Firmy B.V',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
            employees: [],
            members: [{
                user: '5e5e65f6c1f29100111b5aba',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-03-04T15:51:47.153Z',
            id: '5e5fce9391d6b600116cd306',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-09T08:08:01.477Z',
    number: [],
    id: '5e65f96179afa1001152a59c'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'preferred_shares',
    amount: 145,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            name: 'Acme',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
            employees: [],
            members: [{
                user: '5e45398276051600118cf608',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-02-26T13:38:11.092Z',
            id: '5e5674c36b34cb0013daa170',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-09T08:07:39.408Z',
    number: [],
    id: '5e65f94b79afa1001152a59b'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'voting_shares',
    amount: 45,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            name: 'Acme',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: false, shares: 0, user: '5e45398276051600118cf608' }],
            employees: [],
            members: [{
                user: '5e45398276051600118cf608',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-02-26T13:38:11.092Z',
            id: '5e5674c36b34cb0013daa170',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-09T07:57:57.418Z',
    number: [],
    id: '5e65f70579afa1001152a59a'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'common_shares',
    amount: 31,
    to: {
        organization: {
            state: 'new',
            types: ['client'],
            share_values_summary: [],
            shares: [{ type: 'common_shares', value: 10 }],
            name: 'Firmy B.V',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, user: '5e5e65f6c1f29100111b5aba' }],
            employees: [],
            members: [{
                user: '5e5e65f6c1f29100111b5aba',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }],
            created: '2020-03-04T15:51:47.153Z',
            id: '5e5fce9391d6b600116cd306',
            total_shares_amount: 0,
            total_shares_value: 0
        }
    },
    created: '2020-03-05T10:40:04.974Z',
    number: [],
    id: '5e60d7042d88840011240301'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'common_shares',
    amount: 24,
    to: {
        user: {
            first_name: 'Reno',
            last_name: 'Firm24',
            roles: ['user'],
            gender: 'male',
            email: 'renato@firm24.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            locale: 'en_GB',
            birth_date: '1927-01-11T23:40:28.000Z',
            birth_country: 'New Caledonia',
            created: '2020-03-03T14:13:10.903Z',
            id: '5e5e65f6c1f29100111b5aba'
        }
    },
    created: '2020-03-05T10:26:56.724Z',
    number: [],
    id: '5e60d3f02d888400112402fe'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'voting_shares',
    amount: 11,
    to: {
        user: {
            first_name: 'Louiss',
            last_name: 'Cardoso',
            roles: ['user'],
            email: 're2005@gmail.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            created: '2020-02-27T09:24:52.378Z',
            birth_country: 'Brazil',
            birth_date: '1980-03-01T23:00:00.000Z',
            locale: 'en_GB',
            id: '5e45398276051600118cf608'
        }
    },
    created: '2020-03-05T08:38:59.524Z',
    number: [],
    id: '5e60baa32d888400112402fa'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'common_shares',
    amount: 11,
    to: {
        user: {
            first_name: 'Louiss',
            last_name: 'Cardoso',
            roles: ['user'],
            email: 're2005@gmail.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            created: '2020-02-27T09:24:52.378Z',
            birth_country: 'Brazil',
            birth_date: '1980-03-01T23:00:00.000Z',
            locale: 'en_GB',
            id: '5e45398276051600118cf608'
        }
    },
    created: '2020-03-05T08:30:39.189Z',
    number: [],
    id: '5e60b8af2d888400112402f9'
}, {
    total_amount_asset: 0,
    total_amount_recipient_asset: 0,
    organization: {
        state: 'new',
        types: ['client'],
        share_values_summary: [],
        name: 'Renatex B.V.',
        registration_number: '123456789',
        registered_city: 'Amsterdam',
        incorporation_date: '2019-01-01T00:00:00.000Z',
        shareholders: [{ boardmember: true, user: '5e45398276051600118cf608' }, {
            boardmember: true,
            user: '5e5e65f6c1f29100111b5aba'
        }, { boardmember: true, organization: '5e5fce9391d6b600116cd306' }, {
            boardmember: true,
            organization: '5e5674c36b34cb0013daa170'
        }],
        employees: [],
        members: [{
            role: 'shareholder',
            user: '5e45398276051600118cf608'
        }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
            user: '5e5e65f6c1f29100111b5aba',
            role: 'shareholder'
        }, {
            organization: '5e5fce9391d6b600116cd306',
            role: 'shareholder'
        }, { organization: '5e5674c36b34cb0013daa170', role: 'shareholder' }],
        created: '2020-02-12T09:24:01.396Z',
        shares: [],
        shares_summary: [{
            shares: [{
                number: [],
                amount: 121,
                fully_paid_amount: 10,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }, {
                number: [],
                amount: 111,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e45398276051600118cf608'
        }, {
            shares: [{
                number: [],
                amount: 24,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            user: '5e5e65f6c1f29100111b5aba'
        }, {
            shares: [{
                number: [],
                amount: 31,
                fully_paid_amount: 0,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 365,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }],
            organization: '5e5fce9391d6b600116cd306'
        }, {
            shares: [{
                number: [],
                amount: 45,
                fully_paid_amount: 0,
                asset: 'voting_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 145,
                fully_paid_amount: 0,
                asset: 'preferred_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 312,
                fully_paid_amount: 0,
                asset: 'priority_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 212,
                fully_paid_amount: 0,
                asset: 'letter_shares',
                encumbered: 'no',
                encumbered_amount: 0
            }, {
                number: [],
                amount: 10,
                fully_paid_amount: 20,
                asset: 'common_shares',
                encumbered: 'no',
                encumbered_amount: 10
            }],
            organization: '5e5674c36b34cb0013daa170'
        }],
        id: '5e43c431f7c0fc0011406d67',
        total_shares_amount: 2265,
        total_shares_value: 0
    },
    notary: '5e5fcaae91d6b600116cd2fc',
    type: 'issue',
    asset: 'common_shares',
    amount: 120,
    to: {
        user: {
            first_name: 'Louiss',
            last_name: 'Cardoso',
            roles: ['user'],
            email: 're2005@gmail.com',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'A',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            created: '2020-02-27T09:24:52.378Z',
            birth_country: 'Brazil',
            birth_date: '1980-03-01T23:00:00.000Z',
            locale: 'en_GB',
            id: '5e45398276051600118cf608'
        }
    },
    created: '2020-03-04T15:52:46.875Z',
    number: [],
    id: '5e5fcece91d6b600116cd30b'
}];

export const organizationEvents = [
    {
        actions: ['organization_name_changed', 'organization_registered_city_changed'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: {
            name: 'Bob Corp XXX',
            corporation_type: 'bv',
            registration_number: '12345678',
            registered_city: 'Alkmaar',
            incorporation_date: '2020-01-31',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            deed: '000000000000000000000001'
        },
        type: 'organization_updated',
        scope: 'organizations',
        context: {
            user: {
                first_name: 'Reno',
                last_name: 'Notary',
                roles: ['user'],
                email: 'renato@ltonetwork.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-05T08:20:21.042Z',
                id: '5e60b6452d888400112402f8'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-04-10T17:34:29.782Z',
        id: '5e90ae2528834300113b656f'
    }, {
        actions: ['organization_name_changed', 'organization_registered_city_changed'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: {
            name: 'Bob Corp XXX',
            corporation_type: 'bv',
            registration_number: '12345678',
            registered_city: 'Amsterdam',
            incorporation_date: '2020-01-31',
            address: {
                street: 'Jan Ligthartstraat',
                postal_code: '1964 HH',
                number: '132',
                addition: 'a',
                city: 'Heemskerk',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            deed: '000000000000000000000001'
        },
        type: 'organization_updated',
        scope: 'organizations',
        context: {
            user: {
                first_name: 'Reno',
                last_name: 'Notary',
                roles: ['user'],
                email: 'renato@ltonetwork.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-05T08:20:21.042Z',
                id: '5e60b6452d888400112402f8'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-04-10T17:15:55.480Z',
        id: '5e90a9cbd7e4600011b0029b'
    }, {
        actions: ['share_encumbered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 5,
            fully_paid_amount: 0,
            encumbered: 'usufruct',
            encumbered_amount: 2,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'encumbered',
            asset: 'common_shares',
            to: { user: '5e834e826f5aa40011cd1267' },
            number: [],
            created: '2020-03-31T14:43:26.401Z',
            id: '5e83570e6f5aa40011cd12a7'
        },
        data: {
            type: 'encumbered',
            asset: 'common_shares',
            encumbered_amount: 2,
            encumbered: 'usufruct',
            to: { user: '5e834e826f5aa40011cd1267' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:43:26.462Z',
        id: '5e83570e6f5aa40011cd12a8'
    }, {
        actions: ['share_fully_paid'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 5,
            fully_paid_amount: 3,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'fully_paid',
            asset: 'common_shares',
            to: { user: '5e834e826f5aa40011cd1267' },
            number: [],
            created: '2020-03-31T14:41:29.892Z',
            id: '5e8356996f5aa40011cd12a5'
        },
        data: {
            type: 'fully_paid',
            asset: 'common_shares',
            fully_paid_amount: 3,
            to: { user: '5e834e826f5aa40011cd1267' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:41:29.944Z',
        id: '5e8356996f5aa40011cd12a6'
    }, {
        actions: ['share_fully_paid'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 10,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'fully_paid',
            asset: 'common_shares',
            to: { user: '5e834e826f5aa40011cd1268' },
            number: [],
            created: '2020-03-31T14:40:39.008Z',
            id: '5e8356676f5aa40011cd12a3'
        },
        data: {
            type: 'fully_paid',
            asset: 'common_shares',
            fully_paid_amount: 10,
            to: { user: '5e834e826f5aa40011cd1268' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:40:39.063Z',
        id: '5e8356676f5aa40011cd12a4'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 10,
            total_amount_recipient_asset: 5,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'transfer',
            asset: 'voting_shares',
            amount: 2,
            from: { user: '5e834e826f5aa40011cd1268' },
            to: { user: '5e834e826f5aa40011cd1267' },
            number: [{ from: 1, to: 2 }],
            created: '2020-03-31T14:35:51.914Z',
            id: '5e8355476f5aa40011cd12a1'
        },
        data: {
            type: 'transfer',
            asset: 'voting_shares',
            amount: 2,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 10,
            from: { user: '5e834e826f5aa40011cd1268' },
            to: { user: '5e834e826f5aa40011cd1267' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:35:51.959Z',
        id: '5e8355476f5aa40011cd12a2'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 10,
            total_amount_recipient_asset: 3,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'transfer',
            asset: 'voting_shares',
            amount: 3,
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1267' },
            number: [{ from: 8, to: 10 }],
            created: '2020-03-31T14:35:02.144Z',
            id: '5e8355166f5aa40011cd129f'
        },
        data: {
            type: 'transfer',
            asset: 'voting_shares',
            amount: 3,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 10,
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1267' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:35:02.373Z',
        id: '5e8355166f5aa40011cd12a0'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 10,
            total_amount_recipient_asset: 7,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'transfer',
            asset: 'voting_shares',
            amount: 7,
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1268' },
            number: [{ from: 1, to: 7 }],
            created: '2020-03-31T14:30:54.653Z',
            id: '5e83541e6f5aa40011cd129d'
        },
        data: {
            type: 'transfer',
            asset: 'voting_shares',
            amount: 7,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 10,
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1268' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:30:54.706Z',
        id: '5e83541e6f5aa40011cd129e'
    }, {
        actions: ['share_issued'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 10,
            total_amount_recipient_asset: 10,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'issue',
            asset: 'voting_shares',
            amount: 10,
            to: { organization: '5e8350506f5aa40011cd1274' },
            number: [{ from: 1, to: 10 }],
            created: '2020-03-31T14:29:22.596Z',
            id: '5e8353c26f5aa40011cd129b'
        },
        data: {
            type: 'issue',
            asset: 'voting_shares',
            amount: 10,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 10,
            to: { organization: '5e8350506f5aa40011cd1274' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:29:22.639Z',
        id: '5e8353c26f5aa40011cd129c'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 10,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            type: 'transfer',
            asset: 'common_shares',
            amount: 5,
            from: { organization: '5e8350506f5aa40011cd127c' },
            to: { user: '5e834e826f5aa40011cd1268' },
            number: [{ from: 11, to: 15 }],
            created: '2020-03-31T14:27:23.127Z',
            id: '5e83534b6f5aa40011cd1299'
        },
        data: {
            type: 'transfer',
            asset: 'common_shares',
            amount: 5,
            fully_paid_amount: 10,
            encumbered: 'no',
            encumbered_amount: 10,
            from: { organization: '5e8350506f5aa40011cd127c' },
            to: { user: '5e834e826f5aa40011cd1268' }
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:27:23.181Z',
        id: '5e83534b6f5aa40011cd129a'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share_value: {
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            asset: 'letter_shares',
            value: 1.5,
            created: '2020-03-31T14:23:28.986Z',
            id: '5e8352606f5aa40011cd1293'
        },
        data: [{ asset: 'voting_shares', value: 0.2 }, {
            asset: 'preferred_shares',
            value: 1
        }, { asset: 'cum_preferred_shares', value: 0.5 }, {
            asset: 'priority_shares',
            value: 0.6
        }, { asset: 'letter_shares', value: 1.5 }],
        type: 'share_value_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:23:29.184Z',
        id: '5e8352616f5aa40011cd1298'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share_value: {
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            asset: 'cum_preferred_shares',
            value: 0.5,
            created: '2020-03-31T14:23:28.986Z',
            id: '5e8352606f5aa40011cd1291'
        },
        data: [{ asset: 'voting_shares', value: 0.2 }, {
            asset: 'preferred_shares',
            value: 1
        }, { asset: 'cum_preferred_shares', value: 0.5 }, {
            asset: 'priority_shares',
            value: 0.6
        }, { asset: 'letter_shares', value: 1.5 }],
        type: 'share_value_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:23:29.166Z',
        id: '5e8352616f5aa40011cd1297'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share_value: {
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            asset: 'priority_shares',
            value: 0.6,
            created: '2020-03-31T14:23:28.986Z',
            id: '5e8352606f5aa40011cd1292'
        },
        data: [{ asset: 'voting_shares', value: 0.2 }, {
            asset: 'preferred_shares',
            value: 1
        }, { asset: 'cum_preferred_shares', value: 0.5 }, {
            asset: 'priority_shares',
            value: 0.6
        }, { asset: 'letter_shares', value: 1.5 }],
        type: 'share_value_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:23:29.148Z',
        id: '5e8352616f5aa40011cd1296'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share_value: {
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            asset: 'preferred_shares',
            value: 1,
            created: '2020-03-31T14:23:28.985Z',
            id: '5e8352606f5aa40011cd1290'
        },
        data: [{ asset: 'voting_shares', value: 0.2 }, {
            asset: 'preferred_shares',
            value: 1
        }, { asset: 'cum_preferred_shares', value: 0.5 }, {
            asset: 'priority_shares',
            value: 0.6
        }, { asset: 'letter_shares', value: 1.5 }],
        type: 'share_value_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:23:29.125Z',
        id: '5e8352616f5aa40011cd1295'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share_value: {
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            asset: 'voting_shares',
            value: 0.2,
            created: '2020-03-31T14:23:28.985Z',
            id: '5e8352606f5aa40011cd128f'
        },
        data: [{ asset: 'voting_shares', value: 0.2 }, {
            asset: 'preferred_shares',
            value: 1
        }, { asset: 'cum_preferred_shares', value: 0.5 }, {
            asset: 'priority_shares',
            value: 0.6
        }, { asset: 'letter_shares', value: 1.5 }],
        type: 'share_value_added',
        scope: 'shares',
        context: {
            user: {
                first_name: 'Sven',
                last_name: 'Notaris',
                roles: ['user'],
                email: 'sven@firm24.com',
                locale: 'en_GB',
                birth_date: null,
                birth_country: '',
                created: '2020-03-04T15:37:02.370Z',
                id: '5e5fcb1e91d6b600116cd300'
            },
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:23:29.112Z',
        id: '5e8352616f5aa40011cd1294'
    }, {
        actions: ['organization_incorporated'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { state: 'incorporated' },
        type: 'organization_updated',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.446Z',
        id: '5e8350516f5aa40011cd128e'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 15,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            amount: 15,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { organization: '5e8350506f5aa40011cd127c' },
            number: [{ from: 11, to: 25 }],
            created: '2020-03-31T14:14:41.389Z',
            id: '5e8350516f5aa40011cd128c'
        },
        data: {
            amount: 15,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { organization: '5e8350506f5aa40011cd127c' },
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        meta: { legal_fact: 'incorporation_share_transfered' },
        created: '2020-03-31T14:14:41.429Z',
        id: '5e8350516f5aa40011cd128d'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 5,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            amount: 5,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1267' },
            number: [{ from: 6, to: 10 }],
            created: '2020-03-31T14:14:41.334Z',
            id: '5e8350516f5aa40011cd128a'
        },
        data: {
            amount: 5,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1267' },
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        meta: { legal_fact: 'incorporation_share_transfered' },
        created: '2020-03-31T14:14:41.389Z',
        id: '5e8350516f5aa40011cd128b'
    }, {
        actions: ['share_transfered'],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        share: {
            total_amount_asset: 25,
            total_amount_recipient_asset: 5,
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0,
            organization: '5e8350506f5aa40011cd1274',
            notary: '5e5fcaae91d6b600116cd2fc',
            amount: 5,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1268' },
            number: [{ from: 1, to: 5 }],
            created: '2020-03-31T14:14:41.243Z',
            id: '5e8350516f5aa40011cd1288'
        },
        data: {
            amount: 5,
            type: 'transfer',
            asset: 'common_shares',
            from: { organization: '5e8350506f5aa40011cd1274' },
            to: { user: '5e834e826f5aa40011cd1268' },
            fully_paid_amount: 0,
            encumbered: 'no',
            encumbered_amount: 0
        },
        type: 'share_added',
        scope: 'shares',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        meta: { legal_fact: 'incorporation_share_transfered' },
        created: '2020-03-31T14:14:41.333Z',
        id: '5e8350516f5aa40011cd1289'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { organization: '5e8350506f5aa40011cd127c', boardmember: true },
        type: 'organization_shareholder_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.242Z',
        id: '5e8350516f5aa40011cd1287'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { organization: '5e8350506f5aa40011cd127c', role: 'shareholder' },
        type: 'organization_member_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.219Z',
        id: '5e8350516f5aa40011cd1286'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { user: '5e834e826f5aa40011cd1267', boardmember: true },
        type: 'organization_shareholder_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.152Z',
        id: '5e8350516f5aa40011cd1285'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { user: '5e834e826f5aa40011cd1267', role: 'shareholder' },
        type: 'organization_member_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.124Z',
        id: '5e8350516f5aa40011cd1284'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { user: '5e834e826f5aa40011cd1268', boardmember: true },
        type: 'organization_shareholder_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.088Z',
        id: '5e8350516f5aa40011cd1283'
    }, {
        actions: [],
        organization: {
            state: 'incorporated',
            types: ['client'],
            corporation_type: 'bv',
            share_values_summary: [{
                asset: 'common_shares',
                value: 0.01,
                created: '2020-03-31T14:14:40.911Z'
            }, {
                asset: 'preferred_shares',
                value: 1,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'voting_shares',
                value: 0.2,
                created: '2020-03-31T14:23:28.985Z'
            }, {
                asset: 'priority_shares',
                value: 0.6,
                created: '2020-03-31T14:23:28.986Z'
            }, {
                asset: 'cum_preferred_shares',
                value: 0.5,
                created: '2020-03-31T14:23:28.986Z'
            }, { asset: 'letter_shares', value: 1.5, created: '2020-03-31T14:23:28.986Z' }],
            name: 'Bob Corp XXX',
            registered_city: 'Alkmaar',
            address: {
                city: 'Heemskerk',
                postal_code: '1964 HH',
                street: 'Jan Ligthartstraat',
                number: '132',
                addition: 'a',
                province: 'Noord-Holland',
                country: 'Netherlands'
            },
            shareholders: [{ boardmember: true, organization: '5e8350506f5aa40011cd1274' }, {
                boardmember: true,
                user: '5e834e826f5aa40011cd1268'
            }, { boardmember: true, user: '5e834e826f5aa40011cd1267' }, {
                boardmember: true,
                organization: '5e8350506f5aa40011cd127c'
            }],
            employees: [],
            members: [{
                organization: '5e8350506f5aa40011cd1274',
                role: 'shareholder'
            }, { organization: '5e5fcaae91d6b600116cd2fc', role: 'notary' }, {
                user: '5e834e826f5aa40011cd1268',
                role: 'shareholder'
            }, { user: '5e834e826f5aa40011cd1267', role: 'shareholder' }, {
                organization: '5e8350506f5aa40011cd127c',
                role: 'shareholder'
            }],
            created: '2020-03-31T14:14:40.881Z',
            shares_summary: [{
                shares: [{
                    number: [{ from: 0, to: 0 }, { from: 26, to: 36 }],
                    amount: 11,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }, { number: [{ from: 0, to: 0 }], amount: 0, fully_paid_amount: 0, asset: 'voting_shares' }],
                organization: '5e8350506f5aa40011cd1274'
            }, {
                shares: [{
                    number: [{ from: 1, to: 5 }, { from: 11, to: 15 }],
                    amount: 10,
                    fully_paid_amount: 10,
                    asset: 'common_shares'
                }, { number: [{ from: 3, to: 7 }], amount: 5, fully_paid_amount: 0, asset: 'voting_shares' }],
                user: '5e834e826f5aa40011cd1268'
            }, {
                shares: [{
                    number: [{ from: 6, to: 10 }],
                    amount: 5,
                    fully_paid_amount: 3,
                    asset: 'common_shares',
                    encumbered: 'usufruct',
                    encumbered_amount: 2
                }, {
                    number: [{ from: 8, to: 10 }, { from: 1, to: 2 }],
                    amount: 5,
                    fully_paid_amount: 0,
                    asset: 'voting_shares'
                }],
                user: '5e834e826f5aa40011cd1267'
            }, {
                shares: [{
                    number: [{ from: 16, to: 25 }],
                    amount: 10,
                    fully_paid_amount: 0,
                    asset: 'common_shares'
                }],
                organization: '5e8350506f5aa40011cd127c'
            }],
            deed: '000000000000000000000001',
            incorporation_date: '2020-01-31T00:00:00.000Z',
            registration_number: '12345678',
            id: '5e8350506f5aa40011cd1274',
            total_shares_amount: 46,
            total_shares_value: 2.36
        },
        data: { user: '5e834e826f5aa40011cd1268', role: 'shareholder' },
        type: 'organization_member_added',
        scope: 'organizations',
        context: {
            organization: {
                state: 'new',
                types: ['notary'],
                corporation_type: 'bv',
                share_values_summary: [],
                shares: [],
                name: 'Stam Notarissen',
                shareholders: [{ boardmember: true, user: '5e5fcb1e91d6b600116cd300' }],
                employees: [],
                members: [{
                    user: '5e5fcb1e91d6b600116cd300',
                    role: 'shareholder'
                }, { user: '5e5794eda30c6e0011cb651a', role: 'shareholder' }, {
                    user: '5e60b6452d888400112402f8',
                    role: 'shareholder'
                }],
                created: '2020-03-04T15:35:10.163Z',
                id: '5e5fcaae91d6b600116cd2fc',
                total_shares_amount: 0,
                total_shares_value: 0
            }
        },
        created: '2020-03-31T14:14:41.072Z',
        id: '5e8350516f5aa40011cd1282'
    }];
