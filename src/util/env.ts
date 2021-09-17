import _DEFAULT from '../config/default.json';
import _DEV from '../config/dev.json';
import _PROD from '../config/prod.json';

type AppProfile = 'default' | 'dev' | 'prod';

interface AppConfig {
    profile: AppProfile;
    baseUrl: string;
    optionsUrl: string;
}

const DEFAULT: AppConfig = _DEFAULT as AppConfig;
const DEV: AppConfig = overrideDefaults(DEFAULT, _DEV);
const PROD: AppConfig = overrideDefaults(DEFAULT, _PROD);


function overrideDefaults(defaults: any, overrides: any): any {
    const result: any = {};
    if (isObject(defaults)) {
        for (let [key, value] of Object.entries(defaults)) {
            if (isObject(value)) {
                result[key] = overrideDefaults(value, overrides[key]);

            } else {
                result[key] = overrides[key] === undefined ? value : overrides[key];
            }
        }
    }
    return result;
}


function isObject(obj: any): boolean {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}


function env(): AppConfig {
    switch (process.env.REACT_APP_ENV) {
        case 'prod': return PROD;
        default: return DEV;
    }
}


export { env };
export type {AppConfig, AppProfile};