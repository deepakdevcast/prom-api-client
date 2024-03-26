class PrometheusServices {
    baseUrl;
    serviceEndpoints;
    headers;
    constructor(baseUrl, serviceEndpoints, headers) {
        if (!baseUrl || typeof baseUrl !== 'string')
            throw new Error(`Invalid baseUrl : ${baseUrl}`);
        if (!serviceEndpoints || Object.keys(serviceEndpoints).length === 0)
            throw new Error(`Invalid serviceEndpoint : ${serviceEndpoints}`);
        this.baseUrl = baseUrl;
        this.serviceEndpoints = serviceEndpoints;
        this.headers = headers || {};
    }
    setHeaders(headers) {
        this.headers = headers;
        return this;
    }
}
export default PrometheusServices;
