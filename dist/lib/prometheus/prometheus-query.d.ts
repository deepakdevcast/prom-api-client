import { PrometheusApiGeneralResponse } from '../types.js';
import { GetLabelValues, GetLabels, GetSeries, QueryExemplars, QueryInstant, QueryRange } from './types.js';
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
    getLabelNames(params?: GetLabels): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getSeries(params: GetSeries): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getLabelValuesByLabelName(label: string, params?: GetLabelValues): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
}
export default PrometheusQuery;
