import { IncorporationTypes } from '@/types/incorporation.types';
import i18n from '@/dependencies/i18n';

class IncorporationService {
    data: IncorporationTypes;

    constructor(
        incorporation: any) {
        this.data = this.filterSteps(incorporation);
    }

    get id() {
        return this.data.id;
    }

    get name() {
        return this.data.name;
    }

    get steps() {
        return [...this.data.previous, ...[this.data.current], ...this.data.next];
    }

    filterSteps(data: IncorporationTypes) {
        if (!data.next) return data;
        data.next.map(d => {
            if (d.key === ':success') {
                d.title = i18n.t('INCORPORATION.INCORPORATION_LIVE') as string;
            }
        });
        return data;
    }
}

export default IncorporationService;
