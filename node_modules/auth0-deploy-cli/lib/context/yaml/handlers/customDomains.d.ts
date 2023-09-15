import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedCustomDomains = ParsedAsset<'customDomains', Asset[]>;
declare const customDomainsHandler: YAMLHandler<ParsedCustomDomains>;
export default customDomainsHandler;
