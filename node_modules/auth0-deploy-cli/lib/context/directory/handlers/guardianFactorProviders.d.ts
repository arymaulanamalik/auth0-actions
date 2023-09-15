import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorProviders = ParsedAsset<'guardianFactorProviders', Asset[]>;
declare const guardianFactorProvidersHandler: DirectoryHandler<ParsedGuardianFactorProviders>;
export default guardianFactorProvidersHandler;
