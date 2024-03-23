import { SelectorTypeParams } from './types.js';
export const generateRequestUrl = (requestUrl) => {
    const url = new URL(requestUrl.baseUrl);
    url.href += requestUrl.path;
    Object.keys(requestUrl.params).forEach((key) => url.href += `/${requestUrl.params[key]}`);
    Object.keys(requestUrl.queryParams).forEach((key) => {
        if (requestUrl.queryParams[key])
            url.searchParams.append(key, requestUrl.queryParams[key]);
    });
    return url.toString().replace(/(?<!:)\/+/g, '/');
};
export const checkSeriesSelector = (key) => {
    return SelectorTypeParams.includes(key);
};
export const encodeObject = (object) => {
    const formData = [];
    Object.entries(object).forEach(([key, value]) => {
        if (checkSeriesSelector(key) && value instanceof Array) {
            value.forEach((v) => formData.push(encodeURIComponent(`${key}[]`) + '=' + encodeURIComponent(v)));
        }
        else {
            formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    });
    const finalEncodeString = formData.join('&');
    return finalEncodeString;
};
