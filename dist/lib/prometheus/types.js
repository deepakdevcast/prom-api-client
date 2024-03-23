export const PrometheusQueryEndpoint = {
    queryInstant: {
        method: 'post',
        path: '/api/v1/query',
        queryParams: {},
    },
    queryRange: {
        method: 'post',
        path: '/api/v1/query_range',
    },
    queryExemplars: {
        method: 'post',
        path: '/api/v1/query_exemplars'
    },
    series: {
        method: 'post',
        path: '/api/v1/series'
    },
    labelNames: {
        method: 'post',
        path: '/api/v1/labels'
    },
    labelValues: {
        method: 'get',
        path: '/api/v1/label',
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
