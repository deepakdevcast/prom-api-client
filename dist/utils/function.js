const generateRequestUrl = (requestUrl) => {
    let url = new URL(requestUrl.baseUrl);
    url.href += requestUrl.path;
    Object.keys(requestUrl.params).forEach((key) => url.href += `/${requestUrl.params[key]}`);
    Object.keys(requestUrl.queryParams).forEach((key) => {
        if (requestUrl.queryParams[key])
            url.searchParams.append(key, requestUrl.queryParams[key]);
    });
    return url.toString().replace(/(?<!:)\/+/g, '/');
};
export default generateRequestUrl;
