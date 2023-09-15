import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianFactorTemplates = ParsedAsset<'guardianFactorTemplates', Asset[]>;
declare const guardianFactorTemplatesHandler: DirectoryHandler<ParsedGuardianFactorTemplates>;
export default guardianFactorTemplatesHandler;
