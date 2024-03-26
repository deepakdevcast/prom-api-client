import { PrometheusEndpointTemplates, PrometheusHeaders } from './types.js';
declare class PrometheusServices {
    protected baseUrl: string;
    protected serviceEndpoints: PrometheusEndpointTemplates;
    protected headers: PrometheusHeaders;
    constructor(baseUrl: string, serviceEndpoints: PrometheusEndpointTemplates, headers?: PrometheusHeaders);
    setHeaders(headers: PrometheusHeaders): this;
}
export default PrometheusServices;
