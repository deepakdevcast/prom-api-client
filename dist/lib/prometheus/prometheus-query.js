import { encodeObject } from "../../utils/function.js";
import { PrometheusQueryEndpoint } from "./types.js";
class PrometheusQuery {
    baseUrl;
    prometheusQueryEndpoint = PrometheusQueryEndpoint;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getQueryInstant(query) {
        const formData = encodeObject(query);
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryInstant.path, {
            method: this.prometheusQueryEndpoint.queryInstant.method,
            headers: { 'Content-Type': "application/x-www-form-urlencoded" },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryRange(query) {
        const formData = encodeObject(query);
        console.log(formData);
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryRange.path, {
            method: this.prometheusQueryEndpoint.queryRange.method,
            headers: { 'Content-Type': "application/x-www-form-urlencoded" },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryExemplars(query) {
        const formData = encodeObject(query);
        const res = await fetch(this.baseUrl + this.prometheusQueryEndpoint.queryExemplars.path, {
            method: this.prometheusQueryEndpoint.queryExemplars.method,
            headers: { 'Content-Type': "application/x-www-form-urlencoded" },
            body: formData,
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusQuery;
