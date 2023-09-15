import DefaultHandler from './default';
import { Assets } from '../../../types';
export declare const schema: {
    type: string;
    items: {
        type: string;
        additionalProperties: boolean;
        properties: {
            trigger_id: {
                type: string;
                properties: {
                    action_name: {
                        type: string;
                        enum: string[];
                    };
                    display_name: {
                        type: string;
                        default: string;
                    };
                };
            };
        };
    };
};
export default class TriggersHandler extends DefaultHandler {
    existing: {
        [key: string]: {
            action_name: string;
            display_name: string;
        };
    };
    constructor(options: DefaultHandler);
    getType(): Promise<DefaultHandler['existing']>;
    processChanges(assets: Assets): Promise<void>;
}
