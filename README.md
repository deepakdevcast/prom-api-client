# Prom-API
A user-friendly package to uses Prometheus HTTP-API in easier way.

# Rules
```
import { PrometheusRules } from 'prom-api';
const prometheusAlertInstance = new PrometheusRules('http://localhost:9090');
const alertRules = await prometheusAlertInstance.getAlertRules({ruleName: 'test'});

```

# Query
```
import { PrometheusQuery } from 'prom-api';
const prometheusAlertInstance = new PrometheusQuery('http://localhost:9090');
const queryResult = await prometheusQueryInstance.getQueryInstant({
  query: 'up'
});

```