import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedRoles = ParsedAsset<'roles', Asset[]>;
declare const rolesHandler: DirectoryHandler<ParsedRoles>;
export default rolesHandler;
