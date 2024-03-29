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
    getAlertManagerList(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getConfigFileYaml(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getFlag(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getRunTimeInfo(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getBuildInfo(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getTsdb(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getWlRePlay(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
}
export default PrometheusMetadata;
