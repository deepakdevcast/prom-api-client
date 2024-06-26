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
    formatQuery: {
        method: 'post',
        path: '/api/v1/format_query'
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
    queryExemplars: {
        method: 'post',
        path: '/api/v1/query_exemplars'
    },
};
export const PrometheusMetadataEndpoint = {
    targetDiscovery: {
        method: 'get',
        path: '/api/v1/targets',
        params: {
            state: '',
            scapePool: ''
        }
    },
    targetMetadata: {
        method: 'get',
        path: '/api/v1/targets/metadata',
    },
    metadata: {
        method: 'get',
        path: '/api/v1/metadata'
    },
    alertManagerDiscovery: {
        method: 'get',
        path: '/api/v1/alertmanagers'
    },
    configFile: {
        method: 'get',
        path: '/api/v1/status/config'
    },
    flagStatus: {
        method: 'get',
        path: '/api/v1/status/flags'
    },
    runTimeInfo: {
        method: 'get',
        path: '/api/v1/status/runtimeinfo'
    },
    buildInfo: {
        method: 'get',
        path: '/api/v1/status/buildinfo'
    },
    tsdb: {
        method: 'get',
        path: '/api/v1/status/tsdb',
        params: {
            limit: '',
        }
    },
    walRePlay: {
        method: 'get',
        path: '/api/v1/status/walreplay'
    }
};
export const PrometheusEndpoint = {
    rules: {
        method: 'get',
        path: '/api/v1/rules',
        queryParams: {},
    },
    activeAlerts: {
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
