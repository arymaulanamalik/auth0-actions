import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactors = ParsedAsset<'guardianFactors', Asset[]>;
declare const guardianFactorsHandler: YAMLHandler<ParsedGuardianFactors>;
export default guardianFactorsHandler;
