import { AlertGroup, PrometheusHeaders, RuleQuery } from './types.js';
import PrometheusServices from './prometheus-services.js';
import { PrometheusApiGeneralResponse } from '../types.js';
declare class PrometheusRules extends PrometheusServices {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
    getAlertRules(query?: RuleQuery): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getAlertManagerList(): Promise<{
        status: number;
        data: PrometheusApiGeneralResponse;
    }>;
    getActiveAlerts(): Promise<any>;
    /**
     * Only applicable for mimir not for prometheus
     * @param namespace
     * @returns
     */
    deleteAlertRulesByNamespace(namespace: string): Promise<any>;
    /**
   * Only applicable for mimir not for prometheus
   * @param namespace
   * @param alertGroup
   * @returns
   */
    setAlertRuleGroup(namespace: string, alertGroup: AlertGroup): Promise<any>;
}
export default PrometheusRules;
