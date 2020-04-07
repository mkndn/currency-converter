import appConfig from '../config';
import fetch from 'node-fetch';
import DataLoader from 'dataloader';

import * as es6 from 'es6-promise';
(es6 as any).polyfill();

const BASE_URI = appConfig.api_base;

const cacheMap = new Map();

const fetchResponse = (path: string) => {
    return fetch(`${BASE_URI}${path}`).then(res => res.json())
}

export const fetchAllRates = () => {
    return fetchResponse("/latest").then(json => json.rate)
}

const fetchRates = (url: string) => {
    return fetchResponse(url).then(json => json.rate)
}


export const ratesLoader = new DataLoader<string, Array<any>>(urls => Promise.all(urls.map(fetchRates)));