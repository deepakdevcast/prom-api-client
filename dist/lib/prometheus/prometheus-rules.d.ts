import { PrometheusHeaders, RuleQuery } from './types.js';
import PrometheusServices from './prometheus-services.js';
import { PrometheusApiGeneralResponse } from '../types.js';
declare class PrometheusRules extends PrometheusServices {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
    getAlertRules(query?: RuleQuery): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getActiveAlerts(): Promise<any>;
}
export default PrometheusRules;
