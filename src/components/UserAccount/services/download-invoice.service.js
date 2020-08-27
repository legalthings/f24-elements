import JSZip from 'jszip';
import apiService from '../../../services/api.service';
import { downloadFile } from '../../../helpers/utility.helper';

const DownloadInvoiceService = {

    getUrl(id) {
        return `${apiService.API_URL}invoices/${id}.pdf`;
    },

    async download(config) {
        const zip = new JSZip();
        let count = 0;

        await new Promise((resolve) => {
            config.checkedRows.forEach(async (i) => {
                const url = this.getUrl(i.id);
                const filename = `${i.external_data.invoice_id}`;
                const { data } = await apiService.getFileFromURL(url);
                await zip.file(filename, data, { binary: true });
                count++;
                if (count === config.checkedRows.length) {
                    await zip.generateAsync({ type: 'blob' }).then(zipFile => {
                        downloadFile(zipFile, config.zipFilename, 'pdf');
                        resolve(true);
                    });
                }
            });
        });
    }
};

export default DownloadInvoiceService;
