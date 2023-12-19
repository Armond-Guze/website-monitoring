import { URLRequest, requests } from './src/tools/UrlRequest';
import { checkUrl } from './src/tools/checkUrl';


const checkUrls = async (requests: URLRequest[]): Promise<void> => {
    await Promise.all(
        requests.map(async (request): Promise<void> => {
            await checkUrl(request);
        })
    );
};

checkUrls(requests);