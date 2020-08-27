import { $f24 } from '@/dependencies/dependencies';

const tickerService = {

    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async start(): Promise<any> {
        await this.sleep(10000);
        $f24.eventService.$emit('tickUpdate');
        this.start();
    }
};

export default tickerService;
