import { encodeObject } from '../../utils/function.js';
import { PrometheusMetadataEndpoint } from './types.js';
class PrometheusMetadata {
    baseUrl;
    prometheusMetadataEndpoint = PrometheusMetadataEndpoint;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getTargetDiscovery(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.prometheusMetadataEndpoint.targetDiscovery.path}?${formData}`, {
            method: this.prometheusMetadataEndpoint.targetDiscovery.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return { status: res.status, data: await res.json() };
    }
    async getTargetMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.prometheusMetadataEndpoint.targetMetadata.path}?${formData}`, {
            method: this.prometheusMetadataEndpoint.targetMetadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return { status: res.status, data: await res.json() };
    }
    async getMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.prometheusMetadataEndpoint.metadata.path}?${formData}`, {
            method: this.prometheusMetadataEndpoint.metadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusMetadata;
