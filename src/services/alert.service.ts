import { ToastProgrammatic } from 'buefy';

const alertService = {

    dangerMessage(message: string, duration?, options?) {
        this.openToast('is-danger', message, duration, options);
    },

    successMessage(message: string, duration?, options?) {
        this.openToast('is-success', message, duration, options);
    },

    openToast(type: string, message: string, duration?: number, options?: any) {
        ToastProgrammatic.open({
            message: message,
            type: type,
            duration: duration,
            position: options?.position ?? 'is-top'
        });
    }
};

export default alertService;
