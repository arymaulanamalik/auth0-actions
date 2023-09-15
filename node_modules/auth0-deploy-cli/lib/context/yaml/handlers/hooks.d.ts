import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedHooks = ParsedAsset<'hooks', Asset[]>;
declare const hooksHandler: YAMLHandler<ParsedHooks>;
export default hooksHandler;
