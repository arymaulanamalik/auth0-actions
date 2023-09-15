import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedLogStreams = ParsedAsset<'logStreams', Asset[]>;
declare const logStreamsHandler: DirectoryHandler<ParsedLogStreams>;
export default logStreamsHandler;
