import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedDatabases = ParsedAsset<'databases', Asset[]>;
declare const databasesHandler: DirectoryHandler<ParsedDatabases>;
export default databasesHandler;
