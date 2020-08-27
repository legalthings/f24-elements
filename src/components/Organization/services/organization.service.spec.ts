import OrganizationService from '@/components/Organization/services/organization.service';

import { organizationData, organizationEvents, organizationShares, organizationSharesSummary } from '@/mocks/organization';

const org = new OrganizationService(organizationData, organizationSharesSummary, organizationShares, organizationEvents);

const shares = [
    {
        asset: 'common_shares',
        amount: 123,
        fully_paid_amount: 12,
        number: [],
        encumbered: '',
        encumbered_amount: 12
    },
    {
        asset: 'preferred_shares',
        amount: 456,
        fully_paid_amount: 12,
        number: [],
        encumbered: '',
        encumbered_amount: 12
    },
    {
        asset: 'letter_shares',
        amount: 789,
        fully_paid_amount: 12,
        number: [],
        encumbered: '',
        encumbered_amount: 12
    }
];

describe('Tests Organization Service', () => {
    it('Should return the correct name', async () => {
        expect(org.data.name).toBe('Renatex B.V.');
    });

    it('Should return return all available share types', async () => {
        const result =
            {
                all_shares: {
                    amount: 942,
                    name: 'ALL_SHARES'
                },
                common_shares: {
                    amount: 186,
                    name: 'COMMON_SHARES'
                },
                preferred_shares: {
                    amount: 357,
                    name: 'PREFERRED_SHARES'
                },
                voting_shares: {
                    amount: 56,
                    name: 'VOTING_SHARES'
                }
            };
        expect(org.getAllAvailableShareTypes()).toEqual(result);
    });

    it('Should return person name', async () => {
        const share =
            {
                user: {
                    first_name: 'Reno',
                    last_name: 'Cardo'
                }
            };
        expect(org.getShareholderNameByShare(share)).toEqual('Reno Cardo');
    });

    it('Should return organization name', async () => {
        const share =
            {
                organization: {
                    name: 'Renosaurus B.V'
                }
            };
        expect(org.getShareholderNameByShare(share)).toEqual('Renosaurus B.V');
    });

    it('Should filter shares per given type', async () => {
        expect(org.filterSharesPerType(shares, 'common_shares')).toEqual(123);
    });

    it('Should return the total of all types of shares', async () => {
        expect(org.getTotalShares(shares)).toEqual(1368);
    });

    it('Should return amounts names and colors for all shares', async () => {
        const result = {
            amounts: [243, 190, 24, 142],
            colors: ['#333899', '#584785', '#cc66aa', '#917ab8'],
            names: ['Firmy B.V', 'Acme', 'Reno Firm24', 'Renatex Luis Cardoso']
        };
        expect(org.getSharesPerSelectedType()).toEqual(result);
    });

    it('Should return amounts names and colors for a given share type', async () => {
        const result = {
            amounts: [31, 0, 24, 131],
            colors: ['#333899', '#584785', '#cc66aa', '#917ab8'],
            names: ['Firmy B.V', 'Acme', 'Reno Firm24', 'Renatex Luis Cardoso']
        };
        expect(org.getSharesPerSelectedType('common_shares')).toEqual(result);
    });

    it('Should return correct name of a user/organization for a given id', async () => {
        const result = org.getShareholderById('5e5fce9391d6b600116cd306');
        expect(result.data.name).toEqual('Firmy B.V');
    });

    it('Should return true if board member has shares', async () => {
        const result = org.getBoardMemberHasSharesById('5e5fce9391d6b600116cd306');
        expect(result).toBeTruthy();
    });
});
