import { PrometheusEndpoint } from './types.js';
import { generateRequestUrl } from '../../utils/function.js';
import PrometheusServices from './prometheus-services.js';
class PrometheusRules extends PrometheusServices {
    constructor(baseUrl, headers) {
        super(baseUrl, PrometheusEndpoint, headers);
    }
    async getAlertRules(query) {
        const rawEndpoint = this.serviceEndpoints.rules;
        if (query)
            rawEndpoint.queryParams = query;
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: rawEndpoint.path,
            queryParams: rawEndpoint.queryParams || {},
            params: {}
        });
        const res = await fetch(reqUrl, {
            method: rawEndpoint.method,
            headers: { ...this.headers }
        });
        return { status: res.status, data: await res.json() };
    }
    async getActiveAlerts() {
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: this.serviceEndpoints.activeAlerts.path,
            queryParams: {},
            params: {}
        });
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.activeAlerts.method,
            headers: { ...this.headers }
        });
        if (res.status == 200) {
            return await res.json();
        }
        else {
            return res;
        }
    }
}
export default PrometheusRules;
