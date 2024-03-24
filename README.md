# Prom-API-Client
A user-friendly package to use Prometheus HTTP-API in more easier way.

# Rules

## Get Alert Rules
```
import { PrometheusRules } from 'prom-api-client';
const prometheusAlertInstance = new PrometheusRules('http://localhost:9090');
const alertRules = await prometheusAlertInstance.getAlertRules({rule_name: 'test'});

```
## Set Alert Rules By Alert Group
```
const alertGroup = {
  name: 'MyGroupName',
  rules: [
    {
      alert: 'alert-1',
    }
  ]
};
const res = await prometheusAlertInstance.setAlertRuleGroup('test-alert', alertGroup);
console.log(JSON.stringify(res));
```

# Query

## Query Instant
```
import { PrometheusQuery } from 'prom-api-client';
const prometheusQueryInstance = new PrometheusQuery('http://localhost:9090');
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

## Get all active alerts
```
const activeAlertData = await prometheusAlertInstance.getActiveAlerts();
```

# Metadata and Targets

## Get all target discovery
```
const prometheusMetadataInstance = new PrometheusMetadata('http://localhost:9090');
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