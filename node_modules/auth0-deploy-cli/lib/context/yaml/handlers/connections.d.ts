import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedConnections = ParsedAsset<'connections', Asset[]>;
declare const connectionsHandler: YAMLHandler<ParsedConnections>;
export default connectionsHandler;
