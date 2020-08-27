import apiService from '@/services/api.service';
import alertService from '@/services/alert.service';
import { DialogProgrammatic as dialog } from 'buefy';
import i18n from '@/dependencies/i18n';

export const dashboardService = {
    async removeProcess(id: string) {
        dialog.confirm({
            title: i18n.t('DASHBOARD.REMOVE_INCORPORATION') as string,
            message: i18n.t('GLOBAL.ARE_YOU_SURE') as string,
            type: 'is-danger',
            cancelText: i18n.t('GLOBAL.CANCEL') as string,
            confirmText: i18n.t('GLOBAL.AGREE') as string,
            onConfirm: () => this.removeProcessById(id)
        });
    },

    async removeProcessById(id: string) {
        try {
            const { status } = await apiService.delete('proxy/processes/' + id);
            if (status === 204) {
                alertService.successMessage('Process removed successfully');
                setTimeout(() => location.reload(), 500);
            }
        } catch (e) {
            console.log('Error removing process', e);
            alertService.dangerMessage('Process not removed, please try again later');
        }
    }
};
