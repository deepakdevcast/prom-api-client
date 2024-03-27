import { PrometheusApiGeneralResponse } from '../types.js';
import PrometheusServices from './prometheus-services.js';
import { FormatQuery, GetLabelValues, GetLabels, GetSeries, PrometheusHeaders, QueryExemplars, QueryInstant, QueryRange } from './types.js';
declare class PrometheusQuery extends PrometheusServices {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
    getQueryInstant(query: QueryInstant): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getQueryRange(query: QueryRange): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getFormatQuery(query: FormatQuery): Promise<{
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
