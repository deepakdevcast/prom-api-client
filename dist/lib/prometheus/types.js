export const PrometheusQueryEndpoint = {
    queryInstant: {
        method: 'get',
        path: '/api/v1/query',
        queryParams: {
            query: '',
            time: '',
            timeout: '',
        }
    },
    queryRange: {
        method: 'get',
        path: '/api/v1/query_range',
    },
    queryExemplars: {
        method: 'get',
        path: '/api/v1/query_exemplars'
    },
    series: {
        method: 'get',
        path: '/api/v1/series'
    },
    labelNames: {
        method: 'get',
        path: '/api/v1/labels'
    },
    labelValues: {
        method: 'get',
        path: '/api/v1/label',
        params: {
            name: '',
            values: 'values',
        }
    },
};
export const PrometheusEndpoint = {
    rules: {
        method: 'get',
        path: '/api/v1/rules',
        queryParams: {},
    },
    alerts: {
        method: 'get',
        path: '/api/v1/alerts',
    },
    ruleGroupList: {
        method: 'get',
        path: '/config/v1/rules',
    },
    ruleGroupByNamespace: {
        method: 'get',
        path: '/config/v1/rules',
        params: {
            namespace: '',
        }
    },
    ruleGroup: {
        method: 'get',
        path: '/config/v1/rules',
        params: {
            namespace: '',
            groupName: '',
        }
    },
    setRuleGroupByNamespace: {
        method: 'post',
        path: '/config/v1/rules',
        params: {
            namespace: '',
        }
    },
    deleteRuleGroupByNamespace: {
        method: 'delete',
        path: '/config/v1/rules',
        params: {
            namespace: '',
        },
    },
    deleteRuleGroup: {
        method: 'delete',
        path: '/config/v1/rules',
        params: {
            namespace: '',
            groupName: '',
        },
    }
};
