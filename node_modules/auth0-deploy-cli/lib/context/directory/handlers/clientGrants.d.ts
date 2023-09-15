import { DirectoryHandler } from '.';
import { ParsedAsset } from '../../../types';
import { ClientGrant } from '../../../tools/auth0/handlers/clientGrants';
type ParsedClientGrants = ParsedAsset<'clientGrants', ClientGrant[]>;
declare const clientGrantsHandler: DirectoryHandler<ParsedClientGrants>;
export default clientGrantsHandler;
