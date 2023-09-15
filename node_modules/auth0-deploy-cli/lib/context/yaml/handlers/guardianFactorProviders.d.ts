import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorProviders = ParsedAsset<'guardianFactorProviders', Asset[]>;
declare const guardianFactorProvidersHandler: YAMLHandler<ParsedGuardianFactorProviders>;
export default guardianFactorProvidersHandler;
