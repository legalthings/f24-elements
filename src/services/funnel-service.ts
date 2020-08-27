import { FunnelShareholderTypes } from '@/types/funnel.types';

class FunnelService {
    data;

    constructor(data) {
        this.data = data;
    }

    get shareholders(): Array<FunnelShareholderTypes> {
        const shareholdersStep = this.data.steps.find(s => s.slug === 'incorporation-shareholders');
        const shareholders = shareholdersStep.steps.filter(s => s.slug === 'shareholder');
        return shareholders.map(s => {
            s.isHolding = s.shareholderType === 'holding';
            const personName = s.members && `${s.members[0].firstName} ${s.members[0].lastName}`;
            s.displayName = s.isHolding ? s.holdingName : personName;
            return s;
        });
    }

    get totalsShareAmounts() {
        return this.shareholders.map((s) => {
            return s.amountOfShares;
        });
    }

    get totalSharesAmount() {
        return this.shareholders.reduce((acc, c) => (acc = acc + Number(c.amountOfShares)), 0);
    }

    get salaryPackages() {
        return this.shareholders.filter(s => (s.members.filter(m => m.hasSalaryPackage).length > 0));
    }

    get upsellHolding() {
        return this.shareholders.filter(s => s.upsellHolding);
    }
}

export default FunnelService;
