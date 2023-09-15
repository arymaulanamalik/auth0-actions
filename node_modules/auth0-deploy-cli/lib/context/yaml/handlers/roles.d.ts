import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRoles = ParsedAsset<'roles', Asset[]>;
declare const rolesHandler: YAMLHandler<ParsedRoles>;
export default rolesHandler;
