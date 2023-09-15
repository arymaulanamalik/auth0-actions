import DefaultHandler from './default';
import { Asset, Assets, CalculatedChanges } from '../../../types';
export declare const schema: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            id: {
                type: string;
            };
            description: {
                type: string;
            };
            permissions: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        permission_name: {
                            type: string;
                        };
                        resource_server_identifier: {
                            type: string;
                        };
                    };
                };
            };
        };
        required: string[];
    };
};
export default class RolesHandler extends DefaultHandler {
    existing: Asset[];
    constructor(config: DefaultHandler);
    createRole(data: any): Promise<Asset>;
    createRoles(creates: CalculatedChanges['create']): Promise<void>;
    deleteRole(data: any): Promise<void>;
    deleteRoles(dels: CalculatedChanges['del']): Promise<void>;
    updateRole(data: any, roles: any): Promise<{
        id: any;
    }>;
    updateRoles(updates: CalculatedChanges['update'], roles: any): Promise<void>;
    getType(): Promise<Asset[]>;
    processChanges(assets: Assets): Promise<void>;
}
