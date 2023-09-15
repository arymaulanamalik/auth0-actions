import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedLogStreams = ParsedAsset<'logStreams', Asset[]>;
declare const logStreamsHandler: YAMLHandler<ParsedLogStreams>;
export default logStreamsHandler;
