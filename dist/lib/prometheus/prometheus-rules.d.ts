import { AlertGroup, PrometheusHeaders, RuleQuery } from './types.js';
import PrometheusServices from './prometheus-services.js';
declare class PrometheusRules extends PrometheusServices {
    constructor(baseUrl: string, headers?: PrometheusHeaders);
    getAlertRules(query?: RuleQuery): Promise<any>;
    getActiveAlerts(): Promise<any>;
    setAlertRuleGroup(namespace: string, alertGroup: AlertGroup): Promise<any>;
}
export default PrometheusRules;
