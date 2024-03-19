import { QueryExemplars, QueryInstant, QueryRange } from "./types.js";
declare class PrometheusQuery {
    private baseUrl;
    private prometheusQueryEndpoint;
    constructor(baseUrl: string);
    getQueryInstant(query: QueryInstant): Promise<{
        status: number;
        data: any;
    }>;
    getQueryRange(query: QueryRange): Promise<{
        status: number;
        data: any;
    }>;
    getQueryExemplars(query: QueryExemplars): Promise<{
        status: number;
        data: any;
    }>;
}
export default PrometheusQuery;
