import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedHooks = ParsedAsset<'hooks', Asset[]>;
declare const hooksHandler: DirectoryHandler<ParsedHooks>;
export default hooksHandler;
