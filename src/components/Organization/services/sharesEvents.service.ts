import { EventsTypes } from '@/types/events.types';
import i18n from '@/dependencies/i18n';
import { TranslateResult } from 'vue-i18n';

class SharesEventsService {
    data: Array<EventsTypes>;

    constructor(events: Array<EventsTypes>) {
        this.data = events.filter((e: EventsTypes) => {
            e.classification = {
                category: this.isOrganization(e) ? 'ORGANIZATIONS' : 'SHARES',
                label: this.getEventLabel(e),
                components: this.getComponents(e)
            };
            return e;
        });
    }

    get events() {
        return this.data.filter((e: EventsTypes) => !this.isEventRemoved(e));
    }

    get allEvents() {
        return this.data;
    }

    get sharesEvents() {
        return this.events.filter((d: EventsTypes) => !this.isOrganization(d))
            .map((e: any) => {
                e.index = this.getEventIndex(e);
                return e;
            });
    }

    get organizationEvents() {
        return this.events.filter((d: EventsTypes) => this.isOrganization(d));
    }

    getShareEventsById(id: string) {
        const events = this.sharesEvents.filter((e: any) => (e.data.to.user || e.data.to.organization) === id);
        return events.map((e: any) => {
            e.index = events.reverse().indexOf(e) + 1;
            return e;
        });
    }

    getEventIndex(e: EventsTypes) {
        return this.events.reverse().indexOf(e);
    }

    getComponents(e: EventsTypes) {
        return this.isOrganization(e) ? e.actions.map((a: string) => (a.toUpperCase())) : ['SHARES_COMPONENT'];
    }

    isEventRemoved(d: any) {
        const actions = [
            'organization_deed_changed',
            'organization_extract_changed'
        ];
        const events = [
            'share_value_added',
            'organization_member_added',
            'organization_shareholder_added'
        ];
        const types = [
            'fully_paid',
            'encumbered',
            'organization_incorporated'
        ];
        const state: Array<string> = [
            'validation_requested'
        ];
        return events.includes(d.type) ||
            types.includes(d.data.type) ||
            state.includes(d.data.state) ||
            (actions.some((a: any) => d.actions.includes(a)));
    }

    isOrganization(e: any) {
        return e.scope === 'organizations';
    }

    getEventLabel(e: any): TranslateResult {
        let label: TranslateResult = 'Untitled';
        if (e.type === 'share_added') {
            if (e.data.type === 'transfer') {
                label = i18n.t('EVENTS_DETAILS.SHARE_TRANSFER');
            }

            if (e.data.type === 'issue') {
                label = i18n.t('EVENTS_DETAILS.ISSUANCES_OF_NEW_SHARES');

                if (e.meta && e.meta.legal_fact === 'incorporation_share_issued') {
                    label = i18n.t('EVENTS_DETAILS.ACQUISITION_AT_INCORPORATION');
                }
                if (e.meta && e.meta.legal_fact === 'contribution_share_issued') {
                    label = i18n.t('EVENTS_DETAILS.ACQUISITION_AT_CONTRIBUTION');
                }
            }

            if (e.data.type === 'encumbered') {
                if (e.data.encumbered === 'usufruct') {
                    label = i18n.t('EVENTS_DETAILS.OBJECTION_OF_THE_USUFRUCTUARY');
                }
                if (e.data.encumbered === 'certificate') {
                    label = i18n.t('EVENTS_DETAILS.OBJECTION_OF_THE_DEPOSITORY');
                }
                if (e.data.encumbered === 'pledged') {
                    label = i18n.t('EVENTS_DETAILS.OBJECTION_OF_THE_PLEDGE');
                }
            }
        }

        if (this.isOrganization(e) && e.actions.length > 0) {
            label = e.actions.map((e: any) => i18n.t(`EVENTS_DETAILS.${e.toUpperCase()}`)).join(' / ');
        }
        if (label === 'Untitled' && e.data.type) {
            label = e.data.type;
        }
        return label;
    }
}

export default SharesEventsService;
