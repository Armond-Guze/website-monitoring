import { checkUrl } from './src/tools/checkUrl';
import { Request, requests } from './src/tools/urls';

const checkUrls = async (requests: Request[]): Promise<void> => {
    await Promise.all(
        requests.map(async (request): Promise<void> => {
            await checkUrl(request);
        })
    );
};

checkUrls(requests);