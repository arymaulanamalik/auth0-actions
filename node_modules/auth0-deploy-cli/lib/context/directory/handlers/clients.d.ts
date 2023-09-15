import { ParsedAsset } from '../../../types';
import { DirectoryHandler } from '.';
import { Client } from '../../../tools/auth0/handlers/clients';
type ParsedClients = ParsedAsset<'clients', Client[]>;
declare const clientsHandler: DirectoryHandler<ParsedClients>;
export default clientsHandler;
