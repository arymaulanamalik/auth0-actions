import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedTenant = ParsedAsset<'tenant', Asset>;
declare const tenantHandler: YAMLHandler<ParsedTenant>;
export default tenantHandler;
