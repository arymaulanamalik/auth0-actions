import DefaultHandler from './default';
import { Asset, Assets } from '../../../types';
export declare const schema: {
    type: string;
    properties: {
        templates: {
            type: string;
            items: {
                type: string;
                properties: {
                    template: {
                        type: string;
                    };
                    body: {
                        type: string;
                    };
                };
            };
        };
    };
};
export default class BrandingHandler extends DefaultHandler {
    existing: Asset;
    constructor(options: DefaultHandler);
    getType(): Promise<Asset>;
    processChanges(assets: Assets): Promise<void>;
}
