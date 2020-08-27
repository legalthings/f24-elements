import { errorHandler } from './axios.service';
import alertService from '@/services/alert.service';
import authService from '@/services/auth.service';

describe('Tests Axios Service', () => {
    beforeEach(async () => {
        alertService.dangerMessage = jest.fn();
        authService.logout = jest.fn();
    });

    it('Should intercept the request with 401, return correct error config, call alertService & authService logout', async () => {
        const error = {
            response: {
                status: 401,
                data: {
                    message: 'session not found'
                }
            }
        };
        const interceptor = errorHandler(error);
        expect(interceptor).toMatchObject({ data: 'session not found', status: 401 });
        expect(alertService.dangerMessage).toBeCalledWith('session not found');
        expect(authService.logout).toBeCalled();
    });

    it('Should intercept the request with 404, return correct error config and call alertService', async () => {
        const error = {};
        const interceptor = errorHandler(error);
        expect(interceptor).toBeUndefined();
    });

    it('Should intercept the request when no internet connection is available', async () => {
        Object.defineProperty(window.navigator, 'onLine', { value: false });
        const error = {};
        const interceptor = errorHandler(error);
        expect(interceptor).toBeUndefined();
        expect(alertService.dangerMessage).toBeCalledWith('Seems that you have no internet connection at this moment', 10000);
    });
});
