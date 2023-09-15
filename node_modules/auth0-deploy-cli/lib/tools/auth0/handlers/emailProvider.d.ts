import DefaultHandler from './default';
import { Asset, Assets } from '../../../types';
export declare const schema: {
    type: string;
};
export default class EmailProviderHandler extends DefaultHandler {
    constructor(options: DefaultHandler);
    getType(): Promise<Asset>;
    objString(provider: any): string;
    processChanges(assets: Assets): Promise<void>;
}
