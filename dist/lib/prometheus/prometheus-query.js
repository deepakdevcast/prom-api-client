import { encodeObject } from '../../utils/function.js';
import { PrometheusQueryEndpoint } from './types.js';
class PrometheusQuery {
    baseUrl;
    prometheusQueryEndpoint = PrometheusQueryEndpoint;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getQueryInstant(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryInstant.path, {
            method: this.prometheusQueryEndpoint.queryInstant.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryRange(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryRange.path, {
            method: this.prometheusQueryEndpoint.queryRange.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getFormatQuery(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.formatQuery.path, {
            method: this.prometheusQueryEndpoint.formatQuery.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryExemplars(query) {
        const formData = encodeObject(query || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryExemplars.path, {
            method: this.prometheusQueryEndpoint.queryExemplars.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getLabelNames(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.labelNames.path, {
            method: this.prometheusQueryEndpoint.labelNames.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getSeries(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.series.path, {
            method: this.prometheusQueryEndpoint.series.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getLabelValuesByLabelName(label, params) {
        if (!label)
            return { status: 400, data: { status: 'error', errorType: 'bad_data', error: 'no label name parameter provided' } };
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.prometheusQueryEndpoint.labelValues.path}/${label}/values?${formData}`, {
            method: this.prometheusQueryEndpoint.labelValues.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusQuery;
