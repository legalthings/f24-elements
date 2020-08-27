import apiService from '@/services/api.service';

class PaymentService {
    startPayment(id: string): string {
        const config = {
            key: 'transaction',
            value: id
        };
        return apiService.makeApiEndpoint('payments/start', [config]);
    }
}

const paymentService = new PaymentService();
export default paymentService;
