import * as YAML from "yaml";
import { PrometheusEndpoint } from "./types.js";
import generateRequestUrl from "../../utils/function.js";
class PrometheusRules {
    baseUrl;
    prometheusEndpoint = PrometheusEndpoint;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getAlertRules(query) {
        const rawEndpoint = this.prometheusEndpoint.rules;
        if (query)
            rawEndpoint.queryParams = query;
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: rawEndpoint.path,
            queryParams: rawEndpoint.queryParams || {},
            params: {}
        });
        const res = await fetch(reqUrl, {
            method: this.prometheusEndpoint.rules.method,
        });
        if (res.status == 200) {
            return await res.text();
        }
        else {
            return res;
        }
    }
    async setAlertRuleGroup(namespace, alertGroup) {
        const rawEndpoint = this.prometheusEndpoint.setRuleGroupByNamespace;
        const reqUrl = generateRequestUrl({
            baseUrl: this.baseUrl,
            path: rawEndpoint.path,
            queryParams: {},
            params: { namespace },
        });
        const alertYaml = new YAML.Document();
        alertYaml.contents = alertGroup;
        const res = await fetch(reqUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/yaml' },
            body: alertYaml.toString(),
        });
        if (res.status == 202) {
            return await res.text();
        }
        else {
            return res;
        }
    }
}
export default PrometheusRules;
