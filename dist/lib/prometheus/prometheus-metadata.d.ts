import { PrometheusApiGeneralResponse } from '../types.js';
import PrometheusServices from './prometheus-services.js';
import { GetMetadata, GetTargetDiscovery, GetTargetMetadata, PrometheusHeaders } from './types.js';
declare class PrometheusMetadata extends PrometheusServices {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
    getTargetDiscovery(params?: GetTargetDiscovery): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getTargetMetadata(params?: GetTargetMetadata): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getMetadata(params?: GetMetadata): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
}
export default PrometheusMetadata;
