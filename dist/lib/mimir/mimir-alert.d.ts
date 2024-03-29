import PrometheusRules from '../prometheus/prometheus-rules.js';
import { AlertGroup, PrometheusHeaders } from '../prometheus/types.js';
declare class MimirAlert extends PrometheusRules {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
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
export default MimirAlert;
