import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactors = ParsedAsset<'guardianFactors', Asset[]>;
declare const guardianFactorsHandler: DirectoryHandler<ParsedGuardianFactors>;
export default guardianFactorsHandler;
