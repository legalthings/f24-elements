import apiService from '@/services/api.service';
import { LeadTransactionsTypes, LeadTypes } from '@/types/lead.types';

class LeadService {
    getTypes(): Promise<{ data: Array<LeadTypes> }> {
        return apiService.get('lead-types', [], { cache: true });
    }

    buyLead(type: string, count: number, returnUrl?): Promise<{ data: LeadTransactionsTypes, status: number }> {
        const return_url = returnUrl || window.location.href;
        return apiService.post('lead-transactions', { type, count, return_url });
    }

    getLeads() {
        return apiService.get('leads', [], { cache: true });
    }

    async updateLeadById(data: any) {
        return apiService.post('lead-purchases/' + data.id, data);
    }

    deleteLead(id) {
        return apiService.delete('lead-transactions/' + id);
    }
}

const leadService = new LeadService();
export default leadService;
