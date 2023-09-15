import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorMessageTypes = ParsedAsset<'guardianPhoneFactorMessageTypes', Asset>;
declare const guardianPhoneFactorMessageTypesHandler: YAMLHandler<ParsedGuardianFactorMessageTypes>;
export default guardianPhoneFactorMessageTypesHandler;
