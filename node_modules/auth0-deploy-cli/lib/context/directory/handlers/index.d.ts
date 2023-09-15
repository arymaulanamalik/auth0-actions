import DirectoryContext from '..';
import { AssetTypes, Asset } from '../../../types';
export type DirectoryHandler<T> = {
    dump: (context: DirectoryContext) => void;
    parse: (context: DirectoryContext) => T;
};
declare const directoryHandlers: {
    [key in AssetTypes]: DirectoryHandler<{
        [key: string]: Asset | Asset[] | null;
    }>;
};
export default directoryHandlers;
