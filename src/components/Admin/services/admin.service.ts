import apiService from '@/services/api.service';

class AdminService {
    get processesFilters() {
        return [
            {
                label: 'State',
                identifier: 'state',
                type: 'select',
                options: [
                    {
                        name: 'Alles',
                        id: null
                    },
                    {
                        name: 'Running',
                        id: 'running'
                    },
                    {
                        name: 'Finished',
                        id: 'finished'
                    }
                ]
            },
            {
                label: 'Type Actor',
                identifier: 'current[actor[key]]',
                type: 'select',
                options: [
                    {
                        name: 'Alles',
                        id: null
                    },
                    {
                        name: 'Notary',
                        id: 'notary'
                    },
                    {
                        name: 'Client',
                        id: 'user'
                    },
                    {
                        name: 'Firm24',
                        id: 'primary'
                    }
                ]
            },
            {
                label: 'Product',
                identifier: 'scenario',
                type: 'select',
                options: [
                    {
                        name: 'Alles',
                        id: null
                    },
                    {
                        id: 'purchase-shareholders-package',
                        name: 'Aandeelhouderspakket (groot) aanschaffen'
                    },
                    {
                        id: 'aandelen-storten',
                        name: 'Aandelen storten'
                    },
                    {
                        id: 'share-transfer',
                        name: 'Aandelenoverdracht'
                    },
                    {
                        id: 'aandelenoverdracht',
                        name: 'Aandelenoverdracht'
                    },
                    {
                        id: 'aandelenuitgifte',
                        name: 'Aandelenuitgifte'
                    },
                    {
                        id: 'intakegesprek',
                        name: 'Aanvraag intakegesprek'
                    },
                    {
                        id: 'algemenevoorwaarden-affiliate',
                        name: 'Algemene Voorwaarden'
                    },
                    {
                        id: 'annulering',
                        name: 'Annulering'
                    },
                    {
                        id: 'bv-opheffen',
                        name: 'BV Opheffen'
                    },
                    {
                        id: 'start-incorporation-firm24-notary',
                        name: 'BV Oprichten'
                    },
                    {
                        id: 'start-incorporation-firm24-funnel-shr',
                        name: 'BV Oprichten (SHR)'
                    },
                    {
                        id: 'start-incorporation-firm24-funnel-accountant',
                        name: 'BV Oprichten (funnel accountant)'
                    },
                    {
                        id: 'start-incorporation-firm24-funnel',
                        name: 'BV Oprichten (funnel)'
                    },
                    {
                        id: 'start-incorporation-firm24-funnel-onfido',
                        name: 'BV Oprichten (funnel)'
                    },
                    {
                        id: 'belgie-bv-intake',
                        name: 'Belgie BV Intake'
                    },
                    {
                        id: 'boekhouding-flow',
                        name: 'Boekhouding'
                    },
                    {
                        id: 'bookkeeping',
                        name: 'Boekhouding'
                    },
                    {
                        id: 'purchase-package',
                        name: 'Contractpakket aanschaffen'
                    },
                    {
                        id: 'sign-request',
                        name: 'Document ondertekenen (sign request)'
                    },
                    {
                        id: 'firm24-incassoflow',
                        name: 'Firm24 incassoflow'
                    },
                    {
                        id: 'firm24-adviesflow',
                        name: 'Firm24 wijzigingsflow'
                    },
                    {
                        id: 'firm24-adviesflow-test-hidden-page',
                        name: 'Firm24 wijzigingsflow (TEST)'
                    },
                    {
                        id: 'start-inschrijving-firm24-funnel',
                        name: 'Inschrijving firm24 (funnel)'
                    },
                    {
                        id: 'create-loonheffing-formulier',
                        name: 'Loonheffingsformulier opstellen'
                    },
                    {
                        id: 'merkregistratie',
                        name: 'Merkregistratie'
                    },
                    {
                        id: 'boekhouden-offerte.nl-affiliate',
                        name: 'Offerte.nl boekhouden'
                    },
                    {
                        id: 'sign-document',
                        name: 'Onderteken een document'
                    },
                    {
                        id: 'online-legalisatie',
                        name: 'Online legalisatie'
                    },
                    {
                        id: 'open-zakelijke-rekening',
                        name: 'Open zakelijke rekening'
                    },
                    {
                        id: 'start-opheffing-firm24-funnel',
                        name: 'Opheffing Firm24 (funnel)'
                    },
                    {
                        id: 'professional-company-logo',
                        name: 'Professioneel bedrijfslogo'
                    },
                    {
                        id: 'rechtsvormkeuze',
                        name: 'Rechtsvormkeuze'
                    },
                    {
                        id: 'boekhouding-offerte',
                        name: 'Regel boekhouding'
                    },
                    {
                        id: 'review-document',
                        name: 'Review van een document'
                    },
                    {
                        id: 'start-spaarbv',
                        name: 'Spaar BV Oprichten'
                    },
                    {
                        id: 'statutenwijziging',
                        name: 'Statutenwijziging'
                    },
                    {
                        id: 'create-document',
                        name: 'Stel een contract op'
                    },
                    {
                        id: 'structuur-advies',
                        name: 'Structuur advies'
                    },
                    {
                        id: 'stuur-advies',
                        name: 'Stuur advies'
                    },
                    {
                        id: 'phone-consult',
                        name: 'Telefonisch Consult'
                    },
                    {
                        id: 'verzekeringen24-affiliate',
                        name: 'Verzekeringen24'
                    },
                    {
                        id: 'offerte_flow',
                        name: 'Vraag een offerte aan'
                    },
                    {
                        id: 'zakelijke-verzekering',
                        name: 'Zakelijke Verzekering'
                    }
                ]
            },
            {
                label: 'Urgency',
                identifier: 'urgency',
                type: 'select',
                options: [
                    {
                        name: 'Alles',
                        id: null
                    },
                    {
                        name: 'Snell',
                        id: 1
                    },
                    {
                        name: 'Spoed',
                        id: 3
                    }
                ]
            },
            {
                label: 'Step procedure',
                identifier: 'custom',
                type: 'select',
                options: [
                    {
                        name: 'Alles',
                        id: null
                    },
                    {
                        name: 'Paid',
                        id: 'previous[definition]=payment'
                    },
                    {
                        name: 'Not Paid',
                        id: 'definition(not)]=previous[payment'
                    },
                    {
                        name: 'Review',
                        id: 'previous[definition]=onfido'
                    },
                    {
                        name: 'Upload PoE',
                        id: 'current[key]=upload_volmacht_pdc_step'
                    },
                    {
                        name: 'Upload draft deed',
                        id: 'current[key]= upload_conceptaktes_step'
                    },
                    {
                        name: 'Prepare for signing',
                        id: 'current[key]=prepare_sr_step'
                    },
                    {
                        name: 'Discuss deed',
                        id: 'current[key]=bespreek_conceptakte_step'
                    },
                    {
                        name: 'Finished',
                        id: 'previous[key]=done'
                    }
                ]
            }
        ];
    }

    async getNotaryList() {
        const options = [
            {
                key: 'type',
                value: 'notary'
            }
        ];
        try {
            const { data, status } = await apiService.get('organizations', options);
            if (status !== 200) return [];
            data.unshift({
                name: 'Alles',
                id: null
            });
            return {
                label: 'Notary',
                identifier: 'actor[organization]',
                type: 'select',
                options: data.map(d => {
                    return {
                        name: d.name,
                        id: d.id
                    };
                })
            };
        } catch (e) {
            console.log('Error getting notaries');
        }
    }

    async getAllFilters() {
        const notary = await this.getNotaryList();
        return [...this.processesFilters, ...[notary]];
    }
}

const adminService = new AdminService();
export default adminService;
