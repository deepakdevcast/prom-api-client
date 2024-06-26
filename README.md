# Prom-API-Client
A user-friendly package to use Prometheus HTTP-API in more easier way.

### If any features you want feel free to raise a issue in github

# Import Class and Instance
```
import { PrometheusQuery, PrometheusRules, PrometheusMetadata } from 'prom-api-client';

// Prometheus Query --> 
const prometheusQueryInstance = new PrometheusQuery('http://localhost:9090');
// Prometheus Alert
const prometheusAlertInstance = new PrometheusRules('http://localhost:9090');
// Prometheus Metadata
const prometheusMetadataInstance = new PrometheusMetadata('http://localhost:9090');

```

### Header feature support
This will helps to add additional headers (enables to pass the tenant Id)
```
// Passed the headers on instance definition
const headers = {
  // used in MIMIR to support multi-tenant
  'X-Scope-OrgID': "dd51439f-64f6-42d3-92c1-634faf6af418",
}
const prometheusAlertInstance = new PrometheusRules('http://localhost:9090', headers);
// OR used it as a chain
const prometheusAlertInstance = new PrometheusRules('http://localhost:9090');
const activeAlertData = await prometheusAlertInstance.setHeaders(headers).getActiveAlerts();
```

# Rules

## Get Alert Rules
```
const alertRules = await prometheusAlertInstance.getAlertRules({rule_name: 'test'});
```

## Get all active alerts
```
const activeAlertData = await prometheusAlertInstance.getActiveAlerts();
```

# Query

## Query Instant
```
const queryResult = await prometheusQueryInstance.getQueryInstant({
  query: 'up'
});

```

## Query Range
```
const data = await prometheusQueryInstance.getQueryRange({
  query: 'up{job="prometheus"}',
  start: '1711046500',
  end: '1711046510',
  step: '2s'
});

```

## Get Label Name
<!-- Get All Labels -->
```
const dataLabel = await prometheusQueryInstance.getLabelNames();
```

<!-- Get Label by using match , start and end -->
```
const dataLabel = await prometheusQueryInstance.getLabelNames({
  match: ['up{job="prometheus"}'],
  start: 1711217119,
  end: 1711217121,
});
```

## Get Series 
```
const dataSeries = await prometheusQueryInstance.getSeries({
  match: ['up{job="prometheus"}'],
  start: 1711217119,
  end: 1711217121,
});
```

## Get Label Values by Label Names
```
const dataLabelValues = await prometheusQueryInstance.getLabelValuesByLabelName('job', {
  match: ['up{job="prometheus"}']
});
```

# Metadata and Targets

## Get alertmanager service discovery
```
const alertmanagerData = await prometheusMetadataInstance.getAlertManagerList();
console.log(JSON.stringify(alertmanagerData));
```

## Get all target discovery
```
const allTargetDiscovery = await prometheusMetadataInstance.getTargetDiscovery();
```

## Get target discovery with state and scrapePool
```
const targetDiscovery = await prometheusMetadataInstance.getTargetDiscovery({
  state: 'dropped',
  scrapePool: 'prometheus'
});
```

## Get target Metadata
```
const targetMeta = await prometheusMetadataInstance.getTargetMetadata({
  match_target: '{job="prometheus"}',
  metric: 'go_goroutines',
  limit: 2,
});
```

## get metadata
```
const metaData = await prometheusMetadataInstance.getMetadata({
  metric: 'http_requests_total'
});
```

## get flags
```
const promFlag = await prometheusMetadataInstance.getFlag();
console.log(promFlag);
```

## get runtime info
```
const promRuntimeInfo = await prometheusMetadataInstance.getRunTimeInfo()
console.log(promRuntimeInfo);
```

## get build info
```
const promBuildInfo = await prometheusMetadataInstance.getBuildInfo()
console.log(promBuildInfo);
```

## get tsdb info
```
const promTsdb = await prometheusMetadataInstance.getTsdb()
console.log(JSON.stringify(promTsdb));
```

## get walreplay
```
const walreplay = await prometheusMetadataInstance.getWlRePlay()
console.log(JSON.stringify(walreplay));
```