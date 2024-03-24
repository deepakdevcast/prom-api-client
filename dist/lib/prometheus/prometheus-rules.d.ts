import { AlertGroup, RuleQuery } from './types.js';
declare class PrometheusRules {
    private baseUrl;
    private prometheusEndpoint;
    constructor(baseUrl: string);
    getAlertRules(query?: RuleQuery): Promise<any>;
    getActiveAlerts(): Promise<any>;
    setAlertRuleGroup(namespace: string, alertGroup: AlertGroup): Promise<any>;
}
export default PrometheusRules;
