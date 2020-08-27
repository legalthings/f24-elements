import { OrganizationShareTypes, ShareholderTypes } from '@/types/organisation.types';
import { ColorHelper } from '@/helpers/utility.helper';
import { SharesSummaryTypes, ShareTypes, ShareValueTypes } from '@/types/shares.types';
import { TransactionTypes } from '@/types/transaction.types';
import SharesEventsService from '@/components/Organization/services/sharesEvents.service';

class OrganizationService {
    data: OrganizationShareTypes;
    sharesSummary: Array<SharesSummaryTypes>;
    sharesEvents: Array<TransactionTypes>;
    eventsData: SharesEventsService;

    constructor(
        organization: any,
        sharesSummary: any,
        sharesEvents: any,
        eventsData: any) {
        this.data = organization;
        this.sharesSummary = sharesSummary;
        this.sharesEvents = sharesEvents;
        this.eventsData = new SharesEventsService(eventsData);
    }

    get type() {
        return this.data.corporation_type;
    }

    get id(): string {
        return this.data.id;
    }

    get boardMembers() {
        const boardMembers: Array<any> = [];
        this.data.shareholders.forEach((s: any) => {
            if (s.boardmember) {
                const member = s.user || s.organization;
                member.hasShares = this.getBoardMemberHasSharesById(member.id);
                boardMembers.push(member);
            }
        });
        return boardMembers;
    }

    get averageSharesValue(): number | string {
        if (this.data.share_values_summary.length === 0) return '-';
        return Number((this.data.share_values_summary.reduce((acc: any, sv: ShareValueTypes) => (acc + sv.value), 0) / this.data.share_values_summary.length).toFixed(2));
    }

    getBoardMemberHasSharesById(id: string): boolean {
        return !!this.getShareholders().find((s: any) => (s.data.id === id));
    }

    getNameById(id: string) {
        const result = this.getShareholderById(id);
        return result.type === 'organization' ? result.data.name : `${result.data.first_name} ${result.data.last_name}`;
    }

    getTotalShares(shares: Array<ShareTypes>): number {
        return shares.reduce((acc: any, current: { amount: any; }) => acc + current.amount, 0);
    }

    getShareholders() {
        const shareholders: Array<SharesSummaryTypes> = [];
        this.sharesSummary.filter(s => {
            if (s.shares.some(s => s.amount > 0)) {
                shareholders.push(s);
            }
        });

        return shareholders.map(s => {
            return {
                name: this.getShareholderNameByShare(s),
                data: s.user || s.organization,
                shares: s.shares,
                type: s.user ? 'user' : 'organization',
                totalShares: this.getTotalShares(s.shares)
            };
        });
    }

    getSharesEventsById(id: string): Array<TransactionTypes> {
        return this.sharesEvents.filter((s: TransactionTypes) => {
            if (s.from) {
                if (s.from.organization) {
                    return s.from.organization.id === id;
                }
                if (s.from.user) {
                    return s.from.user.id === id;
                }
            }
            if (s.to) {
                if (s.to.organization) {
                    return s.to.organization.id === id;
                }
                if (s.to.user) {
                    return s.to.user.id === id;
                }
            }
        });
    }

    getIsBoardMemberById(id: string): boolean {
        return this.data.shareholders.some((s: any) => {
            const data = s.user || s.organization;
            if (data.id === id) {
                return s.boardmember;
            }
        });
    }

    getShareholderById(id: string): ShareholderTypes {
        const shareholder: any = {};
        this.sharesSummary.map((e: any) => {
            Object.keys(e).map(key => {
                if (e[key].id === id) {
                    shareholder.data = e.user || e.organization;
                    shareholder.shares = e.shares;
                    shareholder.type = key;
                    shareholder.boardMember = this.getIsBoardMemberById(id);
                    shareholder.totalShares = this.getTotalShares(e.shares);
                }
            });
        });
        return shareholder;
    }

    getAllAvailableShareTypes() {
        const shares: any = {};
        this.sharesSummary.map((s: SharesSummaryTypes) => {
            s.shares.map(ss => {
                if (Object.prototype.hasOwnProperty.call(shares, ss.asset)) {
                    shares[ss.asset].amount = shares[ss.asset].amount + ss.amount;
                } else {
                    shares[ss.asset] = {
                        amount: ss.amount,
                        name: ss.asset.toUpperCase()
                    };
                }
            });
        });
        shares.all_shares = {
            amount: this.data.total_shares_amount,
            name: 'ALL_SHARES'
        };
        return shares;
    }

    getShareholderNameByShare(share: any) {
        if (share.user) {
            return `${share.user.first_name} ${share.user.last_name}`;
        } else {
            return share.organization.name;
        }
    }

    filterSharesPerType(s: Array<ShareTypes>, type: string) {
        let amount = 0;
        s.some((ss: ShareTypes) => {
            if (ss.asset === type) {
                amount = ss.amount;
            }
            return ss.asset === type;
        });
        return amount;
    }

    getSharesPerSelectedType(selectedShareType: string = 'all_shares') {
        const names: Array<string> = [];
        const colors: Array<string> = [];
        const amounts = this.sharesSummary.map((s: { shares: ShareTypes[]; }) => {
            let amount;
            const name = this.getShareholderNameByShare(s);
            names.push(name);
            colors.push(ColorHelper.getHex(name));

            if (selectedShareType === 'all_shares') {
                amount = this.getTotalShares(s.shares);
            } else {
                amount = this.filterSharesPerType(s.shares, selectedShareType);
            }
            return amount;
        });
        return { names, colors, amounts };
    }
}

export default OrganizationService;
