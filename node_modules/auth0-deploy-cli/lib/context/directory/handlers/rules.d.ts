import { DirectoryHandler } from './index';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRules = ParsedAsset<'rules', Asset[]>;
declare const rulesHandler: DirectoryHandler<ParsedRules>;
export default rulesHandler;
