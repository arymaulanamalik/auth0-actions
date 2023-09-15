import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRulesConfigs = ParsedAsset<'rulesConfigs', Asset[]>;
declare const rulesConfigsHandler: DirectoryHandler<ParsedRulesConfigs>;
export default rulesConfigsHandler;
