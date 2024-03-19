import { AlertGroup, RuleQuery } from "./types.js";
declare class PrometheusRules {
    private baseUrl;
    private prometheusEndpoint;
    constructor(baseUrl: string);
    getAlertRules(query?: RuleQuery): Promise<string | Response>;
    setAlertRuleGroup(namespace: string, alertGroup: AlertGroup): Promise<string | Response>;
}
export default PrometheusRules;
