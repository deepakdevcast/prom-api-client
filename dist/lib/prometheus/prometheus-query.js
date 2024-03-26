import { encodeObject } from '../../utils/function.js';
import PrometheusServices from './prometheus-services.js';
import { PrometheusQueryEndpoint } from './types.js';
class PrometheusQuery extends PrometheusServices {
    constructor(baseUrl, headers) {
        super(baseUrl, PrometheusQueryEndpoint, headers);
    }
    async getQueryInstant(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.queryInstant.path, {
            method: this.serviceEndpoints.queryInstant.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryRange(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.queryRange.path, {
            method: this.serviceEndpoints.queryRange.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getFormatQuery(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.formatQuery.path, {
            method: this.serviceEndpoints.formatQuery.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryExemplars(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.queryExemplars.path, {
            method: this.serviceEndpoints.queryExemplars.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getLabelNames(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.labelNames.path, {
            method: this.serviceEndpoints.labelNames.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getSeries(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(this.baseUrl + this.serviceEndpoints.series.path, {
            method: this.serviceEndpoints.series.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getLabelValuesByLabelName(label, params) {
        if (!label)
            return { status: 400, data: { status: 'error', errorType: 'bad_data', error: 'no label name parameter provided' } };
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.labelValues.path}/${label}/values?${formData}`, {
            method: this.serviceEndpoints.labelValues.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusQuery;
