import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedOrganizations = ParsedAsset<'organizations', Asset[]>;
declare const organizationsHandler: DirectoryHandler<ParsedOrganizations>;
export default organizationsHandler;
