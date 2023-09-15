import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorMessageTypes = ParsedAsset<'guardianPhoneFactorMessageTypes', Asset>;
declare const guardianFactorMessageTypesHandler: DirectoryHandler<ParsedGuardianFactorMessageTypes>;
export default guardianFactorMessageTypesHandler;
