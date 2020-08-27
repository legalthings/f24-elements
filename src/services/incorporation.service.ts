import apiService from '@/services/api.service';
import store from '@/store';
import alertService from '@/services/alert.service';
import { OrganisationListTypes } from '@/types/organisation.types';

class IncorporationService {
    async getLegacySession() {
        return apiService.get('proxy/sessions', [], { cache: true });
    }

    newIncorporation() {
        window.location.href = `${process.env.VUE_APP_FUNNEL_URL}oprichting?session=${store.state.userStore.session.id}`;
    }

    async getIncorporations() {
        const config = [
            {
                key: 'limit',
                value: '100'
            },
            {
                key: 'scenario[_id]',
                value: 'start-incorporation-firm24-funnel'
            }
        ];
        return apiService.get('proxy/processes', config, { cache: true });
    }

    async getRegistrations() {
        const config = [
            {
                key: 'limit',
                value: '100'
            },
            {
                key: 'scenario[_id]',
                value: 'start-inschrijving-firm24-funnel'
            }
        ];
        return apiService.get('proxy/processes', config, { cache: true });
    }

    async getCancellations() {
        const config = [
            {
                key: 'limit',
                value: '100'
            },
            {
                key: 'scenario[_id]',
                value: 'bv-opheffen'
            }
        ];
        return apiService.get('proxy/processes', config, { cache: true });
    }

    async getFunnelCancellations() {
        const config = [
            {
                key: 'limit',
                value: '100'
            },
            {
                key: 'scenario[_id]',
                value: 'start-opheffing-firm24-funnel'
            }
        ];
        return apiService.get('proxy/processes', config, { cache: true });
    }

    oldFunnelKeys = [
        'fill_document_user_step',
        'payment',
        'append_to_document_user_step'
    ];

    handleOldFunnel(key: string) {
        // TODO here is where you should change to accept funnel url
        // By returning true all Incorporations will be redirect to the old funnel.
        return true;
        // return this.oldFunnelKeys.includes(key);
    }

    link(organization: any, legacySession?: string) {
        if (organization.scenario === 'bv-opheffen') {
            const url = new URL(`${process.env.VUE_APP_LEGACY_URL}processes/${organization.id}/?hash=${legacySession}`);
            return url.toString();
        }
        if (organization.state !== 'running') {
            return { name: 'organization', params: { organizationId: organization.id } };
        }

        if (organization.current && this.handleOldFunnel(organization.current.key) && organization.scenario !== 'bv-opheffen') {
            const scenarioUrl = organization.scenario === 'start-incorporation-firm24-funnel' ? 'oprichting' : organization.scenario === 'start-opheffing-firm24-funnel' ? 'opheffing' : 'inschrijving';
            const url = new URL(`${process.env.VUE_APP_FUNNEL_URL}${scenarioUrl}/${organization.id}/?session=${store.state.userStore.session.id}&continue=true`);
            return url.toString();
        } else {
            return { name: 'incorporation', params: { incorporationId: organization.id } };
        }
    }

    canRemoveProcess(key: string): boolean {
        const keys = [
            'fill_document_user_step',
            'new_payment_offer_step'
        ];
        return keys.includes(key);
    }

    statusLabel(organization: OrganisationListTypes) {
        let status = 'live';
        if (organization.state === 'running') {
            if (organization.scenario === 'bv-opheffen' || organization.scenario === 'start-opheffing-firm24-funnel') {
                status = 'liquidating';
            } else {
                status = 'incorporation';
            }
        } else if (organization.state !== 'incorporated') {
            status = 'unconfirmed';
        }
        return status;
    }

    async getProcesses(): Promise<any> {
        try {
            const allData = await Promise.all([this.getIncorporations(), this.getRegistrations(), this.getCancellations(), this.getFunnelCancellations(), this.getLegacySession()]);
            const allProcesses = [...allData[0].data, ...allData[1].data, ...allData[2].data, ...allData[3].data];
            return allProcesses
                .filter((p: any) => (p.state !== 'finished'))
                .map((d: any) => {
                    return {
                        creation: d.creation,
                        current: d.current,
                        scenario: d.scenario,
                        id: d.id,
                        name: d.name,
                        totalSteps: d.previous + 1 + d.nextCount,
                        currentStep: d.current,
                        currentStepCount: d.previous + 1,
                        session: store.state.userStore.session.id,
                        isOldFunnel: this.handleOldFunnel(d.current.key) || d.scenario === 'bv-opheffen' || d.scenario === 'start-opheffing-firm24-funnel',
                        state: d.state,
                        legacySession: allData[4].data.id,
                        statusLabel: this.statusLabel(d).toUpperCase(),
                        url: this.link(d, allData[4].data.id),
                        canRemoveProcess: this.canRemoveProcess(d.current.key),
                        myTurn: d.current.actor && d.current.actor.email === store.getters['userStore/user'].email
                    };
                });
        } catch (e) {
            alertService.dangerMessage('Something went wrong, please try again in a few minutes');
        }
    }
}

const incorporationService = new IncorporationService();
export default incorporationService;
