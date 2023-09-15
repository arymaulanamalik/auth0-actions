import { DirectoryHandler } from '.';
import { ParsedAsset } from '../../../types';
import { ResourceServer } from '../../../tools/auth0/handlers/resourceServers';
type ParsedResourceServers = ParsedAsset<'resourceServers', ResourceServer[]>;
declare const resourceServersHandler: DirectoryHandler<ParsedResourceServers>;
export default resourceServersHandler;
