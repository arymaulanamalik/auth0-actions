import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRules = ParsedAsset<'rules', Asset[]>;
declare const rulesHandler: YAMLHandler<ParsedRules>;
export default rulesHandler;
