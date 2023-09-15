import YAMLContext from '..';
import { AssetTypes } from '../../../types';
export type YAMLHandler<T> = {
    dump: (context: YAMLContext) => Promise<T>;
    parse: (context: YAMLContext) => Promise<T>;
};
declare const yamlHandlers: {
    [key in AssetTypes]: YAMLHandler<{
        [key: string]: unknown;
    }>;
};
export default yamlHandlers;
