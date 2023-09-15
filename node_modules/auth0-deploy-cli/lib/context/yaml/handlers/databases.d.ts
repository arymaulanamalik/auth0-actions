import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedDatabases = ParsedAsset<'databases', Asset[]>;
declare const databasesHandler: YAMLHandler<ParsedDatabases>;
export default databasesHandler;
