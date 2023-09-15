import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedGuardianPolicies = ParsedAsset<'guardianPolicies', Asset[]>;
declare const guardianPoliciesHandler: DirectoryHandler<ParsedGuardianPolicies>;
export default guardianPoliciesHandler;
