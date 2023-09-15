import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorSelectedProvider = ParsedAsset<'guardianPhoneFactorSelectedProvider', Asset>;
declare const guardianFactorSelectedProviderHandler: DirectoryHandler<ParsedGuardianFactorSelectedProvider>;
export default guardianFactorSelectedProviderHandler;
