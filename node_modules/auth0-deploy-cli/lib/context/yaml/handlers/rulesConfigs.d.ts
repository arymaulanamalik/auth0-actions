import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRulesConfigs = ParsedAsset<'rulesConfigs', Asset[]>;
declare const rulesConfigsHandler: YAMLHandler<ParsedRulesConfigs>;
export default rulesConfigsHandler;
