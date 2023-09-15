import { YAMLHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Client } from '../../../tools/auth0/handlers/clients';
type ParsedClients = ParsedAsset<'clients', Client[]>;
declare const clientsHandler: YAMLHandler<ParsedClients>;
export default clientsHandler;
