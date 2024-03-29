import { Document } from 'yaml';
import PrometheusRules from '../prometheus/prometheus-rules.js';
class MimirAlert extends PrometheusRules {
    constructor(baseUrl, headers) {
        super(baseUrl, headers);
    }
    /**
     * Only applicable for mimir not for prometheus
     * @param namespace
     * @returns
     */
    async deleteAlertRulesByNamespace(namespace) {
        if (!namespace)
            return { status: 400, data: { status: 'error', errorType: 'bad_data', error: 'namespace missing in function deleteAlertRulesByNamespace() parameter!!' } };
        const rawEndpoint = this.serviceEndpoints.deleteRuleGroupByNamespace;
        const reqUrl = `${this.baseUrl}${rawEndpoint.path}/${namespace}`;
        const res = await fetch(reqUrl, {
            method: rawEndpoint.method,
            headers: { ...this.headers }
        });
        if (res.status >= 200 && res.status <= 300) {
            return await res.json();
        }
        else {
            return res;
        }
    }
    /**
   * Only applicable for mimir not for prometheus
   * @param namespace
   * @param alertGroup
   * @returns
   */
    async setAlertRuleGroup(namespace, alertGroup) {
        const rawEndpoint = this.serviceEndpoints.setRuleGroupByNamespace;
        const reqUrl = `${this.baseUrl}${rawEndpoint.path}/${namespace}`;
        const alertYaml = new Document();
        alertYaml.contents = alertGroup;
        const res = await fetch(reqUrl, {
            method: rawEndpoint.method,
            headers: { 'Content-Type': 'application/yaml', ...this.headers },
            body: alertYaml.toString(),
        });
        if (res.status == 202) {
            return await res.json();
        }
        else {
            return res;
        }
    }
}
export default MimirAlert;
