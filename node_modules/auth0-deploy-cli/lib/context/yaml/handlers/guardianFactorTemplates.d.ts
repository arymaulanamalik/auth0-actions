import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorTemplates = ParsedAsset<'guardianFactorTemplates', Asset[]>;
declare const guardianFactorTemplatesHandler: YAMLHandler<ParsedGuardianFactorTemplates>;
export default guardianFactorTemplatesHandler;
