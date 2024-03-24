import { PrometheusApiGeneralResponse } from '../types.js';
import { GetMetadata, GetTargetDiscovery, GetTargetMetadata, PrometheusEndpointTemplates } from './types.js';
declare class PrometheusMetadata {
    baseUrl: string;
    prometheusMetadataEndpoint: PrometheusEndpointTemplates;
    constructor(baseUrl: string);
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
