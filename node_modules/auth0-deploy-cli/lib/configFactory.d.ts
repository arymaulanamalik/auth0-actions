import { Config } from './types';
export type ConfigFunction = (arg0: keyof Config) => any;
export declare const configFactory: () => {
    (key: keyof Config): any;
    setProvider(providerFunction: ConfigFunction): void;
    setValue(key: keyof Config, value: any): void;
};
