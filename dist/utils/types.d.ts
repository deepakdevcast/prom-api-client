export type RequestUrl = {
    baseUrl: string;
    path: string;
    params: {
        [key: string]: string | number;
    };
    queryParams: {
        [key: string]: string;
    };
};
export declare const SelectorTypeParams: string[];
