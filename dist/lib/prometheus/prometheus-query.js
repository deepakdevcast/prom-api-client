import generateRequestUrl from "../../utils/function.js";
import { PrometheusQueryEndpoint } from "./types.js";
class PrometheusQuery {
    baseUrl;
    prometheusQueryEndpoint = PrometheusQueryEndpoint;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getQueryInstant(query) {
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: this.prometheusQueryEndpoint.queryInstant.path,
            queryParams: query,
            params: {},
        });
        const res = await fetch(reqUrl, {
            method: this.prometheusQueryEndpoint.queryInstant.method,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryRange(query) {
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: this.prometheusQueryEndpoint.queryRange.path,
            queryParams: query,
            params: {},
        });
        const res = await fetch(reqUrl, {
            method: this.prometheusQueryEndpoint.queryRange.method,
        });
        return { status: res.status, data: await res.json() };
    }
    async getQueryExemplars(query) {
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: this.prometheusQueryEndpoint.queryExemplars.path,
            queryParams: query,
            params: {},
        });
        const res = await fetch(reqUrl, {
            method: this.prometheusQueryEndpoint.queryExemplars.method,
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusQuery;
