import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedConnections = ParsedAsset<'connections', Asset[]>;
declare const connectionsHandler: DirectoryHandler<ParsedConnections>;
export default connectionsHandler;
