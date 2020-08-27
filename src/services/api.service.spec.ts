import apiService from '@/services/api.service';

describe('Tests Api Service for Staging', () => {
    it('Should return staging api url', () => {
        const api = apiService.getApiUrl();
        expect(api).toBe(process.env.VUE_APP_API_URL);
    });

    it('Should return generated endpoint with base url staging', () => {
        const api = apiService.makeApiEndpoint('test');
        expect(api).toBe(process.env.VUE_APP_API_URL + 'test/');
    });

    it('Should return generated endpoint with query parameters base url staging', () => {
        const params = [
            {
                key: 'limit',
                value: '10'
            }
        ];

        const api = apiService.makeApiEndpoint('test', params);
        expect(api).toBe(process.env.VUE_APP_API_URL + 'test/?limit=10');
    });
});

describe('Tests Api Service for Production', () => {
    beforeAll(() => {
        process.env.NODE_ENV = 'production';
    });

    it('Should return correct API URL', () => {
        const api = apiService.makeApiEndpoint('test');
        expect(api).toBe('/api/test/');
    });
});
