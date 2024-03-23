import { AlertGroup, RuleQuery } from './types.js';
declare class PrometheusRules {
    private baseUrl;
    private prometheusEndpoint;
    constructor(baseUrl: string);
    getAlertRules(query?: RuleQuery): Promise<any>;
    setAlertRuleGroup(namespace: string, alertGroup: AlertGroup): Promise<any>;
}
export default PrometheusRules;
