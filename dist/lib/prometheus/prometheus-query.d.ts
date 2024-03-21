import { PrometheusApiGeneralResponse } from "../types.js";
import { QueryExemplars, QueryInstant, QueryRange } from "./types.js";
declare class PrometheusQuery {
    private baseUrl;
    private prometheusQueryEndpoint;
    constructor(baseUrl: string);
    getQueryInstant(query: QueryInstant): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getQueryRange(query: QueryRange): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getQueryExemplars(query: QueryExemplars): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
}
export default PrometheusQuery;
