export type RuleQuery = {
    type?: 'alert' | 'rules';
    rule_name?: string;
    rule_group?: string;
    file?: string;
};
export type QueryInstant = {
    query: string;
    time?: string;
    timeout?: string;
};
export type QueryRange = {
    query: string;
    start: string;
    end: string;
    step: string;
    timeout?: string;
};
export type QueryExemplars = {
    query: string;
    start: string;
    end: string;
};
export type GetLabels = {
    start?: string;
    end?: string;
    match?: Array<string>;
    limit?: number;
};
export type GetSeries = {
    match: Array<string>;
    start: string;
    end: string;
    limit?: number;
};
export type GetLabelValues = {
    start?: string;
    end?: string;
    match?: Array<string>;
    limit?: number;
};
export type AlertGroup = {
    name: string;
    interval?: string;
    limit?: number;
    rules: Array<{
        alert: string;
        expr: string;
        for?: string;
        keep_firing_for?: string;
        labels?: {
            [key: string]: string;
        };
        annotations?: {
            summary?: string;
            description?: string;
        };
    }>;
};
export type EndpointConfig = {
    method: 'get' | 'post' | 'delete';
    path: string;
    queryParams?: {
        [key: string]: string;
    };
    params?: {
        [key: string]: string;
    };
};
export type PrometheusEndpointTemplates = {
    [key: string]: EndpointConfig;
};
export declare const PrometheusQueryEndpoint: PrometheusEndpointTemplates;
export declare const PrometheusEndpoint: PrometheusEndpointTemplates;
