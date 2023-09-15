import DefaultHandler from './default';
import { Asset, Assets } from '../../../types';
export declare const supportedPages: string[];
export declare const pageNameMap: {
    guardian_multifactor: string;
    password_reset: string;
    error_page: string;
};
export type Page = {
    show_log_link?: boolean;
    name: string;
    enabled?: boolean;
    html?: string;
    url?: string;
};
export declare const schema: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
                enum: string[];
            };
            html: {
                type: string;
                default: string;
            };
            url: {
                type: string;
            };
            show_log_link: {
                type: string;
            };
            enabled: {
                type: string;
            };
        };
        required: string[];
    };
};
export default class PagesHandler extends DefaultHandler {
    constructor(options: DefaultHandler);
    objString(page: any): string;
    updateLoginPage(page: any): Promise<void>;
    updatePages(pages: Asset[]): Promise<void>;
    getType(): Promise<Asset[]>;
    processChanges(assets: Assets): Promise<void>;
}
