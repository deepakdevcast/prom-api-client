import { encodeObject } from '../../utils/function.js';
import PrometheusServices from './prometheus-services.js';
import { PrometheusMetadataEndpoint } from './types.js';
class PrometheusMetadata extends PrometheusServices {
    constructor(baseUrl, headers) {
        super(baseUrl, PrometheusMetadataEndpoint, headers);
    }
    async getTargetDiscovery(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.targetDiscovery.path}?${formData}`, {
            method: this.serviceEndpoints.targetDiscovery.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getTargetMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.targetMetadata.path}?${formData}`, {
            method: this.serviceEndpoints.targetMetadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.metadata.path}?${formData}`, {
            method: this.serviceEndpoints.metadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusMetadata;
