import { encodeObject } from '../../utils/function.js';
import PrometheusServices from './prometheus-services.js';
import { PrometheusMetadataEndpoint } from './types.js';
class PrometheusMetadata extends PrometheusServices {
    constructor(baseUrl, headers) {
        super(baseUrl, PrometheusMetadataEndpoint, headers);
    }
    async getTargetDiscovery(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.targetDiscovery.path}?${formData}`, {
            method: this.serviceEndpoints.targetDiscovery.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getTargetMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.targetMetadata.path}?${formData}`, {
            method: this.serviceEndpoints.targetMetadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getMetadata(params) {
        const formData = encodeObject(params || {});
        const res = await fetch(`${this.baseUrl}${this.serviceEndpoints.metadata.path}?${formData}`, {
            method: this.serviceEndpoints.metadata.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getAlertManagerList() {
        const rawEndpoint = this.serviceEndpoints.alertManagerDiscovery;
        const reqUrl = `${this.baseUrl}${rawEndpoint.path}`;
        console.log(reqUrl);
        const res = await fetch(reqUrl, {
            method: rawEndpoint.method,
            headers: { ...this.headers }
        });
        return { status: res.status, data: await res.json() };
    }
    async getConfigFileYaml() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.configFile.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.configFile.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: (await res.json()).data };
    }
    async getFlag() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.flagStatus.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.flagStatus.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getRunTimeInfo() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.runTimeInfo.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.runTimeInfo.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getBuildInfo() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.buildInfo.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.buildInfo.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getTsdb() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.tsdb.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.tsdb.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
    async getWlRePlay() {
        const reqUrl = `${this.baseUrl}${this.serviceEndpoints.walRePlay.path}`;
        const res = await fetch(reqUrl, {
            method: this.serviceEndpoints.walRePlay.method,
            headers: { ...this.headers },
        });
        return { status: res.status, data: await res.json() };
    }
}
export default PrometheusMetadata;
