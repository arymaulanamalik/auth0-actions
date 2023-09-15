import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedCustomDomains = ParsedAsset<'customDomains', Asset[]>;
declare const customDomainsHandler: DirectoryHandler<ParsedCustomDomains>;
export default customDomainsHandler;
