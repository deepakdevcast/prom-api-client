export type TenantHeader = {
    'X-Scope-OrgID': string;
};
export type PrometheusApiSuccessGeneralResponse = {
    status: 'success';
    data: any;
    warning?: Array<string>;
};
export type PrometheusApiErrorGeneralResponse = {
    status: 'error';
    errorType: string;
    error: string;
};
export type PrometheusApiGeneralResponse = PrometheusApiSuccessGeneralResponse | PrometheusApiErrorGeneralResponse;
